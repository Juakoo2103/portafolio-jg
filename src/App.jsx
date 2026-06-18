import { useState, useEffect } from 'react'
import { Toaster } from 'sonner'
import { USALProvider } from '@usal/react'
import Navbar from '@/components/Navbar'
import Biography from '@/components/Biography'
import Tecnologias from '@/components/Tecnologias'
import Proyectos from '@/components/Proyectos'
import Contacto from '@/components/Contacto'

export default function App() {
  const [themePreference, setThemePreference] = useState(
    () => localStorage.getItem('theme-preference') || 'system'
  )
  const [systemTheme, setSystemTheme] = useState('dark')

  const resolvedTheme = themePreference === 'system' ? systemTheme : themePreference

  const toggleTheme = () => {
    const next = resolvedTheme === 'dark' ? 'light' : 'dark'
    setThemePreference(next)
    localStorage.setItem('theme-preference', next)
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', resolvedTheme)
    const themeColor = resolvedTheme === 'dark' ? '#0c1322' : '#f0f4ff'
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', themeColor)
  }, [resolvedTheme])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    setSystemTheme(mq.matches ? 'dark' : 'light')
    const handler = (e) => setSystemTheme(e.matches ? 'dark' : 'light')
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return (
    <USALProvider>
      <Toaster richColors position="top-right" />

      {/* Background blobs */}
      <div className="blob animate-float" style={{ top: '-5%', left: '-5%' }} />
      <div className="blob animate-float" style={{ bottom: '-5%', right: '-5%', animationDelay: '-3s' }} />

      <div className="relative z-10">
        <Navbar theme={resolvedTheme} onToggleTheme={toggleTheme} />
        <Biography />
        <Tecnologias />
        <Proyectos />
        <Contacto />

        <footer
          className="border-t border-outline-variant/10 py-8 mt-16"
          style={{ background: '#070e1d' }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center px-5 md:px-16 gap-4 max-w-[1200px] mx-auto">
            <span
              className="font-bold text-on-surface text-sm"
              style={{ fontFamily: '"Geist", sans-serif' }}
            >
              Joaquín G.
            </span>
            <p
              className="text-on-surface-variant text-xs tracking-wider"
              style={{ fontFamily: '"Hanken Grotesk", sans-serif' }}
            >
              © 2025 Joaquín G. · Built with Technical Elegance
            </p>
            <div className="flex gap-6">
              {['GitHub', 'LinkedIn'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-on-surface-variant hover:text-secondary transition-colors text-xs tracking-wider uppercase"
                  style={{ fontFamily: '"Hanken Grotesk", sans-serif' }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </USALProvider>
  )
}
