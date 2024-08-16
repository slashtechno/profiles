<script>
    // Runs on client
    import CleanMarkdown from "$lib/components/CleanMarkdown.svelte";
    import { pb} from "$lib/pocketbase";
    import { onMount } from 'svelte';
    import {toast, Toaster} from 'svelte-sonner'
    import { goto } from '$app/navigation';

    
    export let data;
    let username = data.username;
    let record, url

    onMount(async () => {
        url = window.location.href;

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

<svelte:head>
    <title>{username}'s Profile</title>
    <meta name="description" content="This is the profile page of {username}." />
    <meta property="og:type" content="profile" />
    <meta property="og:url" content="{url}" />
</svelte:head>

<div class="text-center">
<!-- <h2 class="text-2xl">{username}</h2> -->
<!-- TODO: use compromise to properly make the noun possessive https://www.npmjs.com/package/compromise  -->
<a href={url} style="text-decoration: none; transition: none; background-color: transparent;">
    <p class="text-lg mb-6 text-secondary bg-secondary-foreground rounded-tl-full rounded-tr-full rounded-bl-full p-2 inline-block">This is <em>{username}</em>'s space on the internet.</p>
</a>
<!-- <h3 class="text-lg">About {username}:</h3> -->
{#if record}
    <CleanMarkdown src={record.description} />
{:else}
    <p>Loading...</p>
{/if}
</div>
<Toaster />