import { useState, useEffect } from 'react'

const links = [
  { href: '#hero', label: 'Sobre mí' },
  { href: '#tecnologias', label: 'Tecnologías' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 border-b border-outline-variant/10 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}
      style={{ background: 'rgba(12, 19, 34, 0.82)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
    >
      <div className="flex justify-between items-center px-5 md:px-16 h-16 max-w-[1200px] mx-auto">
        <span className="font-display text-xl font-bold text-on-surface" style={{ fontFamily: '"Geist", sans-serif', letterSpacing: '-0.02em' }}>
          Joaquín G.
        </span>

        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {links.map(({ href, label }) => (
            <li key={href} className="relative">
              <a
                href={href}
                onClick={() => setActive(href)}
                className={`text-sm font-medium transition-colors ${active === href ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'}`}
                style={{ fontFamily: '"Hanken Grotesk", sans-serif' }}
              >
                {label}
              </a>
              {active === href && (
                <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full block" />
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-full text-primary hover:bg-surface-variant/20 transition-colors"
            aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
          >
            <span className="material-symbols-outlined text-[1.3rem] leading-none">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          <button
            className="md:hidden p-2 text-on-surface-variant"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            <span className="material-symbols-outlined">{open ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-5 pb-4 list-none m-0 border-t border-outline-variant/10"
          style={{ background: 'rgba(12, 19, 34, 0.95)' }}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="block py-3 text-on-surface-variant hover:text-primary transition-colors text-sm"
                onClick={() => { setActive(href); setOpen(false) }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
