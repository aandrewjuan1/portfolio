<template>
  <div class="projects min-h-screen py-16 px-4 sm:px-6 lg:px-8">
    <!-- Header Section -->
    <div class="max-w-7xl mx-auto mb-12">
      <h1 class="text-4xl font-mono font-bold text-rich-black dark:text-mint-green mb-4">
        Projects
      </h1>
      <p class="text-lg text-rich-black-300 dark:text-mint-green-300 max-w-3xl">
        A collection of my work, showcasing both frontend and full-stack projects. Each project represents a unique challenge and learning opportunity.
      </p>
    </div>

    <!-- Category Filter -->
    <div class="max-w-7xl mx-auto mb-12">
      <div class="flex flex-wrap gap-4">
        <button
          v-for="category in categories"
          :key="category.id"
          @click="activeCategory = category.id as 'all' | 'frontend' | 'fullstack'"
          class="px-6 py-2 rounded-full font-mono text-sm transition-all duration-200"
          :class="[
            activeCategory === category.id
              ? 'bg-wine text-mint-green-100'
              : 'bg-mint-green-300 dark:bg-rich-black-300 text-rich-black dark:text-mint-green hover:bg-wine-300 dark:hover:bg-wine-700 hover:text-mint-green-100'
          ]"
        >
          {{ category.label }}
        </button>
      </div>
    </div>

    <!-- Projects Grid -->
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="group relative bg-mint-green-100 dark:bg-rich-black-300 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        >
          <!-- Project Image -->
          <div class="aspect-video relative overflow-hidden">
            <img
              :src="project.imageUrl"
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-rich-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <!-- Project Content -->
          <div class="p-6">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-xl font-mono font-bold text-rich-black dark:text-mint-green">
                {{ project.title }}
              </h3>
              <span
                class="px-3 py-1 text-xs font-mono rounded-full"
                :class="[
                  project.category === 'frontend'
                    ? 'bg-viridian-300 text-viridian-900'
                    : 'bg-wine-300 text-wine-900'
                ]"
              >
                {{ project.category }}
              </span>
            </div>

            <p class="text-rich-black-300 dark:text-mint-green-300 mb-4">
              {{ project.description }}
            </p>

            <!-- Technologies -->
            <div class="flex flex-wrap gap-2 mb-6">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="px-2 py-1 text-xs font-mono bg-mint-green-300 dark:bg-rich-black-700 text-rich-black dark:text-mint-green rounded"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Project Links -->
            <div class="flex gap-4">
              <a
                v-if="project.liveUrl"
                :href="project.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 text-wine hover:text-wine-700 dark:text-wine-300 dark:hover:text-wine-100 transition-colors"
              >
                <span class="font-mono text-sm">Live Demo</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </a>
              <a
                :href="project.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 text-wine hover:text-wine-700 dark:text-wine-300 dark:hover:text-wine-100 transition-colors"
              >
                <span class="font-mono text-sm">GitHub</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Project {
  id: number
  title: string
  description: string
  category: 'frontend' | 'fullstack'
  technologies: string[]
  imageUrl: string
  liveUrl?: string
  githubUrl: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Vue 3, TypeScript, and Tailwind CSS. Features dark mode, smooth animations, and a clean design.",
    category: "frontend",
    technologies: ["Vue 3", "TypeScript", "Tailwind CSS", "Vite"],
    imageUrl: "/projects/portfolio.png",
    liveUrl: "https://your-portfolio-url.com",
    githubUrl: "https://github.com/yourusername/portfolio"
  },
  // Add more projects here as needed
]

const activeCategory = ref<'all' | 'frontend' | 'fullstack'>('all')

const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') return projects
  return projects.filter(project => project.category === activeCategory.value)
})

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'frontend', label: 'Frontend Projects' },
  { id: 'fullstack', label: 'Full Stack Projects' }
]
</script>

<style scoped>
.projects {
  background-color: var(--color-mint-green-100);
}

.dark .projects {
  background-color: var(--color-rich-black-700);
}
</style>
