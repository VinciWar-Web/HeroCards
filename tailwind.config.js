module.exports = {

  content: ["./src/**/*.{html,js}"],
  
  theme: {

    fontFamily: {
      'nun': ['Nunito'],
    },

    extend: {

      colors: {
        officialColor: "#FF452B",
        officialColorBtn: "#263238",
        officialColorText: "#424242",
      },

      spacing: {
        02: "5px",
        80: "240px",
        90: "320px",
        97: "420px",
        100: "580px",
        110: "700px",
        120: "820px",
        "70/0": "70%",
        "80/0": "80%",
        "90/0": "90%",
        "93/0": "93%",
        "96/0": "96%",
        "100/0": "100%",
      },

      screens: {
        mobile: "300px",
        // => @media (min-width: 340px) { ... }

        tablet: "600px",
        // => @media (min-width: 600px) { ... }

        miniLaptop: "730px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}



