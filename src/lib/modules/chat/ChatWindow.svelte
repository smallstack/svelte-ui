<svelte:options
	customElement={{
		tag: "sui-chat-window",
		shadow: "none",
		props: {
			messages: { type: "Array", reflect: true },
			users: { type: "Array" },
			meId: { type: "String" },
			threads: { type: "Array" }
		}
	}}
/>

<script lang="ts">
	import { createEventDispatcher, onMount } from "svelte";
	import type { ChatThread } from "./chat-message";
	import MessageThread from "./MessageThread.svelte";

	const messageEventDispatcher = createEventDispatcher();

	let {
		threads = [],
		meId,
		showAvatars = "always",
		currentThreadId,
		sendMessage
	}: {
		threads?: ChatThread[];
		meId: string;
		showAvatars?: "never" | "always" | "change";
		currentThreadId?: string;
		sendMessage: (threadId: string, message: string) => void;
	} = $props();
	let newChatMessage = $state("");
	let sidePanelOpen = $state(false);

	onMount(() => {
		if (!currentThreadId && threads.length > 0) currentThreadId = threads[0].id;
	});
	let currentThread = $derived(threads?.find((thread) => thread.id === currentThreadId));

	function executeSendMessage() {
		if (sendMessage) sendMessage(currentThreadId, newChatMessage);
		else messageEventDispatcher("message", newChatMessage);
		newChatMessage = "";
	}
</script>

<div class="flex flex-row gap-2 text-primary-content min-h-64">
	{#if threads && threads.length > 0}
		<div
			class="flex flex-col bg-primary bg-opacity-90 rounded p-2 text-primary-content items-start {sidePanelOpen
				? 'w-64'
				: 'w-14'}"
		>
			<div class="grow flex flex-col gap-2 items-start">
				{#each threads as thread}
					<button
						class="flex flex-row gap-2 cursor-pointer"
						onclick={() => {
							currentThreadId = thread.id;
							sidePanelOpen = false;
						}}
					>
						<img
							src={thread.avatarUrl}
							alt={thread.name}
							class="avatar rounded-full w-10 h-10 p-1 {thread.id === currentThreadId
								? 'bg-secondary'
								: 'bg-primary'}"
						/>
						{#if sidePanelOpen}
							<div class="flex flex-col gap-0 justify-center items-start h-full">
								<span class="font-bold truncate">{thread.name}</span>
								<span class="text-xs truncate text-gray-500"
									>{thread.messages[thread.messages.length - 1].text}</span
								>
							</div>
						{/if}
					</button>
				{/each}
			</div>
			<button onclick={() => (sidePanelOpen = !sidePanelOpen)} class="btn btn-circle btn-ghost btn-sm m-1">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					x="0px"
					y="0px"
					width="16"
					height="16"
					viewBox="0 0 50 50"
				>
					<path
						fill="currentColor"
						d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"
					></path>
				</svg>
			</button>
		</div>
	{/if}
	<div class="flex flex-col gap-2 grow">
		{#if currentThread}
			<div class="grow">
				<MessageThread
					messages={currentThread.messages}
					users={currentThread.users}
					{meId}
					{showAvatars}
				/>
			</div>
			<div class="join">
				<input
					type="string"
					class="join-item input input-bordered grow"
					bind:value={newChatMessage}
					onkeydown={(e) => e.key === "Enter" && executeSendMessage()}
				/>
				<button class="join-item btn" disabled={newChatMessage === ""} onclick={executeSendMessage}>
					Send
				</button>
			</div>
		{/if}
	</div>
</div>
