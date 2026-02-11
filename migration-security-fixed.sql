-- 6) Update RLS policies untuk rate limits (disable - system internal)
-- Rate limits adalah system table, tidak perlu RLS
-- Admin operations menggunakan service role yang bypass RLS

-- 7) Grant permissions
GRANT ALL ON tpc_rate_limits TO authenticated;
GRANT ALL ON tpc_rate_limits TO service_role;
