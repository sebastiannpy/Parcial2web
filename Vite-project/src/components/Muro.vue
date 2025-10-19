<template>
  <section>
    <h2>Muro</h2>
    <div class="card">
      <div class="profile-header">
        <img src="/img/9bfbef1f-7c91-411d-9d66-620201ce08f4.jpg" alt="Foto de perfil" class="profile-pic" />
        <div>
          <h3>Sebastian Certuche</h3>
          <p>Hola, soy estudiante de desarrollo de software</p>
        </div>
      </div>
      <div class="profile-body">
        <p>
          Me gusta conocer lugares nuevos, me gusta la historia, la ciencia y poder obtener conocimientos de todo, me gusta leer libros y en mis tiempos libres suelo realizar cursos de robótica.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.card {
  background: white;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 5px #ccc;
}
.profile-header {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.profile-pic {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
