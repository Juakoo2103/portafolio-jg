const image = 'https://curriculum-pages.vercel.app/assets/profile-I6UqGaSy.png'

export default function Biography() {
  return (
    <section
      className="flex flex-col lg:flex-row items-center justify-between min-h-screen gap-12 py-32 px-5 md:px-16 max-w-[1200px] mx-auto"
      id="hero"
    >
      {/* Text */}
      <div className="w-full lg:w-3/5 text-center lg:text-left" data-usal="fade-r duration-700">
        <span
          className="text-secondary mb-4 inline-block tracking-[0.2em] text-xs font-bold uppercase"
          style={{ fontFamily: '"Hanken Grotesk", sans-serif' }}
        >
          FRONT-END DEVELOPER
        </span>

        <h1
          className="gradient-text mb-6 text-4xl md:text-6xl font-bold"
          style={{ fontFamily: '"Geist", sans-serif', letterSpacing: '-0.04em', lineHeight: 1.1 }}
        >
          Construyendo el futuro de la web con elegancia técnica.
        </h1>

        <p
          className="text-on-surface-variant mb-10 max-w-2xl mx-auto lg:mx-0 text-lg leading-relaxed"
          style={{ fontFamily: '"Hanken Grotesk", sans-serif' }}
        >
          Hola, soy Joaquín. Me especializo en crear interfaces fluidas y reactivas usando{' '}
          <strong className="text-on-surface">Vue 3</strong>,{' '}
          <strong className="text-on-surface">React</strong> y{' '}
          <strong className="text-on-surface">JavaScript</strong> moderno. Mi enfoque combina
          la precisión del código con una estética visual pulida.
        </p>

        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
          <a
            href="#proyectos"
            className="flex items-center gap-2 px-8 py-3 rounded-lg font-bold text-on-primary-container transition-transform hover:scale-105"
            style={{ background: '#2563eb', fontFamily: '"Hanken Grotesk", sans-serif' }}
          >
            Ver proyectos
            <span className="material-symbols-outlined text-[1.1rem]">arrow_downward</span>
          </a>
          <a
            href="#contacto"
            className="border border-primary text-primary px-8 py-3 rounded-lg font-bold hover:bg-primary/10 transition-colors"
            style={{ fontFamily: '"Hanken Grotesk", sans-serif' }}
          >
            Contacto
          </a>
        </div>
      </div>

      {/* Photo */}
      <div className="w-full lg:w-2/5 flex justify-center lg:justify-end" data-usal="fade-l duration-700 delay-200">
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          {/* Glow */}
          <div
            className="absolute inset-0 rounded-full opacity-20 animate-pulse"
            style={{ background: 'radial-gradient(circle, #b4c5ff, #a0e4ff)', filter: 'blur(24px)' }}
          />
          {/* Photo frame */}
          <div className="glass-card relative w-full h-full rounded-full border-2 border-outline-variant/30 p-2 overflow-hidden">
            <img
              src={image}
              alt="Joaquín González"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          {/* Available badge */}
          <div className="glass-card absolute -bottom-4 -right-4 px-4 py-3 rounded-xl flex items-center gap-3">
            <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs font-medium text-on-surface" style={{ fontFamily: '"JetBrains Mono", monospace' }}>
              Disponible para proyectos
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
