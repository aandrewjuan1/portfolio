<template>
  <div class="relative inline-block theme-toggle">
    <button
      @click="toggleDropdown"
      class="p-2 rounded-lg bg-mint-green dark:bg-rich-black hover:bg-mint-green-300 dark:hover:bg-rich-black-300 transition-colors"
      :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    >
      <!-- Sun icon -->
      <svg
        v-if="isDark"
        class="w-5 h-5 text-yellow-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
      <!-- Moon icon -->
      <svg
        v-else
        class="w-5 h-5 text-gray-700 dark:text-gray-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    </button>

    <!-- Theme dropdown -->
    <div
      v-if="showDropdown"
      class="absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-mint-green dark:bg-rich-black z-50"
    >
      <div class="py-1" role="menu">
        <button
          @click="() => { updateTheme('light'); showDropdown = false; }"
          class="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-mint-green-300 dark:hover:bg-rich-black-300"
          :class="{ 'bg-mint-green-300 dark:bg-rich-black-300': theme === 'light' }"
          role="menuitem"
        >
          Light
        </button>
        <button
          @click="() => { updateTheme('dark'); showDropdown = false; }"
          class="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-mint-green-300 dark:hover:bg-rich-black-300"
          :class="{ 'bg-mint-green-300 dark:bg-rich-black-300': theme === 'dark' }"
          role="menuitem"
        >
          Dark
        </button>
        <button
          @click="() => { updateTheme('system'); showDropdown = false; }"
          class="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-mint-green-300 dark:hover:bg-rich-black-300"
          :class="{ 'bg-mint-green-300 dark:bg-rich-black-300': theme === 'system' }"
          role="menuitem"
        >
          System
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useDarkMode } from '../composables/useDarkMode'

const { theme, isDark, updateTheme } = useDarkMode()
const showDropdown = ref(false)

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (!target.closest('.theme-toggle')) {
    showDropdown.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}
</script>
