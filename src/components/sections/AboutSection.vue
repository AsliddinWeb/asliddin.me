<script setup lang="ts">
import SectionWrapper from '@/components/ui/SectionWrapper.vue'

const stats = [
  { value: '3+',    label: 'Years Experience' },
  { value: '10+',   label: 'Projects Shipped' },
  { value: '3000+', label: 'Students Served' },
  { value: '120+',  label: 'Mentored Devs' },
]
</script>

<template>
  <SectionWrapper id="about" title="About">
    <div class="grid grid-cols-1 md:grid-cols-[1fr_260px] gap-10 items-start">

      <!-- Bio -->
      <div class="flex flex-col gap-4 text-[15px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
        <p>
          I'm <span class="font-semibold text-zinc-900 dark:text-zinc-100">Asliddin Abdujabborov</span>, a Backend Developer based in Karshi, Uzbekistan with 3+ years of experience building scalable web applications and RESTful APIs using Python, Django, and PostgreSQL.
        </p>
        <p>
          I'm currently the architect behind the full university platform suite at <span class="font-medium text-zinc-900 dark:text-zinc-200">International Innovation University</span> — four production systems serving 3,000+ students, built with Django, DRF, Docker, and NGINX.
        </p>
        <p>
          Alongside development, I mentor 120+ students in Django backend development at <span class="font-medium text-zinc-900 dark:text-zinc-200">Fulfil Education</span>, conducting code reviews and open classes on REST API design and deployment.
        </p>

        <div class="flex flex-wrap gap-2 pt-1">
          <span class="inline-flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 px-3 py-1.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            Karshi, Uzbekistan
          </span>
          <span class="inline-flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 px-3 py-1.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            asliddin.me
          </span>
          <span class="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border"
            style="color:#16A34A; background-color:#F0FDF4; border-color:#BBF7D0;">
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            Open to remote
          </span>
        </div>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-2 gap-2.5">
        <div v-for="stat in stats" :key="stat.label"
          class="flex flex-col p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
          style="box-shadow: 0 1px 3px rgba(0,0,0,0.06);">
          <span class="font-mono font-bold text-2xl text-zinc-900 dark:text-zinc-100 leading-none mb-1">{{ stat.value }}</span>
          <span class="text-[11px] text-zinc-500 dark:text-zinc-500 leading-tight">{{ stat.label }}</span>
        </div>
      </div>

    </div>
  </SectionWrapper>
</template>