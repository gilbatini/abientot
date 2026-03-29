'use client'

import { useEffect, useState } from 'react'
import { Plus, Pencil, Trash2, X, Loader2, Check, Globe } from 'lucide-react'
import { getAdminSupabase } from '@/lib/supabase-admin'
import type { Package } from '@/lib/supabase'

const EMPTY_FORM: Omit<Package, 'id' | 'created_at'> = {
  title:       '',
  destination: '',
  duration:    '',
  group_size:  '',
  price:       '',
  tag:         '',
  description: '',
  image_url:   '',
  includes:    [],
  rating:      undefined,
  published:   false,
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
}

export default function PackagesPage() {
  const [packages,     setPackages]     = useState<Package[]>([])
  const [loading,      setLoading]      = useState(true)
  const [showForm,     setShowForm]     = useState(false)
  const [editingId,    setEditingId]    = useState<string | null>(null)
  const [formData,     setFormData]     = useState(EMPTY_FORM)
  const [includesText, setIncludesText] = useState('')
  const [saving,       setSaving]       = useState(false)
  const [formError,    setFormError]    = useState('')

  useEffect(() => { fetchPackages() }, [])

  async function fetchPackages() {
    setLoading(true)
    const supabase = getAdminSupabase()
    const { data, error } = await supabase
      .from('packages')
      .select('*')
      .order('created_at', { ascending: false })
    if (!error) setPackages((data as Package[]) ?? [])
    setLoading(false)
  }

  function openNewForm() {
    setEditingId(null)
    setFormData(EMPTY_FORM)
    setIncludesText('')
    setFormError('')
    setShowForm(true)
    setTimeout(() => document.getElementById('pkg-form-title')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
  }

  function openEditForm(pkg: Package) {
    setEditingId(pkg.id!)
    setFormData({
      title:       pkg.title,
      destination: pkg.destination,
      duration:    pkg.duration,
      group_size:  pkg.group_size  ?? '',
      price:       pkg.price,
      tag:         pkg.tag         ?? '',
      description: pkg.description ?? '',
      image_url:   pkg.image_url   ?? '',
      includes:    pkg.includes    ?? [],
      rating:      pkg.rating,
      published:   pkg.published   ?? false,
    })
    setIncludesText((pkg.includes ?? []).join('\n'))
    setFormError('')
    setShowForm(true)
    setTimeout(() => document.getElementById('pkg-form-title')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
  }

  function cancelForm() {
    setShowForm(false)
    setEditingId(null)
    setFormData(EMPTY_FORM)
    setIncludesText('')
    setFormError('')
  }

  function set<K extends keyof typeof EMPTY_FORM>(key: K, value: (typeof EMPTY_FORM)[K]) {
    setFormData(prev => ({ ...prev, [key]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setFormError('')

    if (!formData.title.trim() || !formData.destination.trim() || !formData.price.trim()) {
      setFormError('Title, Destination, and Price are required.')
      return
    }

    setSaving(true)
    const supabase = getAdminSupabase()

    const payload: Omit<Package, 'id' | 'created_at'> = {
      ...formData,
      includes: includesText
        .split('\n')
        .map(l => l.trim())
        .filter(Boolean),
    }

    try {
      if (editingId) {
        const { error } = await supabase.from('packages').update(payload).eq('id', editingId)
        if (error) throw error
        setPackages(prev => prev.map(p => p.id === editingId ? { ...p, ...payload, id: editingId } : p))
      } else {
        const { data, error } = await supabase.from('packages').insert(payload).select().single()
        if (error) throw error
        setPackages(prev => [data as Package, ...prev])
      }
      cancelForm()
    } catch (err: any) {
      setFormError(err?.message ?? 'Failed to save package. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  async function deletePackage(id: string) {
    if (!window.confirm('Delete this package? This cannot be undone.')) return
    const supabase = getAdminSupabase()
    await supabase.from('packages').delete().eq('id', id)
    setPackages(prev => prev.filter(p => p.id !== id))
    if (editingId === id) cancelForm()
  }

  async function togglePublished(pkg: Package) {
    const supabase = getAdminSupabase()
    const newVal = !pkg.published
    await supabase.from('packages').update({ published: newVal }).eq('id', pkg.id!)
    setPackages(prev => prev.map(p => p.id === pkg.id ? { ...p, published: newVal } : p))
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Page header */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h1 className="font-caps text-[22px] tracking-[0.04em] text-[#111]">Packages</h1>
          <p className="font-body text-[14px] text-gray-500 mt-1">Manage safari tour packages.</p>
        </div>
        <button
          onClick={openNewForm}
          className="btn-primary py-2.5 px-6 text-[9px]"
        >
          <Plus className="w-4 h-4" /> Add Package
        </button>
      </div>

      {/* Inline form */}
      {showForm && (
        <div id="pkg-form-title" className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <h2 className="font-caps text-[11px] tracking-[0.2em] uppercase text-gray-700">
              {editingId ? 'Edit Package' : 'New Package'}
            </h2>
            <button onClick={cancelForm} className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all">
              <X className="w-4 h-4" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-5">
            {formError && (
              <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                <p className="font-body text-[13px] text-red-700">{formError}</p>
              </div>
            )}

            {/* Row 1: Title + Destination */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-caps text-[9px] tracking-[0.2em] uppercase text-gray-500">
                  Title <span className="text-brand-earth">*</span>
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={e => set('title', e.target.value)}
                  placeholder="Gorilla Trekking Safari"
                  required
                  className="h-11 px-4 rounded-xl border border-gray-200 font-body text-[14px] text-gray-800 focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/10 transition-all"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-caps text-[9px] tracking-[0.2em] uppercase text-gray-500">
                  Destination <span className="text-brand-earth">*</span>
                </label>
                <input
                  type="text"
                  value={formData.destination}
                  onChange={e => set('destination', e.target.value)}
                  placeholder="Bwindi Forest, Uganda"
                  required
                  className="h-11 px-4 rounded-xl border border-gray-200 font-body text-[14px] text-gray-800 focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/10 transition-all"
                />
              </div>
            </div>

            {/* Row 2: Duration + Group Size */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-caps text-[9px] tracking-[0.2em] uppercase text-gray-500">Duration</label>
                <input
                  type="text"
                  value={formData.duration}
                  onChange={e => set('duration', e.target.value)}
                  placeholder="3 Days / 2 Nights"
                  className="h-11 px-4 rounded-xl border border-gray-200 font-body text-[14px] text-gray-800 focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/10 transition-all"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-caps text-[9px] tracking-[0.2em] uppercase text-gray-500">Group Size</label>
                <input
                  type="text"
                  value={formData.group_size}
                  onChange={e => set('group_size', e.target.value)}
                  placeholder="Up to 8 people"
                  className="h-11 px-4 rounded-xl border border-gray-200 font-body text-[14px] text-gray-800 focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/10 transition-all"
                />
              </div>
            </div>

            {/* Row 3: Price + Tag */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-caps text-[9px] tracking-[0.2em] uppercase text-gray-500">
                  Price <span className="text-brand-earth">*</span>
                </label>
                <input
                  type="text"
                  value={formData.price}
                  onChange={e => set('price', e.target.value)}
                  placeholder="$850 per person"
                  required
                  className="h-11 px-4 rounded-xl border border-gray-200 font-body text-[14px] text-gray-800 focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/10 transition-all"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-caps text-[9px] tracking-[0.2em] uppercase text-gray-500">Tag</label>
                <input
                  type="text"
                  value={formData.tag}
                  onChange={e => set('tag', e.target.value)}
                  placeholder="Best Seller"
                  className="h-11 px-4 rounded-xl border border-gray-200 font-body text-[14px] text-gray-800 focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/10 transition-all"
                />
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-1.5">
              <label className="font-caps text-[9px] tracking-[0.2em] uppercase text-gray-500">Description</label>
              <textarea
                value={formData.description}
                onChange={e => set('description', e.target.value)}
                placeholder="Brief description of this package…"
                rows={3}
                className="px-4 py-3 rounded-xl border border-gray-200 font-body text-[14px] text-gray-800 resize-none focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/10 transition-all"
              />
            </div>

            {/* Image URL */}
            <div className="flex flex-col gap-1.5">
              <label className="font-caps text-[9px] tracking-[0.2em] uppercase text-gray-500">Image URL</label>
              <input
                type="text"
                value={formData.image_url}
                onChange={e => set('image_url', e.target.value)}
                placeholder="https://…"
                className="h-11 px-4 rounded-xl border border-gray-200 font-body text-[14px] text-gray-800 focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/10 transition-all"
              />
            </div>

            {/* Includes */}
            <div className="flex flex-col gap-1.5">
              <label className="font-caps text-[9px] tracking-[0.2em] uppercase text-gray-500">
                Includes <span className="text-gray-400 normal-case font-body text-[11px] tracking-normal ml-1">(one item per line)</span>
              </label>
              <textarea
                value={includesText}
                onChange={e => setIncludesText(e.target.value)}
                placeholder={"Park permits\nAccommodation\nTransport\nGuided tour"}
                rows={4}
                className="px-4 py-3 rounded-xl border border-gray-200 font-body text-[14px] text-gray-800 resize-none focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/10 transition-all"
              />
            </div>

            {/* Published toggle */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="pkg-published"
                checked={formData.published ?? false}
                onChange={e => set('published', e.target.checked)}
                className="w-4 h-4 rounded border-gray-300 text-brand-teal focus:ring-brand-teal focus:ring-2"
              />
              <label htmlFor="pkg-published" className="font-caps text-[9px] tracking-[0.2em] uppercase text-gray-600 cursor-pointer">
                Published (visible on website)
              </label>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 pt-2">
              <button
                type="submit"
                disabled={saving}
                className="btn-primary py-2.5 px-8 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {saving
                  ? <><Loader2 className="w-4 h-4 animate-spin" /> Saving…</>
                  : <><Check className="w-4 h-4" /> {editingId ? 'Update Package' : 'Create Package'}</>}
              </button>
              <button
                type="button"
                onClick={cancelForm}
                className="font-caps text-[9px] tracking-[0.18em] uppercase text-gray-500 hover:text-gray-800 transition-colors px-4 py-2.5"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Packages table */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-6 flex flex-col gap-3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-12 bg-gray-100 rounded animate-pulse" />
            ))}
          </div>
        ) : packages.length === 0 ? (
          <div className="py-20 text-center flex flex-col items-center gap-4">
            <p className="font-body text-[14px] text-gray-400">No packages yet.</p>
            <button onClick={openNewForm} className="btn-primary py-2.5 px-6 text-[9px]">
              <Plus className="w-4 h-4" /> Add First Package
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  {['Title', 'Destination', 'Duration', 'Price', 'Tag', 'Published', 'Created', 'Actions'].map(h => (
                    <th key={h} className="text-left px-4 py-3 font-caps text-[8px] tracking-[0.2em] uppercase text-gray-400 whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {packages.map(pkg => (
                  <tr
                    key={pkg.id}
                    className={[
                      'border-b border-gray-50 last:border-0 hover:bg-gray-50/40 transition-colors',
                      editingId === pkg.id ? 'bg-brand-teal/5' : '',
                    ].join(' ')}
                  >
                    <td className="px-4 py-3 font-body text-[13px] font-medium text-gray-800 whitespace-nowrap">{pkg.title}</td>
                    <td className="px-4 py-3 font-body text-[13px] text-gray-600 whitespace-nowrap">{pkg.destination}</td>
                    <td className="px-4 py-3 font-body text-[13px] text-gray-500 whitespace-nowrap">{pkg.duration || '—'}</td>
                    <td className="px-4 py-3 font-body text-[13px] text-brand-teal font-medium whitespace-nowrap">{pkg.price}</td>
                    <td className="px-4 py-3">
                      {pkg.tag ? (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-brand-gold/15 text-brand-earth font-caps text-[8px] tracking-[0.15em] uppercase">
                          {pkg.tag}
                        </span>
                      ) : <span className="text-gray-300 font-body text-[13px]">—</span>}
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => togglePublished(pkg)}
                        className={[
                          'flex items-center gap-1.5 px-2.5 py-1 rounded-full font-caps text-[8px] tracking-[0.15em] uppercase transition-all',
                          pkg.published
                            ? 'bg-green-100 text-green-700 hover:bg-green-200'
                            : 'bg-gray-100 text-gray-500 hover:bg-gray-200',
                        ].join(' ')}
                      >
                        {pkg.published ? <><Check className="w-3 h-3" /> Live</> : <><Globe className="w-3 h-3" /> Draft</>}
                      </button>
                    </td>
                    <td className="px-4 py-3 font-body text-[13px] text-gray-400 whitespace-nowrap">
                      {pkg.created_at ? formatDate(pkg.created_at) : '—'}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => openEditForm(pkg)}
                          className="p-1.5 rounded-lg text-gray-400 hover:text-brand-teal hover:bg-brand-teal/10 transition-all"
                          aria-label="Edit package"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => deletePackage(pkg.id!)}
                          className="p-1.5 rounded-lg text-gray-300 hover:text-red-500 hover:bg-red-50 transition-all"
                          aria-label="Delete package"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
