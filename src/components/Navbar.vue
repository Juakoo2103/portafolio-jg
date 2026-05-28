<template>
  <nav class="navbar navbar-expand-lg navbar-dark site-navbar" id="title">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">JUAKOO DEV</a>
      <button
        class="theme-toggle ms-auto me-2"
        type="button"
        @click="$emit('toggle-theme')"
        :aria-label="
          theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'
        "
        :title="
          theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'
        "
      >
        <svg v-if="theme === 'dark'" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 2a1 1 0 0 1 1 1v1.07a8 8 0 0 1 6.93 6.93H21a1 1 0 1 1 0 2h-1.07A8 8 0 0 1 13 19.93V21a1 1 0 1 1-2 0v-1.07A8 8 0 0 1 4.07 13H3a1 1 0 1 1 0-2h1.07A8 8 0 0 1 11 4.07V3a1 1 0 0 1 1-1Zm0 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z"
          />
        </svg>
        <svg v-else viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M21.64 13.02A9 9 0 0 1 10.98 2.36a1 1 0 0 0-1.25 1.25 7 7 0 0 0 9.66 9.66 1 1 0 0 0 1.25-1.25ZM12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"
          />
        </svg>
      </button>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  emits: ["toggle-theme"],
  props: {
    theme: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.navbar-brand {
  font-weight: 700;
  letter-spacing: 0.02em;
}

@media (min-width: 992px) {
  .theme-toggle {
    order: 3;
  }
}
</style>
