<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  message: String
})

const emit = defineEmits(['update-message'])
const localMessage = ref(props.message)

watch(() => props.message, (newVal) => {
  localMessage.value = newVal
})

function emitMessage() {
  emit('update-message', localMessage.value)
}
</script>

<template>
  <div style="border: 1px solid #4caf50; padding: 10px; margin-top: 10px">
    <h3>Hacer publicacion</h3>
    <input type="text" v-model="localMessage" @input="emitMessage" placeholder="En que estas pensando?..." />
  </div>
</template>
