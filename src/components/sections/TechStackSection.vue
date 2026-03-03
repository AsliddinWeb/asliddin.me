<script setup lang="ts">
import SectionWrapper from '@/components/ui/SectionWrapper.vue'
import SkillChip from '@/components/ui/SkillChip.vue'

const groups = [
  {
    label: 'Languages',
    skills: [
      { label: 'Python', icon: '🐍' },
      { label: 'JavaScript', icon: '🟨' },
      { label: 'SQL', icon: '🗄️' },
    ],
  },
  {
    label: 'Frameworks',
    skills: [
      { label: 'Django', icon: '🎸' },
      { label: 'DRF', icon: '🔧' },
      { label: 'FastAPI', icon: '⚡' },
    ],
  },
  {
    label: 'Databases',
    skills: [
      { label: 'PostgreSQL', icon: '🐘' },
      { label: 'MySQL', icon: '🐬' },
      { label: 'Redis', icon: '🔴' },
      { label: 'SQLite', icon: '💾' },
    ],
  },
  {
    label: 'DevOps & Tools',
    skills: [
      { label: 'Docker', icon: '🐳' },
      { label: 'NGINX', icon: '🌐' },
      { label: 'Gunicorn', icon: '🦄' },
      { label: 'Git', icon: '🔀' },
      { label: 'CI/CD', icon: '⚙️' },
      { label: 'Linux', icon: '🐧' },
    ],
  },
  {
    label: 'Integrations',
    skills: [
      { label: 'Payment Systems', icon: '💳' },
      { label: 'SMS Auth (Eskiz)', icon: '📱' },
      { label: 'WeasyPrint', icon: '📄' },
    ],
  },
  {
    label: 'Architecture',
    skills: [
      { label: 'REST API Design', icon: '🔗' },
      { label: 'Systems Design', icon: '🏗️' },
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
          <SkillChip v-for="s in group.skills" :key="s.label" :label="s.label" :icon="s.icon" />
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>