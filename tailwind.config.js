/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        orange : {
          50:'#fac184',
          60: '#EFA87B',
          80:'#F4C5A6',
          97:"#FCF1E8"
        },
        blue:{
          50:"#3542B5",
          60:"#4A56C7",
          70:"#6872CF",
          80:"#868ED8",
          90:"#A4ABE1",
          95:"#C3C7EC",
          97:"#E1E3F5",
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
      backgroundImage: {
        'blob': "url('./src/assets/blob.svg)",
      }

    },
   
  },
  plugins: [],
  safelist: [
    'brand-red', // Add more classes as needed
    // Patterns are also supported
    'brand-*', // Safelists all brand color utilities
  ],
}