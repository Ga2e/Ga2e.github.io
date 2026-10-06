/** @type {import('tailwindcss').Config} */
export default {
  content: ["./docs/**/*.{md,vue,js,ts}", "./docs/.vitepress/**/*.{js,ts,vue}"],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false      // 关掉重置，避免破坏 VitePress 样式
  },
};
