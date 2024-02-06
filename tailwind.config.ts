import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'p3-lightblue': '#0049A2',
        'p3-darkblue': '#151883',
        'project-back': '#0040AA',
        'project-front': '#EBEBEB',
        'menu-dark': '#1B1A28'
      },
    },
  },
  plugins: [],
}
export default config
