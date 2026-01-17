<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>
<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Roboto', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100vh;
}

/* Fondo con gradiente y efectos */
.v-application {
  background: linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 25%, #16213e 50%, #1a1a2e 75%, #0f0f1a 100%) !important;
  background-attachment: fixed !important;
}

/* Efecto de luz sutil */
.v-application::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    radial-gradient(ellipse at 20% 20%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 50%, rgba(245, 158, 11, 0.05) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

/* Patrón sutil */
.v-application::after {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 0;
}

.v-main {
  position: relative;
  z-index: 1;
}

/* Asegurar que las cards tengan el fondo correcto */
.theme--dark.v-card {
  background-color: rgba(26, 26, 46, 0.95) !important;
  border: 1px solid rgba(99, 102, 241, 0.2);
}

.theme--dark.v-data-table {
  background-color: transparent !important;
}

.theme--dark.v-data-table > .v-data-table__wrapper > table > thead > tr > th {
  background-color: rgba(99, 102, 241, 0.1) !important;
  color: #a5b4fc !important;
}

.theme--dark.v-data-table > .v-data-table__wrapper > table > tbody > tr:hover {
  background-color: rgba(99, 102, 241, 0.08) !important;
}
</style>
