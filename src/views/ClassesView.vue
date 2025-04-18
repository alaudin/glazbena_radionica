<script setup>
import ClassCard from '@/components/ClassCard.vue'
import gitara from '/img/guitar.jpg'
import harmonika from '/img/harmonica.jpg'
import violina from '/img/violin.jpg'
import klavir from '/img/music.jpg'
</script>
<template>
  <section class="max-w-7xl p-2 m-auto mt-8">
    <h1 class="ml-4 lg:ml-6 mb-12 text-4xl tracking-tight font-extrabold text-gray-900">
      Instrumenti
    </h1>

    <ClassCard instrument="Gitara" :picture="gitara" />
    <ClassCard instrument="Harmonika" :picture="harmonika" />
    <ClassCard instrument="Klavir" :picture="klavir" />
    <ClassCard instrument="Violina" :picture="violina" />
  </section>
</template>
