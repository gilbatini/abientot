'use client'

import { useState } from 'react'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import { BRAND } from '@/lib/constants'

type FormData = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const EMPTY: FormData = { name: '', email: '', phone: '', subject: '', message: '' }

const SUBJECTS = [
  'General Inquiry',
  'Safari Booking',
  'Flight Booking',
  'Hotel Reservation',
  'Custom Package',
]

export default function ContactForm() {
  const [form, setForm]     = useState<FormData>(EMPTY)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error, setError]   = useState('')

  function set(field: keyof FormData, value: string) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in all required fields.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid email address.')
      return
    }

    setStatus('loading')

    const { error: dbError } = await supabase.from('contact_messages').insert({
      name:    form.name.trim(),
      email:   form.email.trim(),
      phone:   form.phone.trim() || null,
      subject: form.subject || null,
      message: form.message.trim(),
    })

    if (dbError) {
      console.error('Contact form error:', dbError.message, dbError.code)
      setStatus('error')
      setError('Error: ' + dbError.message)
      return
    }

    // Fire-and-forget email notification
    fetch('/api/notify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'contact', data: form }),
    }).catch(() => {})

    setStatus('success')
    setForm(EMPTY)
  }

  /* ── Success state ── */
  if (status === 'success') {
    return (
      <div className="bg-white border border-[#D8E8D0] rounded-2xl p-10 shadow-sm flex flex-col items-center text-center gap-5">
        <div className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-green-500" />
        </div>
        <div>
          <h3 className="font-display text-[28px] font-light text-brand-dark mb-2">Message Sent!</h3>
          <p className="font-body text-[15px] text-[#4A6741] leading-[1.8]">
            Thank you for reaching out. We&apos;ll be in touch within 24 hours.
          </p>
        </div>
        <button
          onClick={() => setStatus('idle')}
          className="font-caps text-[9px] tracking-[0.2em] uppercase text-brand-teal hover:text-brand-teal-mid transition-colors mt-2"
        >
          Send another message
        </button>
      </div>
    )
  }

  /* ── Form ── */
  const isLoading = status === 'loading'

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-[#D8E8D0] rounded-2xl p-8 shadow-sm flex flex-col gap-5">
      <div>
        <h2 className="font-display text-[28px] font-light text-brand-dark">Send a Message</h2>
        <p className="font-body text-[13px] text-[#8FA88A] mt-1">We reply within 24 hours, usually sooner.</p>
      </div>

      {/* Name + Email */}
      <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
        <div className="flex flex-col gap-1.5">
          <label className="font-caps text-[9px] tracking-[0.2em] uppercase text-[#4A6741]">
            Full Name <span className="text-brand-earth">*</span>
          </label>
          <input
            type="text"
            value={form.name}
            onChange={e => set('name', e.target.value)}
            placeholder="Jane Smith"
            disabled={isLoading}
            className="h-11 px-4 rounded-xl border border-[#D8E8D0] bg-[#FDFAF5] font-body text-[14px] text-brand-dark placeholder:text-[#C0C8BC] focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/10 transition-all disabled:opacity-60"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-caps text-[9px] tracking-[0.2em] uppercase text-[#4A6741]">
            Email <span className="text-brand-earth">*</span>
          </label>
          <input
            type="email"
            value={form.email}
            onChange={e => set('email', e.target.value)}
            placeholder="jane@example.com"
            disabled={isLoading}
            className="h-11 px-4 rounded-xl border border-[#D8E8D0] bg-[#FDFAF5] font-body text-[14px] text-brand-dark placeholder:text-[#C0C8BC] focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/10 transition-all disabled:opacity-60"
          />
        </div>
      </div>

      {/* Phone + Subject */}
      <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
        <div className="flex flex-col gap-1.5">
          <label className="font-caps text-[9px] tracking-[0.2em] uppercase text-[#4A6741]">Phone Number</label>
          <input
            type="tel"
            value={form.phone}
            onChange={e => set('phone', e.target.value)}
            placeholder="+1 234 567 8900"
            disabled={isLoading}
            className="h-11 px-4 rounded-xl border border-[#D8E8D0] bg-[#FDFAF5] font-body text-[14px] text-brand-dark placeholder:text-[#C0C8BC] focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/10 transition-all disabled:opacity-60"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-caps text-[9px] tracking-[0.2em] uppercase text-[#4A6741]">Subject</label>
          <select
            value={form.subject}
            onChange={e => set('subject', e.target.value)}
            disabled={isLoading}
            className="h-11 px-4 rounded-xl border border-[#D8E8D0] bg-[#FDFAF5] font-body text-[14px] text-brand-dark focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/10 transition-all disabled:opacity-60 appearance-none cursor-pointer"
          >
            <option value="">Select a subject…</option>
            {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label className="font-caps text-[9px] tracking-[0.2em] uppercase text-[#4A6741]">
          Message <span className="text-brand-earth">*</span>
        </label>
        <textarea
          value={form.message}
          onChange={e => set('message', e.target.value)}
          placeholder="Tell us about your dream trip — destination, dates, group size, any special requests…"
          rows={5}
          disabled={isLoading}
          className="px-4 py-3 rounded-xl border border-[#D8E8D0] bg-[#FDFAF5] font-body text-[14px] text-brand-dark placeholder:text-[#C0C8BC] leading-[1.7] resize-none focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/10 transition-all disabled:opacity-60"
        />
      </div>

      {/* Error */}
      {(status === 'error' || error) && (
        <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
          <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-body text-[13px] text-red-700">{error}</p>
            <p className="font-body text-[12px] text-red-500 mt-1">
              Email:{' '}
              <a href={`mailto:${BRAND.email}`} className="underline">{BRAND.email}</a>
              {' · '}
              Call: <a href={`tel:${BRAND.phones[0].replace(/\s/g, '')}`} className="underline">{BRAND.phones[0]}</a>
            </p>
          </div>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading}
        className="btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
      >
        {isLoading ? (
          <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>
        ) : (
          <><Send className="w-4 h-4" /> Send Message</>
        )}
      </button>
    </form>
  )
}
