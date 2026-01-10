import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: {
          primary: "var(--black-primary)",
          second: "var(--black-second)",
          "01": "var(--black-01)",
          "02": "var(--black-02)",
        },
        yellow: {
          primary: "var(--yellow-primary)",
          second: "var(--yellow-second)",
        },
        gray: {
          primary: "var(--gray-01)",
          "02": "var(--gray-02)",
          "03": "var(--gray-03)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
