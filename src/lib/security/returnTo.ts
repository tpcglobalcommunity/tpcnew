/**
 * Sanitize and validate returnTo URL
 * Only allows internal paths starting with "/"
 */
export function sanitizeReturnTo(returnTo: string | null | undefined): string {
  if (!returnTo) return '/member'
  
  // Must start with "/"
  if (!returnTo.startsWith('/')) return '/member'
  
  // Reject external URLs
  if (returnTo.includes('http') || returnTo.includes('//') || returnTo.includes('\\')) {
    return '/member'
  }
  
  // Reject auth routes to prevent loops
  const authRoutes = ['/login', '/register', '/forgot-password', '/reset-password']
  if (authRoutes.some(route => returnTo.startsWith(route))) {
    return '/member'
  }
  
  return returnTo
}
