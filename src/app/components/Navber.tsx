"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { href: "#mission", label: "Mission" },  
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programs" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
]

// Smooth scroll handler
function handleSmoothScroll(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string, closeMenu?: () => void) {
  const id = href.replace('#', '')
  const el = document.getElementById(id)
  if (el) {
    e.preventDefault()
    // Offset for fixed navbar
    const yOffset = -80
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
    if (closeMenu) closeMenu()
  }
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Add global smooth scroll for html (for fallback)
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth"
    }
    return () => {
      if (typeof window !== "undefined") {
        document.documentElement.style.scrollBehavior = ""
      }
    }
  }, [])

  return (
    <nav className={`w-full fixed top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
      <div className="flex items-center justify-between px-2 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-black font-serif text-lg leading-tight">
          <Image
            src="/logo1.png"
            alt="Logo"
            className="cursor-pointer"
            width={48}
            height={48}
            priority
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-[#00103D] font-medium text-base">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-orange-400"
              onClick={e => handleSmoothScroll(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-start gap-4 px-6 pb-4 bg-white text-[#00103D] font-medium text-base">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={e => handleSmoothScroll(e, link.href, () => setIsOpen(false))}
              className="hover:text-orange-500"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
