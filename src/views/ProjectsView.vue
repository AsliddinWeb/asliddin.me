<script setup lang="ts">
import SectionWrapper from '@/components/ui/SectionWrapper.vue'
import ProjectCard from '@/components/ui/ProjectCard.vue'

const projects = [
  {
    title: 'ERP System',
    description: 'Full-featured enterprise resource planning system for a PVC manufacturing company. Covers warehouse, production, sales, HR, finance, and analytics modules with role-based access control.',
    tech: ['FastAPI', 'Vue 3', 'PostgreSQL', 'Docker', 'Redis', 'Alembic'],
    github: 'https://github.com/asliddin/erp-system',
    demo: '',
    icon: '🏭',
  },
  {
    title: 'Auth Service',
    description: 'Lightweight JWT-based authentication microservice with Redis token blacklisting, refresh token rotation, and role management. Designed for horizontal scaling.',
    tech: ['FastAPI', 'JWT', 'Redis', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/asliddin/auth-service',
    demo: '',
    icon: '🔐',
  },
  {
    title: 'CLI Toolkit',
    description: 'A developer productivity CLI built in Python. Includes project scaffolding, database migration helpers, API testing utilities, and environment management tools.',
    tech: ['Python', 'Click', 'Rich', 'SQLAlchemy'],
    github: 'https://github.com/asliddin/cli-toolkit',
    demo: '',
    icon: '🛠️',
  },
  {
    title: 'Telegram Bot Framework',
    description: 'A structured framework for building scalable Telegram bots with FSM state management, middleware support, database integration, and admin panel.',
    tech: ['Python', 'aiogram', 'PostgreSQL', 'Redis'],
    github: 'https://github.com/asliddin/tg-bot-framework',
    demo: '',
    icon: '🤖',
  },
  {
    title: 'API Rate Limiter',
    description: 'Redis-based rate limiting middleware for FastAPI with configurable windows, per-user limits, and distributed support across multiple service instances.',
    tech: ['FastAPI', 'Redis', 'Python'],
    github: 'https://github.com/asliddin/api-rate-limiter',
    demo: '',
    icon: '🚦',
  },
  {
    title: 'DB Migration Tool',
    description: 'CLI tool for managing PostgreSQL schema migrations with rollback support, migration history tracking, and team collaboration features.',
    tech: ['Python', 'PostgreSQL', 'Click', 'SQLAlchemy'],
    github: 'https://github.com/asliddin/db-migrate',
    demo: '',
    icon: '🗄️',
  },
]
</script>

<template>
  <div>
    <SectionWrapper title="All Projects">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ProjectCard
          v-for="project in projects"
          :key="project.title"
          v-bind="project"
        />
      </div>
    </SectionWrapper>
  </div>
</template>