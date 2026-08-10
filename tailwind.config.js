/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
        display: ['var(--font-space-grotesk)', ...fontFamily.sans],
        body: ['var(--font-inter)', ...fontFamily.sans],
        mono: ['var(--font-plex-mono)', ...fontFamily.mono],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
        ink: "#12151C",
        "ink-2": "#1B1F2A",
        paper: "#F7F6F2",
        amber: "#E2993D",
        "amber-light": "#EDAB55",
        blue: "#7C93E8",
        mist: "#8890A0",
        "mist-light": "#5B6272",
        line: "rgba(247,246,242,0.10)",
        "line-strong": "rgba(247,246,242,0.18)",
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage:{
        circularLight: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px)'
      }
    },
  },
  plugins: [],
}