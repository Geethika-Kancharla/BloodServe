// tailwind.config.js
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          'flow-left': {
            '0%': {
              opacity: '0',
              transform: 'translateX(-100%)',
            },
            '100%': {
              opacity: '1',
              transform: 'translateX(0)',
            },
          },
          'flow-right': {
            '0%': {
              opacity: '0',
              transform: 'translateX(100%)',
            },
            '100%': {
              opacity: '1',
              transform: 'translateX(0)',
            },
          },
        },
        animation: {
          'flow-left': 'flow-left 1s forwards',
          'flow-right': 'flow-right 1s forwards',
        },
      },
    },
    plugins: [],
  };
  
