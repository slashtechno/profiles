<!-- Fireship video: https://www.youtube.com/watch?v=gUYBFDPZ5qk -->
<script lang="js">
    import { currentUser, pb } from "$lib/pocketbase";
    import UserAuth from '$lib/components/UserAuth.svelte';
    import { goto } from '$app/navigation';


    function signOut() {
    pb.authStore.clear();
  }
  // https://stackoverflow.com/questions/74805197/how-to-redirect-to-page-in-sveltekit/75786059#75786059
  function redirectToLogin() {
        goto('/login');
    }
</script>

{#if $currentUser}
    <!-- TODO: Perhaps change this into a toast -->
    <button on:click={signOut}>Sign out</button>
    <p>Signed is as {$currentUser.username}</p>
{:else}
<button on:click={redirectToLogin}>Login/Sign-up</button>
{/if}
