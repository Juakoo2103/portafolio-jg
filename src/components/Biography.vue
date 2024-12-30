<template>
  <div class="bio container mt-5" id="bio">
    <h1 class="d-flex justify-content-end bold">Bio</h1>
    <div class="row">
      <!-- Imagen -->
      <div class="col-12 col-md-4 mb-5">
        <img
          :src="image"
          alt="Photo of {{ name }}"
          class="img-fluid rounded-circle"
        />
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
a {
  text-decoration: none;
  color: black;
  transition: color 0.3s ease-in-out;
}
</style>
