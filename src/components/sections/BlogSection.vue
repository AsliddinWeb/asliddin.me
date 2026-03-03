<script setup lang="ts">
import SectionWrapper from '@/components/ui/SectionWrapper.vue'
import BlogItem from '@/components/ui/BlogItem.vue'

const posts = [
  {
    date: '2024-03-10',
    title: 'Docker for Backend Developers: Zero to Production',
    description: 'Containerizing FastAPI apps, Docker Compose multi-service setups, and deploying with NGINX on a VPS.',
    href: '#',
  },
  {
    date: '2024-02-20',
    title: 'PostgreSQL Query Optimization: Real-World Techniques',
    description: 'EXPLAIN ANALYZE, index strategies, N+1 elimination, and connection pooling from production systems.',
    href: '#',
  },
  {
    date: '2024-01-15',
    title: 'Django REST Framework Best Practices',
    description: 'Structuring large DRF projects, serializer optimization, throttling, and API versioning strategies.',
    href: '#',
  },
]
</script>

<template>
  <SectionWrapper id="blog" title="Writing">
    <div class="flex flex-col">
      <BlogItem v-for="post in posts" :key="post.title" v-bind="post" />
    </div>
    <div class="mt-5">
      <router-link to="/blog"
        class="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200">
        All posts
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </router-link>
    </div>
  </SectionWrapper>
</template>