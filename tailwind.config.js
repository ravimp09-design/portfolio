/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F0F6FE",
        paperCard: "#FFFFFF",
        ink: "#0F172A",
        inkMuted: "#475569",
        borderLine: "#E2E8F0",
        accent: "#0284C7",
        accentHover: "#0369A1",
        accentSubtle: "#E0F2FE",
        accentBorder: "#BAE6FD",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
