/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '321px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        'main': 'hsl(23, 100%, 50%)',
        'body': 'rgb(10, 10, 10)',
        'container': 'hsl(23, 4%, 10%)',
        'primary': 'rgb(255, 255, 255)',
        'secondary': 'rgb(163, 163, 163)',
        'navmenu': 'hsla(23, 12%, 4%, .2)',
      },
      screens: {
        'talet': '900px'
      }
    },
  },
  plugins: [],
}