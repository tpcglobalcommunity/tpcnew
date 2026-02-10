import { createNextRequest } from '@cloudflare/next-on-pages/adapter';

export default {
  async fetch(request, env) {
    const nextRequest = createNextRequest(request);
    
    // Handle root route redirect
    if (nextRequest.url.pathname === '/') {
      const url = new URL('/id', nextRequest.url);
      return Response.redirect(url.toString(), 307);
    }
    
    // Let Next.js handle the rest
    return nextRequest.next();
  },
};
