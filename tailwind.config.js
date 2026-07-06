/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        corporate: {
          primary: '#0B57D0', /* Royal Blue */
          secondary: '#F97316', /* Vibrant Orange */
          accent: '#D4AF37', /* Italian Gold */
          dark: '#0A0A0A', /* True Black */
          light: '#FFFFFF',
          bg: '#FAFAFA', /* Very slight off-white for better contrast with black */
          border: '#E5E7EB'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Instrument Serif', 'serif'],
        body: ['Barlow', 'sans-serif'],
      },
      borderRadius: {
        'corporate': '18px',
      },
      boxShadow: {
        'corporate': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'corporate-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}
