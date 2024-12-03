<svelte:options
	customElement={{
		tag: "sui-chat-window",
		shadow: "none",
		props: {
			messages: { type: "Array", reflect: true },
			users: { type: "Array" },
			meId: { type: "String" }
		}
	}}
/>

<script lang="ts">
	import Date from "../utils/date/Date.svelte";
	import type { ChatMessage, ChatUser } from "./chat-message";

	let {
		messages = [],
		users = [],
		meId,
		showAvatars = "always"
	}: {
		messages: ChatMessage[];
		users: ChatUser[];
		meId: string;
		showAvatars?: "never" | "always" | "change";
	} = $props();

	const scrollToBottom = (node, dependency) => {
		const scroll = () =>
			node.scroll({
				top: node.scrollHeight,
				behavior: "smooth"
			});
		scroll();

		return { update: scroll };
	};
</script>

<div class="w-full h-full overflow-hidden overflow-y-auto" use:scrollToBottom={messages}>
	{#each messages as message, i}
		<div class="chat {message.senderId === meId ? 'chat-start' : 'chat-end'}">
			{#if showAvatars !== "never"}
				<div class="chat-image avatar">
					<div class="w-10 rounded-box">
						{#if showAvatars === "always" || (showAvatars === "change" && messages[i + 1]?.senderId !== message.senderId)}
							<img
								alt="Avatar"
								src={users?.find((user) => user.id === message.senderId)?.avatarUrl}
							/>
						{/if}
					</div>
				</div>
			{/if}
			<div
				class="chat-bubble {message.senderId === meId
					? 'chat-bubble-primary chat-start'
					: 'chat-bubble-secondary chat-end'}"
			>
				{message.text}
			</div>
			<div class="chat-footer opacity-40">
				<Date timestamp={message.createdAt} />
			</div>
		</div>
	{/each}
</div>
