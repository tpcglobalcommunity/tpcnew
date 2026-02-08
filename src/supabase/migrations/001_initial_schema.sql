-- TPC Global Database Schema Migration
-- Phase 2: Core Tables with RLS

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- 1. TPC INVOICES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS tpc_invoices (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  invoice_number TEXT UNIQUE NOT NULL DEFAULT 'INV-' || SUBSTRING(MD5(RANDOM()::TEXT), 1, 8),
  
  -- Purchase Details
  qty_tpc BIGINT NOT NULL CHECK (qty_tpc >= 1000),
  price_per_tpc NUMERIC(20, 10) NOT NULL DEFAULT 0.001,
  total_usdc NUMERIC(20, 6) NOT NULL,
  total_idr NUMERIC(20, 2) NOT NULL,
  
  -- Payment Info
  payment_method TEXT NOT NULL CHECK (payment_method IN ('USDC', 'IDR')),
  tx_hash TEXT,
  proof_url TEXT,
  
  -- Wallet & Sponsor
  wallet_address TEXT NOT NULL,
  sponsor_code TEXT NOT NULL DEFAULT 'TPC-GLOBAL',
  
  -- State Machine
  status TEXT NOT NULL DEFAULT 'DRAFT' 
    CHECK (status IN ('DRAFT', 'PENDING', 'VERIFYING', 'UNDER_REVIEW', 'PAID_AUTO', 'APPROVED', 'DELIVERED', 'REJECTED', 'EXPIRED', 'FAILED')),
  
  -- Timing
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  expires_at TIMESTAMPTZ NOT NULL DEFAULT (NOW() + INTERVAL '24 hours'),
  paid_at TIMESTAMPTZ,
  delivered_at TIMESTAMPTZ,
  
  -- Audit Trail
  state_history JSONB DEFAULT '[]',
  admin_notes TEXT,
  error_message TEXT,
  failure_reason TEXT,
  
  -- Telegram Notifications
  telegram_notified_at TIMESTAMPTZ
);

-- Indexes for tpc_invoices
CREATE INDEX IF NOT EXISTS idx_tpc_invoices_user_id ON tpc_invoices(user_id);
CREATE INDEX IF NOT EXISTS idx_tpc_invoices_status ON tpc_invoices(status);
CREATE INDEX IF NOT EXISTS idx_tpc_invoices_invoice_number ON tpc_invoices(invoice_number);
CREATE INDEX IF NOT EXISTS idx_tpc_invoices_created_at ON tpc_invoices(created_at DESC);
CREATE UNIQUE INDEX IF NOT EXISTS idx_tpc_invoices_tx_hash_unique 
  ON tpc_invoices(tx_hash) 
  WHERE tx_hash IS NOT NULL;

-- Trigger for updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_tpc_invoices_updated_at
  BEFORE UPDATE ON tpc_invoices
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- 2. TPC COMMISSION LEDGER TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS tpc_commission_ledger (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  
  -- Source
  invoice_id UUID REFERENCES tpc_invoices(id) NOT NULL,
  buyer_user_id UUID REFERENCES auth.users(id) NOT NULL,
  
  -- Commission
  sponsor_user_id UUID REFERENCES auth.users(id) NOT NULL,
  sponsor_code TEXT NOT NULL,
  amount_tpc BIGINT NOT NULL,
  kind TEXT NOT NULL DEFAULT 'PRESALE_L1' 
    CHECK (kind IN ('PRESALE_L1', 'MARKETPLACE_L1', 'MARKETPLACE_L2', 'MARKETPLACE_L3', 'MARKETPLACE_L4', 'MARKETPLACE_L5', 'MARKETPLACE_L6', 'MARKETPLACE_L7', 'MARKETPLACE_L8', 'MARKETPLACE_L9', 'MARKETPLACE_L10')),
  
  -- Status
  status TEXT NOT NULL DEFAULT 'PENDING' CHECK (status IN ('PENDING', 'PAID', 'VOID')),
  
  -- Payout Info
  payout_tx_hash TEXT,
  paid_at TIMESTAMPTZ,
  void_reason TEXT,
  
  -- Audit
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_by UUID REFERENCES auth.users(id),
  
  -- Constraints
  CONSTRAINT unique_invoice_commission UNIQUE(invoice_id, kind)
);

-- Indexes for commission ledger
CREATE INDEX IF NOT EXISTS idx_tpc_commission_ledger_sponsor_user_id ON tpc_commission_ledger(sponsor_user_id);
CREATE INDEX IF NOT EXISTS idx_tpc_commission_ledger_status ON tpc_commission_ledger(status);
CREATE INDEX IF NOT EXISTS idx_tpc_commission_ledger_buyer_user_id ON tpc_commission_ledger(buyer_user_id);

