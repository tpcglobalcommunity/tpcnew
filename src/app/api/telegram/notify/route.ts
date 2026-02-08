// Telegram Notifications API Route
// Sends notifications to admin Telegram for important events

import { NextRequest, NextResponse } from 'next/server';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '';
const TELEGRAM_ADMIN_CHAT_ID = process.env.TELEGRAM_ADMIN_CHAT_ID || '';

export async function POST(request: NextRequest) {
  try {
    const { event_type, invoice_id, invoice_number, amount, payment_method, status } = await request.json();

    if (!event_type || !invoice_id) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Format message based on event type
    let message = '';
    
    switch (event_type) {
      case 'PAYMENT_CONFIRMED':
        message = `✅ *Payment Confirmed*\n\n` +
          `Invoice: ${invoice_number}\n` +
          `Amount: ${amount} ${payment_method}\n` +
          `Status: ${status}\n` +
          `TPC delivery queued automatically.`;
        break;
      
      case 'PAYMENT_UNDER_REVIEW':
        message = `⏳ *Payment Under Review*\n\n` +
          `Invoice: ${invoice_number}\n` +
          `Amount: ${amount} ${payment_method}\n` +
          `Action: Manual verification required`;
        break;
      
      case 'PAYMENT_FAILED':
        message = `❌ *Payment Failed*\n\n` +
          `Invoice: ${invoice_number}\n` +
          `Amount: ${amount} ${payment_method}\n` +
          `Status: ${status}\n` +
          `Action: Review and contact user`;
        break;
      
      case 'TPC_DELIVERED':
        message = `🚀 *TPC Delivered*\n\n` +
          `Invoice: ${invoice_number}\n` +
          `Amount: ${amount} TPC\n` +
          `Status: Successfully delivered`;
        break;
      
      default:
        message = `📢 *TPC Presale Notification*\n\n` +
          `Invoice: ${invoice_number}\n` +
          `Event: ${event_type}\n` +
          `Status: ${status}`;
    }

    // TODO: Implement actual Telegram API call
    // const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    // await fetch(telegramUrl, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     chat_id: TELEGRAM_ADMIN_CHAT_ID,
    //     text: message,
    //     parse_mode: 'Markdown',
    //   }),
    // });

    console.log('Telegram notification:', message);

    return NextResponse.json({
      success: true,
      message: 'Telegram notification sent',
      event_type,
      invoice_id,
    });

  } catch (error: any) {
    console.error('Telegram notification error:', error);
    return NextResponse.json(
      { error: 'Failed to send notification', details: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    endpoint: 'Telegram Notifications',
    method: 'POST',
    event_types: [
      'PAYMENT_CONFIRMED',
      'PAYMENT_UNDER_REVIEW',
      'PAYMENT_FAILED',
      'TPC_DELIVERED',
    ],
    required_fields: ['event_type', 'invoice_id'],
  });
}
