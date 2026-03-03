<script setup lang="ts">
import SectionWrapper from '@/components/ui/SectionWrapper.vue'

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
    tags: ['Django', 'DRF', 'PostgreSQL', 'Docker', 'NGINX', 'WeasyPrint'],
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
    tags: ['Django', 'REST API', 'Mentoring', 'Code Review'],
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
    tags: ['Django', 'PostgreSQL', 'JavaScript', 'HTML/CSS'],
  },
]
</script>

<template>
  <SectionWrapper id="experience" title="Experience">
    <div class="flex flex-col">
      <div v-for="(exp, i) in experiences" :key="exp.role"
        :class="['grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-3 sm:gap-8 py-8', i !== 0 ? 'border-t border-zinc-100 dark:border-zinc-800/80' : '']">

        <!-- Left: period -->
        <div class="flex sm:flex-col gap-2.5 sm:gap-1.5 items-center sm:items-start sm:pt-0.5">
          <span class="font-mono text-[11px] text-zinc-400 dark:text-zinc-500 whitespace-nowrap">{{ exp.period }}</span>
          <span v-if="exp.current"
            class="inline-flex items-center gap-1 font-mono text-[10px] font-medium"
            style="color: #16A34A;">
            <span class="w-1.5 h-1.5 rounded-full" style="background-color:#22C55E;"></span>
            Current
          </span>
        </div>

        <!-- Right: content -->
        <div class="flex flex-col gap-3">
          <div>
            <h3 class="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">{{ exp.role }}</h3>
            <a v-if="exp.companyUrl" :href="exp.companyUrl" target="_blank" rel="noopener"
              class="text-xs font-medium hover:underline" style="color:#14B8A6;">
              {{ exp.company }}
            </a>
            <span v-else class="text-xs font-medium" style="color:#14B8A6;">{{ exp.company }}</span>
          </div>

          <ul class="flex flex-col gap-1.5">
            <li v-for="point in exp.points" :key="point"
              class="flex items-start gap-2 text-[13px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
              <svg class="w-3 h-3 text-zinc-300 dark:text-zinc-600 shrink-0 mt-[3px]"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
              {{ point }}
            </li>
          </ul>

          <div class="flex flex-wrap gap-1.5 pt-0.5">
            <span v-for="tag in exp.tags" :key="tag"
              class="font-mono text-[10px] px-2 py-0.5 rounded-md border text-zinc-500 dark:text-zinc-500 bg-zinc-50 dark:bg-zinc-800/60 border-zinc-200 dark:border-zinc-700/60">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>