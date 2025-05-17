<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import ThemeToggle from '../common/ThemeToggle.vue'

const route = useRoute()
const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

// Handle navbar background
const handleScroll = () => {
  const winScroll = document.documentElement.scrollTop
  isScrolled.value = winScroll > 20 // Show background after 20px scroll
}

// Handle scroll lock when mobile menu is open
const toggleScrollLock = (lock: boolean) => {
  document.body.style.overflow = lock ? 'hidden' : ''
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  toggleScrollLock(isMobileMenuOpen.value)
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  toggleScrollLock(false)
}

// Handle escape key to close mobile menu
const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isMobileMenuOpen.value) {
    closeMobileMenu()
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('keydown', handleKeydown)
  // Ensure scroll lock is removed when component is unmounted
  toggleScrollLock(false)
})

const navItems = [
  {
    name: 'Home',
    path: '/',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
    </svg>`
  },
  {
    name: 'About',
    path: '/about',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
    </svg>`
  },
  {
    name: 'Projects',
    path: '/projects',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
    </svg>`
  },
  {
    name: 'Contact',
    path: '/contact',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>`
  }
]
</script>

<style scoped>
/* Only keeping necessary custom CSS that can't be achieved with Tailwind */
.nav-background {
  @apply transition-all duration-300;
  /* Fallback background for browsers that don't support backdrop-filter */
  background: rgba(255, 255, 255, 0.8);
  /* Modern browsers */
  background: rgba(255, 255, 255, 0.03);
  /* Add all vendor prefixes for backdrop-filter */
  -webkit-backdrop-filter: blur(16px);
  -moz-backdrop-filter: blur(16px);
  -ms-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
  /* Ensure the blur works in Firefox */
  @supports (-moz-appearance:none) {
    background: rgba(255, 255, 255, 0.8);
  }
}

:global(.dark) .nav-background {
  /* Fallback background for browsers that don't support backdrop-filter */
  background: rgba(0, 0, 0, 0.8);
  /* Modern browsers */
  background: rgba(0, 0, 0, 0.03);
  /* Add all vendor prefixes for backdrop-filter */
  -webkit-backdrop-filter: blur(16px);
  -moz-backdrop-filter: blur(16px);
  -ms-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
  /* Ensure the blur works in Firefox */
  @supports (-moz-appearance:none) {
    background: rgba(0, 0, 0, 0.8);
  }
}
</style>

<template>
  <nav
    class="w-[90%] md:w-[80%] lg:w-[70%] mx-auto fixed left-1/2 -translate-x-1/2 top-2 z-40 transition-all duration-300 rounded-lg focus-visible:outline-none"
    :class="{ 'nav-background shadow-lg': isScrolled }"
    role="navigation"
    aria-label="Main navigation"
  >
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Navigation Links -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="group relative px-3 py-2 transition-all duration-200 focus:outline-none"
            :class="[
              route.path === item.path
                ? 'font-mono font-semibold text-wine dark:text-mint-green border-b-2 border-[var(--color-wine)] dark:border-[var(--color-mint-green)]'
                : 'font-mono text-gray-700 dark:text-mint-green border-b-2 border-transparent hover:text-wine dark:hover:text-mint-green hover:border-b-2 hover:border-[var(--color-wine)] dark:hover:border-[var(--color-mint-green)]'
            ]"
            :aria-current="route.path === item.path ? 'page' : undefined"
          >
            <div class="flex items-center space-x-2">
              <span v-html="item.icon" class="transition-transform group-hover:scale-110" aria-hidden="true"></span>
              <span>{{ item.name }}</span>
            </div>
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button
            @click="toggleMobileMenu"
            class="p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-mint-green-300 dark:hover:bg-rich-black-300 focus:outline-none focus:ring-2 focus:ring-wine dark:focus:ring-mint-green"
            :aria-expanded="isMobileMenuOpen"
            aria-controls="mobile-menu"
            aria-label="Toggle mobile menu"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                v-if="!isMobileMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Theme Toggle -->
        <div class="flex items-center">
          <ThemeToggle />
        </div>
      </div>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform -translate-y-2 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform -translate-y-2 opacity-0"
      >
        <div
          v-show="isMobileMenuOpen"
          id="mobile-menu"
          class="md:hidden py-4"
          role="menu"
          aria-orientation="vertical"
        >
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="group flex items-center space-x-2 px-4 py-2 transition-all duration-200 focus:outline-none"
            :class="[
              route.path === item.path
                ? 'font-mono font-semibold text-wine dark:text-mint-green border-b-2 border-[var(--color-wine)] dark:border-[var(--color-mint-green)]'
                : 'font-mono text-gray-700 dark:text-mint-green border-b-2 border-transparent hover:text-wine dark:hover:text-mint-green hover:border-[var(--color-wine)] dark:hover:border-[var(--color-mint-green)]'
            ]"
            @click="closeMobileMenu"
            role="menuitem"
            :aria-current="route.path === item.path ? 'page' : undefined"
          >
            <span v-html="item.icon" class="transition-transform group-hover:scale-110" aria-hidden="true"></span>
            <span>{{ item.name }}</span>
          </router-link>
        </div>
      </Transition>
    </div>
  </nav>
</template>
