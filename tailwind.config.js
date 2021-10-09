module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			gridTemplateColumns: {
				16: "repeat(auto-fit, minmax(300px,1fr))",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
