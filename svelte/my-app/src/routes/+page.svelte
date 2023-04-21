<body>


<input bind:value={search}>
{#if search}
    {#each data.spill as platformlist}
    {#each platformlist as {title, image}}
        {#if title.toLowerCase().includes(search.toLowerCase())}
            <Gamecard> {title}  </Gamecard>
        {/if} 
    {/each}
    {/each}
{/if}     

<div id="grid">
    {#each data.spill as { title}}
    <Gamecard >{title} </Gamecard>
{/each}
</div>


<div class="linker">
    <h1>Mine kilder for dette prosjektet</h1>
    <a href="https://svelte.dev/repl/e6439904f18f453e80feab69b371d0ea?version=3.57.0">Søkefunksjonen</a>
    <a href="https://svelte.dev/docs">Cards i svelte</a>
</div>
</body>
<script>
    import Gamecard from './gamecard.svelte';
    export let data;
    import '../app.css'
    import { each, listen } from 'svelte/internal';

    let search = ""

</script>

<style>
   
   #grid{
    width: 90%;
    margin: auto;
    border: 1px black solid;
    height: max-content;
    display: grid;
    gap: 70px;
    grid-template-columns: repeat(auto-fill, minmax(190px, 1fr) );}
  

    .linker{
        display: flex;
        flex-direction: column;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;
        font-weight:400 ;
    }
</style>
