'use client'

import { useEffect, useState } from 'react'
import { ChevronDown, ChevronUp, Trash2 } from 'lucide-react'
import { getAdminSupabase } from '@/lib/supabase-admin'
import type { ContactMessage } from '@/lib/supabase'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
}

export default function MessagesPage() {
  const [messages,  setMessages]  = useState<ContactMessage[]>([])
  const [loading,   setLoading]   = useState(true)
  const [expanded,  setExpanded]  = useState<string | null>(null)

  useEffect(() => { fetchMessages() }, [])

  async function fetchMessages() {
    setLoading(true)
    const supabase = getAdminSupabase()
    const { data, error } = await supabase
      .from('contact_messages')
      .select('*')
      .order('created_at', { ascending: false })
    if (!error) setMessages((data as ContactMessage[]) ?? [])
    setLoading(false)
  }

  async function deleteMessage(id: string) {
    if (!window.confirm('Delete this message? This cannot be undone.')) return
    const supabase = getAdminSupabase()
    await supabase.from('contact_messages').delete().eq('id', id)
    setMessages(prev => prev.filter(m => m.id !== id))
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Page header */}
      <div>
        <h1 className="font-caps text-[22px] tracking-[0.04em] text-[#111]">Messages</h1>
        <p className="font-body text-[14px] text-gray-500 mt-1">
          Contact form submissions — {messages.length} total.
        </p>
      </div>

      {/* Table card */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-6 flex flex-col gap-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-10 bg-gray-100 rounded animate-pulse" />
            ))}
          </div>
        ) : messages.length === 0 ? (
          <div className="py-20 text-center">
            <p className="font-body text-[14px] text-gray-400">No messages yet.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  {['', 'Name', 'Email', 'Subject', 'Message', 'Date', 'Actions'].map(h => (
                    <th key={h} className="text-left px-4 py-3 font-caps text-[8px] tracking-[0.2em] uppercase text-gray-400 whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {messages.map(m => (
                  <>
                    <tr
                      key={m.id}
                      className="border-b border-gray-50 last:border-0 hover:bg-gray-50/40 transition-colors"
                    >
                      {/* Expand toggle */}
                      <td className="px-4 py-3 w-8">
                        <button
                          onClick={() => setExpanded(expanded === m.id ? null : m.id!)}
                          className="text-gray-400 hover:text-gray-700 transition-colors"
                          aria-label="Toggle message"
                        >
                          {expanded === m.id
                            ? <ChevronUp className="w-4 h-4" />
                            : <ChevronDown className="w-4 h-4" />}
                        </button>
                      </td>
                      <td className="px-4 py-3 font-body text-[13px] text-gray-800 whitespace-nowrap">{m.name}</td>
                      <td className="px-4 py-3 font-body text-[13px] text-gray-500 whitespace-nowrap">{m.email}</td>
                      <td className="px-4 py-3 font-body text-[13px] text-gray-600 whitespace-nowrap">
                        {m.subject ? (
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 font-caps text-[8px] tracking-[0.15em] uppercase">
                            {m.subject}
                          </span>
                        ) : <span className="text-gray-300">—</span>}
                      </td>
                      <td className="px-4 py-3 font-body text-[13px] text-gray-500 max-w-[240px]">
                        <span className="truncate block">
                          {m.message.slice(0, 80)}{m.message.length > 80 ? '…' : ''}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-body text-[13px] text-gray-400 whitespace-nowrap">
                        {m.created_at ? formatDate(m.created_at) : '—'}
                      </td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => deleteMessage(m.id!)}
                          className="p-1.5 rounded-lg text-gray-300 hover:text-red-500 hover:bg-red-50 transition-all"
                          aria-label="Delete message"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>

                    {/* Expanded full message */}
                    {expanded === m.id && (
                      <tr key={`${m.id}-expanded`} className="bg-blue-50/20">
                        <td colSpan={7} className="px-6 py-4">
                          <div className="flex flex-col gap-3">
                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                              <div>
                                <p className="font-caps text-[8px] tracking-[0.2em] uppercase text-gray-400 mb-1">From</p>
                                <p className="font-body text-[13px] text-gray-700">{m.name} &lt;{m.email}&gt;</p>
                              </div>
                              {(m as any).phone && (
                                <div>
                                  <p className="font-caps text-[8px] tracking-[0.2em] uppercase text-gray-400 mb-1">Phone</p>
                                  <p className="font-body text-[13px] text-gray-700">{(m as any).phone}</p>
                                </div>
                              )}
                              {m.subject && (
                                <div>
                                  <p className="font-caps text-[8px] tracking-[0.2em] uppercase text-gray-400 mb-1">Subject</p>
                                  <p className="font-body text-[13px] text-gray-700">{m.subject}</p>
                                </div>
                              )}
                            </div>
                            <div>
                              <p className="font-caps text-[8px] tracking-[0.2em] uppercase text-gray-400 mb-1">Full Message</p>
                              <p className="font-body text-[13px] text-gray-700 leading-[1.7] whitespace-pre-wrap">{m.message}</p>
                            </div>
                            <div className="flex gap-3">
                              <a
                                href={`mailto:${m.email}`}
                                className="inline-flex items-center gap-2 btn-primary py-2 px-5 text-[8px]"
                              >
                                Reply via Email
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
