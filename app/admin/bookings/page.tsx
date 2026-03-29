'use client'

import { useEffect, useState, Fragment } from 'react'
import { ChevronDown, ChevronUp, Trash2 } from 'lucide-react'
import { getAdminSupabase } from '@/lib/supabase-admin'
import type { BookingInquiry } from '@/lib/supabase'

type Status = 'new' | 'contacted' | 'confirmed' | 'cancelled'
type FilterTab = 'all' | Status

const STATUSES: Status[] = ['new', 'contacted', 'confirmed', 'cancelled']

const STATUS_COLORS: Record<Status, string> = {
  new:        'bg-amber-100  text-amber-700',
  contacted:  'bg-blue-100   text-blue-700',
  confirmed:  'bg-green-100  text-green-700',
  cancelled:  'bg-gray-100   text-gray-500',
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
}

export default function BookingsPage() {
  const [bookings,    setBookings]    = useState<BookingInquiry[]>([])
  const [loading,     setLoading]     = useState(true)
  const [filter,      setFilter]      = useState<FilterTab>('all')
  const [expanded,    setExpanded]    = useState<string | null>(null)
  const [updating,    setUpdating]    = useState<string | null>(null)

  useEffect(() => { fetchBookings() }, [])

  async function fetchBookings() {
    setLoading(true)
    const supabase = getAdminSupabase()
    const { data, error } = await supabase
      .from('booking_inquiries')
      .select('*')
      .order('created_at', { ascending: false })
    if (!error) setBookings((data as BookingInquiry[]) ?? [])
    setLoading(false)
  }

  async function updateStatus(id: string, status: Status) {
    setUpdating(id)
    const supabase = getAdminSupabase()
    await supabase.from('booking_inquiries').update({ status }).eq('id', id)
    setBookings(prev => prev.map(b => b.id === id ? { ...b, status } : b))
    setUpdating(null)
  }

  async function deleteBooking(id: string) {
    if (!window.confirm('Delete this booking inquiry? This cannot be undone.')) return
    const supabase = getAdminSupabase()
    await supabase.from('booking_inquiries').delete().eq('id', id)
    setBookings(prev => prev.filter(b => b.id !== id))
  }

  const filtered = filter === 'all' ? bookings : bookings.filter(b => b.status === filter)

  const tabCounts: Record<FilterTab, number> = {
    all:       bookings.length,
    new:       bookings.filter(b => b.status === 'new').length,
    contacted: bookings.filter(b => b.status === 'contacted').length,
    confirmed: bookings.filter(b => b.status === 'confirmed').length,
    cancelled: bookings.filter(b => b.status === 'cancelled').length,
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Page header */}
      <div>
        <h1 className="font-caps text-[22px] tracking-[0.04em] text-[#111]">Bookings</h1>
        <p className="font-body text-[14px] text-gray-500 mt-1">Manage all safari booking inquiries.</p>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-1 flex-wrap">
        {(['all', ...STATUSES] as FilterTab[]).map(tab => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={[
              'px-4 py-2 rounded-lg font-caps text-[8px] tracking-[0.18em] uppercase transition-all duration-150',
              filter === tab
                ? 'bg-brand-teal text-white shadow-sm'
                : 'bg-white border border-gray-200 text-gray-500 hover:text-gray-800 hover:border-gray-300',
            ].join(' ')}
          >
            {tab} <span className="ml-1 opacity-70">({tabCounts[tab]})</span>
          </button>
        ))}
      </div>

      {/* Table card */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-6 flex flex-col gap-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-10 bg-gray-100 rounded animate-pulse" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="py-20 text-center">
            <p className="font-body text-[14px] text-gray-400">No bookings found.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  {['', 'Name', 'Email', 'Phone', 'Destination', 'Travel Date', 'Guests', 'Status', 'Created', 'Actions'].map(h => (
                    <th key={h} className="text-left px-4 py-3 font-caps text-[8px] tracking-[0.2em] uppercase text-gray-400 whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map(b => (
                  <Fragment key={b.id}>
                    <tr
                      className="border-b border-gray-50 last:border-0 hover:bg-gray-50/40 transition-colors"
                    >
                      {/* Expand toggle */}
                      <td className="px-4 py-3 w-8">
                        <button
                          onClick={() => setExpanded(expanded === b.id ? null : b.id!)}
                          className="text-gray-400 hover:text-gray-700 transition-colors"
                          aria-label="Toggle details"
                        >
                          {expanded === b.id
                            ? <ChevronUp className="w-4 h-4" />
                            : <ChevronDown className="w-4 h-4" />}
                        </button>
                      </td>
                      <td className="px-4 py-3 font-body text-[13px] text-gray-800 whitespace-nowrap">{b.name}</td>
                      <td className="px-4 py-3 font-body text-[13px] text-gray-500 whitespace-nowrap">{b.email}</td>
                      <td className="px-4 py-3 font-body text-[13px] text-gray-500 whitespace-nowrap">{b.phone || '—'}</td>
                      <td className="px-4 py-3 font-body text-[13px] text-gray-700 whitespace-nowrap max-w-[160px] truncate">{b.destination}</td>
                      <td className="px-4 py-3 font-body text-[13px] text-gray-500 whitespace-nowrap">
                        {b.travel_date ? new Date(b.travel_date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : '—'}
                      </td>
                      <td className="px-4 py-3 font-body text-[13px] text-gray-500 text-center">{b.guests ?? '—'}</td>
                      <td className="px-4 py-3">
                        <select
                          value={b.status ?? 'new'}
                          disabled={updating === b.id}
                          onChange={e => updateStatus(b.id!, e.target.value as Status)}
                          className={[
                            'px-2.5 py-1 rounded-full font-caps text-[8px] tracking-[0.15em] uppercase font-medium border-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-teal/20 transition-all',
                            STATUS_COLORS[b.status as Status ?? 'new'],
                            updating === b.id ? 'opacity-50 cursor-not-allowed' : '',
                          ].join(' ')}
                        >
                          {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </td>
                      <td className="px-4 py-3 font-body text-[13px] text-gray-400 whitespace-nowrap">
                        {b.created_at ? formatDate(b.created_at) : '—'}
                      </td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => deleteBooking(b.id!)}
                          className="p-1.5 rounded-lg text-gray-300 hover:text-red-500 hover:bg-red-50 transition-all"
                          aria-label="Delete booking"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>

                    {/* Expanded message row */}
                    {expanded === b.id && (
                      <tr className="bg-amber-50/30">
                        <td colSpan={10} className="px-6 py-4">
                          <div className="flex flex-col gap-1">
                            <p className="font-caps text-[8px] tracking-[0.2em] uppercase text-gray-400">Message</p>
                            <p className="font-body text-[13px] text-gray-700 leading-[1.7]">
                              {b.message || <span className="text-gray-400 italic">No message provided.</span>}
                            </p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
