<template>
  <section>
    <h2>Photos</h2>
    <div class="photos-gallery">
      <img src="/img/samy.jpg" alt="Foto 1" />
      <img src="/img/8cbf97e9-e4d8-45cf-9464-a5292227f004.jpg" alt="Foto 2" />
      <img src="/img/37279df7-9110-40fb-bfbb-4a1bfae15e58.jpg" alt="Foto 3" />
      <img src="/img/paisaje.png" alt="Foto 4" />
      <img src="/img/cocora.png" alt="Foto 5" />
      <img src="/img/Iglesia.png" alt="Foto 6" />
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.photos-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
}
.photos-gallery img {
  width: 100%;
  border-radius: 10px;
}
</style>
