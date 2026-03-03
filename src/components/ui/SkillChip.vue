<script setup lang="ts">
defineProps<{
  label: string
  icon?: string   // SVG path string (simple-icons dan)
  color?: string  // brand color
  small?: boolean
}>()
</script>

<template>
  <span :class="[
    'inline-flex items-center gap-1.5 font-mono rounded-md border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 transition-all duration-200',
    'hover:border-[#14B8A6] hover:text-[#14B8A6] hover:bg-[#F0FDFA]',
    'dark:hover:border-[#14B8A6] dark:hover:text-[#2DD4BF] dark:hover:bg-[#0C1A1A]',
    small ? 'px-2 py-0.5 text-[11px]' : 'px-2.5 py-1 text-xs'
  ]">
    <svg
      v-if="icon"
      :viewBox="'0 0 24 24'"
      class="w-3.5 h-3.5 flex-shrink-0"
      :style="{ fill: color || 'currentColor' }"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path :d="icon" />
    </svg>
    {{ label }}
  </span>
</template>