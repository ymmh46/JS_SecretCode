module.exports = {
  mode: 'jit',
  content: ["./index.html", "./src/script.js"],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),],
}
