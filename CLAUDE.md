# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Comandos

- `npm run dev` — servidor de desarrollo con hot-reload (Vite)
- `npm run build` — build de producción a `dist/`
- `npm run preview` — sirve el build de producción localmente

No hay linter, tests ni framework de testing configurado.

## Arquitectura

Portafolio personal de una sola página (SPA estática) en Vue 3 + Vite, sin router ni store. Bootstrap 5 está disponible como dependencia.

- `src/App.vue` es la raíz: importa y apila las secciones (`Biography`, `Tecnologias`, `Proyectos`, `Contacto`) bajo el `Navbar`. No hay enrutamiento; la navegación es scroll dentro de la misma página.
- Alias `@` → `src/` (definido en `vite.config.js`). Usar `@/components/...` en imports.
- Cada sección vive en su propio componente bajo `src/components/`.

### Theming (claro/oscuro)

El sistema de temas vive enteramente en `App.vue` y `src/assets/main.css`:
- `App.vue` resuelve el tema (`system` | `light` | `dark`), lo persiste en `localStorage` bajo `theme-preference`, escucha `prefers-color-scheme`, y aplica el resultado vía `data-theme` en `<html>` más el `<meta name="theme-color">`.
- `main.css` define todos los colores como CSS custom properties en `:root` (oscuro por defecto) y los sobreescribe bajo `[data-theme="light"]`. Para cambiar colores, editar estas variables, no valores hardcodeados en componentes.
- El `Navbar` recibe `:theme` y emite `@toggle-theme`.
