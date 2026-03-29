'use client'

import { useEffect, useState } from 'react'
import { Calendar, Inbox, Package, TrendingUp } from 'lucide-react'
import { createClient } from '@supabase/supabase-js'
import type { BookingInquiry, ContactMessage } from '@/lib/supabase'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

type Stats = {
  totalBookings:  number
  newBookings:    number
  totalMessages:  number
  totalPackages:  number
}

const STATUS_COLORS: Record<string, string> = {
  new:        'bg-amber-100  text-amber-700',
  contacted:  'bg-blue-100   text-blue-700',
  confirmed:  'bg-green-100  text-green-700',
  cancelled:  'bg-gray-100   text-gray-500',
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
}

export default function AdminDashboard() {
  const [stats,           setStats]           = useState<Stats | null>(null)
  const [recentBookings,  setRecentBookings]  = useState<BookingInquiry[]>([])
  const [recentMessages,  setRecentMessages]  = useState<ContactMessage[]>([])
  const [loading,         setLoading]         = useState(true)

  useEffect(() => {
    async function fetchData() {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) { window.location.href = '/admin/login'; return }

      const [
        { count: totalBookings },
        { count: newBookings },
        { count: totalMessages },
        { count: totalPackages },
        { data: bookings },
        { data: messages },
      ] = await Promise.all([
        supabase.from('booking_inquiries').select('*', { count: 'exact', head: true }),
        supabase.from('booking_inquiries').select('*', { count: 'exact', head: true }).eq('status', 'new'),
        supabase.from('contact_messages').select('*',  { count: 'exact', head: true }),
        supabase.from('packages').select('*',          { count: 'exact', head: true }),
        supabase.from('booking_inquiries').select('id, name, email, destination, status, created_at').order('created_at', { ascending: false }).limit(5),
        supabase.from('contact_messages').select('id, name, email, subject, message, created_at').order('created_at', { ascending: false }).limit(5),
      ])

      setStats({
        totalBookings:  totalBookings  ?? 0,
        newBookings:    newBookings    ?? 0,
        totalMessages:  totalMessages  ?? 0,
        totalPackages:  totalPackages  ?? 0,
      })
      setRecentBookings(bookings as BookingInquiry[] ?? [])
      setRecentMessages(messages as ContactMessage[] ?? [])
      setLoading(false)
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="flex flex-col gap-8">
        <div className="h-8 w-48 bg-gray-200 rounded animate-pulse" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 h-36 animate-pulse" />
          ))}
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-6 h-64 animate-pulse" />
        <div className="bg-white border border-gray-200 rounded-2xl p-6 h-64 animate-pulse" />
      </div>
    )
  }

  const statCards = [
    { label: 'Total Bookings', value: stats!.totalBookings, icon: Calendar,    color: 'text-brand-teal' },
    { label: 'New Bookings',   value: stats!.newBookings,   icon: TrendingUp,  color: 'text-amber-500'  },
    { label: 'Messages',       value: stats!.totalMessages, icon: Inbox,       color: 'text-blue-500'   },
    { label: 'Packages',       value: stats!.totalPackages, icon: Package,     color: 'text-brand-earth'},
  ]

  return (
    <div className="flex flex-col gap-8">
      {/* Page header */}
      <div>
        <h1 className="font-caps text-[22px] tracking-[0.04em] text-[#111]">Dashboard</h1>
        <p className="font-body text-[14px] text-gray-500 mt-1">Welcome back — here's what's happening.</p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm overflow-hidden">
            <div className="absolute top-4 right-4 opacity-10">
              <Icon className={`w-12 h-12 ${color}`} />
            </div>
            <p className={`font-display text-[48px] font-light leading-none ${color}`}>{value}</p>
            <p className="font-caps text-[9px] tracking-[0.2em] uppercase text-gray-400 mt-2">{label}</p>
          </div>
        ))}
      </div>

      {/* Recent Bookings */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="font-caps text-[11px] tracking-[0.2em] uppercase text-gray-700">Recent Bookings</h2>
          <a href="/admin/bookings" className="font-caps text-[9px] tracking-[0.15em] uppercase text-brand-teal hover:text-brand-teal-mid transition-colors">
            View All
          </a>
        </div>

        {recentBookings.length === 0 ? (
          <div className="px-6 py-12 text-center">
            <p className="font-body text-[14px] text-gray-400">No bookings yet.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  {['Name', 'Email', 'Destination', 'Status', 'Date'].map(h => (
                    <th key={h} className="text-left px-6 py-3 font-caps text-[8px] tracking-[0.2em] uppercase text-gray-400 whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {recentBookings.map(b => (
                  <tr key={b.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-3 font-body text-[13px] text-gray-800 whitespace-nowrap">{b.name}</td>
                    <td className="px-6 py-3 font-body text-[13px] text-gray-500 whitespace-nowrap">{b.email}</td>
                    <td className="px-6 py-3 font-body text-[13px] text-gray-700 whitespace-nowrap">{b.destination}</td>
                    <td className="px-6 py-3">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full font-caps text-[8px] tracking-[0.15em] uppercase font-medium ${STATUS_COLORS[b.status ?? 'new']}`}>
                        {b.status ?? 'new'}
                      </span>
                    </td>
                    <td className="px-6 py-3 font-body text-[13px] text-gray-400 whitespace-nowrap">
                      {b.created_at ? formatDate(b.created_at) : '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Recent Messages */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="font-caps text-[11px] tracking-[0.2em] uppercase text-gray-700">Recent Messages</h2>
          <a href="/admin/messages" className="font-caps text-[9px] tracking-[0.15em] uppercase text-brand-teal hover:text-brand-teal-mid transition-colors">
            View All
          </a>
        </div>

        {recentMessages.length === 0 ? (
          <div className="px-6 py-12 text-center">
            <p className="font-body text-[14px] text-gray-400">No messages yet.</p>
          </div>
        ) : (
          <ul className="divide-y divide-gray-50">
            {recentMessages.map(m => (
              <li key={m.id} className="px-6 py-4 hover:bg-gray-50/50 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-body text-[13px] font-medium text-gray-800">{m.name}</span>
                      <span className="font-body text-[12px] text-gray-400">{m.email}</span>
                      {m.subject && (
                        <span className="font-caps text-[8px] tracking-[0.15em] uppercase bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                          {m.subject}
                        </span>
                      )}
                    </div>
                    <p className="font-body text-[13px] text-gray-500 mt-0.5 truncate">
                      {m.message.slice(0, 80)}{m.message.length > 80 ? '…' : ''}
                    </p>
                  </div>
                  <span className="font-body text-[12px] text-gray-400 whitespace-nowrap flex-shrink-0">
                    {m.created_at ? formatDate(m.created_at) : '—'}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
