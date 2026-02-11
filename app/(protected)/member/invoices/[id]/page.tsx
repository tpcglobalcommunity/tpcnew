import InvoiceDetail from '@/components/member/InvoiceDetail'

export default async function InvoicePage() {
  // Treasury address will be fetched client-side from public endpoint
  return (
    <div className="max-w-4xl mx-auto">
      <InvoiceDetail />
    </div>
  )
}
