import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        "./src/**/*.{html,js,ts,jsx,tsx}", // Tailwind가 스캔할 파일 경로
    ],
    theme: {
        extend: {
            // fontFamily: {
            //     roboto: ['Roboto', 'sans-serif'], // 예시: 커스텀 폰트 추가
            // },
        },
    },
    plugins: [],
};

export default config;