-- Trigger for updated_at
CREATE TRIGGER update_tpc_commission_ledger_updated_at
  BEFORE UPDATE ON tpc_commission_ledger
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- 3. TPC PAYOUT JOBS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS tpc_payout_jobs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  
  -- Reference
  invoice_id UUID REFERENCES tpc_invoices(id) NOT NULL,
  kind TEXT NOT NULL DEFAULT 'TPC_DELIVERY',
  
  -- Destination
  to_wallet TEXT NOT NULL,
  amount_tpc BIGINT NOT NULL,
  
  -- Status
  status TEXT NOT NULL DEFAULT 'QUEUED' 
    CHECK (status IN ('QUEUED', 'PREPARED', 'CONFIRMED', 'FAILED')),
  
  -- Multisig Safe
  unsigned_tx_base64 TEXT,
  tx_hash TEXT,
  error TEXT,
  
  -- Audit
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  prepared_at TIMESTAMPTZ,
  confirmed_at TIMESTAMPTZ,
  
  -- Constraints
  CONSTRAINT unique_invoice_payout UNIQUE(invoice_id, kind)
);

-- Indexes for payout jobs
CREATE INDEX IF NOT EXISTS idx_tpc_payout_jobs_status ON tpc_payout_jobs(status);
CREATE INDEX IF NOT EXISTS idx_tpc_payout_jobs_invoice_id ON tpc_payout_jobs(invoice_id);

-- Trigger for updated_at
CREATE TRIGGER update_tpc_payout_jobs_updated_at
  BEFORE UPDATE ON tpc_payout_jobs
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- 4. ADMIN ACTIVITY LOGS TABLE (Phase 11)
-- ============================================
CREATE TABLE IF NOT EXISTS admin_activity_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  admin_uuid UUID REFERENCES auth.users(id) NOT NULL,
  action_type TEXT NOT NULL,
  target_type TEXT NOT NULL,
  target_id TEXT NOT NULL,
  metadata JSONB DEFAULT '{}',
  ip_address TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indexes for admin logs
CREATE INDEX IF NOT EXISTS idx_admin_logs_admin_uuid ON admin_activity_logs(admin_uuid);
CREATE INDEX IF NOT EXISTS idx_admin_logs_action_type ON admin_activity_logs(action_type);
CREATE INDEX IF NOT EXISTS idx_admin_logs_target ON admin_activity_logs(target_type, target_id);
CREATE INDEX IF NOT EXISTS idx_admin_logs_created_at ON admin_activity_logs(created_at DESC);

-- ============================================
-- 5. CREATE/UPDATE PROFILES TABLE
-- ============================================
-- Create profiles table if it doesn't exist (Supabase Auth schema)
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Add TPC-specific columns
ALTER TABLE IF EXISTS profiles 
  ADD COLUMN IF NOT EXISTS sponsor_code TEXT DEFAULT 'TPC-GLOBAL',
  ADD COLUMN IF NOT EXISTS wallet_address TEXT,
  ADD COLUMN IF NOT EXISTS is_admin BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS last_activity_at TIMESTAMPTZ;

-- Trigger for updated_at on profiles
DROP TRIGGER IF EXISTS update_profiles_updated_at ON profiles;
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- 6. HELPER FUNCTIONS
-- ============================================
CREATE OR REPLACE FUNCTION is_admin(user_uuid UUID)
RETURNS BOOLEAN AS $$
DECLARE
  is_admin_user BOOLEAN;
BEGIN
  SELECT COALESCE(is_admin, FALSE) INTO is_admin_user
  FROM profiles
  WHERE id = user_uuid;
  
  RETURN COALESCE(is_admin_user, FALSE);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to log state changes
CREATE OR REPLACE FUNCTION log_state_change()
RETURNS TRIGGER AS $$
BEGIN
  IF OLD.status IS DISTINCT FROM NEW.status THEN
    NEW.state_history = COALESCE(NEW.state_history, '[]'::JSONB) || JSONB_BUILD_OBJECT(
      'from', OLD.status,
      'to', NEW.status,
      'timestamp', NOW(),
      'changed_by', COALESCE(current_setting('request.jwt.claims', true)::JSONB->>'sub', 'system')
    );
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for state changes on invoices
DROP TRIGGER IF EXISTS log_invoice_state_change ON tpc_invoices;
CREATE TRIGGER log_invoice_state_change
  BEFORE UPDATE ON tpc_invoices
  FOR EACH ROW
  EXECUTE FUNCTION log_state_change();

-- ============================================
-- MIGRATION COMPLETE
-- ============================================
SELECT 'Phase 2 Database Schema Migration Complete' as status;
