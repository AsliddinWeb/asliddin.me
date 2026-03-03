<script setup lang="ts">
import SectionWrapper from '@/components/ui/SectionWrapper.vue'
import SkillChip from '@/components/ui/SkillChip.vue'
</script>

<template>
  <div>
    <SectionWrapper title="Resume">

      <div class="flex justify-end mb-8">
        <a
          href="/cv.pdf"
          download
          class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:bg-sky-400 transition-all duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
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
            <div v-for="exp in [
              {
                role: 'Backend Developer',
                company: 'S PROMAX PLAST',
                period: '2023 – Present',
                points: [
                  'Architected and built a 9-module ERP system from scratch serving 50+ users',
                  'Designed PostgreSQL schema with complex relations, triggers, and stored procedures',
                  'Implemented JWT auth with role-based access control for 9 user types',
                  'Set up Docker Compose deployment pipeline with Nginx reverse proxy',
                  'Integrated financial module with automatic transaction generation',
                ]
              },
              {
                role: 'Python Developer',
                company: 'Freelance',
                period: '2021 – 2023',
                points: [
                  'Built 10+ REST APIs for clients in e-commerce, logistics, and fintech',
                  'Developed Telegram bots with FSM, payments, and admin dashboards',
                  'Designed and optimized PostgreSQL and MongoDB database schemas',
                  'Deployed applications on VPS using Nginx, Gunicorn, and systemd',
                ]
              }
            ]" :key="exp.role" class="flex flex-col gap-3">
              <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <div>
                  <h4 class="font-medium text-text-base dark:text-text-base-dark">{{ exp.role }}</h4>
                  <span class="text-sm text-accent">{{ exp.company }}</span>
                </div>
                <span class="font-mono text-xs text-text-faint dark:text-text-faint-dark">{{ exp.period }}</span>
              </div>
              <ul class="flex flex-col gap-1.5 pl-4">
                <li v-for="point in exp.points" :key="point"
                  class="text-sm text-text-muted dark:text-text-muted-dark leading-relaxed list-disc">
                  {{ point }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Skills -->
        <div class="flex flex-col gap-4">
          <h3 class="font-mono font-semibold text-base text-text-base dark:text-text-base-dark border-b border-border dark:border-border-dark pb-3">
            Skills
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div v-for="group in [
              { label: 'Backend', skills: ['Python', 'FastAPI', 'Django', 'Node.js', 'Go'] },
              { label: 'Database', skills: ['PostgreSQL', 'Redis', 'MongoDB', 'SQLite'] },
              { label: 'DevOps', skills: ['Docker', 'Nginx', 'Linux', 'GitHub Actions', 'AWS'] },
            ]" :key="group.label" class="flex flex-col gap-2">
              <span class="font-mono text-xs text-text-faint dark:text-text-faint-dark uppercase tracking-wider">
                {{ group.label }}
              </span>
              <div class="flex flex-wrap gap-1.5">
                <SkillChip v-for="s in group.skills" :key="s" :label="s" :small="true" />
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
              <h4 class="font-medium text-text-base dark:text-text-base-dark">Bachelor of Computer Science</h4>
              <span class="text-sm text-accent">Tashkent University of Information Technologies</span>
            </div>
            <span class="font-mono text-xs text-text-faint dark:text-text-faint-dark">2019 – 2023</span>
          </div>
        </div>

      </div>
    </SectionWrapper>
  </div>
</template>