<template>
  <section class="py-24 relative z-10" id="about">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div class="space-y-6">
          <h2 class="text-4xl font-mono text-rich-black dark:text-mint-green-100 relative">
            About Me
            <span class="absolute left-0 -bottom-3 w-16 h-1 bg-wine dark:bg-wine-700 rounded"></span>
          </h2>
          <p class="text-lg leading-relaxed text-rich-black-300 dark:text-mint-green-300 font-primary">
            I'm a passionate full-stack developer with expertise in modern web technologies.
            With a strong foundation in both frontend and backend development, I create
            responsive, user-friendly applications that solve real-world problems.
            I love turning complex challenges into elegant solutions and am constantly
            exploring new technologies to enhance my development skills.
          </p>
          <div class="space-y-4">
            <h3 class="text-2xl font-mono text-rich-black dark:text-mint-green-100">My Skills</h3>
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-viridian dark:bg-wine text-mint-green-100 rounded-full text-sm font-primary transition-transform hover:-translate-y-0.5 hover:bg-viridian-700 dark:hover:bg-wine-700">Vue.js</span>
              <span class="px-4 py-2 bg-viridian dark:bg-wine text-mint-green-100 rounded-full text-sm font-primary transition-transform hover:-translate-y-0.5 hover:bg-viridian-700 dark:hover:bg-wine-700">TypeScript</span>
              <span class="px-4 py-2 bg-viridian dark:bg-wine text-mint-green-100 rounded-full text-sm font-primary transition-transform hover:-translate-y-0.5 hover:bg-viridian-700 dark:hover:bg-wine-700">Node.js</span>
              <span class="px-4 py-2 bg-viridian dark:bg-wine text-mint-green-100 rounded-full text-sm font-primary transition-transform hover:-translate-y-0.5 hover:bg-viridian-700 dark:hover:bg-wine-700">Python</span>
              <span class="px-4 py-2 bg-viridian dark:bg-wine text-mint-green-100 rounded-full text-sm font-primary transition-transform hover:-translate-y-0.5 hover:bg-viridian-700 dark:hover:bg-wine-700">SQL</span>
              <span class="px-4 py-2 bg-viridian dark:bg-wine text-mint-green-100 rounded-full text-sm font-primary transition-transform hover:-translate-y-0.5 hover:bg-viridian-700 dark:hover:bg-wine-700">Git</span>
            </div>
          </div>
          <router-link
            to="/about"
            class="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-wine dark:bg-viridian text-mint-green-100 rounded-full font-mono font-medium transition-all hover:-translate-y-0.5 hover:bg-wine-700 dark:hover:bg-viridian-700 group"
          >
            Learn More About Me
            <span class="transition-transform group-hover:translate-x-1">→</span>
          </router-link>
        </div>
        <div class="flex justify-center items-center order-first md:order-last">
          <img
            :src="profileImage"
            alt="Profile Image"
            class="w-full max-w-[400px] aspect-square object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import profileImage from '../../assets/about/profileImage.jpg'
</script>
