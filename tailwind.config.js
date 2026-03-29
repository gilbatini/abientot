/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal:       '#2BBFB3',
          'teal-mid': '#239e97',
          'teal-dark':'#1a7a75',
          gold:       '#D4A843',
          'gold-light':'#F0C060',
          earth:      '#C4622D',
          cream:      '#FDFAF5',
          'cream-alt':'#F5F0E8',
          dark:       '#1A2E1A',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        caps:    ['"Cinzel"', 'serif'],
        body:    ['"Inter"', 'system-ui', 'sans-serif'],
        accent:  ['"Playfair Display"', 'serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom, rgba(10,26,10,0.55) 0%, rgba(10,26,10,0.15) 18%, rgba(10,26,10,0.35) 55%, rgba(10,26,10,0.97) 100%)',
      },
    },
  },
  plugins: [],
}
