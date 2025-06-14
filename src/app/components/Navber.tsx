"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

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
          <a href="#mission" className="hover:text-orange-400">Mission</a>
          <a href="#programs" className="hover:text-orange-400">Programs</a>
          <a href="#about" className="hover:text-orange-400">About</a>
          <a href="#team" className="hover:text-orange-400">Team</a>
          <a href="#contact" className="hover:text-orange-400">Contact</a>
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
          <a href="#mission" onClick={() => setIsOpen(false)} className="hover:text-orange-500">Programs</a>
          <a href="#programs" onClick={() => setIsOpen(false)} className="hover:text-orange-500">Programs</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-orange-500">About</a>
          <a href="#team" onClick={() => setIsOpen(false)} className="hover:text-orange-500">Team</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-orange-500">Contact</a>
        </div>
      )}
    </nav>
  )
}
