<script setup lang="ts">
import SectionWrapper from '@/components/ui/SectionWrapper.vue'
import SkillChip from '@/components/ui/SkillChip.vue'
</script>

<template>
  <div>
    <SectionWrapper title="About Me">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        <div class="flex flex-col gap-6">
          <!-- Avatar -->
          <div class="w-24 h-24">
            <div class="relative w-full h-full">
              <div class="absolute inset-0 rounded-full bg-gradient-to-br from-accent via-sky-400 to-blue-600"></div>
              <div class="absolute inset-[3px] rounded-full bg-background dark:bg-background-dark flex items-center justify-center">
                <span class="font-mono font-bold text-2xl text-accent">A</span>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-4">
            <h2 class="font-mono font-semibold text-2xl text-text-base dark:text-text-base-dark">
              Asliddin
            </h2>
            <p class="text-text-muted dark:text-text-muted-dark leading-relaxed">
              Backend engineer with 3+ years of experience building production-grade systems. I specialize in Python ecosystems — FastAPI, Django — and love designing clean, scalable architectures.
            </p>
            <p class="text-text-muted dark:text-text-muted-dark leading-relaxed">
              My journey started with Python scripting and automation, evolved into full REST API development, and now I architect multi-module ERP systems serving real manufacturing businesses.
            </p>
            <p class="text-text-muted dark:text-text-muted-dark leading-relaxed">
              I'm passionate about developer tooling, open-source contribution, and writing technical content that helps other engineers level up.
            </p>
          </div>

          <div class="flex flex-col gap-2">
            <div class="flex items-center gap-3 text-sm text-text-muted dark:text-text-muted-dark">
              <span class="text-accent">📍</span> Tashkent, Uzbekistan
            </div>
            <div class="flex items-center gap-3 text-sm text-text-muted dark:text-text-muted-dark">
              <span class="text-accent">📧</span> asliddin@example.com
            </div>
            <div class="flex items-center gap-3 text-sm text-text-muted dark:text-text-muted-dark">
              <span class="text-accent">💼</span> Open to remote opportunities
            </div>
            <div class="flex items-center gap-3 text-sm text-text-muted dark:text-text-muted-dark">
              <span class="text-accent">🌐</span> asliddin.me
            </div>
          </div>
        </div>

        <!-- Right: Skills -->
        <div class="flex flex-col gap-8">
          <div class="flex flex-col gap-4">
            <h3 class="font-mono font-semibold text-sm text-text-base dark:text-text-base-dark">
              Core Skills
            </h3>
            <div class="flex flex-wrap gap-2">
              <SkillChip label="Python" icon="🐍" />
              <SkillChip label="FastAPI" icon="⚡" />
              <SkillChip label="Django" icon="🎸" />
              <SkillChip label="PostgreSQL" icon="🐘" />
              <SkillChip label="Redis" icon="🔴" />
              <SkillChip label="Docker" icon="🐳" />
              <SkillChip label="Linux" icon="🐧" />
              <SkillChip label="Git" icon="🔀" />
            </div>
          </div>

          <div class="flex flex-col gap-4">
            <h3 class="font-mono font-semibold text-sm text-text-base dark:text-text-base-dark">
              Languages
            </h3>
            <div class="flex flex-col gap-3">
              <div v-for="lang in [{ name: 'Uzbek', level: 'Native', pct: 100 }, { name: 'Russian', level: 'Fluent', pct: 85 }, { name: 'English', level: 'Professional', pct: 75 }]"
                :key="lang.name" class="flex flex-col gap-1">
                <div class="flex justify-between text-xs">
                  <span class="text-text-base dark:text-text-base-dark font-medium">{{ lang.name }}</span>
                  <span class="text-text-muted dark:text-text-muted-dark">{{ lang.level }}</span>
                </div>
                <div class="h-1 rounded-full bg-surface-variant dark:bg-surface-variant-dark overflow-hidden">
                  <div class="h-full rounded-full bg-accent transition-all duration-700"
                    :style="{ width: lang.pct + '%' }"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-3 p-5 rounded-xl bg-surface dark:bg-surface-dark border border-border dark:border-border-dark">
            <h3 class="font-mono font-semibold text-sm text-text-base dark:text-text-base-dark">
              Currently working on
            </h3>
            <p class="text-sm text-text-muted dark:text-text-muted-dark leading-relaxed">
              ERP system for S PROMAX PLAST — a PVC manufacturing company. Building advanced HR automation, financial reporting, and real-time analytics modules.
            </p>
          </div>
        </div>

      </div>
    </SectionWrapper>
  </div>
</template>