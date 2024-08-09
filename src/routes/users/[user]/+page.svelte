<script>
    // Runs on client
    import SvelteMarkdown from 'svelte-markdown'
    import { pb} from "$lib/pocketbase";
    import { onMount } from 'svelte';
    import insane from "insane";
    import {toast, Toaster} from 'svelte-sonner'
    import { goto } from '$app/navigation';

    
    export let data;
    let username = data.username;
    let record

    onMount(async () => {
        try{
        record = await pb.collection("users").getFirstListItem(
            pb.filter("username={:username}", { username: username })
        );
        } catch (err){
            console.error(err.data)
            toast(err.data)
            if (err.data.code === 404){
                // User not found
                // Redirect to 404 page
                goto('/404');
            }
        }
        console.log(record);
    });
    
</script>
<div class="text-center">
<!-- <h2 class="text-2xl">{username}</h2> -->
<!-- TODO: use compromise to properly make the noun possessive https://www.npmjs.com/package/compromise  -->
<p class="text-3xl">This is <em>{username}</em>'s space on the internet.</p>
<h3 class="text-lg">About {username}</h3>
{#if record}
    <SvelteMarkdown source={insane(record.description)} />
{:else}
    <p>Loading...</p>
{/if}
</div>
<Toaster />