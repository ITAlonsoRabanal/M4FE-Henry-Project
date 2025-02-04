import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        "p-oblue": "#0A1128",
        "p-pblue": "#001F54",
        "p-idye": "#034078",
        "p-cerulean": "#1282A2",
        "p-white": "#FEFCFB",
      },
    },
  },
  plugins: [],
} satisfies Config;
