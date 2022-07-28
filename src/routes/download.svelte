<script>
	import Navbar from '$lib/components/Navbar.svelte'
    import { background_color, font_color } from '../stores'
	import { browser } from '$app/env';

	$: browser && (document.body.style.backgroundColor = $background_color);
	$: browser && (document.body.style.transition  = 'background-color 0.3s');
</script>


<main>
	<Navbar></Navbar>
    
    <span id="download-caption" style="color: {$font_color};">Download Smiling Zombies</span>

    <div class="screenshot">
        <img src="download-screenshot.png" alt="download-screenshot" loading="lazy">
    </div>

    <div class="operating-system">
        <button id="windows-button" on:click={() => window.open('https://github.com/kul-sudo/Smiling-Zombies/releases', '_blank')}>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M480 265H232v179l248 36V265zM216 265H32v150l184 26.7V265zM480 32L232 67.4V249h248V32zM216 69.7L32 96v153h184V69.7z"></path></svg>
            <br>
            <span>Download for Windows</span>
        </button>
    </div>
</main>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

    * {
        user-select: none;
    }

    #download-caption {
        display: flex;
        margin-top: 1rem;
        align-items: center;
        justify-content: center;
        color: black;
        font-size: 1.5625rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        transition: color 0.3s;
    }

    .screenshot {
        margin-top: 3rem;
        text-align: center;
    }

    .screenshot img {
        text-align: center;
        user-select: none;
        height: auto;
		width: 35rem;
        object-fit: cover;
    }

    .operating-system {
        text-align: center;
    }

    .operating-system button {
        margin-top: 2.1875rem;
        margin-left: 1.125rem;
        display: inline-block;
        text-align: center;
        border: 0.0625rem;
        width: 17rem;
        height: 6rem;
        box-shadow: 0rem 0.0625rem 0.3125rem rgb(0 0 0 / 10%);
        border-radius: 0.625rem;
        transition: all 0.15s ease 0s;
        background-color: rgb(255, 255, 255);
        transition: 0.15s;
        font-size: 1.2rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        cursor: pointer;
        white-space: normal;
    }

    #windows-button:hover {
        background-color: rgb(245, 245, 245);
    }
</style>