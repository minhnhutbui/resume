import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            flexBasis: {
                '1/7': '14.2857143%',
                '2/7': '28.5714286%',
                '3/7': '42.8571429%',
                '4/7': '57.1428571%',
                '5/7': '71.4285714%',
                '6/7': '85.7142857%',
            },
            spacing: {
                0.2: '20%',
            },
            backgroundColor: {
                'light-theme-brown': '#916d55',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateX(5px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
            },
            animation: {
                fadeIn: 'fadeIn 1s linear',
            },
        },
    },
    plugins: [],
};
export default config;
