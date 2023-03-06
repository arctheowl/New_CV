/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
       keyframes: {
        personalBounce: {
          '0%, 100%': { 
            transform: 'translateY(-75%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
            }
        }
       
      },
       animation: {
          personalBounce: 'personalBounce 1s ease-in-out infinite',
        }
    },
  },
  plugins: [],
};

module.exports = config;
