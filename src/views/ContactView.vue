<script setup lang="ts">
import SectionWrapper from '@/components/ui/SectionWrapper.vue'
import { ref } from 'vue'

const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN
const CHAT_ID   = import.meta.env.VITE_TELEGRAM_CHAT_ID

const form      = ref({ name: '', phone: '', message: '' })
const submitted = ref(false)
const loading   = ref(false)
const error     = ref('')

const handleSubmit = async () => {
  if (!form.value.name || !form.value.message) return

  loading.value = true
  error.value   = ''

  const text = [
    '📬 *New message from asliddin.me*',
    '',
    `👤 *Name:* ${form.value.name}`,
    `📞 *Phone:* ${form.value.phone || '—'}`,
    '',
    `💬 *Message:*`,
    form.value.message,
  ].join('\n')

  try {
    const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
        parse_mode: 'Markdown',
      }),
    })

    const data = await res.json()

    if (data.ok) {
      submitted.value = true
    } else {
      error.value = 'Failed to send. Please try again.'
    }
  } catch {
    error.value = 'Network error. Please try again.'
  } finally {
    loading.value = false
  }
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

          <div class="flex flex-col gap-3">
            <!-- Phone -->
            <a href="tel:+998942025511"
              class="flex items-center gap-3 text-sm text-text-muted dark:text-text-muted-dark hover:text-accent transition-colors duration-200 group">
              <div class="w-9 h-9 flex items-center justify-center rounded-lg border border-border dark:border-border-dark group-hover:border-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l1.06-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              +998 94 202 55 11
            </a>

            <!-- Telegram -->
            <a href="https://t.me/asliddin_abdujabborov" target="_blank" rel="noopener"
              class="flex items-center gap-3 text-sm text-text-muted dark:text-text-muted-dark hover:text-accent transition-colors duration-200 group">
              <div class="w-9 h-9 flex items-center justify-center rounded-lg border border-border dark:border-border-dark group-hover:border-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </div>
              @asliddin_abdujabborov on Telegram
            </a>

            <!-- LinkedIn -->
            <a href="https://linkedin.com/in/asliddin-abdujabborov" target="_blank" rel="noopener"
              class="flex items-center gap-3 text-sm text-text-muted dark:text-text-muted-dark hover:text-accent transition-colors duration-200 group">
              <div class="w-9 h-9 flex items-center justify-center rounded-lg border border-border dark:border-border-dark group-hover:border-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              linkedin.com/in/asliddin-abdujabborov
            </a>
          </div>
        </div>

        <!-- Right: Form -->
        <div class="flex flex-col gap-4">

          <!-- Success state -->
          <div v-if="submitted" class="flex flex-col items-center justify-center gap-3 py-12 text-center">
            <div class="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-accent">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <h3 class="font-mono font-semibold text-text-base dark:text-text-base-dark">Message sent!</h3>
            <p class="text-sm text-text-muted dark:text-text-muted-dark">I'll get back to you soon via Telegram.</p>
          </div>

          <!-- Form -->
          <div v-else class="flex flex-col gap-4">

            <!-- Name -->
            <div class="flex flex-col gap-1.5">
              <label class="font-mono text-xs text-text-muted dark:text-text-muted-dark">Name *</label>
              <input
                v-model="form.name"
                type="text"
                placeholder="Your name"
                class="w-full px-4 py-2.5 rounded-lg border border-border dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 text-sm placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-accent dark:focus:border-accent transition-colors duration-200"
              />
            </div>

            <!-- Phone -->
            <div class="flex flex-col gap-1.5">
              <label class="font-mono text-xs text-text-muted dark:text-text-muted-dark">Phone</label>
              <input
                v-model="form.phone"
                type="tel"
                placeholder="+998 90 123 45 67"
                class="w-full px-4 py-2.5 rounded-lg border border-border dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 text-sm placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-accent dark:focus:border-accent transition-colors duration-200"
              />
            </div>

            <!-- Message -->
            <div class="flex flex-col gap-1.5">
              <label class="font-mono text-xs text-text-muted dark:text-text-muted-dark">Message *</label>
              <textarea
                v-model="form.message"
                rows="5"
                placeholder="Tell me about your project..."
                class="w-full px-4 py-2.5 rounded-lg border border-border dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 text-sm placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-accent dark:focus:border-accent transition-colors duration-200 resize-none"
              ></textarea>
            </div>

            <!-- Error -->
            <p v-if="error" class="text-xs text-red-500 dark:text-red-400">{{ error }}</p>

            <!-- Submit -->
            <button
              @click="handleSubmit"
              :disabled="loading || !form.name || !form.message"
              class="w-full py-2.5 rounded-lg bg-accent text-white text-sm font-medium hover:bg-teal-400 hover:shadow-lg hover:shadow-accent/30 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <svg v-if="loading" class="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
              </svg>
              {{ loading ? 'Sending...' : 'Send Message' }}
            </button>

          </div>
        </div>

      </div>
    </SectionWrapper>
  </div>
</template>