<template>
  <div class="relative group">
    <!-- Card Background with Gradient Border -->
    <div class="absolute inset-0 bg-gradient-to-br from-wine/5 to-viridian/5 dark:from-wine/10 dark:to-viridian/10 rounded-2xl transform transition-transform duration-500 group-hover:scale-[1.02]"></div>
    <div class="absolute inset-0 bg-gradient-to-br from-wine/10 to-viridian/10 dark:from-wine/20 dark:to-viridian/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    <!-- Card Content -->
    <div class="relative p-6 space-y-6">
      <!-- Project Image with Gradient Overlay -->
      <div class="relative overflow-hidden rounded-xl group/image">
        <!-- Gradient Overlay -->
        <div class="absolute inset-0 bg-gradient-to-br from-viridian/20 via-transparent to-wine/20 dark:from-wine/20 dark:to-viridian/20 opacity-0 group-hover/image:opacity-100 transition-opacity duration-500"></div>
        <img
          :src="project.image"
          :alt="project.title"
          class="w-full h-48 object-cover transform transition-all duration-700 group-hover/image:scale-105"
        />
      </div>

      <!-- Project Info -->
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <h3 class="text-xl font-mono text-rich-black dark:text-mint-green-100 relative z-10">
            {{ project.title }}
          </h3>
          <span
            v-if="showCategory"
            class="px-3 py-1 text-xs font-mono rounded-full"
            :class="[
              project.category === 'frontend'
                ? 'bg-viridian/20 text-viridian-900 dark:text-viridian'
                : 'bg-wine/20 text-wine-900 dark:text-wine'
            ]"
          >
            {{ project.category }}
          </span>
        </div>
        <p class="text-rich-black-300 dark:text-mint-green-300">
          {{ project.description }}
        </p>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in project.technologies"
            :key="tech"
            class="px-3 py-1 bg-white/50 dark:bg-rich-black-300 backdrop-blur-sm border border-wine/10 dark:border-viridian/10 text-wine dark:text-viridian rounded-full text-sm font-mono transition-all duration-300 hover:bg-wine/5 dark:hover:bg-viridian/5 hover:translate-x-1"
          >
            {{ tech }}
          </span>
        </div>
        <div class="flex flex-wrap items-center gap-3 mt-4">
          <a
            v-if="project.liveUrl"
            :href="project.liveUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-6 py-2.5 bg-viridian/10 dark:bg-wine/10 hover:bg-viridian/20 dark:hover:bg-wine/20 text-viridian dark:text-wine rounded-lg font-mono text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg group min-w-[140px] justify-center"
          >
            <span>Live Demo</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>
          <a
            v-if="project.githubUrl"
            :href="project.githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-6 py-2.5 bg-wine/10 dark:bg-viridian/10 hover:bg-wine/20 dark:hover:bg-viridian/20 text-wine dark:text-viridian rounded-lg font-mono text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg group min-w-[140px] justify-center"
          >
            <i class="fab fa-github text-lg"></i>
            <span>View Code</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>

      <!-- Decorative Elements -->
      <div class="absolute -top-6 -right-6 w-12 h-12 border-2 border-dashed border-wine/20 dark:border-viridian/20 rounded-full animate-spin-slow"></div>
      <div class="absolute -bottom-6 -left-6 w-8 h-8 border-2 border-dotted border-viridian/20 dark:border-wine/20 rounded-full animate-spin-slow-reverse"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Project {
  id: number
  title: string
  description: string
  category?: 'frontend' | 'fullstack'
  technologies: string[]
  image: string
  liveUrl?: string
  githubUrl?: string
}

defineProps<{
  project: Project
  showCategory?: boolean
}>()
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');
</style>
