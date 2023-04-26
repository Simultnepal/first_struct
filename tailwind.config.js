/** @type {import('tailwindcss').Config} */
module.exports = {
  
  darkMode: ['class', '[data-mode="black"]'],
    
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      'mm':'0px',
      
    
      'md': '768px',
      
    
      'lg': '1024px',
      
      
      'xl': '1280px',
     
    },
    
  },
  plugins: [],
}