'use client'

import { useState, useEffect } from 'react'
import { Loader2, AlertCircle } from 'lucide-react'
import { getAdminSupabase } from '@/lib/supabase-admin'

export default function AdminLoginPage() {
  const [email,    setEmail]    = useState('')
  const [password, setPassword] = useState('')
  const [loading,  setLoading]  = useState(false)
  const [error,    setError]    = useState('')
  // Redirect if already logged in
  useEffect(() => {
    const supabase = getAdminSupabase()
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) window.location.href = '/admin'
    })
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    if (!email.trim() || !password.trim()) {
      setError('Please enter your email and password.')
      return
    }

    setLoading(true)
    try {
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        throw new Error('Supabase environment variables are not configured.')
      }

      const supabase = getAdminSupabase()
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email:    email.trim(),
        password: password.trim(),
      })

      console.log('Auth result:', { user: data?.user?.email, error: authError?.message })

      if (authError) throw authError

      // Hard redirect so middleware sees the fresh session cookie
      window.location.href = '/admin'
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Invalid email or password.'
      console.error('Login failed:', message)
      setError(message)
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-[99999] bg-brand-cream flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-xl p-10">

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            src="/logo.svg"
            alt="À Bientôt Tours"
            width={56}
            height={56}
            className="opacity-90"
          />
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="font-display text-[32px] font-light text-brand-dark leading-none">Admin Login</h1>
          <p className="font-body text-[13px] text-gray-400 mt-2">Sign in to manage your bookings and content</p>
        </div>

        {/* Error */}
        {error && (
          <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
            <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
            <p className="font-body text-[13px] text-red-700">{error}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="font-caps text-[9px] tracking-[0.2em] uppercase text-gray-500">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="admin@example.com"
              disabled={loading}
              autoComplete="email"
              required
              className="h-11 px-4 rounded-xl border border-[#D8E8D0] font-body text-[14px] text-brand-dark placeholder:text-gray-300 focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/10 transition-all disabled:opacity-60 bg-white"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-caps text-[9px] tracking-[0.2em] uppercase text-gray-500">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              disabled={loading}
              autoComplete="current-password"
              required
              className="h-11 px-4 rounded-xl border border-[#D8E8D0] font-body text-[14px] text-brand-dark placeholder:text-gray-300 focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/10 transition-all disabled:opacity-60 bg-white"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary justify-center w-full mt-1 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            {loading ? (
              <><Loader2 className="w-4 h-4 animate-spin" /> Signing In…</>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        <p className="font-body text-[11px] text-center text-gray-300 mt-8">
          À Bientôt Tour &amp; Travels — Admin Portal
        </p>
      </div>
    </div>
  )
}
