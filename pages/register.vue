<script setup lang="ts">
	let username = '';
	let password = '';

	const userIdStore = useUserIdStore();

	async function Register() {
		if (username === '' || password === '') {
			return alert('Preencha todos os campos');
		}
		const { data, error } = await useFetch('/api/register', {
			method: 'POST',
			body: {
				username: username,
				password: password,
			},
		});
		if (error.value) {
			console.log(`Error: ${error.value.data.message} \nStatus Code: ${error.value.data.statusCode}`);
			switch (error.value.data.statusCode) {
				case 400:
					alert('Usuário já existe');
					break;
			}
		} else {
			if (data.value && typeof data.value === 'number') {
				userIdStore.setUserId(data.value);
				navigateTo('/home');
			}
		}
	}
</script>

<template>
	<main class="bg-slate-400 text-slate-900 min-h-screen flex items-center justify-center">
		<div class="flex flex-col gap-4 items-center justify-center">
			<label for="username" class="flex flex-col"
				>Usuário
				<input v-model="username" name="username" id="username" class="text-xl p-1 px-2 rounded" type="text" />
			</label>
			<label for="password" class="flex flex-col"
				>Senha
				<input v-model="password" name="password" id="password" class="text-xl p-1 px-2 rounded" type="password" />
			</label>
			<button v-on:click="Register()" class="bg-slate-100 p-1 px-4 rounded">Registrar</button>
			<NuxtLink to="/">Login</NuxtLink>
		</div>
	</main>
</template>
