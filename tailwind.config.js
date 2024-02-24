/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "black-400": "#111111",
        "black-500": "#121212",
        "yellow-250": "#F7D354"
      },
      padding: {
        "0.8": "0.2rem",
        "1.2": "0.3rem",
        "3.2": "0.8rem",
      },
      borderColor: {
        "yellow-250": "#F7D354"
      },
      fontSize: {
        "5.2": "1.3rem",
      },
      transitionDuration: {
        "400": "400ms"
      },
      textColor: {
        "yellow-250": "#F7D354",
        "yellow-450": "#B8930C"
      },
      lineHeight: {
        "5.6": "1.4rem"
      },
      maxWidth: {
        "1.5xl": "37.5rem",
        "3.0xl": "75rem"
      },
      gap: {
        "1.6": "0.4rem"
      },
      width: {
        "3/10": "30%"
      }
    },
  },
  plugins: [],
}

