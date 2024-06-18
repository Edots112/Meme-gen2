module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // eller 'media' eller 'class'
	theme: {
		extend: {
			fontFamily: {
				Adventure: ["Adventure"],
				Mangat: ["Mangat"],
				Yellow: ["Yellow"],
				Yujin: ["Yujin"],
			},
			animation: {
				pulse: "pulse 2s infinite",
			},
			keyframes: {
				pulse: {
					"0%, 100%": { opacity: 1 },
					"50%": { opacity: 0.5 },
				},
			},
		},
	},
	variants: {
		extend: {
			animation: ["hover", "focus"],
		},
	},
	plugins: [],
};
