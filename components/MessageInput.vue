<script setup lang="ts">
	let messageContent = '';

	const currentGroupStore = useCurrentGroupStore();
	const userIdStore = useUserIdStore();

	let currentGroup = computed(() => currentGroupStore.currentGroup);
	let userId = computed(() => userIdStore.userId);

	async function sendMessage() {
		if (!messageContent) return;
		useFetch('/api/sendMessage', {
			method: 'POST',
			body: {
				groupId: currentGroup,
				authorId: userId,
				content: messageContent,
			},
		});
		messageContent = '';
	}
</script>

<template>
	<div class="grid grid-cols-[1fr_auto_auto_auto_auto] items-center bg-white">
		<input @keyup.enter="sendMessage" v-model="messageContent" class="text-xl p-2" type="text" />
		<div class="w-1 h-full bg-black/40"></div>
		<button @click="sendMessage" class="p-2 px-4">➤</button>
	</div>
</template>
