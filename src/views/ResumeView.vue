<script setup lang="ts">
import SectionWrapper from '@/components/ui/SectionWrapper.vue'
import SkillChip from '@/components/ui/SkillChip.vue'
import * as SimpleIcons from 'simple-icons'

const si = SimpleIcons as Record<string, { path: string }>

const techMap: Record<string, { icon: string; color: string }> = {
  'Python':      { icon: si.siPython?.path,      color: '#3776AB' },
  'Django':      { icon: si.siDjango?.path,      color: '#092E20' },
  'DRF':         { icon: si.siDjango?.path,       color: '#A30000' },
  'FastAPI':     { icon: si.siFastapi?.path,      color: '#009688' },
  'PostgreSQL':  { icon: si.siPostgresql?.path,   color: '#4169E1' },
  'Redis':       { icon: si.siRedis?.path,        color: '#DC382D' },
  'Docker':      { icon: si.siDocker?.path,       color: '#2496ED' },
  'NGINX':       { icon: si.siNginx?.path,        color: '#009639' },
  'Linux':       { icon: si.siLinux?.path,        color: '#FCC624' },
  'Git':         { icon: si.siGit?.path,          color: '#F05032' },
  'Vue 3':       { icon: si.siVuedotjs?.path,     color: '#42B883' },
  'JavaScript':  { icon: si.siJavascript?.path,   color: '#F7DF1E' },
  'SQLite':      { icon: si.siSqlite?.path,       color: '#003B57' },
  'Gunicorn':    { icon: si.siGunicorn?.path,     color: '#499848' },
  'GitHub':      { icon: si.siGithub?.path,       color: '#181717' },
}

function chip(name: string) {
  return { label: name, icon: techMap[name]?.icon ?? '', color: techMap[name]?.color ?? '#14B8A6' }
}

const experiences = [
  {
    role: 'Python Backend Developer',
    company: 'International Innovation University',
    companyUrl: 'https://xiuedu.uz',
    period: 'May 2023 – Present',
    current: true,
    points: [
      'Developed and maintained the main university website (xiuedu.uz) handling high traffic',
      'Architected a DRF-based e-library API (library.xiuedu.uz) serving 3,000+ students',
      'Built a full admission system (qabul.xiuedu.uz) with PDF generation via WeasyPrint and SMS auth via Eskiz API',
      'Developed an online learning platform (online.xiuedu.uz)',
      'Deployed all services with Docker, NGINX, and Gunicorn on Linux servers',
    ],
    tags: ['Django', 'DRF', 'PostgreSQL', 'Docker', 'NGINX', 'Gunicorn'],
  },
  {
    role: 'Assistant Mentor — Django Backend',
    company: 'Fulfil Education',
    companyUrl: '',
    period: 'Feb 2024 – Present',
    current: true,
    points: [
      'Mentored 120+ students in Django backend development with code review and technical guidance',
      'Conducted open classes on Django ORM, REST API design, authentication, and deployment',
      'Evaluated student projects ensuring adherence to best practices and clean code',
    ],
    tags: ['Django', 'DRF', 'PostgreSQL', 'Git'],
  },
  {
    role: 'Python Developer',
    company: 'Karshi Branch of TUIT',
    companyUrl: '',
    period: 'Dec 2022 – May 2023',
    current: false,
    points: [
      'Built the university information website using Django, PostgreSQL, and responsive HTML/CSS/JS',
      'Collaborated with cross-functional teams on educational technology projects',
    ],
    tags: ['Django', 'PostgreSQL', 'JavaScript'],
  },
]

const skillGroups = [
  {
    label: 'Backend',
    skills: ['Python', 'Django', 'DRF', 'FastAPI'],
  },
  {
    label: 'Database',
    skills: ['PostgreSQL', 'Redis', 'SQLite'],
  },
  {
    label: 'DevOps & Tools',
    skills: ['Docker', 'NGINX', 'Linux', 'Git', 'GitHub', 'Gunicorn'],
  },
  {
    label: 'Frontend',
    skills: ['Vue 3', 'JavaScript'],
  },
]
</script>

