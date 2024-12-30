<template>
  <div class="projects container mt-5">
    <h1 class="text-center mb-4">Mis Proyectos</h1>
    <div class="row">
      <!-- Card para cada repositorio en la página actual -->
      <div
        class="col-12 col-md-4 mb-4"
        v-for="repo in paginatedRepos"
        :key="repo.id"
      >
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">{{ repo.name }}</h5>
            <p class="card-text">
              {{ repo.description || "No description provided." }}
            </p>
            <a
              :href="repo.html_url"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary"
            >
              Ver en GitHub
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Botones de paginación -->
    <div class="pagination d-flex justify-content-center mt-4">
      <button
        class="btn btn-secondary mx-2"
        :disabled="currentPage === 1"
        @click="prevPage"
      >
        Anterior
      </button>
      <button
        class="btn btn-secondary mx-2"
        :disabled="currentPage === totalPages"
        @click="nextPage"
      >
        Siguiente
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Proyectos",
  data() {
    return {
      repos: [], // Repositorios completos
      currentPage: 1, // Página actual
      itemsPerPage: 6, // Cantidad de proyectos por página
    };
  },
  computed: {
    // Calcular los repositorios de la página actual
    paginatedRepos() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.repos.slice(start, end);
    },
    // Calcular el total de páginas
    totalPages() {
      return Math.ceil(this.repos.length / this.itemsPerPage);
    },
  },
  mounted() {
    this.fetchRepos();
  },
  methods: {
    async fetchRepos() {
      try {
        const response = await fetch(
          "https://api.github.com/users/juakoo2103/repos"
        );
        if (!response.ok) {
          throw new Error("Error al obtener los repositorios");
        }
        this.repos = await response.json();
      } catch (error) {
        console.error("Hubo un problema al conectar con la API:", error);
      }
    },
    // Cambiar a la página anterior
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    // Cambiar a la página siguiente
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
  },
};
</script>

<style scoped>
.pagination button {
  min-width: 100px;
}
</style>
