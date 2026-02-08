import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Skip middleware for static assets and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }
  
  // Handle root path redirect
  if (pathname === "/") {
    // Detect user's preferred language from Accept-Language header
    const acceptLanguage = request.headers.get("accept-language") || "";
    const isIndonesian = acceptLanguage.includes("id") || 
                         acceptLanguage.includes("ID") || 
                         acceptLanguage.includes("indonesian");
    
    const lang = isIndonesian ? "id" : "en";
    
    // Redirect to /{lang}/presale
    const url = request.nextUrl.clone();
    url.pathname = `/${lang}/presale`;
    return NextResponse.redirect(url);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
