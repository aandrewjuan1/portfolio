<template>
  <div>
    <!-- Hero Section with contained width -->
    <div class="w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
      <Hero />
    </div>

    <!-- About Section - full width background with contained content -->
    <AboutSection />

    <!-- Project Section - full width background with contained content -->
    <ProjectSection />
  </div>
</template>

<script setup lang="ts">
import Hero from '../components/home/Hero.vue'
import AboutSection from '../components/home/AboutSection.vue'
import ProjectSection from '../components/home/ProjectSection.vue'
</script>
