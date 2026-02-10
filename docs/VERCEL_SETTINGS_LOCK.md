# Vercel Settings Lock - TPC Global

## 📋 FINAL VERCEL CONFIGURATION

### **Framework Settings**
- **Framework Preset**: Next.js
- **Install Command**: `npm install`
- **Build Command**: `npm run build`
- **Output Directory**: *(KOSONG - Default .next)*

### **⚠️ CRITICAL NOTES**

#### **Output Directory MUST BE EMPTY**
- **DO NOT** set Output Directory to `"out"`
- **DO NOT** use `"out"` for App Router projects
- **Default `.next` is required for Next.js App Router
- Setting `"out"` will cause `routes-manifest.json` errors on Vercel

#### **Static Export Configuration**
- **NO** `output: "export"` in `next.config.ts`
- **NO** static export for App Router (use ISR/SSG instead)
- **NO** `out/` folder dependency

### **Environment Variables**
```
NEXT_PUBLIC_SITE_URL=https://www.tpcglobal.io
NEXT_PUBLIC_APP_ENV=production
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
ADMIN_USER_IDS=dfbbf71c-0a7c-43fb-bab0-d21f12b78b47
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### **Build Requirements**
- **Node Version**: 20.x (LTS)
- **Next.js**: 15.x (App Router)
- **TypeScript**: Enabled
- **ESLint**: Enabled

### **Deployment Flow**
1. **Auto-deploy** on push to `main` branch
2. **Build verification** required
3. **Environment variables** must be set before first deploy

### **🔒 LOCKED SETTINGS**
- **Framework**: Next.js (App Router)
- **Build Output**: Default `.next`
- **Node Runtime**: Default
- **Environment**: Production

---

**Last Updated**: 2026-02-11  
**Purpose**: Prevent Vercel configuration drift and ensure consistent deployments
