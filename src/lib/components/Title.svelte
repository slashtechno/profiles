<script>
    // https://sveltebyexample.com/components-and-props/
    export let titleContent = 'TITLE';
</script>

<!-- https://tailwindcss.com/docs/responsive-design#targeting-mobile-screens -->
 <!-- https://www.shadcn-svelte.com/docs/theming -->
<div class="text-center text-2xl lg:text-4xl font-sans"> 
<h1>{titleContent}</h1>
</div>