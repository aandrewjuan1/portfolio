// Dark mode functionality
(function() {
  'use strict';

  const THEME_KEY = 'theme';
  const THEMES = {
    LIGHT: 'light',
    DARK: 'dark',
    SYSTEM: 'system'
  };

  function getStoredTheme() {
    return localStorage.getItem(THEME_KEY) || THEMES.SYSTEM;
  }

  function setStoredTheme(theme) {
    localStorage.setItem(THEME_KEY, theme);
  }

  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? THEMES.DARK : THEMES.LIGHT;
  }

  function isDarkMode(theme) {
    if (theme === THEMES.DARK) return true;
    if (theme === THEMES.LIGHT) return false;
    return getSystemTheme() === THEMES.DARK;
  }

  function applyTheme(theme) {
    const root = document.documentElement;
    const dark = isDarkMode(theme);
    root.classList.toggle('dark', dark);
    return dark;
  }

  function initTheme() {
    const theme = getStoredTheme();
    const isDark = applyTheme(theme);

    // Watch for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (getStoredTheme() === THEMES.SYSTEM) {
        applyTheme(THEMES.SYSTEM);
      }
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
    }

    return { theme, isDark, updateTheme, getStoredTheme };
  }

  function updateTheme(newTheme) {
    setStoredTheme(newTheme);
    const isDark = applyTheme(newTheme);
    return { theme: newTheme, isDark };
  }

  // Initialize on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }

  // Export for Alpine.js
  window.themeManager = {
    getStoredTheme,
    updateTheme,
    applyTheme,
    isDarkMode: (theme) => isDarkMode(theme || getStoredTheme())
  };
})();
