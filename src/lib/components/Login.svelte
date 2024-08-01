<!-- Fireship video: https://www.youtube.com/watch?v=gUYBFDPZ5qk -->
<script lang="js">
    import { currentUser, pb } from "$lib/pocketbase";

    let username;
    let password;

    async function login() {
        try {
            await pb
                .collection("users")
                .authWithPassword(username, password);
        } catch (err) {
            console.error(err);
        }
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
            console.error(err);
        }
    }
    function signOut() {
    pb.authStore.clear();
  }
</script>

{#if $currentUser}
    <!-- TODO: Perhaps change this into a toast -->
    <button on:click={signOut}>Sign out</button>
    <p>Signed is as {$currentUser.username}</p>
{:else}
    <!-- TODO: Use  shadcn-svelte components for this -->

    <!-- preventDefault prevents refreshing upon submitting the form -->
     <!-- By default, sign up will be clicked -->
    <form on:submit|preventDefault>
        <!-- Bind this input to the username variable -->
        <input type="text" placeholder="Username" bind:value={username} />
        <input type="password" placeholder="Password" bind:value={password} />
        <button on:click={signUp}>Sign Up</button>
        <button on:click={login}>Login</button>
    </form>
{/if}
