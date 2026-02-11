-- Migration: Server-side Presale Pricing System
-- Enforce pricing logic on database level with RPC functions

-- 1. Create presale stages table
CREATE TABLE IF NOT EXISTS tpc_presale_stages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    stage_number INTEGER NOT NULL UNIQUE,
    price_usdc NUMERIC(20,8) NOT NULL CHECK (price_usdc > 0),
    supply_cap NUMERIC(20,2),
    starts_at TIMESTAMPTZ,
    ends_at TIMESTAMPTZ,
    is_active BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enforce only 1 active stage
CREATE UNIQUE INDEX IF NOT EXISTS idx_presale_stages_active 
ON tpc_presale_stages (is_active) 
WHERE is_active = true;

-- 2. Ensure invoice table has proper constraints
DO $$
BEGIN
    -- Check if table exists and has required columns
    IF EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_name = 'tpc_invoices'
    ) THEN
        -- Add missing columns if they don't exist
        ALTER TABLE tpc_invoices 
        ADD COLUMN IF NOT EXISTS stage_number INTEGER NOT NULL DEFAULT 1;
        
        ALTER TABLE tpc_invoices 
        ADD COLUMN IF NOT EXISTS price_per_tpc NUMERIC(20,8) NOT NULL DEFAULT 0.0010 CHECK (price_per_tpc > 0);
        
        ALTER TABLE tpc_invoices 
        ADD COLUMN IF NOT EXISTS total_usdc NUMERIC(20,8) NOT NULL DEFAULT 0 CHECK (total_usdc >= 0);
        
        ALTER TABLE tpc_invoices 
        ADD COLUMN IF NOT EXISTS quantity_tpc NUMERIC(20,2) NOT NULL DEFAULT 0 CHECK (quantity_tpc >= 0);
        
        ALTER TABLE tpc_invoices 
        ADD COLUMN IF NOT EXISTS status TEXT NOT NULL DEFAULT 'DRAFT';
        
        ALTER TABLE tpc_invoices 
        ADD COLUMN IF NOT EXISTS user_id UUID NOT NULL;
        
        ALTER TABLE tpc_invoices 
        ADD COLUMN IF NOT EXISTS created_at TIMESTAMPTZ NOT NULL DEFAULT NOW();
        
        ALTER TABLE tpc_invoices 
        ADD COLUMN IF NOT EXISTS deadline_at TIMESTAMPTZ;
        
        ALTER TABLE tpc_invoices 
        ADD COLUMN IF NOT EXISTS wallet_address TEXT;
        
        ALTER TABLE tpc_invoices 
        ADD COLUMN IF NOT EXISTS referral_code TEXT;
    END IF;
END $$;

-- 3. Seed presale stages data
INSERT INTO tpc_presale_stages (stage_number, price_usdc, is_active) VALUES
(1, 0.0010, true),
(2, 0.0011, false),
(3, 0.0012, false)
ON CONFLICT (stage_number) DO UPDATE SET
    price_usdc = EXCLUDED.price_usdc,
    is_active = EXCLUDED.is_active;

-- 4. Best effort data repair for existing invoices with 0 values
-- This attempts to fix historical data where price/total were 0
DO $$
BEGIN
    -- Get current active stage (only if table exists)
    DECLARE active_stage INTEGER := 1; -- Default fallback
    DECLARE active_price NUMERIC(20,8) := 0.0010; -- Default fallback
    
    BEGIN
        -- Try to get active stage, but handle case where table doesn't exist yet
        SELECT stage_number, price_usdc INTO active_stage, active_price
        FROM tpc_presale_stages 
        WHERE is_active = true 
        LIMIT 1;
    EXCEPTION WHEN OTHERS THEN
        -- Table doesn't exist or other error, use defaults
        active_stage := 1;
        active_price := 0.0010;
    END;
    
    -- Update invoices with 0 values (only if table exists)
    BEGIN
        UPDATE tpc_invoices 
        SET 
            stage_number = COALESCE(stage_number, active_stage),
            price_per_tpc = CASE 
                WHEN price_per_tpc = 0 OR price_per_tpc IS NULL THEN active_price 
                ELSE price_per_tpc 
            END,
            total_usdc = CASE 
                WHEN total_usdc = 0 OR total_usdc IS NULL THEN quantity_tpc * active_price 
                ELSE total_usdc 
            END
        WHERE 
            (price_per_tpc = 0 OR price_per_tpc IS NULL) 
            OR (total_usdc = 0 OR total_usdc IS NULL)
            AND quantity_tpc > 0;
    EXCEPTION WHEN OTHERS THEN
        -- Table doesn't exist or other error, skip data repair
        NULL;
    END;
END $$;

-- 5. Create RPC function for server-side invoice creation
CREATE OR REPLACE FUNCTION tpc_create_invoice(
    p_quantity_tpc NUMERIC,
    p_wallet TEXT DEFAULT NULL,
    p_referral_code TEXT DEFAULT NULL
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    v_stage_number INTEGER;
    v_price_usdc NUMERIC(20,8);
    v_total_usdc NUMERIC(20,8);
    v_invoice_id UUID;
    v_user_id UUID;
BEGIN
    -- Get authenticated user
    v_user_id := auth.uid();
    IF v_user_id IS NULL THEN
        RAISE EXCEPTION 'Unauthorized: No authenticated user found';
    END IF;
    
    -- Validate quantity
    IF p_quantity_tpc IS NULL OR p_quantity_tpc <= 0 THEN
        RAISE EXCEPTION 'Invalid quantity: must be greater than 0';
    END IF;
    
    -- Get active presale stage
    SELECT stage_number, price_usdc 
    INTO v_stage_number, v_price_usdc
    FROM tpc_presale_stages 
    WHERE is_active = true 
    LIMIT 1;
    
    IF v_stage_number IS NULL THEN
        RAISE EXCEPTION 'No active presale stage found';
    END IF;
    
    -- Calculate total
    v_total_usdc := p_quantity_tpc * v_price_usdc;
    
    -- Create invoice
    INSERT INTO tpc_invoices (
        user_id,
        stage_number,
        price_per_tpc,
        quantity_tpc,
        total_usdc,
        wallet_address,
        referral_code,
        status,
        deadline_at,
        created_at
    ) VALUES (
        v_user_id,
        v_stage_number,
        v_price_usdc,
        p_quantity_tpc,
        v_total_usdc,
        p_wallet,
        p_referral_code,
        'DRAFT',
        NOW() + INTERVAL '24 hours',
        NOW()
    ) RETURNING id INTO v_invoice_id;
    
    -- Return result
    RETURN json_build_object(
        'invoice_id', v_invoice_id,
        'stage_number', v_stage_number,
        'price_per_tpc', v_price_usdc,
        'quantity_tpc', p_quantity_tpc,
        'total_usdc', v_total_usdc,
        'status', 'DRAFT'
    );
END;
$$;

-- 6. Grant permissions
GRANT SELECT, INSERT, UPDATE ON tpc_presale_stages TO authenticated;
GRANT EXECUTE ON FUNCTION tpc_create_invoice TO authenticated;
GRANT SELECT ON tpc_invoices TO authenticated;
GRANT INSERT, UPDATE ON tpc_invoices TO authenticated;

-- 7. Enable RLS on presale stages
ALTER TABLE tpc_presale_stages ENABLE ROW LEVEL SECURITY;

-- RLS policy for presale stages (read-only for authenticated users)
CREATE POLICY "Authenticated users can view presale stages" ON tpc_presale_stages
    FOR SELECT USING (auth.role() = 'authenticated');
