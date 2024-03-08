import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': '#6CBE45',
        'on-primary': '#FFFFFF',
        'surface': '#2A2728',
        'on-surface': '#FFFFFF',
        'surface-variant': '#443F41',
        'on-surface-variant': '#FFFFFF',
        'surface-light': '#F5F5F5',
        'on-surface-light': '#2A2728',
        'background': '#FFFFFF',
        'on-background': '#2A2728',
      },
      keyframes: {
        'pop-in': {
          '0%': { transform: 'translate(0, 100px)', opacity: '0.05' },
          '100%': { transform: 'translate(0, 0px)', opacity: '1.0' },
        },
      },
    },
    screens: {
      sm: '576px',
      md: '960px',
      lg: '1440px',
    },
  },
  plugins: [],
}
export default config
