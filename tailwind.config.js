/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*tsx"],
  theme: {
    screens: {
      tablet: { max: "1023px" },
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      backgroundImage: {
        blur: "url(/src/assets/blur.png)",
        web3: "url(/src/assets/web3.png)",
      },
      fontFamily: {
        start: "'Press Start 2P', sans-serif",
        roboto: "'Roboto', sans-serif",
        rubikone: "Rubik Mono One",
        confortaa: "'Confortaa', sans-serif",
      },
      colors: {
        gray: {
          900: "#fff",
        },
        purple: {
          400: "#9600BC",
        },
      },
    },
  },
  plugins: [],
};
