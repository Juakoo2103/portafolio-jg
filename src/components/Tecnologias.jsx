const techs = [
  { name: 'Vue 3',       icon: 'developer_board', color: 'text-primary',           bg: 'hover:bg-primary/20' },
  { name: 'JavaScript',  icon: 'javascript',       color: 'text-secondary',         bg: 'hover:bg-secondary/20' },
  { name: 'React',       icon: 'code',             color: 'text-tertiary',          bg: 'hover:bg-tertiary/20' },
  { name: 'HTML5',       icon: 'html',             color: 'text-primary-fixed-dim', bg: 'hover:bg-primary/10' },
  { name: 'CSS3',        icon: 'css',              color: 'text-secondary',         bg: 'hover:bg-secondary/10' },
  { name: 'Tailwind',    icon: 'grid_view',        color: 'text-secondary-container', bg: 'hover:bg-secondary-container/20' },
  { name: 'Git',         icon: 'account_tree',     color: 'text-error',             bg: 'hover:bg-error/20' },
  { name: 'Python',      icon: 'terminal',         color: 'text-inverse-primary',   bg: 'hover:bg-inverse-primary/10' },
]

export default function Tecnologias() {
  return (
    <section className="py-28 px-5 md:px-16 max-w-[1200px] mx-auto" id="tecnologias">
      <div className="text-center mb-16" data-usal="fade-u duration-500">
        <h2
          className="text-on-surface mb-4 text-4xl font-semibold"
          style={{ fontFamily: '"Geist", sans-serif', letterSpacing: '-0.02em' }}
        >
          Stack Tecnológico
        </h2>
        <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
        {techs.map(({ name, icon, color, bg }, i) => (
          <div key={name} className="glass-card p-5 rounded-xl flex flex-col items-center gap-3 group cursor-default" data-usal={`fade-u duration-400 delay-${i * 75}`}>
            <div className={`w-11 h-11 flex items-center justify-center rounded-lg bg-surface-container-high transition-colors ${bg}`}>
              <span className={`material-symbols-outlined text-2xl ${color}`}>{icon}</span>
            </div>
            <span className="text-xs text-on-surface" style={{ fontFamily: '"JetBrains Mono", monospace' }}>
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
