-- TPC Global RLS Policies Migration
-- Phase 2: Row Level Security Policies

-- ============================================
-- 1. TPC INVOICES RLS POLICIES
-- ============================================
ALTER TABLE tpc_invoices ENABLE ROW LEVEL SECURITY;

-- Members can read own invoices
CREATE POLICY "Members can read own invoices"
  ON tpc_invoices FOR SELECT
  TO authenticated
  USING (
    user_id = auth.uid() 
    OR is_admin(auth.uid())
  );

-- Members can create own invoices
CREATE POLICY "Members can create own invoices"
  ON tpc_invoices FOR INSERT
  TO authenticated
  WITH CHECK (
    user_id = auth.uid()
  );

-- Members can update own invoices (limited fields)
CREATE POLICY "Members can update own invoices"
  ON tpc_invoices FOR UPDATE
  TO authenticated
  USING (
    user_id = auth.uid()
    OR is_admin(auth.uid())
  )
  WITH CHECK (
    user_id = auth.uid()
    OR is_admin(auth.uid())
  );

-- ============================================
-- 2. TPC COMMISSION LEDGER RLS POLICIES
-- ============================================
ALTER TABLE tpc_commission_ledger ENABLE ROW LEVEL SECURITY;

-- Members can view relevant commissions (as buyer or sponsor)
CREATE POLICY "Members can view relevant commissions"
  ON tpc_commission_ledger FOR SELECT
  TO authenticated
  USING (
    buyer_user_id = auth.uid()
    OR sponsor_user_id = auth.uid()
    OR is_admin(auth.uid())
  );

-- Only admins can manage ledger
CREATE POLICY "Admins can manage ledger"
  ON tpc_commission_ledger FOR ALL
  TO authenticated
  USING (
    is_admin(auth.uid())
  )
  WITH CHECK (
    is_admin(auth.uid())
  );

-- ============================================
-- 3. TPC PAYOUT JOBS RLS POLICIES
-- ============================================
ALTER TABLE tpc_payout_jobs ENABLE ROW LEVEL SECURITY;

-- Only admins can view and manage payout jobs
CREATE POLICY "Admins can view payout jobs"
  ON tpc_payout_jobs FOR SELECT
  TO authenticated
  USING (
    is_admin(auth.uid())
  );

CREATE POLICY "Admins can manage payout jobs"
  ON tpc_payout_jobs FOR ALL
  TO authenticated
  USING (
    is_admin(auth.uid())
  )
  WITH CHECK (
    is_admin(auth.uid())
  );

-- ============================================
-- 4. ADMIN ACTIVITY LOGS RLS POLICIES
-- ============================================
ALTER TABLE admin_activity_logs ENABLE ROW LEVEL SECURITY;

-- Only admins can view activity logs
CREATE POLICY "Admins can view activity logs"
  ON admin_activity_logs FOR SELECT
  TO authenticated
  USING (
    is_admin(auth.uid())
  );

-- Only system can insert logs (via service role or function)
CREATE POLICY "System can insert activity logs"
  ON admin_activity_logs FOR INSERT
  TO authenticated
  WITH CHECK (
    is_admin(auth.uid())
  );

-- No update or delete (immutable)
CREATE POLICY "No update on activity logs"
  ON admin_activity_logs FOR UPDATE
  TO authenticated
  USING (FALSE);

CREATE POLICY "No delete on activity logs"
  ON admin_activity_logs FOR DELETE
  TO authenticated
  USING (FALSE);

-- ============================================
-- 5. PROFILES RLS POLICIES
-- ============================================
-- Ensure profiles table has proper RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Users can view own profile
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING (
    id = auth.uid()
    OR is_admin(auth.uid())
  );

-- Users can update own profile (limited fields)
CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (
    id = auth.uid()
  )
  WITH CHECK (
    id = auth.uid()
  );

-- Admins can manage all profiles
CREATE POLICY "Admins can manage profiles"
  ON profiles FOR ALL
  TO authenticated
  USING (
    is_admin(auth.uid())
  )
  WITH CHECK (
    is_admin(auth.uid())
  );

-- ============================================
-- MIGRATION COMPLETE
-- ============================================
SELECT 'Phase 2 RLS Policies Migration Complete' as status;
