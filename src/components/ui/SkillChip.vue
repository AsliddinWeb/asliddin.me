<script setup lang="ts">
defineProps<{
  label: string
  icon?: string
  small?: boolean
}>()
</script>

<template>
  <span :class="[
    'inline-flex items-center gap-1.5 font-mono rounded-md border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 transition-all duration-200',
    'hover:border-[#0EA5E9] hover:text-[#0EA5E9] hover:bg-[#F0F9FF]',
    'dark:hover:border-[#0EA5E9] dark:hover:text-[#38BDF8] dark:hover:bg-[#0C1A25]',
    small ? 'px-2 py-0.5 text-[11px]' : 'px-2.5 py-1 text-xs'
  ]">
    <span v-if="icon" class="leading-none">{{ icon }}</span>
    {{ label }}
  </span>
</template>