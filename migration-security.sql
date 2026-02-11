-- Migration SQL for TPC Presale Security Hardening
-- Run this in Supabase SQL Editor

-- 1) Create rate limits table
CREATE TABLE IF NOT EXISTS tpc_rate_limits (
  key text primary key,
  count integer not null,
  window_start timestamptz not null,
  updated_at timestamptz default now()
);

-- 2) Create rate limit function
CREATE OR REPLACE FUNCTION rpc_rate_limit_increment(
  p_key text,
  p_limit int,
  p_window_seconds int
) RETURNS boolean AS $$
DECLARE
  v_window_end timestamptz;
  v_current_count integer;
BEGIN
  -- Check if window has expired
  SELECT window_start + (p_window_seconds || ' seconds')::interval INTO v_window_end
  FROM tpc_rate_limits
  WHERE key = p_key;
  
  -- If no record or window expired, reset
  IF v_window_end IS NULL OR v_window_end < now() THEN
    INSERT INTO tpc_rate_limits (key, count, window_start)
    VALUES (p_key, 1, now())
    ON CONFLICT (key) DO UPDATE SET
      count = 1,
      window_start = now(),
      updated_at = now();
    RETURN true;
  END IF;
  
  -- Increment count
  UPDATE tpc_rate_limits
  SET count = count + 1, updated_at = now()
  WHERE key = p_key
  RETURNING count INTO v_current_count;
  
  -- Check if over limit
  IF v_current_count > p_limit THEN
    RETURN false;
  END IF;
  
  RETURN true;
END;
$$ LANGUAGE plpgsql;

-- 3) Add unique constraint for tx_signature (anti-replay)
ALTER TABLE tpc_invoices
  ADD CONSTRAINT IF NOT EXISTS uq_tx_signature 
  UNIQUE (tx_signature);

-- 4) Add meta column to audit logs
ALTER TABLE tpc_audit_logs
  ADD COLUMN IF NOT EXISTS meta jsonb DEFAULT '{}'::jsonb;

-- 5) Create missing tables if not exist
CREATE TABLE IF NOT EXISTS tpc_referral_ledger (
  id uuid primary key default gen_random_uuid(),
  invoice_id uuid,
  referrer_id uuid,
  buyer_id uuid,
  amount_usdc numeric,
  commission_usdc numeric,
  status text check (status in ('pending','approved','paid')) default 'pending',
  created_at timestamptz default now()
);

CREATE TABLE IF NOT EXISTS tpc_audit_logs (
  id uuid primary key default gen_random_uuid(),
  invoice_id uuid,
  action text,
  old_status text,
  new_status text,
  actor_id uuid,
  created_at timestamptz default now(),
  meta jsonb DEFAULT '{}'::jsonb
);

-- 6) Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_tpc_rate_limits_key ON tpc_rate_limits(key);
CREATE INDEX IF NOT EXISTS idx_tpc_rate_limits_window ON tpc_rate_limits(window_start);
CREATE INDEX IF NOT EXISTS idx_tpc_audit_logs_meta ON tpc_audit_logs USING GIN(meta);
CREATE INDEX IF NOT EXISTS idx_tpc_invoices_tx_signature ON tpc_invoices(tx_signature) WHERE tx_signature IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_tpc_referral_ledger_referrer ON tpc_referral_ledger(referrer_id);
CREATE INDEX IF NOT EXISTS idx_tpc_audit_logs_invoice ON tpc_audit_logs(invoice_id);

-- 7) Update RLS policies untuk rate limits (disable - system internal)
-- Rate limits adalah system table, tidak perlu RLS
-- Admin operations menggunakan service role yang bypass RLS

-- 8) Grant permissions
GRANT ALL ON tpc_rate_limits TO authenticated;
GRANT ALL ON tpc_rate_limits TO service_role;
GRANT ALL ON tpc_referral_ledger TO authenticated;
GRANT ALL ON tpc_referral_ledger TO service_role;
GRANT ALL ON tpc_audit_logs TO authenticated;
GRANT ALL ON tpc_audit_logs TO service_role;

-- 9) Update RLS policies for referral ledger (admin only)
ALTER TABLE tpc_referral_ledger ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Admins can manage referral ledger" ON tpc_referral_ledger;
CREATE POLICY "Admins can manage referral ledger" ON tpc_referral_ledger
  FOR ALL USING (false); -- No direct access, use service role

-- 10) Update RLS policies for audit logs (admin only)
ALTER TABLE tpc_audit_logs ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Admins can view audit logs" ON tpc_audit_logs;
CREATE POLICY "Admins can view audit logs" ON tpc_audit_logs
  FOR SELECT USING (false); -- No direct access, use service role
