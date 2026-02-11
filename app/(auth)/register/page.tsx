'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Suspense } from 'react'
import { supabase } from '@/lib/supabase/client'
import { getAuthRedirectUrl, validateProductionRedirect } from '@/lib/siteUrl'

function RegisterForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError('Format email tidak valid')
      setLoading(false)
      return
    }

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
      console.log('Attempting signup with email:', email)
      
      if (!supabase) {
        throw new Error('Supabase client not initialized')
      }
      
      // Get secure redirect URL
      const redirectTo = validateProductionRedirect(getAuthRedirectUrl("/login"))
      
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: redirectTo
        }
      })

      console.log('Signup response:', { error })

      if (error) {
        console.error('Signup error:', error)
        
        // Specific error handling
        if (error.message?.includes('duplicate') || error.message?.includes('already registered') || error.message?.includes('User already registered')) {
          setError('Email sudah terdaftar. Silakan gunakan email lain atau login.')
        } else if (error.message?.includes('rate limit') || error.message?.includes('too many requests')) {
          setError('Terlalu banyak percobaan. Silakan coba lagi dalam 1 jam.')
        } else if (error.message?.includes('Invalid email')) {
          setError('Format email tidak valid.')
        } else {
          setError(error.message || 'Email sudah terdaftar atau terjadi kesalahan')
        }
      } else {
        console.log('Signup successful')
        setSuccess(true)
      }
    } catch (err) {
      console.error('Unexpected error:', err)
      setError('Terjadi kesalahan. Silakan coba lagi.')
    } finally {
      setLoading(false)
    }
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
            <h1 className="text-2xl font-bold text-white mb-2">Pendaftaran Berhasil!</h1>
            <p className="text-gray-400 mb-4">
              Email verifikasi telah dikirim ke <strong>{email}</strong>.
            </p>
            <p className="text-gray-300 text-sm mb-6">
              Silakan cek inbox Anda (termasuk folder spam) dan klik link verifikasi dalam 24 jam.
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
          <h1 className="text-2xl font-bold text-white mb-2">Daftar TPC Global</h1>
          <p className="text-gray-400">Buat akun baru</p>
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

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Password (minimal 8 karakter)
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
              Konfirmasi Password
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
            {loading ? 'Memproses...' : 'Daftar'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-400">
            Sudah punya akun?{' '}
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

export default function RegisterPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0B0E11] flex items-center justify-center"><div className="text-white">Loading...</div></div>}>
      <RegisterForm />
    </Suspense>
  )
}
