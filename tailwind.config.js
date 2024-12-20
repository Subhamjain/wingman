/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "sidebar-bg-color":"var(--sidebar-bg-color)"
      }
    },
  },
  plugins: [],
};
