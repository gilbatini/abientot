'use client'

import { useState } from 'react'
import { ArrowRight, Loader2 } from 'lucide-react'
import { supabase } from '@/lib/supabase'

const DESTINATIONS = ['Bwindi Forest — Gorilla Trekking', 'Murchison Falls', 'Queen Elizabeth NP', 'Lake Bunyonyi', 'Kidepo Valley', 'Kibale Forest', 'Custom Itinerary']

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
      // Fire-and-forget email notification
      fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'booking', data: {
          name:        form.name,
          email:       form.email,
          destination: form.destination,
          travel_date: form.date || null,
          guests:      parseInt(form.guests) || 1,
          message:     form.message,
        }}),
      }).catch(() => {}) // fire and forget, don't block UX
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
    <section className="px-16 py-24 bg-[#F5F0E8] max-lg:px-8 max-md:px-6" id="book">
      <div className="grid grid-cols-2 gap-16 items-center max-lg:grid-cols-1 max-lg:gap-10">

        {/* Left copy */}
        <div>
          <div className="eyebrow"><div className="eyebrow-bar" /><span className="eyebrow-tag">Quick Booking</span></div>
          <h2 className="sec-title">Start Your<br /><span className="text-gradient-teal">Journey Today</span></h2>
          <p className="sec-subtitle mb-8">Tell us about your dream trip and we'll craft a personalised itinerary just for you.</p>
          <ul className="flex flex-col gap-3">
            {['No booking fees', 'Free personalised itinerary', 'Flexible cancellation policy'].map(f => (
              <li key={f} className="flex items-center gap-3 font-body text-[14px] text-[#4A6741]">
                <span className="w-5 h-5 rounded-full bg-brand-teal/15 flex items-center justify-center text-brand-teal text-xs">✓</span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Form card */}
        <div className="bg-white rounded-2xl border border-[#D8E8D0] p-8 shadow-sm">
          {sent ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 rounded-full bg-brand-teal/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-brand-teal text-2xl">✓</span>
              </div>
              <h3 className="font-display text-2xl font-light text-brand-dark mb-2">Request Received!</h3>
              <p className="font-body text-[14px] text-[#4A6741]">We'll be in touch within 24 hours to plan your adventure.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <h3 className="font-display text-[24px] font-light text-brand-dark mb-1">
                Get a <span className="text-brand-teal">Free Quote</span>
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-caps text-[9px] tracking-[0.2em] uppercase text-[#8FA88A] mb-1.5">Full Name</label>
                  <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                    className="w-full border border-[#D8E8D0] rounded-xl px-4 py-3 font-body text-[14px] text-brand-dark focus:outline-none focus:border-brand-teal transition-colors" placeholder="Your name" />
                </div>
                <div>
                  <label className="block font-caps text-[9px] tracking-[0.2em] uppercase text-[#8FA88A] mb-1.5">Email</label>
                  <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                    className="w-full border border-[#D8E8D0] rounded-xl px-4 py-3 font-body text-[14px] text-brand-dark focus:outline-none focus:border-brand-teal transition-colors" placeholder="your@email.com" />
                </div>
              </div>

              <div>
                <label className="block font-caps text-[9px] tracking-[0.2em] uppercase text-[#8FA88A] mb-1.5">Destination</label>
                <select required value={form.destination} onChange={e => setForm({...form, destination: e.target.value})}
                  className="w-full border border-[#D8E8D0] rounded-xl px-4 py-3 font-body text-[14px] text-brand-dark focus:outline-none focus:border-brand-teal transition-colors bg-white">
                  <option value="">Select destination…</option>
                  {DESTINATIONS.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-caps text-[9px] tracking-[0.2em] uppercase text-[#8FA88A] mb-1.5">Travel Date</label>
                  <input type="date" value={form.date} onChange={e => setForm({...form, date: e.target.value})}
                    className="w-full border border-[#D8E8D0] rounded-xl px-4 py-3 font-body text-[14px] text-brand-dark focus:outline-none focus:border-brand-teal transition-colors" />
                </div>
                <div>
                  <label className="block font-caps text-[9px] tracking-[0.2em] uppercase text-[#8FA88A] mb-1.5">Guests</label>
                  <input type="number" min="1" max="20" value={form.guests} onChange={e => setForm({...form, guests: e.target.value})}
                    className="w-full border border-[#D8E8D0] rounded-xl px-4 py-3 font-body text-[14px] text-brand-dark focus:outline-none focus:border-brand-teal transition-colors" placeholder="2" />
                </div>
              </div>

              {error && <p className="text-red-500 text-[13px] font-body">{error}</p>}

              <button type="submit" disabled={loading}
                className="btn-primary justify-center mt-1">
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <><ArrowRight className="w-4 h-4" /> Request My Quote</>}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
