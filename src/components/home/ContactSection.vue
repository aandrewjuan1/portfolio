<template>
  <section class="relative min-h-[80vh] flex items-center justify-center overflow-hidden" id="contact">
    <!-- Content Container -->
    <div class="relative z-10 w-full max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div class="w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16 relative">
          <h2 class="text-4xl font-mono text-rich-black dark:text-mint-green-100 relative inline-block">
            Get in Touch
            <span class="absolute left-0 -bottom-3 w-16 h-1 bg-wine dark:bg-viridian rounded transform transition-all duration-300 group-hover:w-24"></span>
          </h2>
          <p class="mt-6 text-lg text-rich-black-300 dark:text-mint-green-300 max-w-2xl mx-auto">
            Feel free to reach out to me at <a href="mailto:andrewjuan2@gmail.com" class="text-wine dark:text-viridian hover:underline">andrewjuan2@gmail.com</a>
          </p>
        </div>

        <div class="max-w-2xl mx-auto">
          <!-- Contact Form -->
          <div class="bg-mint-green-100 dark:bg-rich-black-300 p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02]">
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-mono text-rich-black dark:text-mint-green-100">Name</label>
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  class="mt-1 block w-full rounded-lg border-wine/20 dark:border-viridian/20 bg-white dark:bg-rich-black-200 text-rich-black dark:text-mint-green-100 shadow-sm focus:border-wine dark:focus:border-viridian focus:ring-wine/20 dark:focus:ring-viridian/20 transition-colors duration-200"
                  required
                />
              </div>

              <div>
                <label for="email" class="block text-sm font-mono text-rich-black dark:text-mint-green-100">Email</label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  class="mt-1 block w-full rounded-lg border-wine/20 dark:border-viridian/20 bg-white dark:bg-rich-black-200 text-rich-black dark:text-mint-green-100 shadow-sm focus:border-wine dark:focus:border-viridian focus:ring-wine/20 dark:focus:ring-viridian/20 transition-colors duration-200"
                  required
                />
              </div>

              <div>
                <label for="message" class="block text-sm font-mono text-rich-black dark:text-mint-green-100">Message</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="4"
                  class="mt-1 block w-full rounded-lg border-wine/20 dark:border-viridian/20 bg-white dark:bg-rich-black-200 text-rich-black dark:text-mint-green-100 shadow-sm focus:border-wine dark:focus:border-viridian focus:ring-wine/20 dark:focus:ring-viridian/20 transition-colors duration-200"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full px-8 py-3 bg-wine dark:bg-viridian text-mint-green-100 dark:text-rich-black rounded-full font-mono font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-wine-700 dark:hover:bg-viridian-700 hover:shadow-lg group relative overflow-hidden"
                :disabled="isSubmitting"
              >
                <span class="relative z-10">{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </form>
          </div>

          <!-- Social Links -->
          <div class="mt-12 text-center">
            <h3 class="text-2xl font-mono text-rich-black dark:text-mint-green-100 mb-6">Connect with Me</h3>
            <div class="flex justify-center gap-6">
              <a href="#" class="group flex flex-col items-center text-rich-black dark:text-mint-green-100 hover:text-wine dark:hover:text-viridian transition-all duration-300">
                <div class="w-12 h-12 rounded-full bg-wine/10 dark:bg-viridian/10 flex items-center justify-center group-hover:bg-wine/20 dark:group-hover:bg-viridian/20 transition-colors duration-300">
                  <i class="fab fa-github text-xl"></i>
                </div>
                <span class="mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">GitHub</span>
              </a>
              <a href="#" class="group flex flex-col items-center text-rich-black dark:text-mint-green-100 hover:text-wine dark:hover:text-viridian transition-all duration-300">
                <div class="w-12 h-12 rounded-full bg-wine/10 dark:bg-viridian/10 flex items-center justify-center group-hover:bg-wine/20 dark:group-hover:bg-viridian/20 transition-colors duration-300">
                  <i class="fab fa-linkedin text-xl"></i>
                </div>
                <span class="mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">LinkedIn</span>
              </a>
              <a href="#" class="group flex flex-col items-center text-rich-black dark:text-mint-green-100 hover:text-wine dark:hover:text-viridian transition-all duration-300">
                <div class="w-12 h-12 rounded-full bg-wine/10 dark:bg-viridian/10 flex items-center justify-center group-hover:bg-wine/20 dark:group-hover:bg-viridian/20 transition-colors duration-300">
                  <i class="fab fa-twitter text-xl"></i>
                </div>
                <span class="mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  try {
    // Here you would typically handle the form submission
    // For example, sending the data to your backend
    console.log('Form submitted:', form.value)
    // Reset form after successful submission
    form.value = {
      name: '',
      email: '',
      message: ''
    }
    alert('Message sent successfully!')
  } catch (error) {
    console.error('Error submitting form:', error)
    alert('Failed to send message. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}

onMounted(() => {
  // Add Font Awesome CDN if not already added
  if (!document.querySelector('link[href*="font-awesome"]')) {
    const fontAwesomeScript = document.createElement('link')
    fontAwesomeScript.rel = 'stylesheet'
    fontAwesomeScript.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
    document.head.appendChild(fontAwesomeScript)
  }
})
</script>

<style>
@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(5deg); }
}

@keyframes float-delayed {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(-5deg); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 8s ease-in-out infinite;
}
</style>
