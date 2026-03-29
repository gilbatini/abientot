'use client'

import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function LoginPage() {
  const [email,    setEmail]    = useState('')
  const [password, setPassword] = useState('')
  const [error,    setError]    = useState('')
  const [loading,  setLoading]  = useState(false)

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      window.location.href = '/admin'
    }
  }

  return (
    <div className="min-h-screen bg-[#111] flex items-center justify-center">
      <form onSubmit={handleLogin} className="bg-white rounded-2xl p-10 w-full max-w-md flex flex-col gap-4">
        <h1 className="font-display text-3xl font-light text-brand-dark">Admin Login</h1>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}
          className="border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-brand-teal" required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}
          className="border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-brand-teal" required />
        <button type="submit" disabled={loading}
          className="bg-brand-teal text-white rounded-xl py-3 font-caps text-sm tracking-widest uppercase hover:bg-brand-teal-mid transition-colors">
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
    </div>
  )
}
