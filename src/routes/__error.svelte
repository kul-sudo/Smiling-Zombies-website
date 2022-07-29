<script>
	import Navbar from '$lib/components/Navbar.svelte'
    import { background_color, font_color } from '../stores'
	import { browser } from '$app/env';

	$: browser && (document.body.style.backgroundColor = $background_color);
	$: browser && (document.body.style.transition  = 'background-color 0.3s');
</script>

<script context="module">
    export function load({ error, status }) {
        return {
            props: {
                title: `${status}: ${error.message}`
            }
        };
    }
</script>
  
<main>
    <Navbar></Navbar>

    <span id="oops" style="color: {$font_color};">Oops! Page not found.</span>
    <span style="color: {$font_color};">Nice attempt to find a non-existent page!</span>

    <div>
        <img src="hmm-gif.gif" alt="hmm-gif" draggable="false"/>
    </div>

    <span id="advice" style="color: {$font_color};">My advice is to go to an existent page!</span>
</main>

<style>
    #oops {
        display: block;
        margin-top: 1rem;
        text-align: center;
        font-size: 1.6rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        user-select: none;
        transition: color 0.3s;
    }

    span {
        display: block;
        margin-top: 4rem;
        text-align: center;
        font-size: 2rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        user-select: none;
        transition: color 0.3s;
    }

    div {
        margin-top: 5rem;
        text-align: center;
    }

    div img {
        padding: 0;
		display: flex;
		margin: 0 auto;
		max-height: 200%;
		max-width: 200%;
    }
</style>