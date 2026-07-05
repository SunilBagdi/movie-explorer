js// tailwind.config.js
export default {
  darkMode: 'class', // Dark mode can be toggled using the 'class' strategy
  content: [
    "./index.html",  // Specify the paths to all of your template files
    "./src/**/*.{js,ts,jsx,tsx}", // Include all JavaScript and TypeScript files in the src directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}