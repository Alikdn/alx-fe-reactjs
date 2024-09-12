module.exports = {
  purge: ['./src/*/.{js,jsx,ts,tsx}', './public/index.html'], // For compatibility with Tailwind 2.x
  content: ['./src/*/.{js,jsx,ts,tsx}', './public/index.html'], // For Tailwind 3.x
  theme: {
    extend: {},
  },
  plugins: [],
};