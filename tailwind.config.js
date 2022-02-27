module.exports = {
  content: [
    './pages/**/*.js',
    './components/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        "mulish": ["Mulish", "cursive"],
        "poppins": ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        'index-hero': "linear-gradient(rgba(0, 0, 0, .75), rgba(0, 0, 0, .75)), url(/img/hero.jpg)"
      },
      colors: {
        "default-blue": "#0544a8",
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class',
    })
  ],
}
