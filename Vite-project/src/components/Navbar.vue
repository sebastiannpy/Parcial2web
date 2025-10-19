<template>
  <nav>
    <ul>
      <li><router-link to="/muro" class="nav-link">Muro</router-link></li>
      <li><router-link to="/info" class="nav-link">Info</router-link></li>
      <li><router-link to="/photos" class="nav-link">Fotos</router-link></li>
      <li><router-link to="/boxes" class="nav-link">Boxes</router-link></li>
    </ul>
  </nav>
</template>

<script setup></script>

<style scoped>
nav {
  background-color: #8b4500;
  border-bottom: 1px solid white;
}
ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  margin: 0;
}
.nav-link {
  color: white;
  text-decoration: none;
  font-weight: bold;
}
.nav-link.router-link-active {
  text-decoration: underline;
}
</style>
