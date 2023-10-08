<script setup lang="ts">
	const groupList = ref();
	const currentGroupStore = useCurrentGroupStore();
	const userIdStore = useUserIdStore();

	let currentGroup = computed(() => currentGroupStore.currentGroup);

	const { data } = await useFetch('/api/group', {
		method: 'POST',
		body: {
			userId: userIdStore.userId,
		},
	});
	if (data.value) {
		groupList.value = data.value;
	}
	
	function changeGroup(groupId: number) {
		currentGroupStore.setCurrentGroup(groupId);
	}
</script>

<template>
	<aside class="min-w-[200px] bg-black/20 p-4 flex flex-col gap-4">
		<div
			:class="{ 'bg-black/40': currentGroup === group.id }"
			class="bg-black/20 p-2 rounded"
			@click="changeGroup(group.id)"
			v-for="group in groupList"
			:key="group.id"
		>
			{{ group.name }}
		</div>
	</aside>
	
</template>
