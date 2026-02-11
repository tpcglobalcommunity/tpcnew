-- Data repair script for invoices with null quantity_tpc
-- This should be run after the main migration

-- Update invoices where quantity_tpc is null but total_usdc and price_per_tpc are available
UPDATE tpc_invoices
SET quantity_tpc = total_usdc / price_per_tpc
WHERE quantity_tpc IS NULL 
  AND total_usdc IS NOT NULL 
  AND total_usdc > 0
  AND price_per_tpc IS NOT NULL 
  AND price_per_tpc > 0;

-- Verify the repair
SELECT 
    id,
    quantity_tpc,
    price_per_tpc,
    total_usdc,
    (total_usdc / price_per_tpc) as calculated_quantity
FROM tpc_invoices 
WHERE quantity_tpc IS NULL 
  OR quantity_tpc = 0
LIMIT 10;
