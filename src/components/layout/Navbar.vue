<template>
  <nav
    class="w-[80%] mx-auto bg-mint-green/95 dark:bg-rich-black/95 py-4 sticky top-0 z-50"
    role="navigation"
    aria-label="Main navigation"
  >
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <!-- Navigation Links -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="group relative px-3 py-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-wine dark:focus:ring-mint-green rounded-md"
            :class="getActiveClasses(item.path).value"
            :aria-current="route.path === item.path ? 'page' : undefined"
          >
            <div class="flex items-center space-x-2">
              <span v-html="item.icon" class="transition-transform group-hover:scale-110" aria-hidden="true"></span>
              <span>{{ item.name }}</span>
            </div>
            <span
              class="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300"
              :class="[
                route.path === item.path ? 'w-full' : 'group-hover:w-full',
                'bg-wine dark:bg-mint-green'
              ]"
            ></span>
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
            class="group flex items-center space-x-2 px-4 py-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-wine dark:focus:ring-mint-green rounded-md"
            :class="getActiveClasses(item.path).value"
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

    <!-- Scroll Progress Indicator -->
    <div
      class="h-0.5 bg-wine/20 dark:bg-mint-green/20"
      :style="{ width: `${scrollProgress}%` }"
      aria-hidden="true"
    ></div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import ThemeToggle from '../ThemeToggle.vue'

const route = useRoute()
const isMobileMenuOpen = ref(false)
const scrollProgress = ref(0)

// Computed property for active link classes
const getActiveClasses = (path: string) => computed(() => {
  // Special case for home link - no ring effect
  if (path === '/') {
    return {
      'text-wine dark:text-mint-green font-medium': route.path === path,
      'text-gray-700 dark:text-gray-200 hover:opacity-80': route.path !== path
    }
  }
  // Default case for other nav items
  return {
    'text-wine dark:text-mint-green font-medium ring-2 ring-[var(--color-wine)] dark:ring-[var(--color-mint-green)]': route.path === path,
    'text-gray-700 dark:text-gray-200 hover:ring-2 hover:ring-[var(--color-wine)]/50 dark:hover:ring-[var(--color-mint-green)]/50': route.path !== path
  }
})

// Handle scroll progress
const handleScroll = () => {
  const winScroll = document.documentElement.scrollTop
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  scrollProgress.value = (winScroll / height) * 100
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
    name: 'Projects',
    path: '/projects',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
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
/* Remove the old router-link-active styles since we're handling it with dynamic classes */
:focus-visible {
  outline: none;
}

/* Remove all router-link-active styles */
.router-link-active,
.router-link-exact-active {
  @apply ring-0;
}

/* Ensure active state remains visible for non-home links */
.router-link-active:not([href="/"]):not(:focus-visible),
.router-link-exact-active:not([href="/"]):not(:focus-visible) {
  @apply ring-2;
  ring-color: var(--color-wine);
}

:root.dark .router-link-active:not([href="/"]):not(:focus-visible),
:root.dark .router-link-exact-active:not([href="/"]):not(:focus-visible) {
  ring-color: var(--color-mint-green);
}
</style>
