<script lang="ts">
	import { ONE_SECOND } from "$lib/constants/date.constants";
	import ComponentHeader from "$lib/docs/ComponentHeader.svelte";
	import ChatWindow from "$lib/modules/chat/ChatWindow.svelte";

	const users = [
		{
			id: "1",
			name: "Anakin Skywalker",
			avatarUrl: "https://img.icons8.com/color/40/luke-skywalker.png"
		},
		{
			id: "2",
			name: "Obi-Wan Kenobi",
			avatarUrl:
				"https://img.icons8.com/external-flat-icons-inmotus-design/40/external-Obi-Wan-star-wars-flat-icons-inmotus-design.png"
		}
	];

	const messages = [
		{
			id: "1",
			text: "It was said that you would, destroy the Sith, not join them.",
			senderId: "2",
			createdAt: Date.now() - 1000 * 60 * 9 + ONE_SECOND * 5
		},
		{
			id: "2",
			text: "It was you who would bring balance to the Force",
			senderId: "2",
			createdAt: Date.now() - 1000 * 60 * 8 + ONE_SECOND * 14
		},
		{
			id: "3",
			text: "Not leave it in Darkness",
			senderId: "2",
			createdAt: Date.now() - 1000 * 60 * 6 + ONE_SECOND * 2
		},
		{
			id: "4",
			text: "I never said that",
			senderId: "1",
			createdAt: Date.now() - ONE_SECOND * 30
		},
		{
			id: "5",
			text: "I said a hip hop - Hippie to the hippie  -  The hip, hip a hop, and you don't stop, a rock it out",
			senderId: "1",
			createdAt: Date.now() - 1000 * 60 * 5 + ONE_SECOND * 10
		},
		{
			id: "6",
			text: "Bubba to the bang bang boogie, boobie to the boogie  - To the rhythm of the boogie the beat. Now, what you hear is not a test I'm rappin' to the beat   - And me, the groove, and my friends are gonna try to move your feet  - See, I am Wonder Mike, and I'd like to say hello  - To the black, to the white, the red and the brown- The purple and yellow, but first, I gotta - Bang bang, the boogie to the boogie  -- Say up jump the boogie to the bang bang boogie -Let's rock, you don't stop   -   Rock the rhythm that'll make your body rock    - Well so far you've heard my voice but I brought two friends along  - And the next on the mic is my man Hank - C'mon, Hank, sing that song, check it out  -     Well, I'm Imp the Dimp, the ladies' pimp - The women fight for my delight   -   But I'm the grandmaster with the three MCs - That shock the house for the young ladies   -   And when you come inside, into the front - You do the Freak, Spank, and do the Bump",
			senderId: "1",
			createdAt: Date.now()
		}
	];
</script>

<ComponentHeader title="Chat Window"></ComponentHeader>

<div class="mockup-phone">
	<div class="camera"></div>
	<div class="display">
		<div class="artboard phone-1 h-full pt-6">
			<ChatWindow meId="1" {users} {messages}></ChatWindow>
		</div>
	</div>
</div>
