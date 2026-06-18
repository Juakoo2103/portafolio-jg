// ponytail: lista curada estática; agregar más proyectos acá cuando estén listos
const projects = [
  {
    name: 'wordraw',
    title: 'Wordraw',
    description: 'Juego tipo Pictionary para grupos. Un jugador dibuja una palabra en secreto mientras el resto intenta adivinarla antes de que se acabe el tiempo.',
    repo: 'https://github.com/Juakoo2103/wordraw',
    demo: 'https://wordraw.juakoo.xyz/',
    tags: ['React', 'Tailwind', 'Vite'],
    gradient: 'from-violet-900/70 to-fuchsia-900/40',
  },
]

export default function Proyectos() {
  return (
    <section className="py-28 px-5 md:px-16 max-w-[1200px] mx-auto" id="proyectos">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6" data-usal="fade-u duration-500">
        <div>
          <h2
            className="text-on-surface mb-4 text-4xl font-semibold"
            style={{ fontFamily: '"Geist", sans-serif', letterSpacing: '-0.02em' }}
          >
            Proyectos Destacados
          </h2>
          <p className="text-on-surface-variant max-w-xl" style={{ fontFamily: '"Hanken Grotesk", sans-serif' }}>
            Una selección de trabajos que demuestran mi capacidad para resolver problemas complejos con soluciones elegantes.
          </p>
        </div>
        <div className="h-px flex-grow bg-outline-variant/20 mx-8 hidden md:block" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <article
            key={p.name}
            className="glass-card flex flex-col h-full rounded-xl overflow-hidden group"
            data-usal={`fade-u duration-500 delay-${i * 100}`}
          >
            {/* Placeholder con gradiente */}
            <div className={`h-52 relative bg-gradient-to-br ${p.gradient} flex items-center justify-center`}>
              <span
                className="text-7xl font-bold select-none"
                style={{ fontFamily: '"Geist", sans-serif', color: 'rgba(255,255,255,0.06)' }}
              >
                {p.title[0]}
              </span>
              {/* Tech tags */}
              <div className="absolute top-3 right-3 flex gap-2 flex-wrap justify-end">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-surface/80 backdrop-blur-md text-[10px] px-2 py-1 rounded font-bold uppercase tracking-wider border border-outline-variant/20 text-on-surface"
                    style={{ fontFamily: '"JetBrains Mono", monospace' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3
                className="text-on-surface text-xl font-medium mb-2"
                style={{ fontFamily: '"Geist", sans-serif' }}
              >
                {p.title}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-grow" style={{ fontFamily: '"Hanken Grotesk", sans-serif' }}>
                {p.description}
              </p>
              <div className="flex gap-3 mt-auto">
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-on-primary transition-all font-bold text-sm"
                >
                  Demo
                </a>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-high hover:bg-surface-bright transition-colors text-on-surface text-sm"
                >
                  <span className="material-symbols-outlined text-base">code</span>
                  GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
