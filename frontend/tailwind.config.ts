import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#7B6CF6',
                accent: '#ECEBFA',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Manrope', 'sans-serif'],
            },
        },
    },
    plugins: [],
}

export default config
