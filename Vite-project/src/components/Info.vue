<template>
  <section>
    <h2>Info</h2>
    <div class="card">
      <p>
        Hola mi nombre es Sebastian Certuche, nací en Cali el 3 de Marzo del año 2006. Me gusta cocinar cuando tengo tiempo, también me llama la atención la robótica. 
        Me gusta también estar en forma entonces por lo general siempre hago algún tipo de deporte. 
        Actualmente estoy en 4 semestre de Desarrollo de Software y planeo especializarme en computación en la nube o ciencia de datos.
      </p>
      <div class="info-images">
        <img src="/img/nines.png" alt="Imagen 1" />
        <img src="/img/pizza.png" alt="Imagen 2" />
        <img src="/img/deporte.png" alt="Imagen 3" />
        <img src="/img/robot.png" alt="Imagen 4" />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.info-images {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 1rem;
}
.info-images img {
  width: 100px;
  border-radius: 8px;
}
.card {
  background: white;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 5px #ccc;
}
</style>
