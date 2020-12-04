const customeSpacing = {
  sm: "2rem",
  md: "3rem",
  lg: "6rem",
  xl: "12rem",
  "2xl": "22rem",
  "-sm": "-2rem",
  "-md": "-3rem",
  "-lg": "-16rem",
  "-xl": "-12rem",
  "-2xl": "-22rem",
};
module.exports = {
  // purge: ["./src/**/*.js", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'kani': ['Kanit', 'sans-serif']
      },
      colors:{
        'neptune': {
          '50': '#f8fbfb', 
          '100': '#f2f8f8', 
          '200': '#deeded', 
          '300': '#cae3e2', 
          '400': '#a2cdcc', 
          '500': '#7AB8B6', 
          '600': '#6ea6a4', 
          '700': '#5c8a89', 
          '800': '#496e6d', 
          '900': '#3c5a59'
      },
      'atomic-tangerine': {
        '50': '#fffaf8', 
        '100': '#fff5f1', 
        '200': '#ffe7dd', 
        '300': '#ffd8c8', 
        '400': '#ffbb9e', 
        '500': '#FF9E75', 
        '600': '#e68e69', 
        '700': '#bf7758', 
        '800': '#995f46', 
        '900': '#7d4d39'
    }
      },
      padding: {
        ...customeSpacing,
      },
      margin: {
        ...customeSpacing,
      },
      translate:{
        ...customeSpacing,
      },
      width:{
        'half-screen':'50vw'
      }
    },
  },
  variants: {
    extend: {
      scale: ["group-hover"],
      transform: ["group-hover"],
      backgroundColor: ["group-hover"],
      borderRadius: ["first", "last"],
      margin: ["first,last"],
    },
  },
  plugins: [],
};
