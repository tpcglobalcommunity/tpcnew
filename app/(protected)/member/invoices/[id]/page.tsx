import InvoiceDetail from '@/components/member/InvoiceDetail'
import { createServerClient } from '@/lib/supabase/server-client'
import { getTreasuryAddress } from '@/lib/server/getTreasuryAddress'

export default async function InvoicePage() {
  const supabase = await createServerClient()
  const treasuryAddress = await getTreasuryAddress(supabase)
  
  return (
    <div className="max-w-4xl mx-auto">
      <InvoiceDetail treasuryAddress={treasuryAddress} />
    </div>
  )
}
