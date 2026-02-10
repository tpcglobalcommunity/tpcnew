import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const PUBLIC_FILE = /\.(.*)$/

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // 1) Skip Next internal + assets
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next()
  }

  // 2) Skip auth routes (NO lang prefix)
  if (pathname === "/login" || pathname === "/register") {
    return NextResponse.next()
  }

  // 3) Redirect non-www to www (only for production domain)
  const hostname = req.headers.get('host');
  if (hostname === 'tpcglobal.io') {
    const url = req.nextUrl.clone()
    url.protocol = 'https:'
    url.hostname = 'www.tpcglobal.io'
    return NextResponse.redirect(url, 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // exclude _next & files by negative lookahead
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
}
