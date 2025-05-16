<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const scrollProgress = ref(0)

const handleScroll = () => {
  const winScroll = document.documentElement.scrollTop
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  scrollProgress.value = (winScroll / height) * 100
}

// Reset scroll progress when route changes
watch(() => route.path, () => {
  scrollProgress.value = 0
  // Scroll to top when route changes
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div
    class="fixed top-0 left-0 w-full h-1 z-50 transition-all duration-300"
    :style="{ width: `${scrollProgress}%` }"
    aria-hidden="true"
  >
    <div class="h-full w-full bg-gradient-to-r from-wine via-viridian to-mint-green dark:from-mint-green dark:via-viridian dark:to-wine opacity-95"></div>
  </div>
</template>
