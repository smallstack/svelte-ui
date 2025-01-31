import plugin from "tailwindcss/plugin";

export default plugin(({ addComponents }) => {
	addComponents({
		".sui-dialog": {
			"@apply flex flex-col gap-4 h-full": {}
		},
		".sui-dialog-title": {
			"@apply text-3xl": {}
		},
		".sui-dialog-body": {
			"@apply text-base h-full overflow-auto": {}
		},
		".sui-dialog-actions": {
			"@apply flex flex-row justify-end gap-2": {}
		}
	});
});
