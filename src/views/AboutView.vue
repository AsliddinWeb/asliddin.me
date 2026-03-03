<script setup lang="ts">
import { MapPin, GraduationCap, Briefcase, Globe } from 'lucide-vue-next'
import SectionWrapper from '@/components/ui/SectionWrapper.vue'
import SkillChip from '@/components/ui/SkillChip.vue'
import {
  siPython, siDjango, siFastapi, siPostgresql,
  siRedis, siDocker, siLinux, siGit, siNginx,
  siGithub, siMysql, siSqlite, siGunicorn
} from 'simple-icons'

const coreSkills = [
  { label: 'Python',     icon: siPython.path,     color: '#3776AB' },
  { label: 'FastAPI',    icon: siFastapi.path,     color: '#009688' },
  { label: 'Django',     icon: siDjango.path,      color: '#092E20' },
  { label: 'DRF',        icon: siDjango.path,      color: '#A30000' },
  { label: 'PostgreSQL', icon: siPostgresql.path,  color: '#4169E1' },
  { label: 'Redis',      icon: siRedis.path,       color: '#DC382D' },
  { label: 'Docker',     icon: siDocker.path,      color: '#2496ED' },
  { label: 'NGINX',      icon: siNginx.path,       color: '#009639' },
  { label: 'Linux',      icon: siLinux.path,       color: '#FCC624' },
  { label: 'Git',        icon: siGit.path,         color: '#F05032' },
  { label: 'MySQL',      icon: siMysql.path,       color: '#4479A1' },
  { label: 'SQLite',     icon: siSqlite.path,      color: '#003B57' },
  { label: 'Gunicorn',   icon: siGunicorn.path,    color: '#499848' },
  { label: 'GitHub',     icon: siGithub.path,      color: '#181717' },
]

const languages = [
  { name: "Uzbek",   level: "Native",      pct: 100 },
  { name: "English", level: "Elementary",  pct: 30  },
]
</script>

<template>
  <div>
    <SectionWrapper title="About Me">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        <!-- Left: Bio -->
        <div class="flex flex-col gap-6">

          <!-- Avatar -->
          <div class="w-28 h-28 rounded-full overflow-hidden ring-2 ring-accent/30">
            <img src="/asliddin_abdujabborov.jpg" alt="Asliddin" class="w-full h-full object-cover" />
          </div>

          <div class="flex flex-col gap-4">
            <h2 class="font-mono font-semibold text-2xl text-text-base dark:text-text-base-dark">
              Asliddin Abdujabborov
            </h2>
            <p class="text-text-muted dark:text-text-muted-dark leading-relaxed">
              Backend developer specializing in Python — FastAPI, Django, DRF. I build production-grade REST APIs, ERP systems, and scalable architectures for real businesses.
            </p>
            <p class="text-text-muted dark:text-text-muted-dark leading-relaxed">
              Currently working at <span class="text-accent font-medium">International Innovation University</span>, where I develop and maintain multiple high-traffic web platforms including an e-library serving 3,000+ students and a full admission system with PDF generation and SMS authentication.
            </p>
            <p class="text-text-muted dark:text-text-muted-dark leading-relaxed">
              Alongside that, I mentor 120+ students in Django backend development at Fulfil Education, helping them go from beginner to job-ready.
            </p>
          </div>

          <!-- Meta info -->
          <div class="flex flex-col gap-2">
            <div class="flex items-center gap-2.5 text-sm text-text-muted dark:text-text-muted-dark">
              <MapPin class="w-3.5 h-3.5 text-accent shrink-0" />
              Karshi, Uzbekistan
            </div>
            <div class="flex items-center gap-2.5 text-sm text-text-muted dark:text-text-muted-dark">
              <GraduationCap class="w-3.5 h-3.5 text-accent shrink-0" />
              TUIT, Karshi Branch
            </div>
            <div class="flex items-center gap-2.5 text-sm text-text-muted dark:text-text-muted-dark">
              <Briefcase class="w-3.5 h-3.5 text-accent shrink-0" />
              Open to remote opportunities
            </div>
            <div class="flex items-center gap-2.5 text-sm text-text-muted dark:text-text-muted-dark">
              <Globe class="w-3.5 h-3.5 text-accent shrink-0" />
              asliddin.me
            </div>
          </div>
        </div>

        <!-- Right: Skills + Languages + Currently -->
        <div class="flex flex-col gap-8">

          <!-- Core Skills -->
          <div class="flex flex-col gap-4">
            <h3 class="font-mono font-semibold text-sm text-text-base dark:text-text-base-dark">
              Core Skills
            </h3>
            <div class="flex flex-wrap gap-2">
              <SkillChip
                v-for="s in coreSkills"
                :key="s.label"
                :label="s.label"
                :icon="s.icon"
                :color="s.color"
              />
            </div>
          </div>

          <!-- Languages -->
          <div class="flex flex-col gap-4">
            <h3 class="font-mono font-semibold text-sm text-text-base dark:text-text-base-dark">
              Languages
            </h3>
            <div class="flex flex-col gap-3">
              <div v-for="lang in languages" :key="lang.name" class="flex flex-col gap-1">
                <div class="flex justify-between text-xs">
                  <span class="text-text-base dark:text-text-base-dark font-medium">{{ lang.name }}</span>
                  <span class="text-text-muted dark:text-text-muted-dark">{{ lang.level }}</span>
                </div>
                <div class="h-1 rounded-full bg-surface-variant dark:bg-surface-variant-dark overflow-hidden">
                  <div
                    class="h-full rounded-full bg-accent transition-all duration-700"
                    :style="{ width: lang.pct + '%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Currently working on -->
          <div class="flex flex-col gap-3 p-5 rounded-xl bg-surface dark:bg-surface-dark border border-border dark:border-border-dark">
            <h3 class="font-mono font-semibold text-sm text-text-base dark:text-text-base-dark">
              Currently working on
            </h3>
            <p class="text-sm text-text-muted dark:text-text-muted-dark leading-relaxed">
              ERP system for <span class="text-accent font-medium">S PROMAX PLAST</span> — a PVC manufacturing company. Building HR automation, financial reporting, and real-time analytics modules with FastAPI + PostgreSQL.
            </p>
          </div>

        </div>
      </div>
    </SectionWrapper>
  </div>
</template>