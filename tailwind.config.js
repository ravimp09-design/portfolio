module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FFFFFF",
        paperCanvas: "#F8FAFF",
        paperCard: "#FFFFFF",
        ink: "#0A1128",
        inkMuted: "#334155",
        inkSubtle: "#64748B",
        borderLine: "#DCE5F5",
        borderStrong: "#BFD3F2",
        accent: "#004CE6",
        accentHover: "#003BB3",
        accentSubtle: "#EEF4FF",
        accentBorder: "#99BEFF",
        royalNavy: "#001B44",
        royalBlue: "#004CE6",
        electricBlue: "#0062FF",
        iceBlue: "#F0F5FF",
      },
      boxShadow: {
        'strong-card': '0 10px 30px -4px rgba(0, 40, 120, 0.08), 0 2px 8px -2px rgba(10, 17, 40, 0.04)',
        'strong-card-hover': '0 20px 45px -8px rgba(0, 76, 230, 0.16), 0 6px 18px -3px rgba(0, 27, 68, 0.06)',
        'strong-btn': '0 6px 20px -2px rgba(0, 76, 230, 0.35)',
        'strong-btn-hover': '0 10px 28px -2px rgba(0, 76, 230, 0.45)',
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
