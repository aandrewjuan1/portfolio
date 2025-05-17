<template>
  <section class="relative z-10 overflow-hidden" id="about">
    <!-- Full Width Background -->
    <div class="absolute inset-0 w-[100vw] overflow-hidden pointer-events-none">
      <!-- Diagonal Lines Pattern -->
      <div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div class="absolute inset-0" style="background-image: repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%); background-size: 20px 20px;"></div>
      </div>

      <!-- Floating Dots -->
      <div class="absolute top-1/4 left-10 w-2 h-2 bg-wine/20 dark:bg-viridian/20 rounded-full animate-float"></div>
      <div class="absolute bottom-1/3 right-20 w-1.5 h-1.5 bg-viridian/20 dark:bg-wine/20 rounded-full animate-float-delayed"></div>
      <div class="absolute top-2/3 left-1/4 w-1 h-1 bg-wine/20 dark:bg-viridian/20 rounded-full animate-float"></div>

      <!-- Connecting Lines -->
      <div class="absolute top-1/2 left-0 w-16 h-px bg-gradient-to-r from-transparent via-wine/20 dark:via-viridian/20 to-transparent"></div>
      <div class="absolute top-1/2 right-0 w-16 h-px bg-gradient-to-l from-transparent via-wine/20 dark:via-viridian/20 to-transparent"></div>
    </div>

    <!-- Content Container -->
    <div class="relative py-24">
      <div class="w-[90%] md:w-[80%] lg:w-[70%] mx-auto space-y-16">
        <!-- About Me and Image Section -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative">
          <!-- Decorative Corner Elements -->

          <!-- Text Content -->
          <div class="space-y-8">
            <div class="space-y-6">
              <h2 class="text-4xl font-mono text-rich-black dark:text-mint-green-100 relative inline-block">
                About Me
                <span class="absolute left-0 -bottom-3 w-16 h-1 bg-wine dark:bg-viridian rounded transform transition-all duration-300 group-hover:w-24"></span>
              </h2>
              <p class="text-lg leading-relaxed text-rich-black-300 dark:text-mint-green-300 font-primary max-w-2xl">
                Motivated Computer Science undergraduate with hands-on experience building responsive,
                interactive web applications. Seeking an internship role where I can contribute to both frontend
                and backend development. Passionate about clean code, user-focused design, and learning
                modern web technologies in real-world environments.
              </p>
            </div>
          </div>

          <!-- Creative Image Container -->
          <div class="relative">
            <!-- Additional Decorative Elements -->
            <div class="absolute -top-8 -right-8 w-16 h-16 border-2 border-dashed border-wine/20 dark:border-viridian/20 rounded-full animate-spin-slow"></div>
            <div class="absolute -bottom-8 -left-8 w-12 h-12 border-2 border-dotted border-viridian/20 dark:border-wine/20 rounded-full animate-spin-slow-reverse"></div>

            <!-- Main Image Frame -->
            <div class="relative w-full max-w-[400px] mx-auto">
              <!-- Decorative Border Elements -->
              <div class="absolute -top-6 -left-6 w-24 h-24 border-4 border-viridian dark:border-wine rounded-lg transform -rotate-12 transition-transform duration-500 hover:rotate-0"></div>
              <div class="absolute -bottom-6 -right-6 w-24 h-24 border-4 border-wine dark:border-viridian rounded-lg transform rotate-12 transition-transform duration-500 hover:rotate-0"></div>

              <!-- Image Container with Gradient Overlay -->
              <div class="relative overflow-hidden rounded-xl group">
                <!-- Gradient Overlay -->
                <div class="absolute inset-0 bg-gradient-to-br from-viridian/20 via-transparent to-wine/20 dark:from-wine/20 dark:to-viridian/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <!-- Main Image -->
                <img
                  :src="profileImage"
                  alt="Profile Image"
                  class="w-full aspect-square object-cover transform transition-all duration-700 group-hover:scale-105"
                />
              </div>

              <!-- Floating Elements -->
              <div class="absolute -z-10 inset-0">
                <div class="absolute top-1/2 -left-8 w-16 h-16 bg-viridian/10 dark:bg-wine/10 rounded-full blur-xl animate-float"></div>
                <div class="absolute bottom-1/4 -right-8 w-20 h-20 bg-wine/10 dark:bg-viridian/10 rounded-full blur-xl animate-float-delayed"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Skills Section -->
        <div class="space-y-8 relative">
          <!-- Decorative Line -->
          <div class="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-wine/30 dark:via-viridian/30 to-transparent"></div>

          <div class="flex items-center justify-between">
            <div class="space-y-2">
              <h3 class="text-2xl font-mono text-rich-black dark:text-mint-green-100">My Skills</h3>
              <div class="w-16 h-1 bg-wine/60 dark:bg-viridian/60 rounded-full"></div>
            </div>
            <router-link
              to="/about"
              class="inline-flex items-center gap-2 px-6 py-3 bg-wine dark:bg-viridian text-mint-green-100 rounded-full font-mono font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-wine-700 dark:hover:bg-viridian-700 hover:shadow-lg group relative overflow-hidden"
            >
              <span class="relative z-10">Learn More About Me</span>
              <span class="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </router-link>
          </div>

          <!-- Skills Categories -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
            <!-- Languages -->
            <div class="space-y-6 group">
              <div class="relative">
                <h4 class="text-lg font-mono text-rich-black-300 dark:text-mint-green-300 relative z-10">Languages</h4>
                <div class="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-8 bg-wine/20 dark:bg-viridian/20 rounded-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
              </div>
              <div class="grid grid-cols-2 gap-6">
                <a href="https://www.php.net/docs.php" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 text-rich-black dark:text-mint-green-100 p-3 rounded-lg transition-all duration-300 hover:bg-wine/5 dark:hover:bg-viridian/5 hover:translate-x-1 group/skill">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" class="w-6 h-6 transition-transform duration-300 group-hover/skill:scale-110" />
                  <span class="text-sm font-primary">PHP</span>
                </a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 text-rich-black dark:text-mint-green-100 p-3 rounded-lg transition-all duration-300 hover:bg-wine/5 dark:hover:bg-viridian/5 hover:translate-x-1 group/skill">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" class="w-6 h-6 transition-transform duration-300 group-hover/skill:scale-110" />
                  <span class="text-sm font-primary">JavaScript</span>
                </a>
                <a href="https://www.typescriptlang.org/docs/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 text-rich-black dark:text-mint-green-100 p-3 rounded-lg transition-all duration-300 hover:bg-wine/5 dark:hover:bg-viridian/5 hover:translate-x-1 group/skill">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" class="w-6 h-6 transition-transform duration-300 group-hover/skill:scale-110" />
                  <span class="text-sm font-primary">TypeScript</span>
                </a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 text-rich-black dark:text-mint-green-100 p-3 rounded-lg transition-all duration-300 hover:bg-wine/5 dark:hover:bg-viridian/5 hover:translate-x-1 group/skill">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML/CSS" class="w-6 h-6 transition-transform duration-300 group-hover/skill:scale-110" />
                  <span class="text-sm font-primary">HTML/CSS</span>
                </a>
                <a href="https://dev.mysql.com/doc/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 text-rich-black dark:text-mint-green-100 p-3 rounded-lg transition-all duration-300 hover:bg-wine/5 dark:hover:bg-viridian/5 hover:translate-x-1 group/skill">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" class="w-6 h-6 transition-transform duration-300 group-hover/skill:scale-110" />
                  <span class="text-sm font-primary">SQL</span>
                </a>
                <a href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 text-rich-black dark:text-mint-green-100 p-3 rounded-lg transition-all duration-300 hover:bg-wine/5 dark:hover:bg-viridian/5 hover:translate-x-1 group/skill">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" class="w-6 h-6 transition-transform duration-300 group-hover/skill:scale-110" />
                  <span class="text-sm font-primary">Python</span>
                </a>
              </div>
            </div>

            <!-- Frameworks -->
            <div class="space-y-6 group">
              <div class="relative">
                <h4 class="text-lg font-mono text-rich-black-300 dark:text-mint-green-300 relative z-10">Frameworks & Libraries</h4>
                <div class="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-8 bg-wine/20 dark:bg-viridian/20 rounded-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
              </div>
              <div class="grid grid-cols-2 gap-6">
                <a href="https://laravel.com/docs" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 text-rich-black dark:text-mint-green-100 p-3 rounded-lg transition-all duration-300 hover:bg-wine/5 dark:hover:bg-viridian/5 hover:translate-x-1 group/skill">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" alt="Laravel" class="w-6 h-6 transition-transform duration-300 group-hover/skill:scale-110" />
                  <span class="text-sm font-primary">Laravel</span>
                </a>
                <a href="https://vuejs.org/guide/introduction.html" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 text-rich-black dark:text-mint-green-100 p-3 rounded-lg transition-all duration-300 hover:bg-wine/5 dark:hover:bg-viridian/5 hover:translate-x-1 group/skill">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" class="w-6 h-6 transition-transform duration-300 group-hover/skill:scale-110" />
                  <span class="text-sm font-primary">Vue.js</span>
                </a>
                <a href="https://api.jquery.com/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 text-rich-black dark:text-mint-green-100 p-3 rounded-lg transition-all duration-300 hover:bg-wine/5 dark:hover:bg-viridian/5 hover:translate-x-1 group/skill">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" alt="jQuery" class="w-6 h-6 transition-transform duration-300 group-hover/skill:scale-110" />
                  <span class="text-sm font-primary">jQuery</span>
                </a>
                <a href="https://tailwindcss.com/docs" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 text-rich-black dark:text-mint-green-100 p-3 rounded-lg transition-all duration-300 hover:bg-wine/5 dark:hover:bg-viridian/5 hover:translate-x-1 group/skill">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" class="w-6 h-6 transition-transform duration-300 group-hover/skill:scale-110" />
                  <span class="text-sm font-primary">Tailwind</span>
                </a>
                <a href="https://alpinejs.dev/start-here" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 text-rich-black dark:text-mint-green-100 p-3 rounded-lg transition-all duration-300 hover:bg-wine/5 dark:hover:bg-viridian/5 hover:translate-x-1 group/skill">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/alpinejs/alpinejs-original.svg" alt="Alpine.js" class="w-6 h-6 transition-transform duration-300 group-hover/skill:scale-110" />
                  <span class="text-sm font-primary">Alpine.js</span>
                </a>
              </div>
            </div>

            <!-- Tools & Practices -->
            <div class="space-y-6 group">
              <div class="relative">
                <h4 class="text-lg font-mono text-rich-black-300 dark:text-mint-green-300 relative z-10">Tools & Practices</h4>
                <div class="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-8 bg-wine/20 dark:bg-viridian/20 rounded-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
              </div>
              <div class="grid grid-cols-2 gap-6">
                <a href="https://git-scm.com/doc" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 text-rich-black dark:text-mint-green-100 p-3 rounded-lg transition-all duration-300 hover:bg-wine/5 dark:hover:bg-viridian/5 hover:translate-x-1 group/skill">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" class="w-6 h-6 transition-transform duration-300 group-hover/skill:scale-110" />
                  <span class="text-sm font-primary">Git</span>
                </a>
                <a href="https://docs.github.com/en" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 text-rich-black dark:text-mint-green-100 p-3 rounded-lg transition-all duration-300 hover:bg-wine/5 dark:hover:bg-viridian/5 hover:translate-x-1 group/skill">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" class="w-6 h-6 transition-transform duration-300 group-hover/skill:scale-110" />
                  <span class="text-sm font-primary">GitHub</span>
                </a>
                <a href="https://dev.mysql.com/doc/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 text-rich-black dark:text-mint-green-100 p-3 rounded-lg transition-all duration-300 hover:bg-wine/5 dark:hover:bg-viridian/5 hover:translate-x-1 group/skill">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" class="w-6 h-6 transition-transform duration-300 group-hover/skill:scale-110" />
                  <span class="text-sm font-primary">MySQL</span>
                </a>
                <a href="https://www.sqlite.org/docs.html" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 text-rich-black dark:text-mint-green-100 p-3 rounded-lg transition-all duration-300 hover:bg-wine/5 dark:hover:bg-viridian/5 hover:translate-x-1 group/skill">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" alt="SQLite" class="w-6 h-6 transition-transform duration-300 group-hover/skill:scale-110" />
                  <span class="text-sm font-primary">SQLite</span>
                </a>
                <a href="https://learning.postman.com/docs/getting-started/introduction/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 text-rich-black dark:text-mint-green-100 p-3 rounded-lg transition-all duration-300 hover:bg-wine/5 dark:hover:bg-viridian/5 hover:translate-x-1 group/skill">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" alt="Postman" class="w-6 h-6 transition-transform duration-300 group-hover/skill:scale-110" />
                  <span class="text-sm font-primary">Postman</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import profileImage from '../../assets/about/profileImage.jpg'

// Add keyframes for floating animation and new animations
const style = document.createElement('style')
style.textContent = `
  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(5deg); }
  }
  @keyframes float-delayed {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-15px) rotate(-5deg); }
  }
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes spin-slow-reverse {
    from { transform: rotate(360deg); }
    to { transform: rotate(0deg); }
  }
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  .animate-float-delayed {
    animation: float-delayed 8s ease-in-out infinite;
  }
  .animate-spin-slow {
    animation: spin-slow 20s linear infinite;
  }
  .animate-spin-slow-reverse {
    animation: spin-slow-reverse 25s linear infinite;
  }
`
document.head.appendChild(style)
</script>
