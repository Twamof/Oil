/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#FF4500', // Vibrant Orange
                secondary: '#1a1a1a', // Rich Black
                cream: '#FDFBF7', // Cream Background
            },
            fontFamily: {
                serif: ['Amiri', 'serif'],
                sans: ['Outfit', 'sans-serif'],
            },
            animation: {
                'spin-slow': 'spin 20s linear infinite',
            },
        },
    },
    plugins: [],
}
