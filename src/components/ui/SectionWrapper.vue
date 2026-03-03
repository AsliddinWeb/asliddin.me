<script setup lang="ts">
defineProps<{
  id?: string
  title?: string
  noDivider?: boolean
}>()
</script>

<template>
  <section :id="id" class="py-16 px-6 md:py-20">
    <div class="max-w-5xl mx-auto">

      <!-- Section label -->
      <div v-if="title" class="flex items-center gap-4 mb-10">
        <span class="font-mono text-[11px] font-semibold tracking-[0.12em] text-zinc-400 dark:text-zinc-500 uppercase select-none">
          {{ title }}
        </span>
        <div class="flex-1 h-px bg-zinc-200 dark:bg-zinc-800"></div>
      </div>

      <slot />
    </div>
  </section>
</template>