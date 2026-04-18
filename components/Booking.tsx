'use client'

import { useState } from 'react'
import { ArrowRight, Loader2, Check } from 'lucide-react'
import { supabase } from '@/lib/supabase'

const DESTINATIONS = ['Bwindi Forest — Gorilla Trekking', 'Murchison Falls', 'Queen Elizabeth NP', 'Lake Bunyonyi', 'Kidepo Valley', 'Kibale Forest', 'Custom Itinerary']

const inputCls = 'w-full bg-[#F5F0E8] border border-[#E2D9CC] rounded-xl px-4 py-3 font-body text-[14px] text-brand-dark placeholder:text-[#8A9E84] focus:outline-none focus:border-brand-gold transition-colors duration-200'
const labelCls = 'block font-caps text-[9px] tracking-[0.2em] uppercase text-[#8A9E84] mb-1.5'

export default function Booking() {
  const [form, setForm]       = useState({ name: '', email: '', destination: '', date: '', guests: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [sent, setSent]       = useState(false)
  const [error, setError]     = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true); setError('')
    try {
      const { error: sbError } = await supabase.from('booking_inquiries').insert({
        name: form.name, email: form.email,
        destination: form.destination, travel_date: form.date || null,
        guests: parseInt(form.guests) || 1, message: form.message,
      })
      if (sbError) throw sbError
      fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'booking', data: {
          name: form.name, email: form.email, destination: form.destination,
          travel_date: form.date || null, guests: parseInt(form.guests) || 1, message: form.message,
        }}),
      }).catch(() => {})
      setSent(true)
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : JSON.stringify(err)
      console.error('Booking submit error:', msg)
      setError('Something went wrong: ' + msg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="px-16 py-32 bg-white max-lg:px-8 max-md:px-6" id="book">
      <div className="grid grid-cols-2 gap-16 items-center max-lg:grid-cols-1 max-lg:gap-10">

        {/* Left copy */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-7 h-px bg-brand-gold" />
            <span className="font-caps text-[9px] font-medium tracking-[0.26em] uppercase text-brand-gold">Quick Booking</span>
          </div>
          <div className="w-16 h-px bg-brand-gold mb-5" />
          <h2
            className="font-display font-light text-brand-dark leading-[1.02] tracking-[-0.02em] mb-6"
            style={{ fontSize: 'clamp(48px,6vw,88px)' }}
          >
            Start Your<br />
            <span className="text-gradient-teal italic">Journey Today</span>
          </h2>
          <p className="font-body text-[15px] font-light leading-[1.85] text-[#5A7751] max-w-[440px] mb-10">
            Tell us about your dream trip and we&apos;ll craft a personalised itinerary just for you.
          </p>
          <ul className="flex flex-col gap-4">
            {['No booking fees', 'Free personalised itinerary', 'Flexible cancellation policy'].map(f => (
              <li key={f} className="flex items-center gap-3 font-body text-[14px] text-[#4A6741]">
                <span className="w-6 h-6 rounded-full bg-brand-gold/15 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-brand-gold" strokeWidth={2} />
                </span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Form card */}
        <div className="bg-white/80 backdrop-blur-md border border-[#E2D9CC] rounded-3xl p-8 shadow-[0_16px_48px_rgba(0,0,0,0.08)]">
          {sent ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-brand-gold/15 flex items-center justify-center mx-auto mb-5">
                <Check className="w-7 h-7 text-brand-gold" strokeWidth={2} />
              </div>
              <h3 className="font-display text-[28px] font-light text-brand-dark mb-2">Request received</h3>
              <p className="font-body text-[14px] text-[#5A7751]">We&apos;ll be in touch within 24 hours to plan your adventure.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <h3 className="font-display text-[24px] font-light text-brand-dark mb-1">
                Get a <span className="text-brand-gold">Free Quote</span>
              </h3>

              <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                <div>
                  <label className={labelCls}>Full Name</label>
                  <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                    className={inputCls} placeholder="Your name" />
                </div>
                <div>
                  <label className={labelCls}>Email</label>
                  <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                    className={inputCls} placeholder="your@email.com" />
                </div>
              </div>

              <div>
                <label className={labelCls}>Destination</label>
                <select
                  required
                  value={form.destination}
                  onChange={e => setForm({...form, destination: e.target.value})}
                  className={inputCls}
                >
                  <option value="" className="bg-white text-[#8A9E84]">Select destination…</option>
                  {DESTINATIONS.map(d => (
                    <option key={d} value={d} className="bg-white text-brand-dark">{d}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                <div>
                  <label className={labelCls}>Travel Date</label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={e => setForm({...form, date: e.target.value})}
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className={labelCls}>Guests</label>
                  <input type="number" min="1" max="20" value={form.guests} onChange={e => setForm({...form, guests: e.target.value})}
                    className={inputCls} placeholder="2" />
                </div>
              </div>

              {error && <p className="text-red-600 text-[13px] font-body">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2.5 font-caps text-[10px] font-bold tracking-[0.2em] uppercase bg-brand-gold text-[#0a1a0a] px-8 py-4 rounded-lg mt-1 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-brand-gold/90 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <><ArrowRight className="w-4 h-4" strokeWidth={2} /> Request My Quote</>}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
