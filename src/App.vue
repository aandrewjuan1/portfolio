<script setup lang="ts">
import Navbar from './components/layout/Navbar.vue'
import ScrollProgress from './components/common/ScrollProgress.vue'
</script>

<template>
    <div class="relative min-h-screen font-primary bg-mint-green/95 dark:bg-rich-black/95 text-rich-black dark:text-mint-green transition-colors duration-200">
        <!-- Background elements -->
        <div class="fixed inset-0 overflow-hidden pointer-events-none">
            <div class="absolute -inset-[10px] opacity-20">
                <div class="absolute top-0 -left-4 w-72 h-72 bg-[var(--color-wine)] rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                <div class="absolute top-0 -right-4 w-72 h-72 bg-[var(--color-viridian)] rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                <div class="absolute -bottom-8 left-20 w-72 h-72 bg-[var(--color-mint-green)] rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
            </div>
        </div>

        <!-- Main content wrapper -->
        <div class="relative min-h-screen flex flex-col">
            <ScrollProgress />
            <Navbar />
            <div class="flex-1 flex flex-col">
                <main class="flex-1">
                    <router-view />
                </main>
            </div>
        </div>
    </div>
</template>

<style>
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
