<script setup>
import { computed, onMounted, onBeforeUnmount, ref, watch } from "vue";

import Navbar from "@/components/Navbar.vue";
import Biography from "@/components/Biography.vue";
import Proyectos from "@/components/Proyectos.vue";
import Contacto from "@/components/Contacto.vue";
import Tecnologias from "@/components/Tecnologias.vue";

const themePreference = ref(
  localStorage.getItem("theme-preference") || "system",
);
const systemTheme = ref("dark");

const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

const resolvedTheme = computed(() => {
  if (themePreference.value === "system") {
    return systemTheme.value;
  }

  return themePreference.value;
});

const applyTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  const themeColor = theme === "dark" ? "#0a0a0f" : "#f6f8fc";
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');

  if (metaThemeColor) {
    metaThemeColor.setAttribute("content", themeColor);
  }
};

const syncSystemTheme = (event) => {
  systemTheme.value = event.matches ? "dark" : "light";
};

const toggleTheme = () => {
  themePreference.value = resolvedTheme.value === "dark" ? "light" : "dark";
  localStorage.setItem("theme-preference", themePreference.value);
};

watch(
  resolvedTheme,
  (theme) => {
    applyTheme(theme);
  },
  { immediate: true },
);

onMounted(() => {
  systemTheme.value = mediaQuery.matches ? "dark" : "light";

  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener("change", syncSystemTheme);
  } else {
    mediaQuery.addListener(syncSystemTheme);
  }
});

onBeforeUnmount(() => {
  if (mediaQuery.removeEventListener) {
    mediaQuery.removeEventListener("change", syncSystemTheme);
  } else {
    mediaQuery.removeListener(syncSystemTheme);
  }
});
</script>

<template>
  <Navbar :theme="resolvedTheme" @toggle-theme="toggleTheme" />
  <Biography />
  <Tecnologias />
  <Proyectos />
  <Contacto />
</template>

<style scoped></style>
