/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(50% 50% at 50% 50%, #ffffff 0%, rgb(0, 0, 0) 100%);',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
