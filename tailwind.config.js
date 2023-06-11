/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange' : 'hsl(26, 100%, 55%)',
        'lightorange' : 'hsl(25, 100%, 94%)',
        'vdblue' : 'hsl(220, 13%, 13%)',
        'dgblue' : 'hsl(219, 9%, 45%)',
        'gblue' : 'hsl(220, 14%, 75%)',
        'lgblue' : 'hsl(223, 64%, 98%)',
        'white' : 'hsl(0, 0%, 100%)',
        'whiteoverlay' : 'hsla(0, 0%, 100%, 0.6)',
        'overlay' : 'hsla(0, 0%, 0%, 0.5)',
        'black' : 'hsl(0, 0%, 0%)'
      },
      fontFamily : {
        kum : ['Kumbh Sans', 'sans-serif']
      },
      fontSize : {
        'h1-desktop' : '2.75rem',
        'h2-desktop' : '1.75rem',
        'body-desktop' : '1rem',
        'menu-desktop' : '0.9375rem',

      },
      lineHeight : {
        'h1-desktop' : '48px',
        'h2-desktop' : '35px',
        'body-desktop' : '26px',
        'menu-desktop' : '26px',
       
      },
      fontWeight : {
        'bold' : '700',
        'reg' : '400',

      },
      screens : {
        desktop : '1000px',
        tablet: '999px',
        mobile : '375px',
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },
    },
  },
  plugins: [],
}

