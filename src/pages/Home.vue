<template>
  <div class="home">
    <Hero />
    <AboutSection />
  </div>
</template>

<script setup lang="ts">
import Hero from '../components/home/Hero.vue'
import AboutSection from '../components/home/AboutSection.vue'
</script>

<style scoped>
.home {
  width: 100%;
}
</style>
