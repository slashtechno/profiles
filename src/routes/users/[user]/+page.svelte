<script>
    export let data;
    
    import { pb } from "$lib/pocketbase";
    import { onMount } from 'svelte';

    let username = data.username;
    let record
    onMount(async () => {
        record = await pb.collection("users").getFirstListItem(
            pb.filter("username={:username}", { username: username })
        );
        console.log(record);
    });
    
</script>

<h3 class="text-2xl text-center">{username}</h3>
<p>This is {username}'s space on the internet.</p>
