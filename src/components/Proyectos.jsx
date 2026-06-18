// ponytail: lista estática curada; si crece, mover a fetch
const projects = [
  {
    name: 'blog-frontend',
    title: 'Blog Frontend',
    description: 'Plataforma moderna para crear y leer artículos con edición en tiempo real.',
    repo: 'https://github.com/Juakoo2103/blog-frontend',
    demo: '',
    tag: 'Vue 3',
    gradient: 'from-blue-900/60 to-purple-900/40',
  },
  {
    name: 'app_qr',
    title: 'App QR',
    description: 'Generador y lector de códigos QR optimizado para dispositivos móviles y web.',
    repo: 'https://github.com/Juakoo2103/app_qr',
    demo: '',
    tag: 'JS',
    gradient: 'from-cyan-900/60 to-blue-900/40',
  },
  {
    name: 'pokeAPI',
    title: 'PokeAPI',
    description: 'Explorador detallado de Pokémon que consume la API oficial con filtrado avanzado.',
    repo: 'https://github.com/Juakoo2103/pokeAPI',
    demo: '',
    tag: 'API',
    gradient: 'from-purple-900/60 to-pink-900/40',
  },
  {
    name: 'viajes-chile',
    title: 'Viajes Chile',
    description: 'Sitio promocional de destinos turísticos nacionales con enfoque en UX visual.',
    repo: 'https://github.com/Juakoo2103/viajes-chile',
    demo: '',
    tag: 'SASS',
    gradient: 'from-green-900/60 to-cyan-900/40',
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <article key={p.name} className="glass-card flex flex-col h-full rounded-xl overflow-hidden group" data-usal={`fade-u duration-500 delay-${i * 100}`}>
            {/* Placeholder image */}
            <div className={`h-44 relative bg-gradient-to-br ${p.gradient} flex items-center justify-center`}>
              <span
                className="text-5xl font-bold opacity-10 select-none"
                style={{ fontFamily: '"Geist", sans-serif' }}
              >
                {p.title[0]}
              </span>
              <div className="absolute top-3 right-3">
                <span
                  className="bg-surface/80 backdrop-blur-md text-[10px] px-2 py-1 rounded font-bold uppercase tracking-wider border border-outline-variant/20 text-on-surface"
                  style={{ fontFamily: '"JetBrains Mono", monospace' }}
                >
                  {p.tag}
                </span>
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
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-on-primary transition-all font-bold text-sm"
                  >
                    Demo
                  </a>
                )}
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
