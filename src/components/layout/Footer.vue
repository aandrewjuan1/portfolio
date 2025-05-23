<script setup lang="ts">
// Add Font Awesome if not already included
if (!document.querySelector('link[href*="font-awesome"]')) {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
  document.head.appendChild(link)
}
</script>

<template>
  <footer class="w-full bg-mint-green/95 dark:bg-rich-black/95 border-t border-rich-black/10 dark:border-mint-green/10">
    <!-- Decorative top border -->
    <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-rich-black/20 dark:via-mint-green/20 to-transparent"></div>

    <!-- Main footer content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Brand Section -->
        <div class="space-y-4">
          <h3 class="text-xl font-bold">Andrew Juan</h3>
          <p class="text-sm text-rich-black/70 dark:text-mint-green/70">
            A showcase of my work and skills in web development and design.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="space-y-4">
          <h3 class="text-xl font-bold">Quick Links</h3>
          <nav class="flex flex-col space-y-2">
            <router-link to="/" class="text-rich-black/70 dark:text-mint-green/70 hover:text-rich-black dark:hover:text-mint-green transition-colors router-link">
              Home
            </router-link>
            <router-link to="/about" class="text-rich-black/70 dark:text-mint-green/70 hover:text-rich-black dark:hover:text-mint-green transition-colors router-link">
              About
            </router-link>
            <router-link to="/projects" class="text-rich-black/70 dark:text-mint-green/70 hover:text-rich-black dark:hover:text-mint-green transition-colors router-link">
              Projects
            </router-link>
            <router-link to="/contact" class="text-rich-black/70 dark:text-mint-green/70 hover:text-rich-black dark:hover:text-mint-green transition-colors router-link">
              Contact
            </router-link>
          </nav>
        </div>

        <!-- Contact Info -->
        <div class="space-y-4">
          <h3 class="text-xl font-bold">Contact Info</h3>
          <div class="space-y-2">
            <a href="mailto:andrewjuan2@gmail.com"
               class="flex items-center space-x-2 text-rich-black/70 dark:text-mint-green/70 hover:text-rich-black dark:hover:text-mint-green transition-colors">
              <i class="fas fa-envelope"></i>
              <span>aandrewjuan2@gmail.com</span>
            </a>
            <div class="flex space-x-4 pt-2">
              <a href="https://github.com/aandrewjuan1" target="_blank" rel="noopener noreferrer"
                 class="text-rich-black/70 dark:text-mint-green/70 hover:text-rich-black dark:hover:text-mint-green transition-colors">
                <i class="fab fa-github text-xl"></i>
              </a>
              <a href="https://www.linkedin.com/in/andrew-juan-0b8757362/" target="_blank" rel="noopener noreferrer"
                 class="text-rich-black/70 dark:text-mint-green/70 hover:text-rich-black dark:hover:text-mint-green transition-colors">
                <i class="fab fa-linkedin text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-rich-black/10 dark:border-mint-green/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex justify-center">
          <p class="text-sm text-rich-black/70 dark:text-mint-green/70">
            © {{ new Date().getFullYear() }} Andrew Juan. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  position: relative;
  z-index: 10;
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
}

.router-link-active {
  color: var(--color-rich-black);
  font-weight: 500;
}

.dark .router-link-active {
  color: var(--color-mint-green);
}
</style>
