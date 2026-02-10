import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return [
    { lang: 'id' },
    { lang: 'en' }
  ];
}

export async function GET(request: NextRequest, { params }: { params: { lang: string } }) {
  // Redirect permanen ke language root
  const { lang } = params;
  const url = new URL(`/${lang}`, request.url);
  return NextResponse.redirect(url, 308);
}
