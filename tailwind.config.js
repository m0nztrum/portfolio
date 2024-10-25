/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                dark: {
                    100: '#0a0a0a',
                    200: '#1a1a1a',
                    300: '#262626',
                    400: '#404040',
                    500: '#4D4D4D',
                },
            },
        },
    },
    plugins: [],
};
