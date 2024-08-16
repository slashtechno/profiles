<script>
    export let src;
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

<SvelteMarkdown source={insane(src, allowedConfig)} />
