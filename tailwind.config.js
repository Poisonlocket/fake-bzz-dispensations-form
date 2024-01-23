/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "submit.html"],
  daisyui:{
    themes : ["light","dark","nord"],

  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

