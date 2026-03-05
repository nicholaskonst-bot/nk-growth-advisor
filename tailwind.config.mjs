/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1B2A4A',
        secondary: '#2E7D6F',
        accent: '#D4A843',
        surface: '#F8F9FC',
        muted: '#6B7280',
        dark: '#0F1629',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
