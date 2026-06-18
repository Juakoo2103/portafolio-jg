// Logos vía Simple Icons CDN — brand colors sobre fondo oscuro
const techs = [
  { name: "Vue 3", img: "https://cdn.simpleicons.org/vuedotjs/4FC08D" },
  { name: "React", img: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "JavaScript", img: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "HTML5", img: "https://cdn.simpleicons.org/html5/E34F26" },
  { name: "CSS3", img: "https://cdn.simpleicons.org/css3/1572B6" },
  { name: "Tailwind", img: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "Git", img: "https://cdn.simpleicons.org/git/F05032" },
  { name: "Python", img: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "Node.js", img: "https://cdn.simpleicons.org/nodedotjs/6DA55F" },
  { name: "Docker", img: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "Cloudflare", img: "https://cdn.simpleicons.org/cloudflare/F38020" },
  { name: "Linux", img: "https://cdn.simpleicons.org/linux/FCC624" },
  { name: "NGINX", img: "https://cdn.simpleicons.org/nginx/009639" },
  { name: "CasaOS", img: "https://cdn.simpleicons.org/casaos/00B4D8" },
];

function TechCard({ name, img }) {
  return (
    <div className="glass-card flex-shrink-0 w-36 flex flex-col items-center gap-4 px-6 py-6 rounded-xl mx-3 cursor-default group">
      <img
        src={img}
        alt={name}
        className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
        onError={(e) => {
          e.target.style.opacity = "0.3";
        }}
      />
      <span
        className="text-xs text-on-surface-variant text-center"
        style={{ fontFamily: '"JetBrains Mono", monospace' }}
      >
        {name}
      </span>
    </div>
  );
}

export default function Tecnologias() {
  return (
    <section className="py-28" id="tecnologias">
      <div
        className="text-center mb-16 px-5 md:px-16 max-w-[1200px] mx-auto"
        data-usal="fade-u duration-500"
      >
        <h2
          className="text-on-surface mb-4 text-4xl font-semibold"
          style={{
            fontFamily: '"Geist", sans-serif',
            letterSpacing: "-0.02em",
          }}
        >
          Stack Tecnológico
        </h2>
        <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
      </div>

      {/* Carrusel con fade en los bordes */}
      <div
        className="overflow-hidden relative mt-10"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div className="flex animate-marquee w-max">
          {/* items duplicados para loop infinito seamless */}
          {[...techs, ...techs].map((tech, i) => (
            <TechCard key={i} {...tech} />
          ))}
        </div>
      </div>
    </section>
  );
}
