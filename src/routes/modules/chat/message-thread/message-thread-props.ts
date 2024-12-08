export const MessageThreadProps = [
	{
		name: "messages",
		type: "Array<ChatMessage>",
		default: "[]",
		description: "Array of messages to display"
	},
	{
		name: "users",
		type: "Array<ChatUser>",
		default: "[]",
		description: "Array of users to display avatars"
	},
	{
		name: "meId",
		type: "String",
		default: "",
		description: "Id of the user who is currently logged in and therefor shown on the left"
	},
	{
		name: "showAvatars",
		type: '"never" | "always" | "change"',
		default: '"always"',
		description: "When to show avatars"
	}
];
