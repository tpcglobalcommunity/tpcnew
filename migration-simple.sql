-- STEP 1: Create rate limits table
CREATE TABLE IF NOT EXISTS tpc_rate_limits (
  key text primary key,
  count integer not null,
  window_start timestamptz not null,
  updated_at timestamptz default now()
);

-- STEP 2: Create rate limit function
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

-- STEP 3: Create referral ledger table
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

-- STEP 4: Create audit logs table
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

-- STEP 5: Add tx_signature constraint to invoices (if table exists)
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'tpc_invoices' AND table_schema = 'public') THEN
    -- Check if constraint already exists
    IF NOT EXISTS (
      SELECT 1 FROM information_schema.table_constraints 
      WHERE table_name = 'tpc_invoices' 
      AND constraint_name = 'uq_tx_signature'
      AND constraint_type = 'UNIQUE'
    ) THEN
      ALTER TABLE tpc_invoices
        ADD CONSTRAINT uq_tx_signature UNIQUE (tx_signature);
    END IF;
  END IF;
END $$;

-- STEP 6: Create basic indexes
CREATE INDEX IF NOT EXISTS idx_tpc_rate_limits_key ON tpc_rate_limits(key);
CREATE INDEX IF NOT EXISTS idx_tpc_referral_ledger_referrer ON tpc_referral_ledger(referrer_id);
CREATE INDEX IF NOT EXISTS idx_tpc_audit_logs_invoice ON tpc_audit_logs(invoice_id);

-- STEP 7: Grant permissions
GRANT ALL ON tpc_rate_limits TO authenticated;
GRANT ALL ON tpc_rate_limits TO service_role;
GRANT ALL ON tpc_referral_ledger TO authenticated;
GRANT ALL ON tpc_referral_ledger TO service_role;
GRANT ALL ON tpc_audit_logs TO authenticated;
GRANT ALL ON tpc_audit_logs TO service_role;
