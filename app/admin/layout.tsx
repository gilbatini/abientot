'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import AdminSidebar from '@/components/admin/AdminSidebar'
import { getAdminSupabase } from '@/lib/supabase-admin'

const PAGE_TITLES: Record<string, string> = {
  '/admin':           'Dashboard',
  '/admin/bookings':  'Bookings',
  '/admin/messages':  'Messages',
  '/admin/packages':  'Packages',
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [checking, setChecking]       = useState(true)
  const router   = useRouter()
  const pathname = usePathname()

  const isLoginPage = pathname === '/admin/login'

  useEffect(() => {
    // Login page handles its own auth — don't check here or we loop forever
    if (isLoginPage) {
      setChecking(false)
      return
    }
    const supabase = getAdminSupabase()
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.replace('/admin/login')
      } else {
        setChecking(false)
      }
    })
  }, [router, isLoginPage])

  // Render the login page directly — it has its own full-screen layout
  if (isLoginPage) {
    return <>{children}</>
  }

  if (checking) {
    return (
      <div className="fixed inset-0 z-[99999] bg-gray-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-2 border-brand-teal border-t-transparent rounded-full animate-spin" />
          <p className="font-caps text-[9px] tracking-[0.2em] uppercase text-gray-400">Loading…</p>
        </div>
      </div>
    )
  }

  const pageTitle = PAGE_TITLES[pathname] ?? 'Admin'

  return (
    <div className="fixed inset-0 z-[99999] bg-gray-50 flex overflow-hidden">
      {/* Sidebar */}
      <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main content — offset on desktop to clear sidebar */}
      <div className="flex-1 flex flex-col overflow-auto lg:ml-64">
        {/* Mobile top bar */}
        <header className="lg:hidden flex items-center gap-4 px-4 py-4 bg-white border-b border-gray-200 min-h-[64px] sticky top-0 z-10">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-lg text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition-colors"
            aria-label="Open sidebar"
          >
            <Menu className="w-5 h-5" />
          </button>
          <h1 className="font-caps text-[13px] tracking-[0.15em] uppercase text-gray-800">{pageTitle}</h1>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
