'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { LayoutDashboard, Calendar, Inbox, Package, LogOut, X } from 'lucide-react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

interface AdminSidebarProps {
  isOpen: boolean
  onClose: () => void
}

const NAV_ITEMS = [
  { href: '/admin',          label: 'Dashboard', icon: LayoutDashboard, exact: true },
  { href: '/admin/bookings', label: 'Bookings',  icon: Calendar,         exact: false },
  { href: '/admin/messages', label: 'Messages',  icon: Inbox,            exact: false },
  { href: '/admin/packages', label: 'Packages',  icon: Package,          exact: false },
]

export default function AdminSidebar({ isOpen, onClose }: AdminSidebarProps) {
  const pathname = usePathname()

  function isActive(href: string, exact: boolean) {
    return exact ? pathname === href : pathname.startsWith(href)
  }

  async function handleSignOut() {
    await supabase.auth.signOut()
    window.location.href = '/admin/login'
  }

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[99998] bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={[
          'fixed top-0 left-0 h-full w-64 z-[99999] flex flex-col',
          'bg-[#111111] border-r border-white/5',
          'transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
        ].join(' ')}
      >
        {/* Logo area */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/5 min-h-[72px]">
          <Link href="/admin" onClick={onClose} className="flex items-center gap-3">
            <img
              src="/logo.svg"
              alt="À Bientôt"
              width={36}
              height={36}
              className="brightness-0 invert opacity-90"
            />
            <div>
              <p className="font-caps text-[10px] tracking-[0.2em] uppercase text-white/90 leading-none">À Bientôt</p>
              <p className="font-body text-[10px] text-white/40 mt-0.5 leading-none">Admin Panel</p>
            </div>
          </Link>
          {/* Mobile close button */}
          <button
            onClick={onClose}
            className="lg:hidden text-white/40 hover:text-white/80 transition-colors p-1"
            aria-label="Close sidebar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 px-3 py-4 flex flex-col gap-1 overflow-y-auto">
          {NAV_ITEMS.map(({ href, label, icon: Icon, exact }) => {
            const active = isActive(href, exact)
            return (
              <Link
                key={href}
                href={href}
                onClick={onClose}
                className={[
                  'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-150',
                  'font-caps text-[9px] tracking-[0.18em] uppercase',
                  active
                    ? 'bg-brand-teal/20 text-brand-teal'
                    : 'text-white/60 hover:text-white hover:bg-white/5',
                ].join(' ')}
              >
                <Icon className={['w-4 h-4 flex-shrink-0', active ? 'text-brand-teal' : 'text-white/40'].join(' ')} />
                {label}
              </Link>
            )
          })}
        </nav>

        {/* Sign out */}
        <div className="px-3 py-4 border-t border-white/5">
          <button
            onClick={handleSignOut}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-150 text-white/40 hover:text-red-400 hover:bg-red-500/5 font-caps text-[9px] tracking-[0.18em] uppercase"
          >
            <LogOut className="w-4 h-4 flex-shrink-0" />
            Sign Out
          </button>
        </div>
      </aside>
    </>
  )
}
