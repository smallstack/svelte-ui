import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,svelte,js,ts}"],
	daisyui: {
		themes: ["sunset"]
	},
	plugins: [daisyui]
};
