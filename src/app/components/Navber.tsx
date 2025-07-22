'use client'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { href: "#mission",  label: "Mission" },
  { href: "#about",    label: "About"   },
  { href: "#programs", label: "Programs"},
  { href: "#team",     label: "Team"    },
  { href: "#contact",  label: "Contact" },
]

// (ลบ handleSmoothScroll เพราะไม่ได้ใช้)

export default function Navbar() {
  const [isOpen, setIsOpen]       = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const mobileMenuRef             = useRef<HTMLDivElement>(null)

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Auto-close mobile menu on resize ≥ md
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Trap focus in mobile menu when open
  useEffect(() => {
    if (!isOpen) return
    const focusable = mobileMenuRef.current?.querySelectorAll<HTMLElement>('a,button')
    if (!focusable?.length) return
    focusable[0].focus()

    const onKeyDown = (e: KeyboardEvent) => {
      const first = focusable[0]
      const last  = focusable[focusable.length - 1]
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isOpen])

  // --- Smooth scroll for ALL anchor links (desktop + mobile) ---
  // This function ensures smooth scroll with offset for all in-page links
  const smoothScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string,
    closeMenu?: () => void
  ) => {
    if (href.startsWith('#')) {
      const id = href.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        e.preventDefault()
        // ปรับ offset ให้ navbar ไม่บัง
        const yOffset = -80
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({ top: y, behavior: 'smooth' })
        if (closeMenu) closeMenu()
        return
      }
    }
    // fallback: ถ้าไม่เจอ element ให้ไปตาม href ปกติ
    if (closeMenu) closeMenu()
  }

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'}
      `}
    >
      <div className="flex items-center justify-between px-4 py-3 sm:py-4 mx-auto max-w-screen-xl">
        {/* Logo */}
        <Link href="/" className="flex items-center text-black font-serif text-lg" legacyBehavior>
          <a>
            <Image
              src="/logo1.png"
              alt="Logo"
              width={40}
              height={40}
            />
          </a>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center text-[#00103D] font-medium text-base flex-wrap justify-center gap-8">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={e => smoothScrollTo(e, link.href)}
              className="px-2 py-1 hover:text-orange-400 transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden fixed inset-x-0 top-[60px] bg-white shadow-lg z-50 flex flex-col gap-2 px-4 py-6"
        >
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={e => smoothScrollTo(e, link.href, () => setIsOpen(false))}
              className="px-2 py-2 w-full hover:text-orange-500 transition-colors rounded"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
