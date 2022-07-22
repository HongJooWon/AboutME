module.exports = {
  plugins: [
    'tailwindcss',
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': false,
        },
      },
    ],
  ],
}
// module.exports = {  
//   content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],  
//   darkMode: 'media', // or 'media' or 'class'  
//   theme: {      extend: {},  },  
//   variants: {      extend: {},  },  
//   plugins: [],
// }

