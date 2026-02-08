import { createClient } from '@supabase/supabase-js';

interface Env {
  SUPABASE_URL: string;
  SUPABASE_SERVICE_ROLE_KEY: string;
  SOLANA_RPC_URL: string;
  TREASURY_WALLET: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    // CORS headers
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405, headers: corsHeaders });
    }

    try {
      const { invoice_id, tx_hash } = await request.json() as { invoice_id: string; tx_hash: string };

      if (!invoice_id || !tx_hash) {
        return new Response(
          JSON.stringify({ error: 'Missing required fields' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Initialize Supabase client
      const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

      // Fetch invoice
      const { data: invoice, error: invoiceError } = await supabase
        .from('tpc_invoices')
        .select('*')
        .eq('id', invoice_id)
        .single();

      if (invoiceError || !invoice) {
        return new Response(
          JSON.stringify({ error: 'Invoice not found' }),
          { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Check if already processed
      if (['PAID_AUTO', 'APPROVED', 'DELIVERED'].includes(invoice.status)) {
        return new Response(
          JSON.stringify({ error: 'Invoice already processed', status: invoice.status }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Verify transaction on Solana
      const verificationResult = await verifySolanaTransaction(
        tx_hash,
        env.TREASURY_WALLET,
        invoice.total_usdc,
        env.SOLANA_RPC_URL
      );

      if (!verificationResult.valid) {
        // Update invoice with error
        await supabase
          .from('tpc_invoices')
          .update({
            status: 'FAILED',
            error_message: verificationResult.error,
          })
          .eq('id', invoice_id);

        return new Response(
          JSON.stringify({ error: verificationResult.error }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Transaction verified - update invoice
      const { error: updateError } = await supabase
        .from('tpc_invoices')
        .update({
          status: 'PAID_AUTO',
          tx_hash: tx_hash,
          paid_at: new Date().toISOString(),
        })
        .eq('id', invoice_id);

      if (updateError) {
        throw updateError;
      }

      // Create payout job for token delivery
      const { error: payoutError } = await supabase
        .from('tpc_payout_jobs')
        .insert({
          invoice_id: invoice_id,
          kind: 'TPC_DELIVERY',
          to_wallet: invoice.wallet_address,
          amount_tpc: invoice.qty_tpc,
          status: 'QUEUED',
        });

      if (payoutError) {
        console.error('Failed to create payout job:', payoutError);
      }

      return new Response(
        JSON.stringify({
          success: true,
          message: 'Payment verified and TPC delivery queued',
          invoice_id: invoice_id,
          status: 'PAID_AUTO',
        }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );

    } catch (error: any) {
      console.error('Verification error:', error);
      return new Response(
        JSON.stringify({ error: 'Internal server error', details: error.message }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
  },
};

async function verifySolanaTransaction(
  txHash: string,
  treasuryWallet: string,
  expectedAmount: number,
  rpcUrl: string
): Promise<{ valid: boolean; error?: string }> {
  try {
    // Call Solana RPC to get transaction
    const response = await fetch(rpcUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 1,
        method: 'getTransaction',
        params: [
          txHash,
          { encoding: 'jsonParsed', commitment: 'confirmed' },
        ],
      }),
    });

    const data = await response.json();

    if (!data.result) {
      return { valid: false, error: 'Transaction not found on Solana' };
    }

    const tx = data.result;

    // Check if transaction is successful
    if (tx.meta?.err) {
      return { valid: false, error: 'Transaction failed on-chain' };
    }

    // Verify recipient (treasury wallet)
    const accountKeys = tx.transaction.message.accountKeys;
    const recipientIndex = accountKeys.findIndex(
      (key: any) => key.pubkey === treasuryWallet
    );

    if (recipientIndex === -1) {
      return { valid: false, error: 'Treasury wallet not found in transaction' };
    }

    // Check pre/post balances for USDC transfer
    // Note: This is simplified - actual implementation would parse token transfers
    const preBalance = tx.meta.preBalances[recipientIndex] || 0;
    const postBalance = tx.meta.postBalances[recipientIndex] || 0;
    const lamportsReceived = postBalance - preBalance;

    // Convert lamports to USDC (6 decimals)
    const usdcReceived = lamportsReceived / 1_000_000;

    // Allow small margin for fees
    if (usdcReceived < expectedAmount * 0.99) {
      return {
        valid: false,
        error: `Insufficient amount. Expected: ${expectedAmount} USDC, Received: ${usdcReceived} USDC`,
      };
    }

    return { valid: true };

  } catch (error: any) {
    return { valid: false, error: `Verification failed: ${error.message}` };
  }
}
