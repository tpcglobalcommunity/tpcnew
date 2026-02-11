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

-- 5) Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_tpc_rate_limits_key ON tpc_rate_limits(key);
CREATE INDEX IF NOT EXISTS idx_tpc_rate_limits_window ON tpc_rate_limits(window_start);
CREATE INDEX IF NOT EXISTS idx_tpc_audit_logs_meta ON tpc_audit_logs USING GIN(meta);
CREATE INDEX IF NOT EXISTS idx_tpc_invoices_tx_signature ON tpc_invoices(tx_signature) WHERE tx_signature IS NOT NULL;

-- 6) Update RLS policies for rate limits (admin only)
ALTER TABLE tpc_rate_limits ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Admins can manage rate limits" ON tpc_rate_limits;
CREATE POLICY "Admins can manage rate limits" ON tpc_rate_limits
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM auth.users 
      WHERE id = auth.uid() 
      AND id::text IN (
        SELECT unnest(string_to_array(current_setting('app.admin_user_ids', true), ',')) 
        WHERE string_to_array(current_setting('app.admin_user_ids', true), ',') IS NOT NULL
      )
    )
  );

-- 7) Grant permissions
GRANT ALL ON tpc_rate_limits TO authenticated;
GRANT ALL ON tpc_rate_limits TO service_role;
