/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('./tailwind/preset')
  ],
  prefix: "kit-",
  content: [
    './src/components/**/*.{js,ts,jsx,tsx, mdx}'
  ],
};
