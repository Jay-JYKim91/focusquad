import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        "./src/**/*.{html,js,ts,jsx,tsx}", // Tailwind가 스캔할 파일 경로
    ],
    theme: {
        extend: {
            fontFamily: {
                roboto: ['Roboto', 'sans-serif'],
            },
            colors: {
                softBlack: "#1A1A1A",
                charcoalGray: "#333333",
                darkSlateGray: "#2F4F4F",
                graphite: "#3C3C3C",
                warmGray: "#4B4B4B",
            },
        },
    },
    plugins: [],
};

export default config;
