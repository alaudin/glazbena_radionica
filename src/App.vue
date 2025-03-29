<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { RouterView } from 'vue-router'
import Navbar2 from './components/Navbar2.vue'
</script>

<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>
