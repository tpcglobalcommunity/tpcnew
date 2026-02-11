'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Suspense } from 'react'
import { getSupabaseBrowserClient } from '@/lib/supabase/browser'

function ResetPasswordForm() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [validSession, setValidSession] = useState(false)
  
  const router = useRouter()
  const supabase = getSupabaseBrowserClient()

  useEffect(() => {
    // Check if we have a valid recovery session
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (session) {
        setValidSession(true)
      } else {
        // Try to get session from hash
        const hash = window.location.hash
        if (hash.includes('access_token')) {
          setValidSession(true)
        } else {
          router.push('/login')
        }
      }
    }
    
    checkSession()
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    if (password.length < 8) {
      setError('Password minimal 8 karakter')
      setLoading(false)
      return
    }

    if (password !== confirmPassword) {
      setError('Password tidak cocok')
      setLoading(false)
      return
    }

    try {
      const { error } = await supabase.auth.updateUser({
        password: password
      })

      if (error) {
        setError('Terjadi kesalahan. Silakan coba lagi.')
      } else {
        setSuccess(true)
      }
    } catch (err) {
      setError('Terjadi kesalahan. Silakan coba lagi.')
    } finally {
      setLoading(false)
    }
  }

  if (!validSession) {
    return (
      <div className="min-h-screen bg-[#0B0E11] flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-[#1A1F2E] border border-amber-500/25 rounded-xl p-8 text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Link Tidak Valid</h1>
            <p className="text-gray-400 mb-6">
              Link reset password tidak valid atau sudah kadaluarsa.
            </p>
          </div>
          
          <Link 
            href="/forgot-password"
            className="inline-block w-full py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg transition-colors text-center"
          >
            Minta Link Baru
          </Link>
        </div>
      </div>
    )
  }

  if (success) {
    return (
      <div className="min-h-screen bg-[#0B0E11] flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-[#1A1F2E] border border-amber-500/25 rounded-xl p-8 text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Password Berhasil Diubah</h1>
            <p className="text-gray-400 mb-6">
              Password Anda telah berhasil diperbarui.
            </p>
          </div>
          
          <Link 
            href="/login"
            className="inline-block w-full py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg transition-colors text-center"
          >
            Lanjut ke Login
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0B0E11] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-[#1A1F2E] border border-amber-500/25 rounded-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white mb-2">Reset Password</h1>
          <p className="text-gray-400">Buat password baru untuk akun TPC Global.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Password Baru (minimal 8 karakter)
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-[#0B0E11] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50"
              placeholder="••••••••"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Konfirmasi Password Baru
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 bg-[#0B0E11] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50"
              placeholder="••••••••"
              required
            />
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Memproses...' : 'Reset Password'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-400">
            <Link 
              href="/login"
              className="text-amber-400 hover:text-amber-300 transition-colors"
            >
              Kembali ke Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0B0E11] flex items-center justify-center"><div className="text-white">Loading...</div></div>}>
      <ResetPasswordForm />
    </Suspense>
  )
}
