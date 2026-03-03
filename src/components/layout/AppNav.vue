<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useTheme } from '@/composables/useTheme'

const { isDark, toggleTheme } = useTheme()
const route = useRoute()
const mobileOpen = ref(false)
const isScrolled = ref(false)

const navLinks = [
  { name: 'Home',     path: '/' },
  { name: 'About',    path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog',     path: '/blog' },
  { name: 'Resume',   path: '/resume' },
  { name: 'Contact',  path: '/contact' },
]

const handleScroll = () => { isScrolled.value = window.scrollY > 10 }
onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <header class="sticky top-0 z-50">
    <div :class="[
      'absolute inset-0 transition-all duration-300',
      isScrolled
        ? 'bg-white/85 dark:bg-zinc-950/85 backdrop-blur-xl border-b border-zinc-200/80 dark:border-zinc-800/80 shadow-sm shadow-zinc-900/[0.04]'
        : 'bg-transparent'
    ]"></div>

    <div class="relative max-w-5xl mx-auto px-6 h-14 flex items-center justify-between gap-4">

      <!-- Logo -->
      <router-link to="/"
        class="shrink-0 font-mono text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors duration-200 tracking-tight">
        asliddin<span class="text-teal-500">.me</span>
      </router-link>

      <!-- Desktop Nav pill -->
      <nav class="hidden md:flex items-center">
        <div class="flex items-center gap-0.5 px-2 py-1.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm shadow-zinc-900/[0.04]">
          <router-link
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            :class="[
              'relative px-3 py-1 text-sm rounded-full font-medium transition-all duration-200',
              route.path === link.path
                ? 'text-zinc-900 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-800'
                : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200'
            ]"
          >{{ link.name }}</router-link>
        </div>
      </nav>

      <!-- Right side -->
      <div class="flex items-center gap-2 shrink-0">

        <!-- Theme toggle -->
        <button @click="toggleTheme"
          class="w-8 h-8 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 shadow-sm transition-all duration-200"
          :aria-label="isDark ? 'Light mode' : 'Dark mode'">
          <!-- Sun -->
          <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
          </svg>
          <!-- Moon -->
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
          </svg>
        </button>

        <!-- Mobile hamburger -->
        <button @click="mobileOpen = !mobileOpen"
          class="md:hidden w-8 h-8 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 shadow-sm transition-all duration-200"
          aria-label="Menu">
          <svg v-if="!mobileOpen" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <line x1="3" y1="5"  x2="21" y2="5"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="19" x2="21" y2="19"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <line x1="18" y1="6" x2="6"  y2="18"/>
            <line x1="6"  y1="6" x2="18" y2="18"/>
          </svg>
        </button>

      </div>
    </div>

    <!-- Mobile drawer -->
    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <div v-if="mobileOpen"
        class="relative md:hidden border-b border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl">
        <nav class="max-w-5xl mx-auto px-4 py-2 flex flex-col">
          <router-link
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            @click="mobileOpen = false"
            :class="[
              'px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150',
              route.path === link.path
                ? 'text-zinc-900 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-800/80'
                : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800/50'
            ]"
          >{{ link.name }}</router-link>
        </nav>
      </div>
    </Transition>
  </header>
</template>