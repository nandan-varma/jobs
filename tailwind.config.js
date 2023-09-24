/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{astro,html,jsx,tsx,svelte,vue,js,ts}"],
	theme: {
	  extend: {
		screens: {
		  sm: "400px",
		},
		colors: {
		  primary: "#2bcc40",
		  secondary: "#000000",
		},
	  },
	},
	plugins: [],
  };
