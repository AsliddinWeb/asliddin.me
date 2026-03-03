import { ref, onMounted } from 'vue'

const isDark = ref(false)

export function useTheme() {
  const applyTheme = (dark: boolean) => {
    isDark.value = dark
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }

  const toggleTheme = () => applyTheme(!isDark.value)

  onMounted(() => {
    const saved = localStorage.getItem('theme')
    if (saved) {
      applyTheme(saved === 'dark')
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      applyTheme(prefersDark)
    }
  })

  return { isDark, toggleTheme }
}