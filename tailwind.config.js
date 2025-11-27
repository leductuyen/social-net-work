/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // bật dark mode theo class
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1d9bf0",
        "background-light": "#f0f2f5",
        "background-dark": "#1a1a1a",
        "card-light": "#ffffff",
        "card-dark": "#2d2d2d",
        "text-light-primary": "#1f2937",
        "text-dark-primary": "#f9fafb",
        "text-light-secondary": "#6b7280",
        "text-dark-secondary": "#9ca3af",
        "border-light": "#e5e7eb",
        "border-dark": "#4b5563",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "12px",
      },
    },
  },
  safelist: [
    'bg-background-light',
    'bg-background-dark',
    'text-text-light-primary',
    'text-text-dark-primary',
    'text-text-light-secondary',
    'text-text-dark-secondary',
  ],
  plugins: [],
}
