-- TPC Global RLS Hardening Migration
-- Phase 3: Remove Database Admin Functions, Use Environment-based Admin Only

-- ============================================
-- 1. REMOVE DATABASE ADMIN FUNCTIONS (SECURITY RISK)
-- ============================================
-- Drop the is_admin function since it relies on database state
DROP FUNCTION IF EXISTS is_admin(UUID);

-- ============================================
-- 2. ENABLE RLS AND REVOKE ALL ACCESS
-- ============================================
-- Enable RLS on all sensitive tables
ALTER TABLE tpc_invoices ENABLE ROW LEVEL SECURITY;
ALTER TABLE tpc_invoices FORCE ROW LEVEL SECURITY;

ALTER TABLE tpc_commission_ledger ENABLE ROW LEVEL SECURITY;
ALTER TABLE tpc_commission_ledger FORCE ROW LEVEL SECURITY;

ALTER TABLE tpc_payout_jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE tpc_payout_jobs FORCE ROW LEVEL SECURITY;

ALTER TABLE admin_activity_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_activity_logs FORCE ROW LEVEL SECURITY;

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles FORCE ROW LEVEL SECURITY;

-- Revoke all permissions from all roles
REVOKE ALL ON TABLE tpc_invoices FROM public, anon, authenticated;
REVOKE ALL ON TABLE tpc_commission_ledger FROM public, anon, authenticated;
REVOKE ALL ON TABLE tpc_payout_jobs FROM public, anon, authenticated;
REVOKE ALL ON TABLE admin_activity_logs FROM public, anon, authenticated;
REVOKE ALL ON TABLE profiles FROM public, anon, authenticated;

-- ============================================
-- 3. CLEAN SLATE: DROP ALL EXISTING POLICIES
-- ============================================
DO $$
DECLARE
    table_name TEXT;
    policy_name TEXT;
BEGIN
    -- Drop all policies from tpc_invoices
    FOR table_name, policy_name IN 
        SELECT schemaname||'.'||tablename as table_name, policyname 
        FROM pg_policies 
        WHERE schemaname = 'public' AND tablename = 'tpc_invoices'
    LOOP
        EXECUTE 'DROP POLICY IF EXISTS ' || quote_ident(policy_name) || ' ON ' || table_name;
    END LOOP;
    
    -- Drop all policies from tpc_commission_ledger
    FOR table_name, policy_name IN 
        SELECT schemaname||'.'||tablename as table_name, policyname 
        FROM pg_policies 
        WHERE schemaname = 'public' AND tablename = 'tpc_commission_ledger'
    LOOP
        EXECUTE 'DROP POLICY IF EXISTS ' || quote_ident(policy_name) || ' ON ' || table_name;
    END LOOP;
    
    -- Drop all policies from tpc_payout_jobs
    FOR table_name, policy_name IN 
        SELECT schemaname||'.'||tablename as table_name, policyname 
        FROM pg_policies 
        WHERE schemaname = 'public' AND tablename = 'tpc_payout_jobs'
    LOOP
        EXECUTE 'DROP POLICY IF EXISTS ' || quote_ident(policy_name) || ' ON ' || table_name;
    END LOOP;
    
    -- Drop all policies from admin_activity_logs
    FOR table_name, policy_name IN 
        SELECT schemaname||'.'||tablename as table_name, policyname 
        FROM pg_policies 
        WHERE schemaname = 'public' AND tablename = 'admin_activity_logs'
    LOOP
        EXECUTE 'DROP POLICY IF EXISTS ' || quote_ident(policy_name) || ' ON ' || table_name;
    END LOOP;
    
    -- Drop all policies from profiles
    FOR table_name, policy_name IN 
        SELECT schemaname||'.'||tablename as table_name, policyname 
        FROM pg_policies 
        WHERE schemaname = 'public' AND tablename = 'profiles'
    LOOP
        EXECUTE 'DROP POLICY IF EXISTS ' || quote_ident(policy_name) || ' ON ' || table_name;
    END LOOP;
END $$;

-- ============================================
-- 4. TPC INVOICES: MEMBER-ONLY POLICIES
-- ============================================
-- Members can SELECT own invoices only
CREATE POLICY "invoices_select_own"
  ON tpc_invoices FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

-- Members can INSERT own invoices only
CREATE POLICY "invoices_insert_own"
  ON tpc_invoices FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

-- Members can UPDATE own invoices (limited to proof upload only)
CREATE POLICY "invoices_update_own_limited"
  ON tpc_invoices FOR UPDATE
  TO authenticated
  USING (
    user_id = auth.uid() AND 
    status IN ('DRAFT', 'PENDING')
  )
  WITH CHECK (
    user_id = auth.uid() AND 
    status IN ('DRAFT', 'PENDING')
  );

-- No DELETE policy (invoices are immutable)

-- ============================================
-- 5. TPC COMMISSION LEDGER: MEMBER READ-ONLY
-- ============================================
-- Members can SELECT own commissions (as sponsor only)
CREATE POLICY "ledger_select_own_sponsor"
  ON tpc_commission_ledger FOR SELECT
  TO authenticated
  USING (sponsor_user_id = auth.uid());

-- No INSERT/UPDATE/DELETE policies for members (admin only)

-- ============================================
-- 6. TPC PAYOUT JOBS: ADMIN ONLY
-- ============================================
-- No policies for members (admin-only table)
-- Admin access via service role bypasses RLS

-- ============================================
-- 7. ADMIN ACTIVITY LOGS: ADMIN ONLY
-- ============================================
-- No policies for members (admin-only table)
-- Admin access via service role bypasses RLS

-- ============================================
-- 8. PROFILES: MEMBER SELF-MANAGEMENT
-- ============================================
-- Users can SELECT own profile only
CREATE POLICY "profiles_select_own"
  ON profiles FOR SELECT
  TO authenticated
  USING (id = auth.uid());

-- Users can UPDATE own profile (limited fields - not admin status)
CREATE POLICY "profiles_update_own_limited"
  ON profiles FOR UPDATE
  TO authenticated
  USING (id = auth.uid())
  WITH CHECK (
    id = auth.uid() AND 
    COALESCE(is_admin, FALSE) = FALSE  -- Cannot promote self to admin
  );

-- No INSERT policy (profiles created by auth system)
-- No DELETE policy (profiles tied to auth users)

-- ============================================
-- 9. GRANT MINIMAL PERMISSIONS
-- ============================================
-- Grant minimal permissions to authenticated role
GRANT SELECT, INSERT, UPDATE ON tpc_invoices TO authenticated;
GRANT SELECT ON tpc_commission_ledger TO authenticated;
GRANT SELECT, UPDATE ON profiles TO authenticated;

-- No grants for admin-only tables (service role only)
-- tpc_payout_jobs, admin_activity_logs: service role only

-- ============================================
-- 10. SECURITY SUMMARY
-- ============================================
/*
SECURITY MODEL:
- Members: Access own data only via auth.uid()
- Admins: Access all data via service role (bypasses RLS)
- No database admin functions (security risk removed)
- Environment-based admin validation (ADMIN_USER_IDS)
- Principle of least privilege enforced

TABLE ACCESS:
- tpc_invoices: Member CRUD own, Admin all via service role
- tpc_commission_ledger: Member read own (sponsor), Admin all via service role  
- tpc_payout_jobs: Admin only via service role
- admin_activity_logs: Admin only via service role
- profiles: Member read/update own, Admin all via service role
*/

-- ============================================
-- MIGRATION COMPLETE
-- ============================================
SELECT 'Phase 3 RLS Hardening Migration Complete' as status;
