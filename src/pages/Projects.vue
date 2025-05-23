<template>
  <div class="min-h-screen">
    <!-- Background Pattern -->
    <div class="absolute inset-0 w-[100vw] overflow-hidden pointer-events-none">
      <!-- Subtle Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-br from-wine/5 via-transparent to-viridian/5 dark:from-wine/10 dark:via-transparent dark:to-viridian/10"></div>

      <!-- Minimal Floating Dots -->
      <div class="absolute top-1/4 left-10 w-1.5 h-1.5 bg-wine/10 dark:bg-viridian/10 rounded-full animate-float"></div>
      <div class="absolute bottom-1/3 right-20 w-1 h-1 bg-viridian/10 dark:bg-wine/10 rounded-full animate-float-delayed"></div>
    </div>

    <!-- Contained Content -->
    <div class="relative w-[90%] md:w-[80%] lg:w-[70%] mx-auto py-36">
      <!-- Header Section -->
      <div class="text-center space-y-4 mb-16">
        <h1 class="text-5xl font-mono text-rich-black dark:text-mint-green-100">Projects</h1>
        <p class="text-lg text-rich-black-300 dark:text-mint-green-300 max-w-3xl mx-auto">
          A collection of my work, showcasing both frontend and full-stack projects.
        </p>
      </div>

      <!-- Category Filter -->
      <div class="flex flex-wrap justify-center gap-4 mb-16">
        <button
          v-for="category in categories"
          :key="category.id"
          @click="activeCategory = category.id as 'all' | 'frontend' | 'fullstack'"
          class="px-6 py-2 rounded-full font-mono text-sm transition-all duration-200"
          :class="[
            activeCategory === category.id
              ? 'bg-wine text-mint-green-100'
              : 'bg-white/50 dark:bg-rich-black-300 backdrop-blur-sm border border-wine/10 dark:border-viridian/10 text-wine dark:text-viridian hover:bg-wine/5 dark:hover:bg-viridian/5'
          ]"
        >
          {{ category.label }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 [&>*]:break-inside-avoid">
        <ProjectCard
          v-for="project in filteredProjects"
          :key="project.id"
          :project="project"
          :show-category="true"
          class="mb-8"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import stoaCoffeeImage from '../assets/projects/stoa-coffee.png'
import sortieasyImage from '../assets/projects/sortieasy.png'
import episodeOneImage from '../assets/projects/episode.one.png'
import portfolioImage from '../assets/projects/portfolioImage.png'
import acmastersImage from '../assets/projects/acmasters.png'
import platoSpotImage from '../assets/projects/plato-spot.png'
import kazakhstanImage from '../assets/projects/beauty-of-kazakhstan.png'

interface Project {
  id: number
  title: string
  description: string
  category: 'frontend' | 'fullstack'
  technologies: string[]
  image: string
  liveUrl?: string
  githubUrl: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Beauty of Kazakhstan: Cultural Landing Page",
    description: "An immersive landing page showcasing Kazakhstan's rich culture, cuisine, attractions, and activities. Features include interactive sections for traditional dishes, popular tourist destinations, leisure activities, and cultural insights. Built with a focus on visual storytelling and user engagement.",
    category: "frontend",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    image: kazakhstanImage,
    liveUrl: "https://aandrewjuan1.github.io/beauty_of_kazakhstan/",
    githubUrl: "https://github.com/aandrewjuan1/beauty_of_kazakhstan"
  },
  {
    id: 2,
    title: "Plato Spot: Filipino Restaurant Website",
    description: "A modern restaurant website featuring a menu section and simple POS system for a Filipino restaurant. Includes responsive design, menu filtering, cart functionality, and an about section showcasing the restaurant's story and best-selling dishes.",
    category: "frontend",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    image: platoSpotImage,
    liveUrl: "https://aandrewjuan1.github.io/plato.spot/",
    githubUrl: "https://github.com/aandrewjuan1/plato.spot"
  },
  {
    id: 3,
    title: "ACMASTERS Landing Page",
    description: "A modern, responsive landing page for an air conditioning business. Features include service showcases, customer testimonials, FAQ section, and a contact form. Built with a focus on user experience and conversion optimization.",
    category: "frontend",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    image: acmastersImage,
    liveUrl: "https://aandrewjuan1.github.io/acmasters/",
    githubUrl: "https://github.com/aandrewjuan1/acmasters"
  },
  {
    id: 4,
    title: "Dynamic Shop Platform",
    description: "Built a dynamic shopping cart and checkout system with real-time inventory management. Features include responsive product listings, seamless user interactions without page reloads, and modern UI design.",
    category: "fullstack",
    technologies: ["Laravel", "Livewire", "Tailwind CSS", "MySQL", "Alpine.js", "HTML", "CSS"],
    image: stoaCoffeeImage,
    githubUrl: "https://github.com/aandrewjuan1/stoa-coffee"
  },
  {
    id: 5,
    title: "sortieasy: Inventory System with ML",
    description: "Developed an intelligent inventory tracking system with machine learning capabilities. Features include ML-based demand forecasting, real-time alert dashboards, and Python integration for predictive analytics.",
    category: "fullstack",
    technologies: ["Laravel", "Livewire", "Python", "MySQL", "Alpine.js", "HTML", "CSS"],
    image: sortieasyImage,
    githubUrl: "https://github.com/aandrewjuan1/sortieasy"
  },
  {
    id: 6,
    title: "episode.one: Media Listing Platform",
    description: "Created a personal media tracking application for books, anime, and movies. Features include advanced filtering, categorization, status tracking, and a clean, responsive interface.",
    category: "fullstack",
    technologies: ["Laravel", "Livewire", "Tailwind CSS", "MySQL", "Alpine.js", "HTML", "CSS"],
    image: episodeOneImage,
    githubUrl: "https://github.com/aandrewjuan1/episode.one"
  },
  {
    id: 7,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Vue 3, TypeScript, and Tailwind CSS. Features dark mode, smooth animations, and a clean design.",
    category: "frontend",
    technologies: ["Vue 3", "TypeScript", "Tailwind CSS", "Vite"],
    image: portfolioImage,
    liveUrl: "https://aandrewjuan1.github.io/portfolio/",
    githubUrl: "https://github.com/yourusername/portfolio"
  }
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

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(5deg); }
}

@keyframes float-delayed {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(-5deg); }
}

@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes spin-slow-reverse {
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 8s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}

.animate-spin-slow-reverse {
  animation: spin-slow-reverse 25s linear infinite;
}
</style>
