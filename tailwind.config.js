/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
    transform: {
      "rotateX-30-scale-110": "rotateX(-30deg) scale(1.1)",
    },
  },
  plugins: [require("flowbite/plugin")],
};
