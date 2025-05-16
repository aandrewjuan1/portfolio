<script setup lang="ts">
import Navbar from './components/layout/Navbar.vue'
</script>

<template>
    <div class="min-h-screen font-primary bg-mint-green dark:bg-rich-black text-rich-black dark:text-mint-green transition-colors duration-200">
        <Navbar />
        <router-view />
    </div>
</template>
