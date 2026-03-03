<script setup lang="ts">
// HeroSection — Asliddin Abdujabborov portfolio
</script>

<template>
  <section class="relative px-6 pt-16 pb-14 md:pt-24 md:pb-20 overflow-hidden">

    <!-- Ambient glow — hex only -->
    <div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div class="absolute -top-24 left-0 w-[500px] h-[300px] rounded-full opacity-30 dark:opacity-10"
        style="background: radial-gradient(ellipse, #BAE6FD 0%, transparent 70%);"></div>
      <div class="absolute top-10 right-0 w-[300px] h-[200px] rounded-full opacity-20 dark:opacity-5"
        style="background: radial-gradient(ellipse, #E0F2FE 0%, transparent 70%);"></div>
    </div>

    <div class="relative max-w-5xl mx-auto">
      <div class="max-w-2xl">

        <!-- Avatar + status row -->
        <div class="animate-fade-up delay-1 flex items-center gap-4 mb-8">
          <!-- Avatar -->
          <div class="relative shrink-0">
            <div class="w-14 h-14 rounded-full flex items-center justify-center font-mono font-bold text-white text-lg"
              style="background: linear-gradient(135deg, #38BDF8, #0EA5E9, #0284C7);">
              A
            </div>
            <span class="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-zinc-50 dark:border-zinc-950"
              style="background-color: #22C55E;"></span>
          </div>

          <!-- Status -->
          <div class="flex flex-col gap-0.5">
            <span class="text-xs font-medium" style="color: #16A34A;">
              Available for work
            </span>
            <span class="font-mono text-xs text-zinc-400 dark:text-zinc-500">
              Karshi, Uzbekistan
            </span>
          </div>
        </div>

        <!-- Name — both words same weight & color -->
        <div class="animate-fade-up delay-2 mb-3">
          <h1 class="font-bold tracking-tight text-zinc-900 dark:text-zinc-100 leading-[1.08]"
            style="font-size: clamp(2rem, 5vw, 3rem);">
            Asliddin Abdujabborov
          </h1>
        </div>

        <!-- Role -->
        <div class="animate-fade-up delay-3 mb-5">
          <p class="font-mono text-sm text-zinc-500 dark:text-zinc-400 tracking-wide">
            Backend Developer (Python) · API Architect · Mentor
          </p>
        </div>

        <!-- Bio -->
        <div class="animate-fade-up delay-4 mb-8 max-w-xl">
          <p class="text-[15px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
            3+ years building production-grade web applications and REST APIs.
            Architected a university platform suite serving
            <span class="font-semibold text-zinc-900 dark:text-zinc-200">3,000+ students</span>
            at International Innovation University using
            <span class="font-semibold text-zinc-900 dark:text-zinc-200">Django</span>,
            <span class="font-semibold text-zinc-900 dark:text-zinc-200">FastAPI</span> &amp;
            <span class="font-semibold text-zinc-900 dark:text-zinc-200">PostgreSQL</span>.
          </p>
        </div>

        <!-- CTA Buttons -->
        <div class="animate-fade-up delay-5 flex flex-wrap items-center gap-3 mb-10">
          <router-link to="/projects"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white transition-all duration-200 shadow-sm hover:opacity-90"
            style="background-color: #18181B;">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
            View Projects
          </router-link>

          <a href="/cv.pdf" download
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all duration-200 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download CV
          </a>
        </div>

        <!-- Social links -->
        <div class="animate-fade-up delay-6 flex items-center gap-5">
          <a href="https://github.com/asliddinweb" target="_blank" rel="noopener" aria-label="GitHub"
            class="text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/asliddinweb" target="_blank" rel="noopener" aria-label="LinkedIn"
            class="text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="https://t.me/asliddinweb" target="_blank" rel="noopener" aria-label="Telegram"
            class="text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
          </a>
          <a href="mailto:asliddinweb@gmail.com" aria-label="Email"
            class="text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </a>
          <a href="tel:+998942025511" aria-label="Phone"
            class="text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l1.27-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </a>
        </div>

      </div>
    </div>
  </section>
</template>