/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'dark-100': '#0e0e0c',
                'dark-200': '#262626',
                'dark-300': '#4D4D4D',
                'dark-400': '#404040',
                'dark-500': '#666666',
            },
        },
    },
    plugins: [],
};
