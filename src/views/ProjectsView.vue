<script setup lang="ts">
import SectionWrapper from '@/components/ui/SectionWrapper.vue'
import SkillChip from '@/components/ui/SkillChip.vue'
import * as SimpleIcons from 'simple-icons'

const si = SimpleIcons as Record<string, { path: string }>

interface TechItem {
  label: string
  icon: string
  color: string
}

interface Project {
  title: string
  description: string
  url?: string
  badge?: string
  tech: TechItem[]
}

const techMap: Record<string, { icon: string; color: string }> = {
  'Django':      { icon: si.siDjango?.path,      color: '#092E20' },
  'DRF':         { icon: si.siDjango?.path,       color: '#A30000' },
  'FastAPI':     { icon: si.siFastapi?.path,      color: '#009688' },
  'PostgreSQL':  { icon: si.siPostgresql?.path,   color: '#4169E1' },
  'Docker':      { icon: si.siDocker?.path,       color: '#2496ED' },
  'Redis':       { icon: si.siRedis?.path,        color: '#DC382D' },
  'Vue 3':       { icon: si.siVuedotjs?.path,     color: '#42B883' },
  'NGINX':       { icon: si.siNginx?.path,        color: '#009639' },
  'Python':      { icon: si.siPython?.path,       color: '#3776AB' },
  'LLM':         { icon: si.siPython?.path,       color: '#7C3AED' },
  'WeasyPrint':  { icon: si.siPython?.path,       color: '#14B8A6' },
  'Eskiz API':   { icon: si.siPython?.path,       color: '#14B8A6' },
  'aiogram':     { icon: si.siPython?.path,       color: '#2CA5E0' },
  'Payment API': { icon: si.siStripe?.path,       color: '#635BFF' },
}

function t(names: string[]): TechItem[] {
  return names.map(n => ({
    label: n,
    icon: techMap[n]?.icon ?? '',
    color: techMap[n]?.color ?? '#14B8A6',
  }))
}

