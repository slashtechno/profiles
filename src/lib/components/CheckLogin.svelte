<!-- Fireship video: https://www.youtube.com/watch?v=gUYBFDPZ5qk -->
<script lang="js">
    import { currentUser, pb } from "$lib/pocketbase";
    import { Button } from "$lib/components/ui/button";
    import ProfileUpdate from "$lib/components/ProfileUpdate.svelte";
    import * as Alert from "$lib/components/ui/alert";
    import { onMount } from "svelte";
    import { badgeVariants } from "$lib/components/ui/badge";



    let baseURL

    function signOut() {
        pb.authStore.clear();
    }

    onMount(() => {
        baseURL = window.location.origin;
    });
</script>

{#if $currentUser}
    <div class="my-4">
        <Alert.Root>
            <Alert.Title>Hey!</Alert.Title>
            <Alert.Description>
                You're signed in as <a
                    href={`${baseURL}/users/${$currentUser.username}`}
                >
                    {$currentUser.username}
                </a></Alert.Description
            >
            <Alert.Description>
                Share your profile with others by sharing this link: <a
                    href={`${baseURL}/users/${$currentUser.username}`}
                >
                    {baseURL}/users/{$currentUser.username}
                </a>
            </Alert.Description>
            <Button class="mt-2" on:click={signOut}>Sign out</Button>
        </Alert.Root>
    </div>
{:else}
    <!-- Center button and add a top margin of 1rem -->
    <div class="flex justify-center my-4">
        <Button href="/login" class="content-center">Login / Sign Up</Button>
    </div>
    <!-- <hr /> -->
    <div class="justify-center my-4">
        <a href="/users/angad" class={badgeVariants({ variant: "outline" })}>Example profile</a>
    </div>
{/if}
