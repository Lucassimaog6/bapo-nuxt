<script setup lang="ts">
	import { useCurrentGroupStore, useUserIdStore } from '~/composables/states';

	const messageList = ref();
	const userIdStore = useUserIdStore();
	const currentGroupStore = useCurrentGroupStore();

	let selectedGroup = computed(() => currentGroupStore.currentGroup);
	let userId = computed(() => userIdStore.userId);

	currentGroupStore.$subscribe(() => {
		get()
	});

	async function get() {
		messageList.value = await getMessages(selectedGroup.value)
	}

	function deleteModal(messageId: number) {
		if (!confirm('Are you sure you want to delete this message?')) return;
		useFetch('/api/deleteMessage', {
			method: 'POST',
			body: { messageId },
		}).then(() => {
			get()
		})
	}

	setInterval(() => {
		get()
	}, 1000);

	onMounted(() => {
		get()
	});
</script>

<template>
	<main class="grid grid-rows-[1fr_auto]">
		<ul class="p-4 flex flex-col gap-4">
			<li class="w-full" v-for="message in messageList" :key="message.id">
				<div class="flex gap-2 items-center flex-row-reverse" v-if="message.author.id === userId">
					<span class="font-bold">{{ message.author.username }}</span>
					<span @dblclick="deleteModal(message.id)" class="bg-white p-2 px-3 rounded-md w-fit text-xs">{{
						message.content
					}}</span>
				</div>
				<div class="flex gap-2 items-center" v-else="">
					<span class="font-bold">{{ message.author.username }}</span>
					<span class="bg-white p-2 px-3 rounded-md w-fit text-xs">{{ message.content }}</span>
				</div>
			</li>
		</ul>
	</main>
</template>
