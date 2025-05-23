<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Main content -->
    <div class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto text-center">
        <!-- Greeting with fade-in animation -->
        <div class="mb-4 text-lg sm:text-xl text-[var(--color-rich-black)] dark:text-[var(--color-mint-green-300)] font-mono animate-fade-in">
          <span class="typing-text">Hello, I'm</span>
        </div>

        <!-- Name with slide-up animation -->
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-mono mb-6 text-[var(--color-wine)] dark:text-[var(--color-mint-green)] animate-slide-up">
          Andrew Juan
        </h1>

        <!-- Subtitle with typing animation -->
        <div class="h-20 sm:h-24">
          <p class="text-xl sm:text-2xl text-[var(--color-rich-black)] dark:text-[var(--color-viridian-300)] font-light">
            <span class="typing-subtitle"></span>
            <span class="typing-cursor">|</span>
          </p>
        </div>


        <!-- CTA Buttons -->
        <div class="mb-12 flex justify-center gap-6 animate-fade-in animation-delay-500">
          <a href="#projects"
             class="px-8 py-3 rounded-lg font-mono text-base font-medium transition-all duration-300
                    bg-[var(--color-wine)] text-white dark:bg-[var(--color-mint-green)] dark:text-[var(--color-rich-black)]
                    hover:bg-[var(--color-wine-700)] dark:hover:bg-[var(--color-mint-green-300)]
                    transform hover:scale-[1.02] hover:shadow-md
                    border-2 border-transparent hover:border-[var(--color-wine-400)] dark:hover:border-[var(--color-mint-green-300)]">
            View Projects
          </a>
          <a href="#contact"
             class="px-8 py-3 rounded-lg font-mono text-base font-medium transition-all duration-300
                    bg-transparent text-[var(--color-wine)] dark:text-[var(--color-mint-green)]
                    border-2 border-[var(--color-wine)] dark:border-[var(--color-mint-green)]
                    hover:bg-[var(--color-wine-50)] dark:hover:bg-[var(--color-mint-green-50)]
                    hover:text-[var(--color-wine-700)] dark:hover:text-[var(--color-mint-green-700)]
                    transform hover:scale-[1.02] hover:shadow-md">
            Contact Me
          </a>
        </div>


        <!-- Divider line -->
        <div class="w-24 h-0.5 bg-[var(--color-wine)] dark:bg-[var(--color-mint-green)] mx-auto mb-8 animate-fade-in animation-delay-400"></div>

        <!-- Social Links with fade-in animation -->
        <div class="font-mono flex justify-center gap-8 animate-fade-in animation-delay-700">
          <a href="https://github.com/aandrewjuan1" target="_blank" rel="noopener noreferrer"
             class="group flex flex-col items-center text-[var(--color-rich-black)] dark:text-[var(--color-viridian-300)] hover:text-[var(--color-wine)] dark:hover:text-[var(--color-mint-green)] transition-all duration-300">
            <i class="fab fa-github text-3xl mb-2"></i>
            <span class="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/andrew-juan-0b8757362/" target="_blank" rel="noopener noreferrer"
             class="group flex flex-col items-center text-[var(--color-rich-black)] dark:text-[var(--color-viridian-300)] hover:text-[var(--color-wine)] dark:hover:text-[var(--color-mint-green)] transition-all duration-300">
            <i class="fab fa-linkedin text-3xl mb-2"></i>
            <span class="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

const subtitleText = "CS Student | Full Stack Developer | Seeking Internship";
let currentText = '';
let currentIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

const typeText = () => {
  const typingElement = document.querySelector('.typing-subtitle');
  if (!typingElement) return;

  if (isDeleting) {
    currentText = subtitleText.substring(0, currentIndex - 1);
    currentIndex--;
    typingSpeed = 50;
  } else {
    currentText = subtitleText.substring(0, currentIndex + 1);
    currentIndex++;
    typingSpeed = 100;
  }

  typingElement.textContent = currentText;

  if (!isDeleting && currentIndex === subtitleText.length) {
    isDeleting = true;
    typingSpeed = 2000; // Pause at end
  } else if (isDeleting && currentIndex === 0) {
    isDeleting = false;
    typingSpeed = 500; // Pause before starting again
  }

  setTimeout(typeText, typingSpeed);
};

onMounted(() => {
  // Add Font Awesome CDN
  const fontAwesomeScript = document.createElement('link');
  fontAwesomeScript.rel = 'stylesheet';
  fontAwesomeScript.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
  document.head.appendChild(fontAwesomeScript);

  // Start typing animation
  typeText();
});
</script>

<style>
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
}

.animate-slide-up {
  animation: slide-up 0.8s ease-out forwards;
}

.animation-delay-300 {
  animation-delay: 0.3s;
}

.animation-delay-500 {
  animation-delay: 0.5s;
}

.animation-delay-700 {
  animation-delay: 0.7s;
}

.typing-cursor {
  animation: blink 1s infinite;
}

@keyframes blink {
  50% { opacity: 0; }
}
</style>
