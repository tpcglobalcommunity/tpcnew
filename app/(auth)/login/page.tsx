'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Suspense } from 'react'
import { supabase } from '@/lib/supabase/client'
import { sanitizeReturnTo } from '@/lib/security/returnTo'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  
  const router = useRouter()
  const searchParams = useSearchParams()
  const returnTo = sanitizeReturnTo(searchParams.get('returnTo'))

  // DEBUG: Verify environment variables
  console.log("SUPABASE_URL?", !!process.env.NEXT_PUBLIC_SUPABASE_URL)
  console.log("SUPABASE_ANON?", !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        setError('Email atau password salah')
      } else {
        // Fetch user role to determine redirect
        try {
          const response = await fetch('/api/auth/role')
          const { role } = await response.json()
          
          let targetUrl = returnTo
          
          if (role === 'admin') {
            // Admin can only access admin routes
            if (returnTo && returnTo.startsWith('/admin')) {
              targetUrl = returnTo
            } else {
              targetUrl = '/admin'
            }
          } else {
            // Member routes
            if (returnTo && returnTo.startsWith('/admin')) {
              // Override admin access for members
              targetUrl = '/member'
            } else {
              targetUrl = returnTo || '/member'
            }
          }
          
          router.replace(targetUrl)
        } catch (roleError) {
          console.error('Role fetch error:', roleError)
          router.replace('/member')
        }
      }
    } catch (err) {
      setError('Terjadi kesalahan. Silakan coba lagi.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md w-full bg-[#1A1F2E] border border-amber-500/25 rounded-xl p-8 shadow-2xl">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">Login TPC</h1>
        <p className="text-gray-400">Masuk ke akun Anda</p>
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
              className="w-full px-4 py-3 bg-[#0B0E11] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all duration-200"
              placeholder="email@example.com"
              required
              disabled={loading}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-[#0B0E11] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all duration-200"
              placeholder="•••••••"
              required
              disabled={loading}
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
            className="w-full py-3 bg-[#F0B90B] hover:bg-[#D4A008] text-black font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            {loading ? 'Memproses...' : 'Login'}
          </button>
        </form>

        <div className="mt-6 text-center space-y-2">
          <p className="text-gray-400">
            Belum punya akun?{' '}
            <Link 
              href="/register"
              className="text-amber-400 hover:text-amber-300 transition-colors duration-200"
            >
              Daftar
            </Link>
          </p>
          <p className="text-gray-400">
            Lupa password?{' '}
            <Link 
              href="/forgot-password"
              className="text-amber-400 hover:text-amber-300 transition-colors duration-200"
            >
              Reset password
            </Link>
          </p>
        </div>
      </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="text-white">Loading...</div>}>
      <LoginForm />
    </Suspense>
  )
}
