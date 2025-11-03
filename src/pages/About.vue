<template>
  <!-- Full Width Background -->
  <div class="min-h-screen flex flex-col">
    <!-- Background Pattern -->
    <div class="absolute inset-0 w-[100vw] overflow-hidden pointer-events-none">
      <!-- Subtle Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-br from-wine/5 via-transparent to-viridian/5 dark:from-wine/10 dark:via-transparent dark:to-viridian/10"></div>

      <!-- Minimal Floating Dots -->
      <div class="absolute top-1/4 left-10 w-1.5 h-1.5 bg-wine/10 dark:bg-viridian/10 rounded-full animate-float"></div>
      <div class="absolute bottom-1/3 right-20 w-1 h-1 bg-viridian/10 dark:bg-wine/10 rounded-full animate-float-delayed"></div>
    </div>

    <!-- Contained Content -->
    <div class="relative w-[90%] md:w-[80%] lg:w-[70%] mx-auto py-36 flex-1">
      <!-- Header Section -->
      <div class="text-center space-y-4">
        <h1 class="text-5xl font-mono text-rich-black dark:text-mint-green-100">About Me</h1>
        <div class="flex flex-wrap justify-center gap-4 text-rich-black-300 dark:text-mint-green-300">
          <a href="mailto:aandrewjuan2@gmail.com" class="flex items-center gap-2 hover:text-wine dark:hover:text-viridian transition-colors">
            <i class="fas fa-envelope"></i>
            <span>aandrewjuan2@gmail.com</span>
          </a>
          <a href="tel:+639202397350" class="flex items-center gap-2 hover:text-wine dark:hover:text-viridian transition-colors">
            <i class="fas fa-phone"></i>
            <span>+63 920 239 7350</span>
          </a>
          <span class="flex items-center gap-2">
            <i class="fas fa-map-marker-alt"></i>
            <span>Dasmariñas Cavite, Philippines</span>
          </span>
        </div>
      </div>

      <!-- Main Content Sections -->
      <div class="mt-16 space-y-16">
        <!-- About Me Section -->
        <section class="space-y-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <!-- Text Content -->
            <div class="space-y-8">
              <div class="space-y-6">
                <h2 class="text-3xl font-mono text-rich-black dark:text-mint-green-100 relative inline-block">
                  Andrew Juan
                  <span class="absolute left-0 -bottom-2 w-16 h-1 bg-wine dark:bg-viridian rounded"></span>
                </h2>
                <p class="text-lg leading-relaxed text-rich-black-300 dark:text-mint-green-300 font-primary">
                  I am a Computer Science undergraduate at Emilio Aguinaldo College – Cavite, expected to graduate in 2026.
                  My passion lies in building responsive, interactive web applications that provide exceptional user experiences.
                  I specialize in both frontend and backend development, with a strong focus on clean code and user-focused design.
                </p>
              </div>
            </div>

            <!-- Profile Image Container -->
            <div class="relative">
              <!-- Additional Decorative Elements -->
              <div class="absolute -top-8 -right-8 w-16 h-16 border-2 border-dashed border-wine/20 dark:border-viridian/20 rounded-full animate-spin-slow"></div>
              <div class="absolute -bottom-8 -left-8 w-12 h-12 border-2 border-dotted border-viridian/20 dark:border-wine/20 rounded-full animate-spin-slow-reverse"></div>

              <!-- Main Image Frame -->
              <div class="relative w-full max-w-[300px] mx-auto">
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
        </section>

        <!-- Education Section -->
        <section class="space-y-8">
          <h2 class="text-3xl font-mono text-rich-black dark:text-mint-green-100 relative inline-block">
            Education
            <span class="absolute left-0 -bottom-2 w-16 h-1 bg-wine dark:bg-viridian rounded"></span>
          </h2>
          <div class="relative group">
            <!-- Card Background with Gradient Border -->
            <div class="absolute inset-0 bg-gradient-to-br from-wine/5 to-viridian/5 dark:from-wine/10 dark:to-viridian/10 rounded-2xl transform transition-transform duration-500 group-hover:scale-[1.02]"></div>
            <div class="absolute inset-0 bg-gradient-to-br from-wine/10 to-viridian/10 dark:from-wine/20 dark:to-viridian/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <!-- Card Content -->
            <div class="relative p-8">
              <!-- Timeline Container -->
              <div class="space-y-8">
                <!-- College -->
                <div class="relative">
                  <!-- Timeline Line -->
                  <div class="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-wine/20 via-viridian/20 to-transparent dark:from-wine/30 dark:via-viridian/30"></div>

                  <!-- Content -->
                  <div class="relative pl-16">
                    <!-- Timeline Dot -->
                    <div class="absolute left-4 top-2 w-4 h-4 rounded-full border-2 border-wine dark:border-viridian bg-white dark:bg-rich-black-300"></div>

                    <!-- Education Info -->
                    <div class="space-y-4">
                      <div>
                        <h3 class="text-2xl font-mono text-rich-black dark:text-mint-green-100">Bachelor of Science in Computer Science</h3>
                        <div class="mt-2 space-y-2">
                          <div class="flex items-center gap-3 text-rich-black-300 dark:text-mint-green-300">
                            <i class="fas fa-university text-wine dark:text-viridian"></i>
                            <span class="font-primary">Emilio Aguinaldo College – Cavite</span>
                          </div>
                          <div class="flex items-center gap-3 text-rich-black-300 dark:text-mint-green-300">
                            <i class="fas fa-calendar text-wine dark:text-viridian"></i>
                            <span class="font-primary">2022 - Present (Expected Graduation: 2026)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Divider -->
                <div class="relative pl-16">
                  <div class="h-px bg-gradient-to-r from-transparent via-wine/10 to-transparent dark:via-viridian/10"></div>
                </div>

                <!-- Senior High School -->
                <div class="relative">
                  <!-- Content -->
                  <div class="relative pl-16">
                    <!-- Timeline Dot -->
                    <div class="absolute left-4 top-2 w-4 h-4 rounded-full border-2 border-wine dark:border-viridian bg-white dark:bg-rich-black-300"></div>

                    <!-- Education Info -->
                    <div class="space-y-4">
                      <div>
                        <h3 class="text-2xl font-mono text-rich-black dark:text-mint-green-100">Senior High School</h3>
                        <div class="mt-2 space-y-2">
                          <div class="flex items-center gap-3 text-rich-black-300 dark:text-mint-green-300">
                            <i class="fas fa-school text-wine dark:text-viridian"></i>
                            <span class="font-primary">Emilio Aguinaldo College – Cavite</span>
                          </div>
                          <div class="flex items-center gap-3 text-rich-black-300 dark:text-mint-green-300">
                            <i class="fas fa-calendar text-wine dark:text-viridian"></i>
                            <span class="font-primary">2019 - 2021</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Divider -->
                <div class="relative pl-16">
                  <div class="h-px bg-gradient-to-r from-transparent via-wine/10 to-transparent dark:via-viridian/10"></div>
                </div>

                <!-- Junior High School -->
                <div class="relative">
                  <!-- Content -->
                  <div class="relative pl-16">
                    <!-- Timeline Dot -->
                    <div class="absolute left-4 top-2 w-4 h-4 rounded-full border-2 border-wine dark:border-viridian bg-white dark:bg-rich-black-300"></div>

                    <!-- Education Info -->
                    <div class="space-y-4">
                      <div>
                        <h3 class="text-2xl font-mono text-rich-black dark:text-mint-green-100">Junior High School</h3>
                        <div class="mt-2 space-y-2">
                          <div class="flex items-center gap-3 text-rich-black-300 dark:text-mint-green-300">
                            <i class="fas fa-school text-wine dark:text-viridian"></i>
                            <span class="font-primary">Christar Academy</span>
                          </div>
                          <div class="flex items-center gap-3 text-rich-black-300 dark:text-mint-green-300">
                            <i class="fas fa-calendar text-wine dark:text-viridian"></i>
                            <span class="font-primary">2015 - 2019</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Decorative Elements -->
              <div class="absolute -top-6 -right-6 w-12 h-12 border-2 border-dashed border-wine/20 dark:border-viridian/20 rounded-full animate-spin-slow"></div>
              <div class="absolute -bottom-6 -left-6 w-8 h-8 border-2 border-dotted border-viridian/20 dark:border-wine/20 rounded-full animate-spin-slow-reverse"></div>
            </div>
          </div>
        </section>

        <!-- Experience Section -->
        <section class="space-y-8">
          <h2 class="text-3xl font-mono text-rich-black dark:text-mint-green-100 relative inline-block">
            Experience
            <span class="absolute left-0 -bottom-2 w-16 h-1 bg-wine dark:bg-viridian rounded"></span>
          </h2>
          <div class="relative group">
            <!-- Card Background with Gradient Border -->
            <div class="absolute inset-0 bg-gradient-to-br from-wine/5 to-viridian/5 dark:from-wine/10 dark:to-viridian/10 rounded-2xl transform transition-transform duration-500 group-hover:scale-[1.02]"></div>
            <div class="absolute inset-0 bg-gradient-to-br from-wine/10 to-viridian/10 dark:from-wine/20 dark:to-viridian/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <!-- Card Content -->
            <div class="relative p-8">
              <!-- Timeline Container -->
              <div class="space-y-8">
                <!-- Tech Support (Internship) -->
                <div class="relative">
                  <!-- Timeline Line -->
                  <div class="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-wine/20 via-viridian/20 to-transparent dark:from-wine/30 dark:via-viridian/30"></div>

                  <!-- Content -->
                  <div class="relative pl-16">
                    <!-- Timeline Dot -->
                    <div class="absolute left-4 top-2 w-4 h-4 rounded-full border-2 border-wine dark:border-viridian bg-white dark:bg-rich-black-300"></div>

                    <!-- Experience Info -->
                    <div class="space-y-4">
                      <div>
                        <h3 class="text-2xl font-mono text-rich-black dark:text-mint-green-100">Tech Support (Internship)</h3>
                        <div class="mt-2 space-y-2">
                          <div class="flex items-center gap-3 text-rich-black-300 dark:text-mint-green-300">
                            <i class="fas fa-building text-wine dark:text-viridian"></i>
                            <span class="font-primary">De La Salle University — Dasmariñas</span>
                          </div>
                          <div class="flex items-center gap-3 text-rich-black-300 dark:text-mint-green-300">
                            <i class="fas fa-calendar text-wine dark:text-viridian"></i>
                            <span class="font-primary">June 2025 – August 2025</span>
                          </div>
                        </div>
                      </div>

                      <!-- Responsibilities -->
                      <ul class="mt-4 space-y-2">
                        <li class="flex items-start gap-3 text-rich-black-300 dark:text-mint-green-300 font-primary">
                          <i class="fas fa-angle-right mt-1 text-wine dark:text-viridian"></i>
                          <span>Provided technical support to students and faculty: troubleshooting hardware, software, and connectivity issues.</span>
                        </li>
                        <li class="flex items-start gap-3 text-rich-black-300 dark:text-mint-green-300 font-primary">
                          <i class="fas fa-angle-right mt-1 text-wine dark:text-viridian"></i>
                          <span>Responded to and managed support requests; documented steps-to-reproduce and resolutions.</span>
                        </li>
                        <li class="flex items-start gap-3 text-rich-black-300 dark:text-mint-green-300 font-primary">
                          <i class="fas fa-angle-right mt-1 text-wine dark:text-viridian"></i>
                          <span>Assisted with lab setup and software installation for instructional environments.</span>
                        </li>
                        <li class="flex items-start gap-3 text-rich-black-300 dark:text-mint-green-300 font-primary">
                          <i class="fas fa-angle-right mt-1 text-wine dark:text-viridian"></i>
                          <span>Maintained asset inventory and updated knowledge-base entries to improve troubleshooting efficiency.</span>
                        </li>
                        <li class="flex items-start gap-3 text-rich-black-300 dark:text-mint-green-300 font-primary">
                          <i class="fas fa-angle-right mt-1 text-wine dark:text-viridian"></i>
                          <span>Collaborated with the IT team to escalate and resolve recurring issues.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Decorative Elements -->
              <div class="absolute -top-6 -right-6 w-12 h-12 border-2 border-dashed border-wine/20 dark:border-viridian/20 rounded-full animate-spin-slow"></div>
              <div class="absolute -bottom-6 -left-6 w-8 h-8 border-2 border-dotted border-viridian/20 dark:border-wine/20 rounded-full animate-spin-slow-reverse"></div>
            </div>
          </div>
        </section>

        <!-- Technical Skills Section -->
        <section class="space-y-8">
          <h2 class="text-3xl font-mono text-rich-black dark:text-mint-green-100 relative inline-block">
            Technical Skills
            <span class="absolute left-0 -bottom-2 w-16 h-1 bg-wine dark:bg-viridian rounded"></span>
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Languages -->
            <div class="relative group">
              <!-- Card Background with Gradient Border -->
              <div class="absolute inset-0 bg-gradient-to-br from-wine/5 to-viridian/5 dark:from-wine/10 dark:to-viridian/10 rounded-2xl transform transition-transform duration-500 group-hover:scale-[1.02]"></div>
              <div class="absolute inset-0 bg-gradient-to-br from-wine/10 to-viridian/10 dark:from-wine/20 dark:to-viridian/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <!-- Card Content -->
              <div class="relative p-6 space-y-6">
                <!-- Header with Decorative Line -->
                <div class="relative">
                  <h4 class="text-xl font-mono text-rich-black dark:text-mint-green-100 relative z-10">Languages</h4>
                  <div class="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-8 bg-wine/20 dark:bg-viridian/20 rounded-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                </div>

                <!-- Skills Grid -->
                <div class="grid grid-cols-2 gap-4">
                  <a href="https://www.php.net/docs.php" target="_blank" rel="noopener noreferrer"
                     class="flex items-center gap-3 p-3 rounded-xl bg-white/50 dark:bg-rich-black-300 backdrop-blur-sm border border-wine/10 dark:border-viridian/10 transition-all duration-300 hover:bg-wine/5 dark:hover:bg-viridian/5 hover:translate-x-1 group/skill">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP"
                         class="w-6 h-6 transition-transform duration-300 group-hover/skill:scale-110" />
                    <span class="text-sm font-primary text-rich-black dark:text-mint-green-100">PHP</span>
                  </a>
                  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer"
                     class="flex items-center gap-3 p-3 rounded-xl bg-white/50 dark:bg-rich-black-300 backdrop-blur-sm border border-wine/10 dark:border-viridian/10 transition-all duration-300 hover:bg-wine/5 dark:hover:bg-viridian/5 hover:translate-x-1 group/skill">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript"
                         class="w-6 h-6 transition-transform duration-300 group-hover/skill:scale-110" />
                    <span class="text-sm font-primary text-rich-black dark:text-mint-green-100">JavaScript</span>
                  </a>
                  <a href="https://www.typescriptlang.org/docs/" target="_blank" rel="noopener noreferrer"
                     class="flex items-center gap-3 p-3 rounded-xl bg-white/50 dark:bg-rich-black-300 backdrop-blur-sm border border-wine/10 dark:border-viridian/10 transition-all duration-300 hover:bg-wine/5 dark:hover:bg-viridian/5 hover:translate-x-1 group/skill">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript"
                         class="w-6 h-6 transition-transform duration-300 group-hover/skill:scale-110" />
                    <span class="text-sm font-primary text-rich-black dark:text-mint-green-100">TypeScript</span>
                  </a>
                  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer"
                     class="flex items-center gap-3 p-3 rounded-xl bg-white/50 dark:bg-rich-black-300 backdrop-blur-sm border border-wine/10 dark:border-viridian/10 transition-all duration-300 hover:bg-wine/5 dark:hover:bg-viridian/5 hover:translate-x-1 group/skill">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML/CSS"
                         class="w-6 h-6 transition-transform duration-300 group-hover/skill:scale-110" />
                    <span class="text-sm font-primary text-rich-black dark:text-mint-green-100">HTML/CSS</span>
                  </a>
                  <a href="https://dev.mysql.com/doc/" target="_blank" rel="noopener noreferrer"
                     class="flex items-center gap-3 p-3 rounded-xl bg-white/50 dark:bg-rich-black-300 backdrop-blur-sm border border-wine/10 dark:border-viridian/10 transition-all duration-300 hover:bg-wine/5 dark:hover:bg-viridian/5 hover:translate-x-1 group/skill">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL"
                         class="w-6 h-6 transition-transform duration-300 group-hover/skill:scale-110" />
                    <span class="text-sm font-primary text-rich-black dark:text-mint-green-100">SQL</span>
                  </a>
                  <a href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer"
                     class="flex items-center gap-3 p-3 rounded-xl bg-white/50 dark:bg-rich-black-300 backdrop-blur-sm border border-wine/10 dark:border-viridian/10 transition-all duration-300 hover:bg-wine/5 dark:hover:bg-viridian/5 hover:translate-x-1 group/skill">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python"
                         class="w-6 h-6 transition-transform duration-300 group-hover/skill:scale-110" />
                    <span class="text-sm font-primary text-rich-black dark:text-mint-green-100">Python</span>
                  </a>
                </div>
              </div>
            </div>

            <!-- Frameworks & Libraries -->
            <div class="relative group">
              <!-- Card Background with Gradient Border -->
              <div class="absolute inset-0 bg-gradient-to-br from-wine/5 to-viridian/5 dark:from-wine/10 dark:to-viridian/10 rounded-2xl transform transition-transform duration-500 group-hover:scale-[1.02]"></div>
              <div class="absolute inset-0 bg-gradient-to-br from-wine/10 to-viridian/10 dark:from-wine/20 dark:to-viridian/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <!-- Card Content -->
              <div class="relative p-6 space-y-6">
                <!-- Header with Decorative Line -->
                <div class="relative">
                  <h4 class="text-xl font-mono text-rich-black dark:text-mint-green-100 relative z-10">Frameworks & Libraries</h4>
                  <div class="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-8 bg-wine/20 dark:bg-viridian/20 rounded-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                </div>

                <!-- Skills Grid -->
                <div class="grid grid-cols-2 gap-4">
                  <a href="https://laravel.com/docs" target="_blank" rel="noopener noreferrer"
                     class="flex items-center gap-3 p-3 rounded-xl bg-white/50 dark:bg-rich-black-300 backdrop-blur-sm border border-wine/10 dark:border-viridian/10 transition-all duration-300 hover:bg-wine/5 dark:hover:bg-viridian/5 hover:translate-x-1 group/skill">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" alt="Laravel"
                         class="w-6 h-6 transition-transform duration-300 group-hover/skill:scale-110" />
                    <span class="text-sm font-primary text-rich-black dark:text-mint-green-100">Laravel</span>
                  </a>
                  <a href="https://vuejs.org/guide/introduction.html" target="_blank" rel="noopener noreferrer"
                     class="flex items-center gap-3 p-3 rounded-xl bg-white/50 dark:bg-rich-black-300 backdrop-blur-sm border border-wine/10 dark:border-viridian/10 transition-all duration-300 hover:bg-wine/5 dark:hover:bg-viridian/5 hover:translate-x-1 group/skill">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js"
                         class="w-6 h-6 transition-transform duration-300 group-hover/skill:scale-110" />
                    <span class="text-sm font-primary text-rich-black dark:text-mint-green-100">Vue.js</span>
                  </a>
                  <a href="https://api.jquery.com/" target="_blank" rel="noopener noreferrer"
                     class="flex items-center gap-3 p-3 rounded-xl bg-white/50 dark:bg-rich-black-300 backdrop-blur-sm border border-wine/10 dark:border-viridian/10 transition-all duration-300 hover:bg-wine/5 dark:hover:bg-viridian/5 hover:translate-x-1 group/skill">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" alt="jQuery"
                         class="w-6 h-6 transition-transform duration-300 group-hover/skill:scale-110" />
                    <span class="text-sm font-primary text-rich-black dark:text-mint-green-100">jQuery</span>
                  </a>
                  <a href="https://tailwindcss.com/docs" target="_blank" rel="noopener noreferrer"
                     class="flex items-center gap-3 p-3 rounded-xl bg-white/50 dark:bg-rich-black-300 backdrop-blur-sm border border-wine/10 dark:border-viridian/10 transition-all duration-300 hover:bg-wine/5 dark:hover:bg-viridian/5 hover:translate-x-1 group/skill">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind"
                         class="w-6 h-6 transition-transform duration-300 group-hover/skill:scale-110" />
                    <span class="text-sm font-primary text-rich-black dark:text-mint-green-100">Tailwind</span>
                  </a>
                  <a href="https://alpinejs.dev/start-here" target="_blank" rel="noopener noreferrer"
                     class="flex items-center gap-3 p-3 rounded-xl bg-white/50 dark:bg-rich-black-300 backdrop-blur-sm border border-wine/10 dark:border-viridian/10 transition-all duration-300 hover:bg-wine/5 dark:hover:bg-viridian/5 hover:translate-x-1 group/skill">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/alpinejs/alpinejs-original.svg" alt="Alpine.js"
                         class="w-6 h-6 transition-transform duration-300 group-hover/skill:scale-110" />
                    <span class="text-sm font-primary text-rich-black dark:text-mint-green-100">Alpine.js</span>
                  </a>
                </div>
              </div>
            </div>

            <!-- Tools & Practices -->
            <div class="relative group">
              <!-- Card Background with Gradient Border -->
              <div class="absolute inset-0 bg-gradient-to-br from-wine/5 to-viridian/5 dark:from-wine/10 dark:to-viridian/10 rounded-2xl transform transition-transform duration-500 group-hover:scale-[1.02]"></div>
              <div class="absolute inset-0 bg-gradient-to-br from-wine/10 to-viridian/10 dark:from-wine/20 dark:to-viridian/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <!-- Card Content -->
              <div class="relative p-6 space-y-6">
                <!-- Header with Decorative Line -->
                <div class="relative">
                  <h4 class="text-xl font-mono text-rich-black dark:text-mint-green-100 relative z-10">Tools & Practices</h4>
                  <div class="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-8 bg-wine/20 dark:bg-viridian/20 rounded-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                </div>

                <!-- Skills Grid -->
                <div class="grid grid-cols-2 gap-4">
                  <a href="https://git-scm.com/doc" target="_blank" rel="noopener noreferrer"
                     class="flex items-center gap-3 p-3 rounded-xl bg-white/50 dark:bg-rich-black-300 backdrop-blur-sm border border-wine/10 dark:border-viridian/10 transition-all duration-300 hover:bg-wine/5 dark:hover:bg-viridian/5 hover:translate-x-1 group/skill">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git"
                         class="w-6 h-6 transition-transform duration-300 group-hover/skill:scale-110" />
                    <span class="text-sm font-primary text-rich-black dark:text-mint-green-100">Git</span>
                  </a>
                  <a href="https://docs.github.com/en" target="_blank" rel="noopener noreferrer"
                     class="flex items-center gap-3 p-3 rounded-xl bg-white/50 dark:bg-rich-black-300 backdrop-blur-sm border border-wine/10 dark:border-viridian/10 transition-all duration-300 hover:bg-wine/5 dark:hover:bg-viridian/5 hover:translate-x-1 group/skill">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub"
                         class="w-6 h-6 transition-transform duration-300 group-hover/skill:scale-110" />
                    <span class="text-sm font-primary text-rich-black dark:text-mint-green-100">GitHub</span>
                  </a>
                  <a href="https://dev.mysql.com/doc/" target="_blank" rel="noopener noreferrer"
                     class="flex items-center gap-3 p-3 rounded-xl bg-white/50 dark:bg-rich-black-300 backdrop-blur-sm border border-wine/10 dark:border-viridian/10 transition-all duration-300 hover:bg-wine/5 dark:hover:bg-viridian/5 hover:translate-x-1 group/skill">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL"
                         class="w-6 h-6 transition-transform duration-300 group-hover/skill:scale-110" />
                    <span class="text-sm font-primary text-rich-black dark:text-mint-green-100">MySQL</span>
                  </a>
                  <a href="https://www.sqlite.org/docs.html" target="_blank" rel="noopener noreferrer"
                     class="flex items-center gap-3 p-3 rounded-xl bg-white/50 dark:bg-rich-black-300 backdrop-blur-sm border border-wine/10 dark:border-viridian/10 transition-all duration-300 hover:bg-wine/5 dark:hover:bg-viridian/5 hover:translate-x-1 group/skill">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" alt="SQLite"
                         class="w-6 h-6 transition-transform duration-300 group-hover/skill:scale-110" />
                    <span class="text-sm font-primary text-rich-black dark:text-mint-green-100">SQLite</span>
                  </a>
                  <a href="https://learning.postman.com/docs/getting-started/introduction/" target="_blank" rel="noopener noreferrer"
                     class="flex items-center gap-3 p-3 rounded-xl bg-white/50 dark:bg-rich-black-300 backdrop-blur-sm border border-wine/10 dark:border-viridian/10 transition-all duration-300 hover:bg-wine/5 dark:hover:bg-viridian/5 hover:translate-x-1 group/skill">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" alt="Postman"
                         class="w-6 h-6 transition-transform duration-300 group-hover/skill:scale-110" />
                    <span class="text-sm font-primary text-rich-black dark:text-mint-green-100">Postman</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import profileImage from '../assets/about/profileImage.png'
import Footer from '../components/layout/Footer.vue'

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

<style scoped>
/* Add Font Awesome for icons */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');
</style>
