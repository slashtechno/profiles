<script>
    export let src = "Nothing to see here";
    // let src = "## abcxyz"; content
    import insane from "insane";
    import SvelteMarkdown from "svelte-markdown";
    import { onMount } from "svelte";
    import { emojify } from "node-emoji";

    let allowedConfig;
    onMount(() => {
        allowedConfig = {
            allowedTags: [...insane.defaults.allowedTags, "iframe"],
            allowedAttributes: {
                ...insane.defaults.allowedAttributes,
                // img: ["align", "alt", "height", "src", "width"],
            },
            allowedSchemes: [...insane.defaults.allowedSchemes],
        };
        console.log(allowedConfig);
        console.log(src);
    });
</script>

<div class="markdown text-center">
    <!-- <SvelteMarkdown source={src} /> -->
    <SvelteMarkdown source={insane(emojify(src, allowedConfig))} />
</div>

<style>
    /* global is needed as the HTML from SvelteMarkdown is not in the same scope as the component */
    :global(.markdown img) {
        @apply mx-auto;
    }
</style>