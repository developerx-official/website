module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        textBlink: {
          "from, to": {
            opacity: 1
          },
          "50%": {
            opacity: 0.8
          },
        },
      },
      animation: {
        "text-blink": "textBlink 0.01s steps(2) infinite",
      },
      colors: {
        dark: '#33202a',
        lighter: "#5f5566",
        frost: "#f5f4f6",
        redish: "#f05d5e",
        yellowish: "#fcab10"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'gradient-radial-at-t': 'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
        'gradient-radial-at-b': 'radial-gradient(ellipse at bottom, var(--tw-gradient-stops))',
        'gradient-radial-at-l': 'radial-gradient(ellipse at left, var(--tw-gradient-stops))',
        'gradient-radial-at-r': 'radial-gradient(ellipse at right, var(--tw-gradient-stops))',
        'gradient-radial-at-tl': 'radial-gradient(ellipse at top left, var(--tw-gradient-stops))',
        'gradient-radial-at-tr': 'radial-gradient(ellipse at top right, var(--tw-gradient-stops))',
        'gradient-radial-at-bl': 'radial-gradient(ellipse at bottom left, var(--tw-gradient-stops))',
        'gradient-radial-at-br': 'radial-gradient(ellipse at bottom right, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
