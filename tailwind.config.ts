import type { Config } from "tailwindcss"

const config: Config = {
    darkMode: "class",
    content: [
        "./src/app/**/*.{ts,tsx}",
        "./src/components/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-roboto)", "sans-serif"],
                serif: ["var(--font-young-serif)", "serif"],
                goudy: ["var(--font-goudy)", "serif"],
            },
            colors: {
                brand: "hsl(var(--brand))",
                "brand-foreground": "hsl(var(--brand-foreground))",
            },
        },
    },
    plugins: [],
}

export default config
