'use client'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { href: '#mission', label: 'Mission' },
  { href: '#about', label: 'About' },
  { href: '#programs', label: 'Programs' },
  { href: '#team', label: 'Team' },
  { href: '/event', label: 'Event' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (!isOpen) return
    const focusable = mobileMenuRef.current?.querySelectorAll<HTMLElement>('a,button')
    if (!focusable?.length) return
    focusable[0].focus()

    const onKeyDown = (e: KeyboardEvent) => {
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
      if (e.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isOpen])

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string,
    closeMenu?: () => void
  ) => {
    const isHash = href.startsWith('#')

    if (isHash) {
      e.preventDefault()
      const targetId = href.replace('#', '')
      const element = document.getElementById(targetId)

      // If on home page, smooth scroll
      if (pathname === '/') {
        if (element) {
          const yOffset = -80
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
          window.scrollTo({ top: y, behavior: 'smooth' })
        }
      } else {
        // If not on home page, navigate to /#section
        router.push(`/${href}`)
      }

      if (closeMenu) closeMenu()
    } else {
      if (closeMenu) closeMenu()
    }
  }

  const renderLink = (link: { href: string; label: string }) => (
    <Link
      key={link.href}
      href={link.href}
      scroll={false}
      onClick={(e) => handleClick(e, link.href, () => setIsOpen(false))}
      className="px-2 py-1 hover:text-orange-400 transition-colors whitespace-nowrap"
    >
      {link.label}
    </Link>
  )

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'}
    `}>
      <div className="flex items-center justify-between px-4 py-3 sm:py-4 mx-auto max-w-screen-xl">
        <Link href="/" className="flex items-center text-black font-serif text-lg" legacyBehavior>
          <a>
            <Image src="/logo1.png" alt="Logo" width={40} height={40} />
          </a>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center text-[#00103D] font-medium text-base flex-wrap justify-center gap-8">
          {NAV_LINKS.map(renderLink)}
        </div>

        {/* Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile */}
      {isOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden fixed inset-x-0 top-[60px] bg-white shadow-lg z-50 flex flex-col gap-2 px-4 py-6"
        >
          {NAV_LINKS.map(renderLink)}
        </div>
      )}
    </nav>
  )
}
