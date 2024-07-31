<script>
    // https://sveltebyexample.com/components-and-props/
    export let titleContent = 'TITLE';
</script>

<!-- https://tailwindcss.com/docs/responsive-design#targeting-mobile-screens -->
<div class="text-center text-xl lg:text-4xl font-serif"> 
<h1>{titleContent}</h1>
</div>