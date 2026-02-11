import { Connection, PublicKey, ParsedTransactionWithMeta } from '@solana/web3.js'

const SOLANA_RPC = process.env.NEXT_PUBLIC_SOLANA_RPC
const USDC_MINT = process.env.NEXT_PUBLIC_USDC_MINT
const TPC_TREASURY = process.env.NEXT_PUBLIC_TPC_TREASURY

export function connectRPC(): Connection {
  if (!SOLANA_RPC) {
    throw new Error('SOLANA_RPC tidak dikonfigurasi')
  }
  
  return new Connection(SOLANA_RPC, 'confirmed')
}

export interface PaymentVerification {
  valid: boolean
  signature?: string
  amount?: number
  error?: string
}

export async function verifyUSDCPayment(invoice: {
  id: string
  amount_usdc: number
  user_id: string
}): Promise<PaymentVerification> {
  try {
    if (!USDC_MINT || !TPC_TREASURY) {
      return { valid: false, error: 'USDC_MINT atau TPC_TREASURY tidak dikonfigurasi' }
    }

    const connection = connectRPC()
    const treasuryPubkey = new PublicKey(TPC_TREASURY)

    // Get signatures for transactions to treasury
    const signatures = await connection.getSignaturesForAddress(treasuryPubkey, {
      limit: 50
    })

    // Check each transaction for matching criteria
    for (const sigInfo of signatures) {
      try {
        const tx = await connection.getTransaction(sigInfo.signature, {
          maxSupportedTransactionVersion: 0
        })

        if (!tx?.meta || !tx.transaction) continue

        // Check for USDC transfer
        const postBalances = tx.meta.postTokenBalances || []
        const preBalances = tx.meta.preTokenBalances || []

        // Find USDC balance changes
        const usdcTransfer = postBalances.find(balance => 
          balance.mint === USDC_MINT && 
          balance.owner === TPC_TREASURY
        )

        if (!usdcTransfer) continue

        // Calculate amount transferred
        const amount = (usdcTransfer.uiTokenAmount?.uiAmount || 0)

        // Check if amount matches or exceeds invoice amount
        if (amount < invoice.amount_usdc) continue

        // Check memo/reference from transaction
        const message = tx.transaction.message
        
        // Handle both legacy and versioned transactions
        let instructions: any[] = []
        if ('instructions' in message) {
          instructions = message.instructions
        } else if ('compiledInstructions' in message) {
          // For versioned transactions, we'd need to decompile
          // For now, skip memo check for versioned txs
        }

        // Check for memo
        const memo = instructions.find((ix: any) => 
          'data' in ix && ix.data
        )

        const memoText = memo ? Buffer.from(memo.data, 'base64').toString() : ''
        
        // Check if memo contains invoice ID
        if (!memoText.includes(invoice.id)) continue

        // All checks passed
        return {
          valid: true,
          signature: sigInfo.signature,
          amount
        }

      } catch (error) {
        console.error('Error checking transaction:', error)
        continue
      }
    }

    return { valid: false, error: 'Tidak ada transaksi yang cocok ditemukan' }

  } catch (error) {
    console.error('Verification error:', error)
    return { valid: false, error: 'Gagal verifikasi pembayaran' }
  }
}
