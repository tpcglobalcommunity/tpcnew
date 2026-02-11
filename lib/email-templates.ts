import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()
    
    // Get email from request body
    const body = await request.json()
    const { to, subject, template, data } = body
    
    if (!to || !subject || !template) {
      return NextResponse.json(
        { error: 'Missing required fields: to, subject, template' },
        { status: 400 }
      )
    }
    
    // Create custom HTML email with TPC Global branding
    const htmlContent = generateEmailTemplate(template, data)
    
    // Here you would integrate with your preferred email service
    // For now, we'll use Supabase's built-in email functionality
    // But this shows how to create custom templates
    
    return NextResponse.json({
      success: true,
      message: 'Email template generated',
      template: htmlContent
    })
    
  } catch (error) {
    console.error('Email template error:', error)
    return NextResponse.json(
      { error: 'Failed to generate email template' },
      { status: 500 }
    )
  }
}

function generateEmailTemplate(template: string, data?: any): string {
  const templates: Record<string, string> = {
    welcome: `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>TPC Global - Email Verification</title>
  <style>
    body { 
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: linear-gradient(135deg, #0B0E11 0%, #1A1F2E 100%);
      color: #ffffff;
      margin: 0;
      padding: 20px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background: #1A1F2E;
      border-radius: 12px;
      padding: 40px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }
    .header {
      text-align: center;
      margin-bottom: 30px;
    }
    .logo {
      width: 60px;
      height: 60px;
      background: #F59E0B;
      border-radius: 50%;
      margin: 0 auto 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 24px;
      color: #000000;
    }
    .title {
      font-size: 24px;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 10px;
    }
    .content {
      color: #e5e7eb;
      line-height: 1.6;
      margin-bottom: 30px;
    }
    .button {
      display: inline-block;
      background: #F59E0B;
      color: #000000;
      padding: 12px 30px;
      text-decoration: none;
      border-radius: 8px;
      font-weight: 600;
      font-size: 16px;
    }
    .footer {
      text-align: center;
      margin-top: 30px;
      color: #9ca3af;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">TPC</div>
      <h1 class="title">Selamat Datang di TPC Global!</h1>
    </div>
    <div class="content">
      <p>Terima kasih telah mendaftar di TPC Global.</p>
      <p>Silakan klik tombol di bawah untuk verifikasi email Anda:</p>
    </div>
    <div style="text-align: center;">
      <a href="${data?.verificationLink || '#'}" class="button">Verifikasi Email Sekarang</a>
    </div>
    <div class="footer">
      <p>Link ini berlaku selama 24 jam.</p>
      <p>Jika Anda tidak meminta email ini, abaikan saja.</p>
      <p>&copy; 2026 TPC Global. All rights reserved.</p>
    </div>
  </div>
</body>
</html>`,
    passwordReset: `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>TPC Global - Password Reset</title>
  <style>
    body { 
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: linear-gradient(135deg, #0B0E11 0%, #1A1F2E 100%);
      color: #ffffff;
      margin: 0;
      padding: 20px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background: #1A1F2E;
      border-radius: 12px;
      padding: 40px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }
    .header {
      text-align: center;
      margin-bottom: 30px;
    }
    .logo {
      width: 60px;
      height: 60px;
      background: #F59E0B;
      border-radius: 50%;
      margin: 0 auto 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 24px;
      color: #000000;
    }
    .title {
      font-size: 24px;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 10px;
    }
    .content {
      color: #e5e7eb;
      line-height: 1.6;
      margin-bottom: 30px;
    }
    .button {
      display: inline-block;
      background: #F59E0B;
      color: #000000;
      padding: 12px 30px;
      text-decoration: none;
      border-radius: 8px;
      font-weight: 600;
      font-size: 16px;
    }
    .footer {
      text-align: center;
      margin-top: 30px;
      color: #9ca3af;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">TPC</div>
      <h1 class="title">Reset Password TPC Global</h1>
    </div>
    <div class="content">
      <p>Anda meminta untuk reset password akun TPC Global Anda.</p>
      <p>Silakan klik tombol di bawah untuk membuat password baru:</p>
    </div>
    <div style="text-align: center;">
      <a href="${data?.resetLink || '#'}" class="button">Reset Password Sekarang</a>
    </div>
    <div class="footer">
      <p>Link ini berlaku selama 1 jam.</p>
      <p>Jika Anda tidak meminta ini, abaikan saja.</p>
      <p>&copy; 2026 TPC Global. All rights reserved.</p>
    </div>
  </div>
</body>
</html>`
  }
  
  return templates[template] || templates.welcome
}
