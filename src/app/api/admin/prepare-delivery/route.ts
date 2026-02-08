// TPC Token Delivery - Prepare Transaction (Multisig Safe)
// This endpoint prepares an unsigned transaction for admin review

import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { payout_job_id } = await request.json();

    if (!payout_job_id) {
      return NextResponse.json(
        { error: 'Missing payout_job_id' },
        { status: 400 }
      );
    }

    // TODO: Verify admin authentication
    // TODO: Fetch payout job from database
    // TODO: Prepare unsigned Solana transaction for TPC transfer
    // TODO: Update payout job status to PREPARED

    // Mock response
    return NextResponse.json({
      success: true,
      message: 'Transaction prepared for multisig confirmation',
      payout_job_id,
      status: 'PREPARED',
      unsigned_tx: 'base64_encoded_transaction_here',
      to_wallet: 'recipient_wallet_address',
      amount_tpc: 1000000,
    });

  } catch (error: any) {
    console.error('Prepare transaction error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    endpoint: 'Prepare TPC Delivery Transaction',
    method: 'POST',
    required_fields: ['payout_job_id'],
    description: 'Prepares unsigned transaction for multisig confirmation',
  });
}
