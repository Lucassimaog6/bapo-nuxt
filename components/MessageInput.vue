<script setup lang="ts">
	const currentGroupStore = useCurrentGroupStore();
	const userIdStore = useUserIdStore();

	let currentGroup = computed(() => currentGroupStore.currentGroup);
	let userId = computed(() => userIdStore.userId);

	const send = async () => {
		sendMessage(messageContent.value, currentGroup.value, userId.value).then(() => {
			messageContent.value = '';
			getMessages(currentGroup.value);
		})
	};
</script>

<script lang="ts">
	let messageContent = ref('')
</script>

<template>
	<div class="grid grid-cols-[1fr_auto_auto_auto_auto] items-center bg-white">
		<input @keyup.enter="send" v-model="messageContent" class="text-xl p-2" type="text" />
		<div class="w-1 h-full bg-black/40"></div>
		<button @click="send" class="p-2 px-4">➤</button>
	</div>
</template>
