/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        orange : {
          50:'#fac184'
        },
        blue:{
          95:"#C3C7EC"
        }
      },
      animation: {
        'bounce-slow': 'bounce-slow 2s infinite ease-in-out', 
      },
      keyframes: {
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
   
  },
  plugins: [],
  safelist: [
    'brand-red', // Add more classes as needed
    // Patterns are also supported
    'brand-*', // Safelists all brand color utilities
  ],
}