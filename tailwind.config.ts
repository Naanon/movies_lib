import type { Config } from 'tailwindcss'

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundColor: {
        "black-400": "#111111",
        "black-500": "#121212",
        "blue-250": "#0098C7"
      },
      padding: {
        "0.8": "0.2rem",
        "1.2": "0.3rem",
        "3.2": "0.8rem",
      },
      borderColor: {
        "blue-250": "#0098C7"
      },
      fontSize: {
        "5.2": "1.3rem",
      },
      transitionDuration: {
        "400": "400ms"
      },
      textColor: {
        "blue-250": "#0098C7",
        "blue-450": "#0047AB"
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
} satisfies Config

