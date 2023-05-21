/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
           "primary": "#4873c4",
           "secondary": "#e26f9f",
           "accent": "#633927",
           "neutral": "#1F252D",
           "base-100": "#f3f4f6",
           "info": "#68BDDE",
           "success": "#3ACFB6",
           "warning": "#F0B938",
           "error": "#E9356B",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"),require("daisyui")],
}
