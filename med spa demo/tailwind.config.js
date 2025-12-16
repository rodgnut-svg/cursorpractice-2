/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#7AC2B1', // Lighter teal
                    DEFAULT: '#5B9A8B', // Soft teal (Zen-ish)
                    dark: '#4A7F72',
                },
                secondary: {
                    light: '#F5F7F7',
                    DEFAULT: '#E8ECED',
                    dark: '#D1D9DB',
                },
                accent: {
                    DEFAULT: '#D4A373', // Warm gold/sand accent (optional, good for lux feel)
                },
                surface: {
                    DEFAULT: '#FFFFFF',
                    soft: '#F9FAFA', // Very subtle off-white
                },
                text: {
                    main: '#2C3E50',
                    muted: '#64748B',
                    light: '#94A3B8',
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'], // Premium, clean
            },
            boxShadow: {
                'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
                'card': '0 10px 40px -10px rgba(0, 0, 0, 0.05)',
            },
            borderRadius: {
                'xl': '1rem',
                '2xl': '1.5rem',
                '3xl': '2rem',
            },
        },
    },
    plugins: [],
}
