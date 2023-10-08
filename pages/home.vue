<script setup lang="ts">
	const userIdStore = useUserIdStore();
	if (userIdStore.userId === 0) {
		navigateTo('/');
	}
</script>

<template>
	<main class="min-h-screen grid grid-rows-[auto_1fr] sm:grid-cols-[auto_1fr] sm:grid-rows-1 bg-slate-200">
		<Sidebar />
		<div class="grid grid-rows-[1fr_auto]">
			<ChatMessages />
			<MessageInput />
		</div>
	</main>
</template>
