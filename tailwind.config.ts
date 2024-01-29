import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        third: '#D26704',
      },
      screens: {
        desktop: { min: '1024px' },
        tablet: { max: '1023px' },
        smartphone: { max: '767px' },
      },
    },
  },
  plugins: [],
}
export default config
