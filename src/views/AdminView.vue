<script setup>
import ListUcenici from '@/components/ListUcenici.vue'
import { onUnmounted } from 'vue'

onUnmounted(() => {
  sessionStorage.removeItem('isAuthenticated')
})
</script>

<template>
  <ListUcenici />
</template>
