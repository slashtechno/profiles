<!-- Fireship video: https://www.youtube.com/watch?v=gUYBFDPZ5qk -->
<script lang="js">
    import { currentUser, pb } from "$lib/pocketbase";
    import UserAuth from '$lib/components/UserAuth.svelte';
    import { Button } from "$lib/components/ui/button";
    import { goto } from '$app/navigation';



    function signOut() {
    pb.authStore.clear();
  }
</script>

{#if $currentUser}
    <!-- TODO: Perhaps change this into a toast -->
    <Button on:click={signOut} class="my-4">Sign out "{$currentUser.username}"</Button>
{:else}
<!-- Center button and add a top margin of 1rem -->
<div class="flex justify-center mt-4">  
    <Button href="/login" class="content-center">Login / Sign Up</Button>
</div>
{/if}
