import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Услуги', href: '#services' },
  { label: 'Преимущества', href: '#features' },
  { label: 'Кейсы', href: '#cases' },
  { label: 'Почему мы', href: '#about' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5 border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
          <div className="flex items-center justify-between px-4 py-3">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              {/* DS Logo substitute: red monogram */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#e74c3c] to-[#d63031] grid place-items-center shadow-[0_10px_30px_rgba(214,48,49,0.35)]">
                <span className="text-white font-black text-xl tracking-tight">DS</span>
              </div>
              <span className="text-white/90 font-semibold text-lg hidden sm:block">Digital Studio</span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-[#e8e8e8]/80 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#cta" className="inline-flex items-center rounded-lg bg-gradient-to-r from-[#e74c3c] to-[#d63031] px-4 py-2 text-white font-semibold shadow-[0_10px_30px_rgba(231,76,60,0.35)] hover:brightness-110 transition">Связаться</a>
            </nav>

            {/* Mobile btn */}
            <button
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-white"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile panel */}
          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-[#e8e8e8] hover:bg-white/5"
                >
                  {item.label}
                </a>
              ))}
              <a href="#cta" onClick={() => setOpen(false)} className="block text-center rounded-lg bg-gradient-to-r from-[#e74c3c] to-[#d63031] px-3 py-2 text-white font-semibold">Связаться</a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
