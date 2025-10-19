<script setup>
const props = defineProps({
  message: String
})
</script>

<template>
  <div style="border: 1px solid gray; padding: 10px; margin-top: 10px">
    <h3>Post</h3>
    <p><strong>Publicacion:</strong> {{ message }}</p>
  </div>
</template>
