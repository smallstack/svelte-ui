export interface ChatMessage {
	id: string;
	createdAt: number;
	senderId: string;
	text: string;
}

export interface ChatUser {
	id: string;
	name: string;
	avatarUrl: string;
}