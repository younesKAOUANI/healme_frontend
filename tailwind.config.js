/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/primereact/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D8E4FF',
        dark: '#050505',
        secondary: '#004FFF',
        secondaryLight: '#31AFD4',
        accent: '#FF007F',
        background: '#f3f3f3',
      },
      fontFamily: {
        custom: ['Qanelas Soft Regular', 'Arial', 'sans-serif'],
      },
      
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
};
