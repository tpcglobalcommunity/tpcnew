-- Treasury settings table and data
CREATE TABLE IF NOT EXISTS tpc_settings (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Seed treasury address (update with actual address)
INSERT INTO tpc_settings (key, value) VALUES
('USDC_TREASURY_ADDRESS', '9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDs8sFfXt4k')
ON CONFLICT (key) DO UPDATE SET
    value = EXCLUDED.value,
    updated_at = NOW();

-- Enable RLS
ALTER TABLE tpc_settings ENABLE ROW LEVEL SECURITY;

-- RLS policy for authenticated users (read-only)
CREATE POLICY "Authenticated users can read settings" ON tpc_settings
    FOR SELECT USING (auth.role() = 'authenticated');

-- RLS policy for admin updates (service role)
CREATE POLICY "Service role can update settings" ON tpc_settings
    FOR ALL USING (auth.role() = 'service_role');
