<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ProjectCard from '../ProjectCard.vue'
import stoaCoffeeImage from '../../assets/projects/stoa-coffee.png'
import sortieasyImage from '../../assets/projects/sortieasy.png'
import episodeOneImage from '../../assets/projects/episode.one.png'

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

// Sample projects data with placeholder images - only showing 3 featured projects
const projects = ref<Project[]>([
  {
    id: 1,
    title: "Dynamic Shop Platform",
    description: "Built a dynamic shopping cart and checkout system with real-time inventory management. Features include responsive product listings, seamless user interactions without page reloads, and modern UI design.",
    image: stoaCoffeeImage,
    technologies: ["Laravel", "Livewire", "Tailwind CSS", "MySQL", "Alpine.js", "HTML/CSS"],
    githubUrl: "https://github.com/aandrewjuan1/stoa-coffee"
  },
  {
    id: 2,
    title: "Inventory System with ML",
    description: "Developed an intelligent inventory tracking system with machine learning capabilities. Features include ML-based demand forecasting, real-time alert dashboards, and Python integration for predictive analytics.",
    image: sortieasyImage,
    technologies: ["Laravel", "Livewire", "Python", "MySQL", "Alpine.js", "HTML/CSS"],
    githubUrl: "https://github.com/aandrewjuan1/sortieasy"
  },
  {
    id: 3,
    title: "Media Listing Platform",
    description: "Created a personal media tracking application for books, anime, and movies. Features include advanced filtering, categorization, status tracking, and a clean, responsive interface.",
    image: episodeOneImage,
    technologies: ["Laravel", "Livewire", "Tailwind CSS", "MySQL", "Alpine.js", "HTML/CSS"],
    githubUrl: "https://github.com/aandrewjuan1/episode.one"
  }
])

const isMobile = ref(false)

const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})
</script>

<template>
  <section class="relative z-10 overflow-hidden" id="projects">
    <!-- Full Width Background -->
    <div class="absolute inset-0 w-[100vw] overflow-hidden pointer-events-none">
      <!-- Tech Pattern Background -->
      <div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <!-- Binary-like pattern -->
        <div class="absolute inset-0" style="background-image:
          linear-gradient(90deg, currentColor 1px, transparent 1px),
          linear-gradient(0deg, currentColor 1px, transparent 1px),
          linear-gradient(45deg, currentColor 1px, transparent 1px),
          linear-gradient(-45deg, currentColor 1px, transparent 1px);
          background-size: 40px 40px, 40px 40px, 40px 40px, 40px 40px;">
        </div>
      </div>

      <!-- Code-like Elements -->
      <div class="absolute top-1/4 left-10 text-wine/10 dark:text-mint-green-100/10 font-mono text-sm">
        &lt;code&gt;
      </div>
      <div class="absolute bottom-1/3 right-20 text-mint-green-100/10 dark:text-wine/10 font-mono text-sm">
        &lt;/div&gt;
      </div>
      <div class="absolute top-2/3 left-1/4 text-wine/10 dark:text-mint-green-100/10 font-mono text-sm">
        &lt;script&gt;
      </div>

      <!-- Tech Circles -->
      <div class="absolute top-1/4 right-10 w-32 h-32 border border-wine/10 dark:border-mint-green-100/10 rounded-full animate-spin-slow"></div>
      <div class="absolute bottom-1/3 left-20 w-24 h-24 border border-mint-green-100/10 dark:border-wine/10 rounded-full animate-spin-slow-reverse"></div>

      <!-- Connecting Lines with Tech Theme -->
      <div class="absolute top-1/2 left-0 w-32 h-px bg-gradient-to-r from-transparent via-wine/20 dark:via-mint-green-100/20 to-transparent">
        <div class="absolute -top-1 left-1/2 w-2 h-2 bg-wine/20 dark:bg-mint-green-100/20 rounded-full"></div>
      </div>
      <div class="absolute top-1/2 right-0 w-32 h-px bg-gradient-to-l from-transparent via-wine/20 dark:via-mint-green-100/20 to-transparent">
        <div class="absolute -top-1 left-1/2 w-2 h-2 bg-wine/20 dark:bg-mint-green-100/20 rounded-full"></div>
      </div>

      <!-- Floating Tech Elements -->
      <div class="absolute top-1/3 left-1/4 w-8 h-8 border-2 border-dashed border-wine/10 dark:border-mint-green-100/10 rounded-lg animate-float"></div>
      <div class="absolute bottom-1/4 right-1/3 w-6 h-6 border-2 border-dotted border-mint-green-100/10 dark:border-wine/10 rounded-lg animate-float-delayed"></div>
    </div>

    <!-- Content Container -->
    <div class="relative py-24">
      <div class="w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16 relative">
          <h2 class="text-4xl font-mono text-rich-black dark:text-mint-green-100 relative inline-block">
            Featured Projects
            <span class="absolute left-0 -bottom-3 w-16 h-1 bg-wine dark:bg-mint-green-100 rounded transform transition-all duration-300 group-hover:w-24"></span>
          </h2>
          <p class="mt-6 text-lg text-rich-black-300 dark:text-mint-green-300 max-w-2xl mx-auto">
            Explore my latest projects showcasing my skills in web development and design
          </p>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <ProjectCard
            v-for="project in projects"
            :key="project.id"
            :project="project"
            :show-category="false"
          />
        </div>

        <!-- Learn More Button -->
        <div class="text-center">
          <router-link
            to="/projects"
            class="inline-flex items-center gap-2 px-8 py-3 bg-wine dark:bg-mint-green text-mint-green-100 dark:text-rich-black rounded-full font-mono font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-wine-700 dark:hover:bg-mint-green-700 hover:shadow-lg group relative overflow-hidden"
          >
            <span class="relative z-10">View All Projects</span>
            <span class="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
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
