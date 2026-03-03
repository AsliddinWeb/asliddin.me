<script setup lang="ts">
import SectionWrapper from '@/components/ui/SectionWrapper.vue'
import ProjectCard from '@/components/ui/ProjectCard.vue'

const projects = [
  {
    title: 'XIU University Website',
    description: 'Main information website for International Innovation University (xiuedu.uz). Handles high traffic from students and applicants.',
    tech: ['Django', 'PostgreSQL', 'Docker', 'NGINX'],
    github: '',
    demo: 'https://xiuedu.uz',
    icon: '🏛️',
  },
  {
    title: 'E-Library System',
    description: 'DRF-based e-library API serving 3,000+ students at library.xiuedu.uz with search, filtering, and reading history.',
    tech: ['Django', 'DRF', 'PostgreSQL', 'Docker'],
    github: '',
    demo: 'https://library.xiuedu.uz',
    icon: '📚',
  },
  {
    title: 'Admission System',
    description: 'Full admission platform (qabul.xiuedu.uz) with PDF generation via WeasyPrint and SMS authentication through Eskiz API.',
    tech: ['Django', 'DRF', 'WeasyPrint', 'Eskiz API'],
    github: '',
    demo: 'https://qabul.xiuedu.uz',
    icon: '📝',
  },
  {
    title: 'Online Education Platform',
    description: 'Remote learning platform (online.xiuedu.uz) enabling course delivery, student tracking, and content management.',
    tech: ['Django', 'DRF', 'PostgreSQL', 'Docker', 'NGINX'],
    github: '',
    demo: 'https://online.xiuedu.uz',
    icon: '🎓',
  },
  {
    title: 'Kitobxon AI',
    description: 'AI-powered book platform with intelligent recommendations and smart search capabilities.',
    tech: ['Python', 'FastAPI', 'PostgreSQL'],
    github: '',
    demo: 'https://kitobxon-ai.uz',
    icon: '🤖',
  },
  {
    title: 'Fanur Payments Bot',
    description: 'Telegram payment bot with integrated payment processing for automated business workflows.',
    tech: ['Python', 'aiogram', 'Payment API', 'PostgreSQL'],
    github: '',
    demo: 'https://t.me/fanurpaymentsbot',
    icon: '💳',
  },
]
</script>

<template>
  <SectionWrapper id="projects" title="Projects">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <ProjectCard v-for="p in projects" :key="p.title" v-bind="p" />
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