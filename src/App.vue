<script setup lang="ts">
import Navbar from './components/layout/Navbar.vue'
</script>

<template>
    <div class="min-h-screen bg-mint-green dark:bg-rich-black text-gray-900 dark:text-white transition-colors duration-200">
        <Navbar />
        <router-view />
    </div>
</template>
