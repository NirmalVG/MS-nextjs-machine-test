import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            backgroundImage: {
                banner: "url('../public/assets/banner-img.jpeg')",
                ceo: "url('../public/assets/ceo-img.jpeg')",
                "footer-banner": "url('../public/assets/footer-banner.png')",
                "insight-customer": "url('../public/assets/customer.png')",
                "insight-client": "url('../public/assets/client.png')",
                "insight-work": "url('../public/assets/work.png')",
                "enterpreuner": "url('../public/assets/enterpreuner.jpeg')",
                "young-people": "url('../public/assets/young-people.jpeg')",
                "boy-looking": "url('../public/assets/boy-looking.jpeg')",
                "university": "url('../public/assets/highlight-banner.jpeg')",
                "highlight-pattern":
                    "linear-gradient(to right, white 30%, rgba(255, 255, 255, 0) 70%), url('../public/assets/highlight-banner.jpeg')",
                "education-pattern":
                    "linear-gradient(to top, white 20%, rgba(255, 255, 255, 0) 60%), url('../public/assets/education.png')",
            },
        },
    },
    plugins: [],
};
export default config;
