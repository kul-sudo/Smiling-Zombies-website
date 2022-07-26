<script>
    export let open;

    import { draggable } from 'svelte-drag'

</script>
    
{#if open}
    <div class="overlay" use:draggable={{gpuAcceleration: true, bounds: { bottom: 0}}}>
        <div class="close" on:click={() => open = false}>X</div>
        <ul>
            <li><a id="index" href="/">Index</a></li>
            <li><a id="about" href="/about">About</a></li>
            <li><a id="download" href="/download">Download</a></li>
            <a id="source-code" href="https://github.com/kul-sudo/Smiling-Zombies" target="_blank">Source Code</a>  
        </ul>
        
    </div>
{/if}
    
<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

    .overlay {
        display: flex;
        position: absolute;
        margin-top: 1rem;
        margin-left: 1rem;
        height: auto;
        background: aliceblue;
        border-radius: 8%;
        padding: 3rem;
        cursor: move;
    }

    .overlay ul {
        list-style: none;
    }
    
    .close {
        font-size: 1.5625rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        cursor: pointer;
        position: absolute;
        top: 1rem;
        right: 2rem;
        text-decoration: none;
        color: inherit;
        user-select: none;
    }

    #index, #about, #download, #source-code {
        font-size: 1.5625rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        text-decoration: none;
        color: inherit;
    }
</style>