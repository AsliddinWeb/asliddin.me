<script setup lang="ts">
import SectionWrapper from '@/components/ui/SectionWrapper.vue'
import BlogItem from '@/components/ui/BlogItem.vue'

const posts = [
  {
    date: '2024-03-10',
    title: 'Docker for Backend Developers: From Zero to Production',
    description: 'A practical guide to containerizing FastAPI applications, managing multi-service setups with Docker Compose, and deploying to a VPS.',
    href: '#',
  },
  {
    date: '2024-02-20',
    title: 'PostgreSQL Query Optimization: Real-World Techniques',
    description: 'Deep dive into EXPLAIN ANALYZE, index strategies, N+1 query elimination, and connection pooling patterns I use in production systems.',
    href: '#',
  },
  {
    date: '2024-01-15',
    title: 'FastAPI Best Practices for Production-Grade APIs',
    description: 'Structuring large FastAPI projects, dependency injection patterns, async SQLAlchemy, error handling, and API versioning strategies.',
    href: '#',
  },
  {
    date: '2023-12-05',
    title: 'Redis Beyond Caching: Pub/Sub, Queues, and Rate Limiting',
    description: 'How I use Redis as a message broker, task queue, and rate limiter in my microservices — with real code examples.',
    href: '#',
  },
  {
    date: '2023-11-18',
    title: 'SQLAlchemy 2.0: Async Patterns with FastAPI',
    description: 'Migrating from sync to async SQLAlchemy, handling sessions properly, and avoiding common pitfalls in async database operations.',
    href: '#',
  },
  {
    date: '2023-10-02',
    title: 'Building Role-Based Access Control in FastAPI',
    description: 'Implementing a flexible RBAC system with JWT, custom dependencies, and database-driven permissions for multi-tenant applications.',
    href: '#',
  },
]
</script>

<template>
  <div>
    <SectionWrapper title="All Posts">
      <div class="flex flex-col gap-2">
        <BlogItem
          v-for="post in posts"
          :key="post.title"
          v-bind="post"
        />
      </div>
    </SectionWrapper>
  </div>
</template>