import { useState } from 'react'
import { Menu, X, Shield, Github, Linkedin, Mail } from 'lucide-react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 text-slate-900 font-bold">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow">
              <Shield size={18} />
            </span>
            <span className="text-lg">Your Name • Cybersecurity</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-700 hover:text-slate-900 transition-colors">{item.label}</a>
            ))}
            <div className="flex items-center gap-3">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 hover:bg-slate-100 rounded-lg transition-colors" aria-label="GitHub"><Github size={18} /></a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="p-2 hover:bg-slate-100 rounded-lg transition-colors" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="#contact" className="p-2 hover:bg-slate-100 rounded-lg transition-colors" aria-label="Email"><Mail size={18} /></a>
            </div>
          </nav>

          <button className="md:hidden p-2 rounded-lg hover:bg-slate-100" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-700">{item.label}</a>
              ))}
              <div className="flex items-center gap-2 pt-2">
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 hover:bg-slate-100 rounded-lg" aria-label="GitHub"><Github size={18} /></a>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="p-2 hover:bg-slate-100 rounded-lg" aria-label="LinkedIn"><Linkedin size={18} /></a>
                <a href="#contact" className="p-2 hover:bg-slate-100 rounded-lg" aria-label="Email"><Mail size={18} /></a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
