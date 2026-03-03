<script setup lang="ts">
import SkillChip from './SkillChip.vue'

defineProps<{
  title: string
  description: string
  tech: string[]
  github?: string
  demo?: string
  icon?: string
}>()
</script>

<template>
  <div class="group relative flex flex-col p-5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:-translate-y-0.5"
    style="box-shadow: 0 1px 3px rgba(0,0,0,0.06);"
    onmouseenter="this.style.boxShadow='0 4px 16px rgba(0,0,0,0.08)'"
    onmouseleave="this.style.boxShadow='0 1px 3px rgba(0,0,0,0.06)'">

    <div class="flex items-start justify-between gap-3 mb-3">
      <div class="flex items-center gap-2.5">
        <span v-if="icon" class="text-lg leading-none">{{ icon }}</span>
        <h3 class="font-semibold text-zinc-900 dark:text-zinc-100 text-sm leading-snug">{{ title }}</h3>
      </div>
      <!-- Links -->
      <div class="flex items-center gap-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <a v-if="github" :href="github" target="_blank" rel="noopener"
          class="w-7 h-7 flex items-center justify-center rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200"
          aria-label="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
        </a>
        <a v-if="demo" :href="demo" target="_blank" rel="noopener"
          class="w-7 h-7 flex items-center justify-center rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200"
          aria-label="Live demo">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </a>
      </div>
    </div>

    <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed flex-1 mb-4">{{ description }}</p>

    <div class="flex flex-wrap gap-1.5">
      <SkillChip v-for="t in tech" :key="t" :label="t" :small="true" />
    </div>
  </div>
</template>