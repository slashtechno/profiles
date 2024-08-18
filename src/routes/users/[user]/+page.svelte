<script>
    // Runs on client
    import CleanMarkdown from "$lib/components/CleanMarkdown.svelte";
    import { pb } from "$lib/pocketbase";
    import { onMount } from "svelte";
    import { toast, Toaster } from "svelte-sonner";
    import { goto } from "$app/navigation";

    export let data;
    let username = data.username;
    let record, url;

    onMount(async () => {
        url = window.location.href;

        try {
            record = await pb
                .collection("users")
                .getFirstListItem(
                    pb.filter("username={:username}", { username: username }),
                );
        } catch (err) {
            console.error(err.data);
            toast(err.data);
            if (err.data.code === 404) {
                // User not found
                // Redirect to 404 page
                goto("/404");
            }
        }
        console.log(record);
    });

    function possessiveNoun(noun) {
        if (!noun) {
            return "";
        }
        if (noun.toLowerCase().endsWith("s")) {
            return noun + "'";
        } else {
            return noun + "'s";
        }
    }
</script>

<svelte:head>
    <title>{username}'s Profile</title>

    <meta
        name="description"
        content="This is {possessiveNoun(username)} space on the internet."
    />

    <!-- Facebook Meta Tags -->
    <meta property="og:url" content="https://profiles.angad.me" />
    <meta property="og:type" content="profile" />
    <meta property="og:title" content="{possessiveNoun(username)} profile" />
    <meta
        property="og:description"
        content="This is {possessiveNoun(username)} space on the internet."
    />
    <meta property="og:image" content="/ben-sweet-2LowviVHZ-E-unsplash.jpg">


    <!-- Twitter Meta Tags -->
    <meta name="twitter:card" content="summary_large_`image" />
    <meta property="twitter:domain" content="profiles.angad.me" />
    <meta property="twitter:url" content={url} />
    <meta name="twitter:title" content="{possessiveNoun(username)} profile" />
    <meta
        name="twitter:description"
        content="This is {possessiveNoun(username)} space on the internet."
    />
    <meta name="twitter:image" content="/ben-sweet-2LowviVHZ-E-unsplash.jpg">


    <!-- Meta Tags Generated via https://www.opengraph.xyz -->
</svelte:head>

<div class="text-center">
    <!-- <h2 class="text-2xl">{username}</h2> -->
    <!-- TODO: use compromise to properly make the noun possessive https://www.npmjs.com/package/compromise  -->
    <a
        href={url}
        style="text-decoration: none; transition: none; background-color: transparent;"
    >
        <p
            class="text-lg mb-6 text-secondary bg-secondary-foreground rounded-tl-full rounded-tr-full rounded-bl-full p-2 inline-block"
        >
            This is <em>{possessiveNoun(username)}</em> space on the internet.
        </p>
    </a>
    <!-- <h3 class="text-lg">About {username}:</h3> -->
    {#if record}
        <CleanMarkdown src={record.description} />
    {:else}
        <p>Loading...</p>
    {/if}
</div>
<Toaster />
