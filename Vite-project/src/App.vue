<script setup>
import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <header class="header">
      <Header />
      <Navbar />
    </header>

    <main class="main-content">
      <RouterView />
    </main>

    <footer class="footer">
      <p>Segundo parcial Desarrollo Web I</p>
    </footer>
  </div>
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #d8b892; 
  color: #000;
  font-family: Arial, sans-serif;
}

.header {
  background-color: #8b4500; 
  color: white;
  padding: 10px 20px;
}

.main-content {
  flex: 1;
  padding: 20px;
}


.footer {
  background-color: #8b4500;
  color: white;
  text-align: center;
  padding: 10px;
  font-weight: bold;
}
</style>
