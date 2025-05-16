<script setup lang="ts">
import ThemeToggle from './components/ThemeToggle.vue'
</script>

<template>
    <div class="min-h-screen bg-mint-green dark:bg-rich-black text-gray-900 dark:text-white transition-colors duration-200">
        <header class="container mx-auto px-4 py-4 flex justify-end">
            <ThemeToggle />
        </header>

        <main class="container mx-auto px-4 py-8">
            <h1 class="text-3xl font-bold">
                Hello world!
            </h1>
        </main>
    </div>
</template>
