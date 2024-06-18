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
				scale: "scale 0.5",
			},
			keyframes: {
				pulse: {
					"0%, 100%": { opacity: 1 },
					"50%": { opacity: 0.5 },
				},
				scale: {
					"0%": { transform: "scale(1)" },
					"100%": { transform: "scale(0.5)" },
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
