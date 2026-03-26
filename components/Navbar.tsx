'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Truck } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '/#features', label: 'Features' },
    { href: '/#how-it-works', label: 'How It Works' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">
              Tipper<span className="text-orange-500">Connect</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-slate-900 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors shadow-sm"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-slate-600 hover:text-slate-900 font-medium transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="px-5 py-2.5 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors shadow-sm text-center"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