<template>
  <div>
    <SectionWrapper title="Resume">

      <!-- Download button -->
      <div class="flex justify-end mb-8">
        <a
          href="/Asliddin-Abdujabborov-Resume-2026.pdf"
          download
          class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:bg-teal-400 transition-all duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download PDF
        </a>
      </div>

      <div class="flex flex-col gap-10">

        <!-- Experience -->
        <div class="flex flex-col gap-4">
          <h3 class="font-mono font-semibold text-base text-text-base dark:text-text-base-dark border-b border-border dark:border-border-dark pb-3">
            Experience
          </h3>
          <div class="flex flex-col gap-6">
            <div
              v-for="exp in experiences"
              :key="exp.role"
              class="flex flex-col gap-3"
            >
              <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <div class="flex flex-col gap-0.5">
                  <div class="flex items-center gap-2">
                    <h4 class="font-medium text-text-base dark:text-text-base-dark">{{ exp.role }}</h4>
                    <span
                      v-if="exp.current"
                      class="inline-flex items-center gap-1 font-mono text-[10px] font-medium"
                      style="color: #16A34A;"
                    >
                      <span class="w-1.5 h-1.5 rounded-full" style="background-color:#22C55E;"></span>
                      Current
                    </span>
                  </div>
                  <a
                    v-if="exp.companyUrl"
                    :href="exp.companyUrl"
                    target="_blank"
                    rel="noopener"
                    class="text-sm text-accent hover:underline"
                  >{{ exp.company }}</a>
                  <span v-else class="text-sm text-accent">{{ exp.company }}</span>
                </div>
                <span class="font-mono text-xs text-text-faint dark:text-text-faint-dark whitespace-nowrap">
                  {{ exp.period }}
                </span>
              </div>

              <ul class="flex flex-col gap-1.5 pl-4">
                <li
                  v-for="point in exp.points"
                  :key="point"
                  class="text-sm text-text-muted dark:text-text-muted-dark leading-relaxed list-disc"
                >
                  {{ point }}
                </li>
              </ul>

              <div class="flex flex-wrap gap-1.5">
                <SkillChip
                  v-for="tag in exp.tags"
                  :key="tag"
                  :label="tag"
                  :icon="techMap[tag]?.icon ?? ''"
                  :color="techMap[tag]?.color ?? '#14B8A6'"
                  :small="true"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Skills -->
        <div class="flex flex-col gap-4">
          <h3 class="font-mono font-semibold text-base text-text-base dark:text-text-base-dark border-b border-border dark:border-border-dark pb-3">
            Skills
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              v-for="group in skillGroups"
              :key="group.label"
              class="flex flex-col gap-2"
            >
              <span class="font-mono text-xs text-text-faint dark:text-text-faint-dark uppercase tracking-wider">
                {{ group.label }}
              </span>
              <div class="flex flex-wrap gap-1.5">
                <SkillChip
                  v-for="s in group.skills"
                  :key="s"
                  v-bind="chip(s)"
                  :small="true"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Education -->
        <div class="flex flex-col gap-4">
          <h3 class="font-mono font-semibold text-base text-text-base dark:text-text-base-dark border-b border-border dark:border-border-dark pb-3">
            Education
          </h3>
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <div>
              <h4 class="font-medium text-text-base dark:text-text-base-dark">
                Bachelor of Computer Science
              </h4>
              <span class="text-sm text-accent">
                Tashkent University of Information Technologies, Karshi Branch
              </span>
            </div>
            <span class="font-mono text-xs text-text-faint dark:text-text-faint-dark">2020 – 2024</span>
          </div>
        </div>

      </div>
    </SectionWrapper>
  </div>
</template>