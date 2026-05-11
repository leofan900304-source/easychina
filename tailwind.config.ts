import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        /* 品牌色系 — 宋代美学灵感 */
        paper: "#F5F0EB",          // 宣纸白 — 底色
        ink: "#2C2C2C",            // 墨色 — 文字/标题
        celadon: {
          DEFAULT: "#5C7A6E",      // 宋瓷青 — 主色
          light: "#A8B5A0",        // 青瓷绿 — 柔和/卡片
          pale: "#E3E8E4",         // 淡青 — 浅色背景
        },
        stone: "#8B7D6B",          // 山岚灰 — 辅助/副文
        cinnabar: "#C23B22",       // 朱砂红 — 点缀/印章
        osmanthus: "#C5A55A",      // 桂花金 — 点缀/星级
        surface: {
          DEFAULT: "#F5F0EB",
          card: "#FAF8F5",
          hover: "#EFE9E2",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "silk": `
          repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(180,150,120,0.03) 2px, rgba(180,150,120,0.03) 4px),
          repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(180,150,120,0.02) 3px, rgba(180,150,120,0.02) 6px)
        `,
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "20px",
      },
      boxShadow: {
        "soft": "0 2px 8px rgba(0,0,0,0.06)",
        "card": "0 4px 16px rgba(0,0,0,0.06)",
        "elevated": "0 8px 24px rgba(0,0,0,0.08)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
