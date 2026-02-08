# Cloudflare Pages Configuration

## Build Settings
- **Framework preset:** Next.js
- **Build command:** `npm run build`
- **Build output directory:** `.next`
- **Root directory:** `/` (default)

## Environment Variables
```bash
NODE_VERSION=18
NEXT_TELEMETRY_DISABLED=1
```

## Wrangler.toml (Optional)
```toml
name = "tpc-global"
compatibility_date = "2024-02-09"

[build]
command = "npm run build"
publish = ".next"

[env.production]
NODE_ENV = "production"
```

## Deployment Steps

### 1. Connect Repository
1. Go to Cloudflare Pages dashboard
2. Click "Create a project"
3. Connect to GitHub
4. Select repository: `tpcglobalcommunity/tpcnew`
5. Select branch: `main`

### 2. Configure Build
1. Framework preset: Next.js
2. Build command: `npm run build`
3. Build output directory: `.next`
4. Root directory: `/`

### 3. Environment Variables
1. NODE_VERSION: 18
2. NEXT_TELEMETRY_DISABLED: 1

### 4. Deploy
1. Click "Save and Deploy"
2. Wait for build completion
3. Test deployment

## Custom Domain Configuration
- Primary domain: `tpcglobal.io`
- Alternate domain: `www.tpcglobal.io` (redirect to primary)

## Post-Deployment Checklist
- [ ] Test all pages: `https://tpcglobal.io/id/*` and `https://tpcglobal.io/en/*`
- [ ] Verify BottomNav appears on all [lang] pages
- [ ] Check language switching functionality
- [ ] Test mobile responsiveness
- [ ] Verify SEO meta tags
- [ ] Check page load performance
- [ ] Test form submissions
- [ ] Verify no console errors

## Troubleshooting

### If Build Fails
1. Check Node.js version (should be 18+)
2. Verify package.json scripts
3. Check for missing dependencies
4. Review build logs for specific errors

### If Pages Not Loading
1. Check routing configuration
2. Verify static file serving
3. Check Cloudflare Workers logs
4. Test with different browsers

### If BottomNav Not Visible
1. Check browser console for JavaScript errors
2. Verify CSS loading
3. Test in incognito mode
4. Check Cloudflare Workers for routing issues
