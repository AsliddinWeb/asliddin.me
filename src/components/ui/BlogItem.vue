<script setup lang="ts">
defineProps<{
  date: string
  title: string
  description: string
  href?: string
}>()
</script>

<template>
  <div class="group relative flex flex-col sm:flex-row gap-3 sm:gap-8 py-5 border-b border-zinc-100 dark:border-zinc-800 last:border-0 cursor-pointer">
    <time class="shrink-0 font-mono text-[11px] text-zinc-400 dark:text-zinc-500 pt-0.5 w-[88px]">{{ date }}</time>
    <div class="flex-1 flex flex-col gap-1">
      <h3 class="text-sm font-semibold text-zinc-900 dark:text-zinc-100 leading-snug transition-colors duration-200"
        :style="{ color: undefined }"
        onmouseenter="this.style.color='#0EA5E9'"
        onmouseleave="this.style.color=''">
        {{ title }}
      </h3>
      <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{{ description }}</p>
    </div>
    <div class="hidden sm:flex items-start pt-0.5 shrink-0">
      <svg class="text-zinc-300 dark:text-zinc-700 group-hover:translate-x-0.5 transition-all duration-200"
        xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    </div>
  </div>
</template>