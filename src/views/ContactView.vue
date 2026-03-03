<script setup lang="ts">
import SectionWrapper from '@/components/ui/SectionWrapper.vue'
import { ref } from 'vue'

const form = ref({ name: '', email: '', message: '' })
const submitted = ref(false)

const handleSubmit = () => {
  submitted.value = true
}
</script>

<template>
  <div>
    <SectionWrapper title="Contact">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">

        <!-- Left: Info -->
        <div class="flex flex-col gap-6">
          <div class="flex flex-col gap-2">
            <h3 class="font-mono font-semibold text-xl text-text-base dark:text-text-base-dark">
              Let's work together
            </h3>
            <p class="text-text-muted dark:text-text-muted-dark leading-relaxed">
              I'm open to freelance projects, full-time remote roles, and interesting collaborations. Whether you need a backend API, a full system architecture, or just want to talk tech — reach out!
            </p>
          </div>

          <div class="flex flex-col gap-4">
            <a href="mailto:asliddin@example.com"
              class="flex items-center gap-3 text-sm text-text-muted dark:text-text-muted-dark hover:text-accent transition-colors duration-200 group">
              <div class="w-9 h-9 flex items-center justify-center rounded-lg border border-border dark:border-border-dark group-hover:border-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              asliddin@example.com
            </a>
            <a href="https://t.me/asliddin" target="_blank"
              class="flex items-center gap-3 text-sm text-text-muted dark:text-text-muted-dark hover:text-accent transition-colors duration-200 group">
              <div class="w-9 h-9 flex items-center justify-center rounded-lg border border-border dark:border-border-dark group-hover:border-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </div>
              @asliddin (Telegram)
            </a>
            <a href="https://linkedin.com/in/asliddin" target="_blank"
              class="flex items-center gap-3 text-sm text-text-muted dark:text-text-muted-dark hover:text-accent transition-colors duration-200 group">
              <div class="w-9 h-9 flex items-center justify-center rounded-lg border border-border dark:border-border-dark group-hover:border-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              linkedin.com/in/asliddin
            </a>
          </div>
        </div>

        <!-- Right: Form -->
        <div class="flex flex-col gap-4">
          <div v-if="submitted" class="flex flex-col items-center justify-center gap-3 py-12 text-center">
            <span class="text-4xl">✅</span>
            <h3 class="font-mono font-semibold text-text-base dark:text-text-base-dark">Message sent!</h3>
            <p class="text-sm text-text-muted dark:text-text-muted-dark">I'll get back to you within 24 hours.</p>
          </div>

          <div v-else class="flex flex-col gap-4">
            <div class="flex flex-col gap-1.5">
              <label class="font-mono text-xs text-text-muted dark:text-text-muted-dark">Name</label>
              <input
                v-model="form.name"
                type="text"
                placeholder="Your name"
                class="w-full px-4 py-2.5 rounded-lg border border-border dark:border-border-dark bg-surface dark:bg-surface-dark text-text-base dark:text-text-base-dark text-sm placeholder:text-text-faint dark:placeholder:text-text-faint-dark focus:outline-none focus:border-accent transition-colors duration-200"
              />
            </div>
            <div class="flex flex-col gap-1.5">
              <label class="font-mono text-xs text-text-muted dark:text-text-muted-dark">Email</label>
              <input
                v-model="form.email"
                type="email"
                placeholder="your@email.com"
                class="w-full px-4 py-2.5 rounded-lg border border-border dark:border-border-dark bg-surface dark:bg-surface-dark text-text-base dark:text-text-base-dark text-sm placeholder:text-text-faint dark:placeholder:text-text-faint-dark focus:outline-none focus:border-accent transition-colors duration-200"
              />
            </div>
            <div class="flex flex-col gap-1.5">
              <label class="font-mono text-xs text-text-muted dark:text-text-muted-dark">Message</label>
              <textarea
                v-model="form.message"
                rows="5"
                placeholder="Tell me about your project..."
                class="w-full px-4 py-2.5 rounded-lg border border-border dark:border-border-dark bg-surface dark:bg-surface-dark text-text-base dark:text-text-base-dark text-sm placeholder:text-text-faint dark:placeholder:text-text-faint-dark focus:outline-none focus:border-accent transition-colors duration-200 resize-none"
              ></textarea>
            </div>
            <button
              @click="handleSubmit"
              class="w-full py-2.5 rounded-lg bg-accent text-white text-sm font-medium hover:bg-sky-400 hover:shadow-lg hover:shadow-accent/30 transition-all duration-200"
            >
              Send Message
            </button>
          </div>
        </div>

      </div>
    </SectionWrapper>
  </div>
</template>