<script>
    export let src = "Nothing to see here";
    // let src = "## abcxyz"; content
    import insane from "insane";
    import SvelteMarkdown from "svelte-markdown";
    import { onMount } from 'svelte';

    let allowedConfig;  
    onMount(() => {
        allowedConfig = {
            allowedTags: [...insane.defaults.allowedTags, "iframe"],
            allowedAttributes: {
                ...insane.defaults.allowedAttributes,
            },
            allowedSchemes: [...insane.defaults.allowedSchemes], 
        };
        console.log(allowedConfig);
        console.log(src);
    });
</script>

<div class="markdown">
<!-- <SvelteMarkdown source={src} /> -->
<SvelteMarkdown source={insane(src, allowedConfig)} />
</div>