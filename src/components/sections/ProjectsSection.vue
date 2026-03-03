<script setup lang="ts">
import SectionWrapper from '@/components/ui/SectionWrapper.vue'
import SkillChip from '@/components/ui/SkillChip.vue'
import * as SimpleIcons from 'simple-icons'

const si = SimpleIcons as Record<string, { path: string }>

const techMap: Record<string, { icon: string; color: string }> = {
  'Django':     { icon: si.siDjango?.path,     color: '#092E20' },
  'DRF':        { icon: si.siDjango?.path,      color: '#A30000' },
  'FastAPI':    { icon: si.siFastapi?.path,     color: '#009688' },
  'PostgreSQL': { icon: si.siPostgresql?.path,  color: '#4169E1' },
  'Docker':     { icon: si.siDocker?.path,      color: '#2496ED' },
  'Redis':      { icon: si.siRedis?.path,       color: '#DC382D' },
  'Vue 3':      { icon: si.siVuedotjs?.path,    color: '#42B883' },
  'NGINX':      { icon: si.siNginx?.path,       color: '#009639' },
  'Python':     { icon: si.siPython?.path,      color: '#3776AB' },
  'LLM':        { icon: si.siPython?.path,      color: '#7C3AED' },
}

function t(names: string[]) {
  return names.map(n => ({ label: n, icon: techMap[n]?.icon ?? '', color: techMap[n]?.color ?? '#14B8A6' }))
}

const projects = [
  {
    title: 'S PROMAX PLAST ERP',
    description: 'Full-scale ERP for a PVC manufacturing company. 9 modules, role-based access for 9 user types, 50+ active users.',
    demo: 'https://spromaxplast.asliddin.me',
    tech: t(['FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'Vue 3', 'NGINX']),
  },
  {
    title: 'TAMES — Thyroid AI',
    description: 'AI-powered thyroid cancer early detection system using LLM. 98.5% diagnostic accuracy, 5,000+ patients served.',
    demo: 'https://tames.uz',
    tech: t(['Django', 'PostgreSQL', 'Python', 'LLM']),
  },
  {
    title: 'XIU Admission System',
    description: 'Full admission platform with PDF generation via WeasyPrint and SMS authentication through Eskiz API.',
    demo: 'https://qabul.xiuedu.uz',
    tech: t(['Django', 'DRF', 'PostgreSQL', 'Docker']),
  },
  {
    title: 'E-Library System',
    description: 'DRF-based e-library API serving 3,000+ students with search, filtering, and reading history.',
    demo: 'https://library.xiuedu.uz',
    tech: t(['Django', 'DRF', 'PostgreSQL', 'Docker']),
  },
  {
    title: 'Bilboard Samarkand',
    description: 'Billboard location management platform for Samarkand. Interactive map showing availability status with admin panel.',
    demo: 'https://bilboard-sam.uz',
    tech: t(['Django', 'PostgreSQL']),
  },
  {
    title: 'Abdulla Oripov Maktabi',
    description: 'Website for Abdulla Oripov Creative School with Vue 3 frontend, content management, and multimedia.',
    demo: 'https://abdullaoripov-maktab.uz',
    tech: t(['Django', 'PostgreSQL', 'Vue 3']),
  },
]
</script>

<template>
  <SectionWrapper id="projects" title="Projects">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="p in projects"
        :key="p.title"
        class="group flex flex-col p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 hover:-translate-y-0.5"
        style="box-shadow: 0 1px 3px rgba(0,0,0,0.05);"
        onmouseenter="this.style.boxShadow='0 4px 16px rgba(0,0,0,0.08)'"
        onmouseleave="this.style.boxShadow='0 1px 3px rgba(0,0,0,0.05)'"
      >
        <!-- Title + link -->
        <div class="flex items-start justify-between gap-2 mb-2">
          <h3 class="font-semibold text-zinc-900 dark:text-zinc-100 text-sm leading-snug">
            {{ p.title }}
          </h3>
          <a
            :href="p.demo"
            target="_blank"
            rel="noopener"
            class="shrink-0 opacity-0 group-hover:opacity-100 w-6 h-6 flex items-center justify-center rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-400 hover:text-accent transition-all duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
        </div>

        <!-- Description -->
        <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed flex-1 mb-3">
          {{ p.description }}
        </p>

        <!-- Tech chips -->
        <div class="flex flex-wrap gap-1.5">
          <SkillChip
            v-for="tech in p.tech"
            :key="tech.label"
            :label="tech.label"
            :icon="tech.icon"
            :color="tech.color"
            :small="true"
          />
        </div>
      </div>
    </div>

    <div class="mt-6">
      <router-link to="/projects"
        class="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200">
        All projects
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </router-link>
    </div>
  </SectionWrapper>
</template>