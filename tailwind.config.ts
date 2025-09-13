import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#12A88C",
          dark: "#0E8670"
        }
      },
      borderRadius: { '2xl': '1.25rem' }
    }
  },
  plugins: []
};
export default config;
