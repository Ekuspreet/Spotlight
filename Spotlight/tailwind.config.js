
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
 
  ],
  theme: {
    extend: {},
  },
  plugins: [require("rippleui")],
  rippleui: {
		themes: [
			{
				themeName: "light",
				colorScheme: "light",
				colors: {
					primary: "#235264",
					backgroundPrimary: "#964643",
				},
			},
			{
				themeName: "dark",
				colorScheme: "dark",
				colors: {
					primary: "#8C52FF",
					backgroundPrimary: "#1a1a1a",
				},
			},
		],
	},
}
  
