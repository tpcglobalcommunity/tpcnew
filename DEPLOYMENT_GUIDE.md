# 🚀 TPC Global - Deployment Guide

## ✅ **PRE-DEPLOYMENT VERIFICATION**

### **Build Status**
- [x] `npm run build` passes
- [x] All 25 pages generated
- [x] No TypeScript errors
- [x] Static files optimized

### **Files Ready for Deployment**
```
tpc-global/
├── .next/                 # Next.js build output
├── public/                # Static assets
│   ├── robots.txt
│   ├── sitemap.xml
│   └── favicon.ico
└── package.json           # Dependencies
```

## 🌐 **DEPLOYMENT OPTIONS**

### **Option 1: Vercel (Recommended)**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod

# Or connect GitHub repo for auto-deploy
```

### **Option 2: Netlify**
```bash
# Build and deploy
npm run build
netlify deploy --prod --dir=.next
```

### **Option 3: AWS S3 + CloudFront**
```bash
# Deploy to S3
aws s3 sync .next/ s3://tpcglobal.io --delete

# Invalidate CloudFront
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

### **Option 4: DigitalOcean App Platform**
```bash
# Deploy
doctl apps create --spec path/to/app.yaml
```

## 🔧 **ENVIRONMENT VARIABLES NEEDED**

### **Production Environment**
```bash
# Next.js
NEXT_PUBLIC_SITE_URL=https://tpcglobal.io
NEXT_PUBLIC_API_URL=https://api.tpcglobal.io

# Security (if needed)
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=https://tpcglobal.io
```

## 📊 **POST-DEPLOYMENT VERIFICATION**

### **Critical Checks**
- [ ] Home page loads: `https://tpcglobal.io` & `https://tpcglobal.io/en`
- [ ] Language switching works: `/en` ↔ `/id`
- [ ] BottomNav appears on all public pages
- [ ] Presale flow works end-to-end
- [ ] Mobile responsive design
- [ ] SEO meta tags visible in page source
- [ ] Sitemap accessible: `https://tpcglobal.io/sitemap.xml`
- [ ] Robots.txt accessible: `https://tpcglobal.io/robots.txt`

### **Performance Monitoring**
- [ ] Google PageSpeed Insights > 90
- [ ] Lighthouse audit > 90
- [ ] Core Web Vitals within thresholds
- [ ] No console errors

## 🚨 **ROLLBACK PLAN**

### **If Issues Occur**
1. **Immediate Actions**
   - Check build logs
   - Verify environment variables
   - Test critical user flows

2. **Rollback Commands**
   ```bash
   # Vercel
   vercel rollback --to previous-deployment
   
   # Git
   git revert HEAD~1
   npm run build
   vercel --prod
   ```

## 📞 **DEPLOYMENT CONTACTS**

### **Technical Support**
- **Deployment Issues**: dev@tpcglobal.io
- **Emergency Rollback**: emergency@tpcglobal.io
- **Performance Issues**: perf@tpcglobal.io

---

## ✅ **READY TO DEPLOY**

**Current Status**: Build successful, all files ready for production deployment.

**Recommended Next Step**: Deploy to Vercel for best Next.js performance and automatic HTTPS.
