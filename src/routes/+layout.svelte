<script>
import "../app.css";
import { ModeToggle } from '$lib'
import { ModeWatcher } from "mode-watcher";
import Header from "$lib/components/Header.svelte";
import { onMount } from "svelte";

let baseUrl;
onMount(async () => {
  baseUrl = window.location.origin;
});
</script>
<Header />
<ModeWatcher />
<slot></slot>
<svelte:head>
  <title>profiles</title>
  <meta name="description" content="profiles - allowing you to make a home for yourself on the internet with markdown" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={baseUrl} />
</svelte:head>
<!-- https://tailwindcss.com/docs/top-right-bottom-left -->
<!-- "4" means 16 px (1rem) from the bottom and right -->
<div class="fixed bottom-4 right-4">
    <ModeToggle />
  </div>