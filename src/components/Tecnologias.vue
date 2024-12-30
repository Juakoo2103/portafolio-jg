<template>
  <div class="container">
    <h1 class="d-flex justify-content-center my-5 bold">Tecnologias</h1>
    <div class="row g-3">
      <!-- Ajuste de clases Bootstrap y control de tamaño -->
      <div
        class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
        v-for="(tech, index) in technologies"
        :key="index"
      >
        <img :src="tech.logo" :alt="tech.name" class="w-35 img-fluid" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tecnologias",
  data() {
    return {
      technologies: [
        {
          name: "HTML5",
          logo: "https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=fff",
        },
        {
          name: "CSS3",
          logo: "https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=fff",
        },
        {
          name: "JavaScript",
          logo: "https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=000",
        },
        {
          name: "Vue.js",
          logo: "https://img.shields.io/badge/-Vue.js-4FC08D?logo=vue.js&logoColor=fff",
        },
        {
          name: "React.js",
          logo: "https://img.shields.io/badge/-React.js-61DAFB?logo=react&logoColor=000",
        },
        {
          name: "Node.js",
          logo: "https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=fff",
        },
        {
          name: "Bootstrap",
          logo: "https://img.shields.io/badge/-Bootstrap-563D7C?logo=bootstrap&logoColor=fff",
        },
        {
          name: "Express js",
          logo: "https://img.shields.io/badge/-Express.js-000?logo=express&logoColor=fff",
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>