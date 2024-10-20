/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'radial-gradient(#ffffff33 1px, #00091d 1px)',
      },
      backgroundSize: {
        'custom-size': '20px 20px',
      },
      zIndex: {
        '-2': '-2',
      }
    },
  },
  plugins: [],
}
