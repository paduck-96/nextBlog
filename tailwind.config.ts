/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{jsx,tsx}',
        './components/**/*.{jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                hiMelody: ['var(--font-hiMelody)', 'var(--font-dongle)', 'sans-serif'],
                dongle: ['var(--font-dongle)', 'sans-serif']
            }
        },
    },
    plugins: [],
};