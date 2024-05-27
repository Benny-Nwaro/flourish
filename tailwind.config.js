/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        kuano: ['"kuano"', "sans-serif"],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [],
}

