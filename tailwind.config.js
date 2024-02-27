/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    components: {
      Button: {
        borderColorDisabled: 'transparent',
      },
    },
    colors: {
      primary: '#13111b',
      secondary: '#50FA7B',
      error: '#e60536',
      success: '#006940',
      warning: '#faad14',
      white: '#F8F8F2',
      pink: '#FF79C6',
      yellow: '#E7DE79',
      purple: '#988BC7',
      comment: '#483C67',
      deepPurple: '#191622'
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}

