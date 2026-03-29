'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronDown, X, ChevronRight } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'
import { cn } from '@/lib/utils'

export default function Nav() {
  const [scrolled, setScrolled]   = useState(false)
  const [mobileOpen, setMobile]   = useState(false)
  const [openSub, setOpenSub]     = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      {/* ── Main Nav ── */}
      <nav className={cn(
        'fixed left-0 right-0 z-50 flex items-center justify-between transition-all duration-300',
        scrolled
          ? 'top-2 px-3 h-14'
          : 'top-0 px-8 h-[68px]'
      )}>
        <div className={cn(
          'flex items-center justify-between w-full h-full px-6 transition-all duration-300',
          scrolled
            ? 'bg-white/95 backdrop-blur-xl rounded-2xl shadow-lg shadow-black/5 ring-1 ring-white/70 px-5'
            : 'bg-transparent'
        )}>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <div className={cn(
              'w-10 h-10 flex-shrink-0 transition-all duration-300',
              scrolled ? '' : '[filter:brightness(0)_invert(1)]'
            )}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" alt="À Bientôt" width={40} height={40} />
            </div>
            <div className="flex flex-col">
              <span className={cn(
                'font-caps text-[14px] font-semibold tracking-[0.1em] uppercase leading-tight transition-colors duration-300',
                scrolled ? 'text-brand-dark' : 'text-white'
              )}>
                À <span className={scrolled ? 'text-brand-teal' : 'text-yellow-200'}>Bientôt</span>
              </span>
              <span className={cn(
                'font-body text-[7.5px] tracking-[0.2em] uppercase transition-colors duration-300 mt-0.5',
                scrolled ? 'text-[#8FA88A]' : 'text-white/45'
              )}>
                Tours & Travels · Uganda
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1 list-none">
            {NAV_LINKS.map((link) => (
              <li key={link.label} className="relative group">
                <Link
                  href={link.href}
                  className={cn(
                    'flex items-center gap-1 font-caps text-[10px] font-medium tracking-[0.14em] uppercase px-3 py-2 rounded-lg transition-all duration-200',
                    scrolled
                      ? 'text-[#4A6741] hover:text-brand-teal hover:bg-brand-teal/5'
                      : 'text-white/88 hover:text-white hover:bg-white/10'
                  )}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown className="w-2.5 h-2.5 opacity-50 transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </Link>

                {/* Dropdown */}
                {link.children && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 translate-y-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 pt-3 min-w-[210px] z-50">
                    <div className="bg-white rounded-2xl border border-black/5 shadow-2xl p-2.5">
                      {/* Arrow */}
                      <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-3 h-1.5 bg-white" style={{clipPath:'polygon(50% 0%, 0% 100%, 100% 100%)'}} />
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[#4A6741] hover:text-brand-teal hover:bg-brand-teal/5 transition-all duration-150 group/item"
                        >
                          <span className="w-7 h-7 rounded-lg bg-brand-teal/8 flex items-center justify-center flex-shrink-0 group-hover/item:bg-brand-teal/14 transition-colors">
                            <ChevronRight className="w-3.5 h-3.5 text-brand-teal" />
                          </span>
                          <span className="flex flex-col gap-0.5">
                            <span className="text-[13px] font-medium leading-none">{child.label}</span>
                            {child.desc && <span className="text-[11px] text-[#8FA88A]">{child.desc}</span>}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}

            {/* Book Now CTA */}
            <li className="ml-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 font-caps text-[10px] font-semibold tracking-[0.18em] uppercase bg-brand-teal text-white px-5 py-2.5 rounded-xl shadow-lg shadow-brand-teal/25 hover:bg-brand-teal-mid hover:-translate-y-0.5 transition-all duration-200"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-pulse" />
                Book Now
              </Link>
            </li>
          </ul>

          {/* Burger */}
          <button
            onClick={() => setMobile(true)}
            className={cn(
              'lg:hidden flex flex-col items-center justify-center gap-[5px] w-10 h-10 rounded-xl transition-all duration-200 flex-shrink-0',
              scrolled
                ? 'bg-[#F5F0E8] border border-[#D8E8D0]'
                : 'bg-white/10 border border-white/20'
            )}
            aria-label="Open menu"
          >
            <span className={cn('block w-4.5 h-px rounded transition-colors', scrolled ? 'bg-brand-dark' : 'bg-white')} style={{width:'18px'}} />
            <span className={cn('block h-px rounded transition-colors', scrolled ? 'bg-brand-dark' : 'bg-white')} style={{width:'13px'}} />
            <span className={cn('block h-px rounded transition-colors', scrolled ? 'bg-brand-dark' : 'bg-white')} style={{width:'18px'}} />
          </button>
        </div>
      </nav>

      {/* ── Mobile Overlay ── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm"
          onClick={() => setMobile(false)}
        />
      )}

      {/* ── Mobile Drawer ── */}
      <div className={cn(
        'fixed top-0 right-0 bottom-0 z-50 w-[min(380px,100vw)] bg-white shadow-2xl flex flex-col transition-transform duration-400',
        mobileOpen ? 'translate-x-0' : 'translate-x-full'
      )}>
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-[#D8E8D0]">
          <Link href="/" className="flex items-center gap-2" onClick={() => setMobile(false)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="À Bientôt" width={36} height={36} />
            <span className="font-caps text-[14px] font-semibold tracking-[0.1em] text-brand-teal">À Bientôt</span>
          </Link>
          <button
            onClick={() => setMobile(false)}
            className="w-9 h-9 rounded-xl bg-[#F5F0E8] flex items-center justify-center text-[#4A6741] hover:bg-[#D8E8D0] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Links */}
        <div className="flex-1 overflow-y-auto px-8 py-4">
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="border-b border-[#D8E8D0]">
              {link.children ? (
                <>
                  <button
                    onClick={() => setOpenSub(openSub === link.label ? null : link.label)}
                    className="flex items-center justify-between w-full py-4 font-display text-2xl font-light text-brand-dark hover:text-brand-teal transition-colors"
                  >
                    {link.label}
                    <ChevronDown className={cn('w-4 h-4 text-[#8FA88A] transition-transform duration-300', openSub === link.label && 'rotate-180')} />
                  </button>
                  {openSub === link.label && (
                    <div className="pb-3 pl-3 flex flex-col gap-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setMobile(false)}
                          className="flex items-center gap-2 py-2 px-3 rounded-lg text-[15px] text-[#4A6741] hover:text-brand-teal hover:bg-brand-teal/5 transition-all"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-teal/40" />
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  onClick={() => setMobile(false)}
                  className="flex py-4 font-display text-2xl font-light text-brand-dark hover:text-brand-teal transition-colors"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-8 py-6 flex flex-col gap-3 border-t border-[#D8E8D0]">
          <Link href="/contact" onClick={() => setMobile(false)} className="btn-primary justify-center">
            Book Now
          </Link>
          <a href="tel:+256788138721" className="flex items-center justify-center gap-2 text-[13px] font-medium text-[#4A6741] border border-[#D8E8D0] rounded-xl py-3 hover:border-brand-teal hover:text-brand-teal transition-all">
            📞 +256 788 138 721
          </a>
        </div>
      </div>
    </>
  )
}
