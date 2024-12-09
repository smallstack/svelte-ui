<script lang="ts">
	import type { ComponentPropDefinition } from "$lib/docs/component-prop-definition";
	import ComponentPage from "$lib/docs/ComponentPage.svelte";
	import type { ChatThread } from "$lib/modules/chat/chat-message";
	import ChatWindow from "$lib/modules/chat/ChatWindow.svelte";

	const props: ComponentPropDefinition[] = [
		{
			name: "meId",
			type: "string",
			description: "The id of the user who is currently logged in",
			default: "''"
		},
		{
			name: "threads",
			type: "ChatThread[]",
			description: "The list of threads to display",
			default: "[]"
		},
		{
			name: "sendMessage",
			type: "(threadId: string, message: string) => void",
			description: "A function that sends a message to a thread",
			default: ""
		},
		{
			name: "on:message",
			type: "(message: MessageThreadProps) => void",
			description: "A custom event that is fired when a message is sent",
			default: ""
		}
	];

	const threads: Array<ChatThread> = $state([
		{
			id: "1",
			name: "Superman",
			avatarUrl: "https://img.icons8.com/color/48/superman-dc.png",
			users: [
				{
					id: "1",
					name: "Superman",
					avatarUrl: "https://img.icons8.com/color/48/superman-dc.png"
				},
				{
					id: "2",
					name: "Batman",
					avatarUrl: "https://img.icons8.com/color/48/batman.png"
				}
			],
			messages: [
				{
					id: "2",
					senderId: "2",
					text: "(super deep voice) I'm Batman!",
					createdAt: Date.now()
				},
				{
					id: "1",
					senderId: "1",
					text: "go home, you're drunk",
					createdAt: Date.now()
				}
			]
		},
		{
			id: "2",
			name: "Robin",
			avatarUrl:
				"https://img.icons8.com/external-flat-icons-inmotus-design/67/external-face-super-hero-flat-icons-inmotus-design.png",
			users: [
				{
					id: "2",
					name: "Batman",
					avatarUrl: "https://img.icons8.com/color/48/batman.png"
				},
				{
					id: "3",
					name: "Robin",
					avatarUrl:
						"https://img.icons8.com/external-flat-icons-inmotus-design/67/external-face-super-hero-flat-icons-inmotus-design.png"
				}
			],
			messages: [
				{
					id: "1",
					senderId: "2",
					text: "Wanna go for a ride?",
					createdAt: Date.now()
				},
				{
					id: "1",
					senderId: "3",
					text: "no thanks",
					createdAt: Date.now()
				}
			]
		},
		{
			id: "3",
			name: "Mom",
			avatarUrl:
				"https://img.icons8.com/external-wanicon-flat-wanicon/64/external-mom-mothers-day-wanicon-flat-wanicon.png",
			users: [
				{
					id: "2",
					name: "Batman",
					avatarUrl: "https://img.icons8.com/color/48/batman.png"
				},
				{
					id: "4",
					name: "Mom",
					avatarUrl:
						"https://img.icons8.com/external-wanicon-flat-wanicon/64/external-mom-mothers-day-wanicon-flat-wanicon.png"
				}
			],
			messages: [
				{
					id: "1",
					senderId: "4",
					text: "I'm Batman's mom",
					createdAt: Date.now()
				},
				{
					id: "1",
					senderId: "2",
					text: "I'm Batman",
					createdAt: Date.now()
				}
			]
		}
	]);
	const meId = "2";

	function sendMessage(threadId: string, message: string) {
		const threadIndex = threads.findIndex((thread) => thread.id === threadId);
		if (threadIndex === -1) return;
		threads[threadIndex].messages = [
			...threads[threadIndex].messages,
			{
				id: threads[threadIndex].messages.length.toString(),
				senderId: meId,
				text: message,
				createdAt: Date.now()
			}
		];
	}
</script>

<ComponentPage
	title="Chat Window"
	description="The Chat Window combines a message thread with an input box as well as a thread selector"
	{demoComponent}
	{props}
></ComponentPage>

{#snippet demoComponent()}
	<ChatWindow
		{meId}
		{threads}
		{sendMessage}
		on:message={(message) => console.log("got message via custom event: ", message)}
	/>
{/snippet}
