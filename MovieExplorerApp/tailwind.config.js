js// tailwind.config.js
export default {
  darkMode: 'class', // ← yeh add karo
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}