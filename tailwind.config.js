/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                dark: {
                    100: '#0e0e0c', // Darkest shade, use for backgrounds
                    200: '#1c1c1a', // Dark shade for backgrounds
                    300: '#333333', // Tertiary text or muted text
                    400: '#595959', // Secondary text
                    500: '#808080', // Primary text
                    600: '#a6a6a6', // Emphasized text
                    accent: '#00ffff',
                },
            },
            fontFamily: {
                sans: ['Gabarito', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
