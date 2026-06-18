import { useState } from 'react'

const techs = [
  { name: "Vue 3",       img: "https://cdn.simpleicons.org/vuedotjs/4FC08D",   desc: "Framework principal del bootcamp y base del portafolio anterior." },
  { name: "React",       img: "https://cdn.simpleicons.org/react/61DAFB",      desc: "Usado en Wordraw y en la versión actual del portafolio." },
  { name: "JavaScript",  img: "https://cdn.simpleicons.org/javascript/F7DF1E", desc: "Lenguaje base de todos mis proyectos front-end." },
  { name: "HTML5",       img: "https://cdn.simpleicons.org/html5/E34F26",      desc: "Estructura semántica en cada proyecto web desde el inicio." },
  { name: "CSS3",        img: "https://cdn.simpleicons.org/css3/1572B6",       desc: "Estilos y animaciones desde los primeros proyectos." },
  { name: "Tailwind",    img: "https://cdn.simpleicons.org/tailwindcss/06B6D4",desc: "Utility-first CSS usado en Wordraw y este portafolio." },
  { name: "Git",         img: "https://cdn.simpleicons.org/git/F05032",        desc: "Control de versiones en todos mis proyectos." },
  { name: "Python",      img: "https://cdn.simpleicons.org/python/3776AB",     desc: "Scripts de automatización y proyectos universitarios." },
  { name: "Node.js",     img: "https://cdn.simpleicons.org/nodedotjs/6DA55F",  desc: "Runtime para herramientas de desarrollo y servidores." },
  { name: "Docker",      img: "https://cdn.simpleicons.org/docker/2496ED",     desc: "Contenedores para desplegar apps en el servidor casero con CasaOS." },
  { name: "Cloudflare",  img: "https://cdn.simpleicons.org/cloudflare/F38020", desc: "Tunnel para exponer servicios del servidor sin abrir puertos." },
  { name: "Linux",       img: "https://cdn.simpleicons.org/linux/FCC624",      desc: "Sistema base del servidor casero (Ubuntu)." },
  { name: "NGINX",       img: "https://cdn.simpleicons.org/nginx/009639",      desc: "Reverse proxy en el servidor casero para enrutar subdominios." },
  { name: "CasaOS",      img: null,                                             desc: "Dashboard del servidor casero self-hosted." },
]

function TechCard({ name, img, desc }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className="glass-card flex-shrink-0 w-36 flex flex-col items-center gap-4 px-6 py-6 rounded-xl mx-3 cursor-default group relative">
      {/* Tooltip */}
      <div
        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-52 pointer-events-none z-50
                   opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{
          background: 'rgba(25, 31, 47, 0.96)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(141,144,160,0.18)',
          borderRadius: '0.75rem',
          padding: '0.625rem 0.875rem',
          fontFamily: '"Hanken Grotesk", sans-serif',
          fontSize: '0.72rem',
          lineHeight: '1.5',
          color: '#c3c6d7',
          textAlign: 'center',
        }}
      >
        {desc}
        {/* Flecha */}
        <span
          className="absolute top-full left-1/2 -translate-x-1/2"
          style={{
            width: 0, height: 0,
            borderLeft: '6px solid transparent',
            borderRight: '6px solid transparent',
            borderTop: '6px solid rgba(25, 31, 47, 0.96)',
          }}
        />
      </div>

      {/* Ícono */}
      <div className="w-10 h-10 flex items-center justify-center overflow-visible">
        {img && !failed ? (
          <img
            src={img}
            alt={name}
            className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
            onError={() => setFailed(true)}
          />
        ) : (
          <span className="material-symbols-outlined text-4xl text-secondary group-hover:scale-110 transition-transform duration-300 block">
            {name === 'CasaOS' ? 'home_storage' : 'code'}
          </span>
        )}
      </div>

      <span className="text-xs text-on-surface-variant text-center" style={{ fontFamily: '"JetBrains Mono", monospace' }}>
        {name}
      </span>
    </div>
  )
}

export default function Tecnologias() {
  return (
    <section className="py-28" id="tecnologias">
      <div className="text-center mb-16 px-5 md:px-16 max-w-[1200px] mx-auto" data-usal="fade-u duration-500">
        <h2
          className="text-on-surface mb-4 text-4xl font-semibold"
          style={{ fontFamily: '"Geist", sans-serif', letterSpacing: '-0.02em' }}
        >
          Stack Tecnológico
        </h2>
        <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
      </div>

      <div
        className="relative py-6"
        style={{
          overflowX: 'hidden',
          maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        }}
      >
        <div className="flex animate-marquee w-max">
          {[...techs, ...techs].map((tech, i) => (
            <TechCard key={i} {...tech} />
          ))}
        </div>
      </div>
    </section>
  )
}
