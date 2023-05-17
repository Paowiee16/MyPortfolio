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
          "primary": "#5C7F67",
          "secondary": "#ECF4E7",                
          "accent": "#FAE5E5",                  
          "neutral": "#5D5656",                 
          "base-100": "#E9E7E7",                 
          "info": "#3ABFF8",                
          "success": "#36D399",              
          "warning": "#FBBD23",             
          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"),require("daisyui")],
}