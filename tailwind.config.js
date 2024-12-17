/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       // Custom font sizes with a type scale
//       fontSize: {
//         // Base sizes
//         'xxxs': ['0.45rem', { lineHeight: '1.1' }],
//         'xxs': ['0.6rem', { lineHeight: '1.1' }],
//         'xs': ['0.75rem', { lineHeight: '1.1' }],
//         'sm': ['0.85rem', { lineHeight: '1.5' }],
//         'base': ['1rem', { lineHeight: '1.5' }],

//         // Responsive type scale with fluid sizing
//         'md': ['clamp(1rem, 1rem * 1.2, 1.2rem)', { lineHeight: '1.5' }],
//         'lg': ['clamp(1.2rem, 1rem * 1.2 * 1.2, 1.44rem)', { lineHeight: '1.5' }],
//         'xl': ['clamp(1.44rem, 1rem * 1.2 * 1.2 * 1.2, 1.728rem)', { lineHeight: '1.5' }],
//         'xxl': ['clamp(1.728rem, 1rem * 1.2 * 1.2 * 1.2 * 1.2, 2.074rem)', { lineHeight: '1.8' }],
//         'xxxl': ['clamp(2.074rem, 1rem * 1.2 * 1.2 * 1.2 * 1.2 * 1.2, 2.488rem)', { lineHeight: '1.8' }],
//       },

//       // Custom line heights
//       lineHeight: {
//         'tight': '1.1',
//         'normal': '1.5',
//         'loose': '1.8'
//       }
//     }
//   },
//   plugins: []
// }