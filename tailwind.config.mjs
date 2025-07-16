// tailwind.config.mjs

/** @type {import('tailwindcss').Config} */
const config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			animation: {
				spotlight: "spotlight 10s ease-in-out infinite",
				"lamp-swing": "lamp-swing 10s ease-in-out infinite",
			},
			keyframes: {
				spotlight: {
					"0%": {
						backgroundSize: "0% 100%",
						backgroundPosition: "left",
					},
					"25%": {
						backgroundSize: "40% 100%",
						backgroundPosition: "left",
					},
					"50%": {
						backgroundSize: "20% 100%",
						backgroundPosition: "center",
					},
					"75%": {
						backgroundSize: "40% 100%",
						backgroundPosition: "right",
					},
					"100%": {
						backgroundSize: "0% 100%",
						backgroundPosition: "right",
					},
				},
				"lamp-swing": {
					"0%, 100%": {
						transform: "translateX(-40%) rotate(-15deg)",
					},
					"50%": { transform: "translateX(40%) rotate(15deg)" },
				},
			},
		},
	},
	plugins: [],
};

// Use export default for ES Modules
export default config;
