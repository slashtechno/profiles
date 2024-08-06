<script lang="ts">
	import { LoaderCircle } from "lucide-svelte";
	import { Button } from "$lib/components/ui/button/index.js";
	import { Label } from "$lib/components/ui/label/index.js";
	import { Input } from "$lib/components/ui/input/index.js";
	import { pb } from "$lib/pocketbase";
	import { toast, Toaster } from "svelte-sonner";

	let isLoading = false;
	// async function onSubmit() {
	// 	isLoading = true;

	// 	setTimeout(() => {
	// 		isLoading = false;
	// 	}, 3000);
	// }

	let username;
	let password;
	async function login() {
		try {
			await pb.collection("users").authWithPassword(username, password);
			window.history.back();
		} catch (err) {
			console.error(err.data);
			// toast("err");
			toast(JSON.stringify(err.data))		}
	}

	async function signUp() {
		try {
			const data = {
				username: username,
				password: password,
				passwordConfirm: password,
			};
			const createdUser = await pb.collection("users").create(data);
			await login();
		} catch (err) {
			console.error(err.data);
			toast(JSON.stringify(err.data))
		}
	}
	function signOut() {
		pb.authStore.clear();
	}
</script>

<!-- https://github.com/huntabyte/shadcn-svelte/blob/main/sites/docs/src/routes/(app)/examples/authentication/(components)/user-auth-form.svelte -->
<div class="grid gap-6" {...$$restProps}>
	<form on:submit|preventDefault={login}>
		<div class="grid gap-2">
			<div class="grid gap-1">
				<!-- sr-only = screen reader-only -->
				<Label class="sr-only" for="email">Email</Label>
				<Input
					id="username"
					placeholder="Username"
					type="text"
					autocapitalize="none"
					autocomplete="off"
					autocorrect="off"
					disabled={isLoading}
					bind:value={username}
				/>
				<Label class="sr-only" for="password">Password</Label>
				<Input
					id="password"
					placeholder="Password"
					type="password"
					autocapitalize="none"
					autocomplete="off"
					autocorrect="off"
					disabled={isLoading}
					bind:value={password}
				/>
			</div>
			<div class="flex justify-center">
				<Button
					type="button"
					on:click={login}
					disabled={isLoading}
					class="mx-2"
				>
					{#if isLoading}
						<LoaderCircle class="mr-2 h-4 w-4 animate-spin" />
					{/if}
					Sign In
				</Button>
				<Button
					type="button"
					on:click={signUp}
					disabled={isLoading}
					class="mx-2"
				>
					{#if isLoading}
						<LoaderCircle class="mr-2 h-4 w-4 animate-spin" />
					{/if}
					Sign Up
				</Button>
			</div>
		</div>
	</form>
</div>
<Toaster />
