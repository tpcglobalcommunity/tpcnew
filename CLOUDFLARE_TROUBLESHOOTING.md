# Cloudflare Pages Troubleshooting

## Issue: Repository Not Updating

### Check Repository Connection
1. Go to Cloudflare Pages dashboard
2. Click on your project "tpc-global"
3. Check "Connected repository" section
4. Verify repository: `tpcglobalcommunity/tpcnew`
5. Verify branch: `main`

### If Not Connected:
1. Click "Settings" tab
2. Scroll to "Build & deployments"
3. Click "Connect repository"
4. Select GitHub
5. Authorize Cloudflare access
6. Select repository: `tpcglobalcommunity/tpcnew`
7. Select branch: `main`
8. Save settings

### If Connected But Not Updating:
1. Check "Build & deployments" settings
2. Verify "Build mode" is "Production"
3. Check "Build command" is `npm run build`
4. Check "Build output directory" is `.next`
5. Verify "Root directory" is `/`

### Manual Deploy:
1. Click "Deployments" tab
2. Click "Create deployment"
3. Select branch: `main`
4. Click "Deploy branch"
5. Wait for build completion

### Environment Variables Check:
1. Go to "Settings" tab
2. Click "Environment variables"
3. Verify:
   - NODE_VERSION = 18
   - NEXT_TELEMETRY_DISABLED = 1

### Build Logs Check:
1. Go to "Deployments" tab
2. Click on latest deployment
3. Review build logs for errors
4. Check for missing dependencies

### If Build Fails:
1. Check Node.js version (should be 18+)
2. Verify package.json scripts
3. Check for missing dependencies
4. Review specific error messages

### Alternative: Use Wrangler CLI
```bash
# Install Wrangler
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy manually
wrangler pages deploy .next --project-name=tpc-global
```

### Quick Checklist:
- [ ] Repository connected to GitHub
- [ ] Branch set to "main"
- [ ] Build command: `npm run build`
- [ ] Output directory: `.next`
- [ ] Node version: 18
- [ ] Environment variables set
- [ ] No build errors in logs
