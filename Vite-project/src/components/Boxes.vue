<script setup>
import { ref } from 'vue'
import ChildInput from './ChildInput.vue'
import ChildDisplay from './ChildDisplay.vue'

const parentMessage = ref("")

function updateMessage(newMsg) {
  parentMessage.value = newMsg
}
</script>

<template>
  <section>
    <h2>Crear publicacioness</h2>
    <div class="card">
      
      <ChildInput :message="parentMessage" @update-message="updateMessage" />
      <ChildDisplay :message="parentMessage" />
    </div>
  </section>
</template>

<style scoped>
.card {
  background: white;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 5px #ccc;
  max-width: 400px;
}
</style>
