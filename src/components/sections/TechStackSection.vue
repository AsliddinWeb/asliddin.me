<script setup lang="ts">
import SectionWrapper from '@/components/ui/SectionWrapper.vue'
import SkillChip from '@/components/ui/SkillChip.vue'
import {
  siPython, siJavascript, siDjango, siFastapi,
  siPostgresql, siMysql, siRedis, siSqlite,
  siDocker, siNginx, siGit, siLinux, siGithub,
  siStripe, siGunicorn
} from 'simple-icons'

const groups = [
  {
    label: 'Languages',
    skills: [
      { label: 'Python',     icon: siPython.path,     color: '#3776AB' },
      { label: 'JavaScript', icon: siJavascript.path, color: '#F7DF1E' },
      { label: 'SQL',        icon: siPostgresql.path, color: '#4169E1' },
    ],
  },
  {
    label: 'Frameworks',
    skills: [
      { label: 'Django',  icon: siDjango.path,  color: '#092E20' },
      { label: 'DRF',     icon: siDjango.path,  color: '#A30000' },
      { label: 'FastAPI', icon: siFastapi.path, color: '#009688' },
    ],
  },
  {
    label: 'Databases',
    skills: [
      { label: 'PostgreSQL', icon: siPostgresql.path, color: '#4169E1' },
      { label: 'MySQL',      icon: siMysql.path,      color: '#4479A1' },
      { label: 'Redis',      icon: siRedis.path,      color: '#DC382D' },
      { label: 'SQLite',     icon: siSqlite.path,     color: '#003B57' },
    ],
  },
  {
    label: 'DevOps & Tools',
    skills: [
      { label: 'Docker',   icon: siDocker.path,   color: '#2496ED' },
      { label: 'NGINX',    icon: siNginx.path,    color: '#009639' },
      { label: 'Git',      icon: siGit.path,      color: '#F05032' },
      { label: 'Linux',    icon: siLinux.path,    color: '#FCC624' },
      { label: 'GitHub',   icon: siGithub.path,   color: '#181717' },
      { label: 'Gunicorn', icon: siGunicorn.path, color: '#499848' },
    ],
  },
  {
    label: 'Integrations',
    skills: [
      { label: 'Stripe',  icon: siStripe.path, color: '#635BFF' },
      { label: 'SMS Auth (Eskiz)', icon: siGithub.path, color: '#14B8A6' },
      { label: 'WeasyPrint',       icon: siPython.path, color: '#14B8A6' },
    ],
  },
  {
    label: 'Architecture',
    skills: [
      { label: 'REST API Design', icon: siPostgresql.path, color: '#14B8A6' },
      { label: 'Systems Design',  icon: siLinux.path,      color: '#14B8A6' },
    ],
  },
]
</script>

<template>
  <SectionWrapper id="techstack" title="Tech Stack">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
      <div v-for="group in groups" :key="group.label" class="flex flex-col gap-3">
        <h3 class="font-mono text-[10px] font-semibold tracking-[0.15em] text-zinc-400 dark:text-zinc-600 uppercase">
          {{ group.label }}
        </h3>
        <div class="flex flex-wrap gap-1.5">
          <SkillChip
            v-for="s in group.skills"
            :key="s.label"
            :label="s.label"
            :icon="s.icon"
            :color="s.color"
          />
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>