const projects: Project[] = [
  {
    title: 'XIU University Website',
    description: 'Main information website for International Innovation University (xiuedu.uz). Handles high traffic from students and applicants.',
    url: 'https://xiuedu.uz',
    tech: t(['Django', 'PostgreSQL', 'Docker', 'NGINX']),
  },
  {
    title: 'E-Library System',
    description: 'DRF-based e-library API serving 3,000+ students at library.xiuedu.uz with search, filtering, and reading history.',
    url: 'https://library.xiuedu.uz',
    tech: t(['Django', 'DRF', 'PostgreSQL', 'Docker']),
  },
  {
    title: 'Admission System',
    description: 'Full admission platform (qabul.xiuedu.uz) with PDF generation via WeasyPrint and SMS authentication through Eskiz API.',
    url: 'https://qabul.xiuedu.uz',
    tech: t(['Django', 'DRF', 'PostgreSQL', 'WeasyPrint', 'Eskiz API']),
  },
  {
    title: 'Online Education Platform',
    description: 'Remote learning platform (online.xiuedu.uz) enabling course delivery, student tracking, and content management.',
    url: 'https://online.xiuedu.uz',
    tech: t(['Django', 'DRF', 'PostgreSQL', 'Docker', 'NGINX']),
  },
  {
    title: 'Kitobxon AI',
    description: 'AI-powered book platform with intelligent recommendations and smart search capabilities.',
    url: 'https://kitobxon-ai.uz',
    badge: 'AI',
    tech: t(['Python', 'FastAPI', 'PostgreSQL']),
  },
  {
    title: 'Fanur Payments Bot',
    description: 'Telegram payment bot with integrated payment processing for automated business workflows.',
    url: 'https://t.me/fanurpaymentsbot',
    tech: t(['Python', 'aiogram', 'Payment API', 'PostgreSQL']),
  },
  {
    title: 'TAMES — Thyroid AI Diagnostics',
    description: 'AI-powered thyroid cancer early detection system. Uses an LLM model to evaluate malignancy risk based on medical input data. Serves 5,000+ patients with 98.5% diagnostic accuracy.',
    url: 'https://tames.uz',
    badge: 'AI / LLM',
    tech: t(['Django', 'PostgreSQL', 'Python', 'LLM']),
  },
  {
    title: 'S PROMAX PLAST ERP',
    description: 'Full-scale ERP system for a PVC manufacturing company. 9 modules: warehouse, production, sales, HR, finance, and analytics. Role-based access for 9 user types, 50+ active users.',
    url: 'https://spromaxplast.asliddin.me/docs',
    badge: 'ERP',
    tech: t(['FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'Vue 3', 'NGINX']),
  },
  {
    title: 'Bilboard Samarkand',
    description: 'Billboard location management platform for Samarkand region. Interactive map showing billboard availability status with admin panel and contact management.',
    url: 'https://bilboard-sam.uz',
    tech: t(['Django', 'PostgreSQL']),
  },
  {
    title: 'Special Certificate',
    description: 'Corporate website for a construction materials certification and testing laboratory in Qarshi. Multilingual (UZ/RU), with service catalog, gallery, and contact forms.',
    url: 'https://special-certificate.uz',
    tech: t(['Django', 'PostgreSQL']),
  },
  {
    title: 'XIU Yotoqxona',
    description: 'Online dormitory application system for International Innovation University. Students apply for dorm rooms digitally. Handles 280+ beds with real-time availability tracking.',
    url: 'https://yotoqxona.xiuedu.uz',
    tech: t(['Django', 'PostgreSQL']),
  },
  {
    title: 'Abdulla Oripov Maktabi',
    description: 'Website for Abdulla Oripov Creative School, dedicated to the national poet of Uzbekistan. Vue 3 frontend with Django REST backend, content management, and multimedia support.',
    url: 'https://abdullaoripov-maktab.uz',
    tech: t(['Django', 'PostgreSQL', 'Vue 3']),
  },
  {
    title: 'ICT for Students',
    description: 'Educational platform for university students and teachers. Includes lectures, presentations, video lessons, tests, quizzes, and interactive accounting tools.',
    url: 'https://ict-for-students.uz',
    tech: t(['Django', 'PostgreSQL']),
  },
]
</script>

<template>
  <div>
    <SectionWrapper title="Projects">

      <div class="flex items-center justify-between mb-8">
        <p class="text-sm text-zinc-500 dark:text-zinc-400">
          {{ projects.length }} production projects — all live
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        <div
          v-for="project in projects"
          :key="project.title"
          class="group relative flex flex-col p-5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-300 dark:hover:border-zinc-700"
          style="box-shadow: 0 1px 3px rgba(0,0,0,0.06);"
          onmouseenter="this.style.boxShadow='0 6px 20px rgba(0,0,0,0.08)'"
          onmouseleave="this.style.boxShadow='0 1px 3px rgba(0,0,0,0.06)'"
        >
          <div class="flex items-start justify-between gap-3 mb-3">
            <div class="flex flex-col gap-1">
              <h3 class="font-semibold text-zinc-900 dark:text-zinc-100 text-sm leading-snug">
                {{ project.title }}
              </h3>
              <span
                v-if="project.badge"
                class="self-start font-mono text-[10px] px-1.5 py-0.5 rounded-md bg-accent/10 text-accent border border-accent/20"
              >
                {{ project.badge }}
              </span>
            </div>

            <a
              v-if="project.url"
              :href="project.url"
              target="_blank"
              rel="noopener"
              class="shrink-0 w-7 h-7 flex items-center justify-center rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-400 hover:text-accent hover:bg-accent/10 transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          </div>

          <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed flex-1 mb-4">
            {{ project.description }}
          </p>

          <div class="flex flex-wrap gap-1.5">
            <SkillChip
              v-for="tech in project.tech"
              :key="tech.label"
              :label="tech.label"
              :icon="tech.icon"
              :color="tech.color"
              :small="true"
            />
          </div>
        </div>
      </div>

    </SectionWrapper>
  </div>
</template>