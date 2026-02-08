# TPC Global - Domain Configuration

## Production Domain
tpcglobal.io

## Development/Testing Domains
dev.tpcglobal.io
staging.tpcglobal.io
www.tpcglobal.io (redirects to tpcglobal.io)

## DNS Configuration

### A Records
@    IN A    10.0.0.10
www  IN A    10.0.0.10

### CNAME Records
www  IN CNAME  tpcglobal.io
dev  IN CNAME  dev.tpcglobal.io
staging IN CNAME staging.tpcglobal.io

## Deployment Notes

### Vercel Configuration
```json
{
  "domains": [
    {
      "domain": "tpcglobal.io",
      "redirects": [
        {
          "source": "www.tpcglobal.io",
          "destination": "https://tpcglobal.io"
        }
      ]
    }
  ]
}
```

### Netlify Configuration
```toml
[[redirects]]
  from = "www.tpcglobal.io"
  to = "https://tpcglobal.io"
  status = 301
```

## Environment Variables
```bash
# Production
NEXT_PUBLIC_SITE_URL=https://tpcglobal.io
NEXT_PUBLIC_API_URL=https://api.tpcglobal.io

# Development
NEXT_PUBLIC_SITE_URL=https://dev.tpcglobal.io
NEXT_PUBLIC_API_URL=https://api-dev.tpcglobal.io
```

## Testing Checklist

### Before Going Live
- [ ] Test all pages with `tpcglobal.io`
- [ ] Verify BottomNav appears on all [lang] pages
- [ ] Test language switching
- [ ] Test mobile responsiveness
- [ ] Check SEO meta tags
- [ ] Verify no console errors
- [ ] Test form submissions
- [ ] Check social media links

### After Deployment
- [ ] Monitor analytics
- [ ] Check error logs
- [ ] Verify all redirects work
- [ ] Test user registration/login flow
