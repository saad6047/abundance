const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            animation: {
                "fade-in": "fade-in 0.5s linear forwards",
                marquee: "marquee var(--marquee-duration) linear infinite",
                "spin-slow": "spin 4s linear infinite",
                "spin-slower": "spin 6s linear infinite",
                "spin-reverse": "spin-reverse 1s linear infinite",
                "spin-reverse-slow": "spin-reverse 4s linear infinite",
                "spin-reverse-slower": "spin-reverse 6s linear infinite",
            },
            borderRadius: {
                "4xl": "2rem",
                "5xl": "2.5rem",
            },
            colors: {
                primary: "#0093ff",
                secondary: "#00ffa0",
            },
            fontFamily: {
                sans: ["Mona Sans", ...defaultTheme.fontFamily.sans],
                display: [
                    ["Mona Sans", ...defaultTheme.fontFamily.sans],
                    { fontVariationSettings: '"wdth" 125' },
                ],
            },
            keyframes: {
                "fade-in": {
                    from: {
                        opacity: "0",
                    },
                    to: {
                        opacity: "1",
                    },
                },
                marquee: {
                    "100%": {
                        transform: "translateY(-50%)",
                    },
                },
                "spin-reverse": {
                    to: {
                        transform: "rotate(-360deg)",
                    },
                },
            },
            maxWidth: {
                "2xl": "40rem",
            },
        },
    },
    plugins: [],
};
