'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Suspense } from 'react'
import { sendCustomEmail } from '../../../lib/email-service'
import { supabase } from '@/lib/supabase'
import { getSiteUrl } from '@/lib/getSiteUrl'

function ForgotPasswordForm() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSubmitted(true)

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${getSiteUrl()}/auth/reset`
      })

      if (error) {
        console.error('Reset password error:', error)
        setError(error.message || 'Terjadi kesalahan. Silakan coba lagi.')
      } else {
        setSubmitted(true)
      }
    } catch (err) {
      console.error('Unexpected error:', err)
      setError('Terjadi kesalahan. Silakan coba lagi.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#0B0E11] flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-[#1A1F2E] border border-amber-500/25 rounded-xl p-8 text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Email Terkirim</h1>
            <p className="text-gray-400 mb-6">
              Jika email terdaftar, kami akan mengirim tautan reset password.
            </p>
          </div>
          
          <Link 
            href="/login"
            className="inline-block w-full py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg transition-colors text-center"
          >
            Kembali ke Login
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0B0E11] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-[#1A1F2E] border border-amber-500/25 rounded-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white mb-2">Lupa Password</h1>
          <p className="text-gray-400">Masukkan email untuk reset password</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-[#0B0E11] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50"
              placeholder="email@example.com"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Memproses...' : 'Kirim Reset Link'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-400">
            Ingat password?{' '}
            <Link 
              href="/login"
              className="text-amber-400 hover:text-amber-300 transition-colors"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default function ForgotPasswordPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0B0E11] flex items-center justify-center"><div className="text-white">Loading...</div></div>}>
      <ForgotPasswordForm />
    </Suspense>
  )
}
