<script lang="ts">
	import Date from "../utils/date/Date.svelte";
	import type { ChatMessage, ChatUser } from "./chat-message";

	let { messages, users, meId }: { messages: ChatMessage[]; users: ChatUser[]; meId: string } =
		$props();
</script>

<div class="w-full h-full overflow-hidden overflow-y-auto">
	{#each messages as message, i (message.id)}
		<div class="chat {message.senderId === meId ? 'chat-start' : 'chat-end'}">
			<div class="chat-image avatar">
				<div class="w-10 rounded-box">
					{#if messages[i + 1]?.senderId !== message.senderId}
						<img
							alt="Tailwind CSS chat bubble component"
							src={users.find((user) => user.id === message.senderId)?.avatarUrl}
						/>
					{/if}
				</div>
			</div>
			<div class="chat-bubble {message.senderId === meId ? 'chat-start' : 'chat-end'}">
				{message.text}
			</div>
			<div class="chat-footer opacity-40">
				<Date timestamp={message.createdAt} />
			</div>
		</div>
	{/each}
</div>
