import { createServerClient } from '@/lib/supabase/server-client'
import { headers } from 'next/headers'

export async function POST(request: Request) {
  try {
    const supabase = await createServerClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const formData = await request.formData()
    const file = formData.get('file') as File
    const invoiceId = formData.get('invoiceId') as string

    if (!file || !invoiceId) {
      return Response.json({ error: 'File dan invoice ID diperlukan' }, { status: 400 })
    }

    // Verify invoice ownership
    const { data: invoice, error: invoiceError } = await supabase
      .from('tpc_invoices')
      .select('*')
      .eq('id', invoiceId)
      .eq('user_id', user.id)
      .single()

    if (invoiceError || !invoice) {
      return Response.json({ error: 'Invoice tidak ditemukan' }, { status: 404 })
    }

    if (invoice.status !== 'pending') {
      return Response.json({ error: 'Invoice tidak bisa diupload' }, { status: 400 })
    }

    // Upload to Supabase Storage
    const fileName = `${Date.now()}-${file.name}`
    const filePath = `${user.id}/${invoiceId}/${fileName}`

    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('payment-proofs')
      .upload(filePath, file)

    if (uploadError) {
      console.error('Upload error:', uploadError)
      return Response.json({ error: 'Gagal upload file' }, { status: 500 })
    }

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('payment-proofs')
      .getPublicUrl(filePath)

    // Update invoice with proof URL
    const { error: updateError } = await supabase
      .from('tpc_invoices')
      .update({ proof_url: publicUrl })
      .eq('id', invoiceId)

    if (updateError) {
      console.error('Update invoice error:', updateError)
      return Response.json({ error: 'Gagal menyimpan bukti' }, { status: 500 })
    }

    return Response.json({ 
      message: 'Bukti pembayaran berhasil diupload',
      proofUrl: publicUrl
    })

  } catch (error) {
    console.error('Upload proof error:', error)
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}
