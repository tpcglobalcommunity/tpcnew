// IDR Payment Proof Upload API Route
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const invoice_id = formData.get('invoice_id') as string;
    const file = formData.get('proof_file') as File;

    if (!invoice_id || !file) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Only JPG, PNG, and PDF allowed.' },
        { status: 400 }
      );
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: 'File too large. Maximum size is 5MB.' },
        { status: 400 }
      );
    }

    // TODO: Implement actual file upload to Supabase Storage
    // TODO: Update invoice status to UNDER_REVIEW

    return NextResponse.json({
      success: true,
      message: 'Payment proof uploaded successfully',
      invoice_id,
      status: 'UNDER_REVIEW',
    });

  } catch (error: any) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    endpoint: 'IDR Payment Proof Upload',
    method: 'POST',
    content_type: 'multipart/form-data',
    required_fields: ['invoice_id', 'proof_file'],
  });
}
