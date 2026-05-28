<template>
  <div class="bio container mt-5" id="bio">
    <h1 class="d-flex justify-content-end bold">Bio</h1>
    <div class="row">
      <!-- Imagen -->
      <div class="col-12 col-md-4 mb-5">
        <div class="photo-frame">
          <span class="photo-halo" aria-hidden="true"></span>
          <div class="photo-mask">
            <img :src="image" alt="Photo of {{ name }}" class="photo-image" />
          </div>
        </div>
      </div>
      <!-- Información -->
      <div class="col-12 col-md-8 d-flex flex-column justify-content-center">
        <h2 class="medium">{{ name }}</h2>
        <h3 class="light fs-5">{{ occupation }}</h3>
        <p class="medium">{{ bio }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Biography",
  data() {
    return {
      image: "https://curriculum-pages.vercel.app/assets/profile-I6UqGaSy.png",
      name: "Joaquin Gonzalez",
      occupation: "Web Developer",
      bio: "¡Hola! Soy Joaquin Gonzalez, y me encanta el desarrollo web. Me especializo en JavaScript y React, y actualmente me dedico a crear encuestas con LimeSurvey, donde disfruto transformando ideas en soluciones prácticas y efectivas.\n\nSiempre estoy buscando aprender algo nuevo. Ahora, me estoy sumergiendo en un bootcamp de front end para mejorar mis habilidades y poder ofrecer soluciones completas en mis proyectos. Mi objetivo es seguir creciendo como desarrollador web, abarcando tanto el frontend como el backend.\n\nMe apasiona resolver desafíos técnicos y ver cómo mis proyectos cobran vida en la web.",
      email: "jg.cabello@icloud.com",
    };
  },
};
</script>

<style scoped>
h1,
h2,
h3 {
  margin-bottom: 15px;
}

.photo-frame {
  position: relative;
  width: min(100%, 320px);
  aspect-ratio: 1 / 1;
  margin: 0 auto;
  padding: 14px;
}

.photo-halo {
  position: absolute;
  inset: 10% 8% 8% 8%;
  border-radius: 28px;
  background:
    radial-gradient(
      circle at 50% 45%,
      rgba(0, 207, 255, 0.42),
      transparent 56%
    ),
    radial-gradient(
      circle at 52% 55%,
      rgba(37, 99, 235, 0.34),
      transparent 68%
    ),
    radial-gradient(
      circle at 50% 50%,
      rgba(139, 92, 246, 0.18),
      transparent 72%
    );
  filter: blur(24px);
  opacity: 0.95;
}

.photo-mask {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 28px;
  border: 1px solid rgba(229, 231, 235, 0.14);
  background: linear-gradient(
    180deg,
    rgba(17, 24, 39, 0.9),
    rgba(10, 10, 15, 0.92)
  );
  box-shadow:
    0 24px 70px rgba(0, 0, 0, 0.36),
    0 0 0 1px rgba(0, 207, 255, 0.12),
    0 0 48px rgba(0, 207, 255, 0.22);
}

.photo-mask::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      circle at center,
      transparent 58%,
      rgba(10, 10, 15, 0.08) 72%,
      rgba(10, 10, 15, 0.55) 100%
    ),
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.04),
      transparent 26%,
      transparent 74%,
      rgba(255, 255, 255, 0.03)
    );
  pointer-events: none;
}

.photo-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transform: scale(1.02);
  filter: saturate(1.05) contrast(1.02);
}

@media (max-width: 767.98px) {
  .photo-frame {
    width: min(100%, 280px);
    padding: 12px;
  }
}

a {
  text-decoration: none;
  color: var(--color-text);
  transition: color 0.3s ease-in-out;
}
</style>
