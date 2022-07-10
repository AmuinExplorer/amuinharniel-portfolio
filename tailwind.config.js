/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html, js}"],

  corePlugins: {
    preflight: true,
  },

  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      colors: {
        'cream': 'hsl(27, 66%, 92%)'
      },
      fontSize: {
        
      },
    },
  },

  plugins: [],
}
