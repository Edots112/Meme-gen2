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
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
