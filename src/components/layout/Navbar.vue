<template>
  <nav class="w-full bg-mint-green dark:bg-rich-black shadow-sm">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <!-- Logo/Brand -->
        <div class="flex-shrink-0">
          <router-link to="/" class="text-xl font-bold text-wine dark:text-mint-green">
            Andrew Juan
          </router-link>
        </div>

        <!-- Navigation Links -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="text-gray-700 dark:text-gray-200 hover:text-wine dark:hover:text-mint-green transition-colors"
            :class="{ 'text-wine dark:text-mint-green': route.path === item.path }"
          >
            {{ item.name }}
          </router-link>
        </div>

        <!-- Theme Toggle -->
        <div class="flex items-center">
          <ThemeToggle />
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-mint-green-300 dark:hover:bg-rich-black-300"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
      </div>

      <!-- Mobile Menu -->
      <div
        v-show="isMobileMenuOpen"
        class="md:hidden py-4"
      >
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="block py-2 text-gray-700 dark:text-gray-200 hover:text-wine dark:hover:text-mint-green transition-colors"
          :class="{ 'text-wine dark:text-mint-green': route.path === item.path }"
          @click="isMobileMenuOpen = false"
        >
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import ThemeToggle from '../ThemeToggle.vue'

const route = useRoute()
const isMobileMenuOpen = ref(false)

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
]
</script>
