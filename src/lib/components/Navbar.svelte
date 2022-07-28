<script>
	import NavOverlay from '../components/NavOverlay.svelte';
    import { background_color, font_color, logo_color, mode, mode_color, mode_font_color } from '../../stores'
    
	let openOverlay = false;
    
    function switch_mode() {
        if ($mode === 'Dark') {
            $mode = 'Light'
            $mode_color = '#e3e3e3'
            $mode_font_color = '#000000'
            $background_color = '#232937'
            $font_color = '#ffffff'
            $logo_color = 'white'
        } else {
            $mode = 'Dark'
            $mode_color = '#000000'
            $mode_font_color = '#ffffff'
            $background_color = '#ffffff'
            $font_color = '#000000'
            $logo_color = 'black'
        }
    }
</script>

<NavOverlay bind:open={openOverlay}/>

<main>
    <nav class="header">
        {#if $logo_color === 'black'}
            <a id="logo" href="/" style="content: url(logo.png);"></a>
        {:else}
            <a id="logo" href="/" style="content: url(logo-white.png);"></a>
        {/if}
        <a id="home" href="/" style="color: {$font_color};">Home</a>
        <a id="about" href="/about" style="color: {$font_color};">About</a>
        <a id="download" href="/download" style="color: {$font_color};">Download</a>
        <a id="source-code" href="https://github.com/kul-sudo/Smiling-Zombies" target="_blank" style="color: {$font_color};">Source Code</a>
        <div class="three-dots" on:click={() => openOverlay = true}>
            <div style="background-color: {$font_color};"></div>
            <div style="background-color: {$font_color};"></div>
            <div style="background-color: {$font_color};"></div>
        </div>
        <span id="mode" style="background-color: {$mode_color}; color: {$mode_font_color};" on:click={switch_mode}>{$mode} mode</span>
    </nav>
</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    
    .three-dots {
        display: none;
        margin-left: 3rem;
        cursor: pointer;
    }

    .three-dots div {
        display: flex;
        width: 2.1875rem;
        height: 0.25rem;
        margin: 0.375rem 0;
		transition: color 0.3s;
    }

    .header {
        display: flex;
        padding: 1.563rem;
        align-items: center;
        justify-content: center;
        overflow: auto;
    }

    .header #logo {
        height: auto;
        width: 12rem;
        cursor: pointer;
        margin-right: 5rem;
        text-align: center;
        user-select: none;
        object-fit: cover;
    }

    .header a {
        margin-left: 0.0781rem;
        padding: 0.938rem;
        text-decoration: none;
        color: inherit;
        font-size: 1.125rem;
        font-family: 'Poppins', sans-serif;
        cursor: pointer;
        border-radius: 10%;
        user-select: none;
        transition: all 0.15s ease 0s;
        transition: 0.15s;
		transition: background-color 0.3s;
		transition: color 0.3s;
    }

    #home:hover, #about:hover, #download:hover, #source-code:hover {
        background-color: #EBEBEB;
		transition: background-color 0.1s;
    }

    #mode {
        padding: 1rem;
        background-color: rgb(30, 30, 30);
        border-radius: 10%;
        cursor: pointer;
        text-decoration: none;
        color: inherit;
        font-size: 1.125rem;
        font-family: 'Poppins', sans-serif;
        user-select: none;
        text-align: center;
		transition: color 0.3s;
    }

    @media all and (max-width: 60rem) {
        #home, #about, #download, #source-code {
            display: none;
        }

        .three-dots {
            display: block;
        }

        #mode {
            margin-left: 3rem;
        }
    }

</style>
