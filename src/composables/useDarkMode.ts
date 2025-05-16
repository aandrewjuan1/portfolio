import { ref, watch, onMounted } from 'vue'

type Theme = 'light' | 'dark' | 'system'

export function useDarkMode() {
  const theme = ref<Theme>(localStorage.getItem('theme') as Theme || 'system')
  const isDark = ref(false)

  const updateTheme = (newTheme: Theme) => {
    theme.value = newTheme
    localStorage.setItem('theme', newTheme)
    applyTheme()
  }

  const applyTheme = () => {
    const root = window.document.documentElement
    const isDarkMode =
      theme.value === 'dark' ||
      (theme.value === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)

    isDark.value = isDarkMode
    root.classList.toggle('dark', isDarkMode)
  }

  // Watch for system theme changes
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  const handleChange = () => {
    if (theme.value === 'system') {
      applyTheme()
    }
  }

  onMounted(() => {
    applyTheme()
    mediaQuery.addEventListener('change', handleChange)
  })

  watch(theme, () => {
    applyTheme()
  })

  return {
    theme,
    isDark,
    updateTheme
  }
}
