import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],

	theme: {
		extend: {
			fontFamily: {
				bebas: ["var(--font-bebas)"],
				smooch: ["var(--font-smooch)"],
				sans: ["var(--font-smooch)", ...defaultTheme.fontFamily.sans],
				kode: ["var(--font-kode)"],
			},

			backgroundImage: {
				banner: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('/images/testbanner.jpg')",
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				auth_bg:
					"linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('/images/auth-bg.png')",
			},
		},
	},
	plugins: [],
};
export default config;
