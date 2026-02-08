# TPC Global Launch Checklist

## Pre-Launch Security Checklist

### ✅ Database & Security
- [ ] Run SQL migrations on production Supabase
- [ ] Verify RLS policies are active
- [ ] Set up admin UUID whitelist
- [ ] Configure service role key (server only)
- [ ] Test database connections
- [ ] Verify audit trail logging

### ✅ Environment Variables
```env
# Required for production
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_APP_URL=https://tpcglobal.io
NEXT_PUBLIC_SOLANA_RPC_URL=
NEXT_PUBLIC_TPC_MINT_ADDRESS=
NEXT_PUBLIC_TREASURY_WALLET=
NEXT_PUBLIC_TOKEN_DECIMALS=9
NEXT_PUBLIC_USDC_PRICE=0.001
NEXT_PUBLIC_IDR_EXCHANGE_RATE=17000
NEXT_PUBLIC_STAGE_1_SUPPLY_CAP=200000000
NEXT_PUBLIC_PRESALE_START_DATE=2026-02-15T00:00:00+08:00
NEXT_PUBLIC_PRESALE_DURATION_MONTHS=6
ADMIN_USER_IDS=uuid1,uuid2,uuid3
ADMIN_EMAIL=tpcglobal.io@gmail.com
TELEGRAM_BOT_TOKEN=
TELEGRAM_ADMIN_CHAT_ID=
```

### ✅ Build & Deployment
- [ ] Run `npm run build` - verify no errors
- [ ] Check all routes compile
- [ ] Verify static assets
- [ ] Test on staging environment
- [ ] Deploy to production (Cloudflare/Vercel)
- [ ] Configure custom domain

### ✅ Payment Integration
- [ ] Verify treasury wallet address
- [ ] Test USDC auto-verification flow
- [ ] Test IDR manual review flow
- [ ] Upload test payment proof
- [ ] Verify invoice state transitions
- [ ] Test 24-hour expiry logic

### ✅ Admin Features
- [ ] Access admin dashboard
- [ ] Test invoice approval/rejection
- [ ] Test TPC delivery preparation
- [ ] Verify commission calculations
- [ ] Test audit log recording

### ✅ Telegram Integration
- [ ] Configure bot token
- [ ] Set admin chat ID
- [ ] Test notification triggers
- [ ] Verify message formatting

### ✅ Legal & Compliance
- [ ] Deploy Terms of Service page
- [ ] Deploy Privacy Policy page
- [ ] Deploy Risk Disclosure page
- [ ] Deploy AML Policy page
- [ ] Verify all legal links work
- [ ] Add legal links to footer

### ✅ Content Review
- [ ] Review all public page content
- [ ] Verify no placeholder text remains
- [ ] Check bilingual content (EN/ID)
- [ ] Verify treasury wallet display
- [ ] Check countdown timer accuracy

### ✅ Testing
- [ ] End-to-end purchase flow
- [ ] Mobile responsiveness check
- [ ] Cross-browser testing
- [ ] Load testing (optional)
- [ ] Security scan

### ✅ Monitoring
- [ ] Health endpoint active
- [ ] Telegram bot monitoring
- [ ] Error logging configured
- [ ] Analytics setup (optional)

## Post-Launch

### Day 1
- [ ] Monitor first transactions
- [ ] Check Telegram notifications
- [ ] Verify invoice processing
- [ ] Monitor error logs

### Week 1
- [ ] Daily admin dashboard check
- [ ] Process pending IDR payments
- [ ] Verify TPC deliveries
- [ ] Gather user feedback

## Emergency Contacts
- **Technical Lead**: [Your contact]
- **Supabase Support**: support@supabase.io
- **Solana Status**: https://status.solana.com/
- **Cloudflare Status**: https://www.cloudflarestatus.com/
