<script>
	import Navbar from '$lib/components/Navbar.svelte'
	import { background_color, font_color } from '../stores'
	import { browser } from '$app/env';

	$: browser && (document.body.style.backgroundColor = $background_color);
	$: browser && (document.body.style.transition  = 'background-color 0.3s');

	let adjective = '(click)'

	const adjectives = [
		'a dynamic',
		'a cool',
		'an unusual',
		'a spectacular',
		'a unique',
		'an enjoyable',
		'a zombie-friendly',
		'a lovely'
	]

	function change_adjective(current) {
		const choose_from = adjectives.filter(item => item != current)
		const random = Math.floor(Math.random() * choose_from.length);
		adjective = choose_from[random]
	}
</script>


<main>
	<Navbar></Navbar>
	
	<span id="desc" style="color: {$font_color};">Play as a zombie. Unusual, isn't it?</span>
	
	<span id="desc-2" style="color: {$font_color};">
		Smiling Zombies is<a id="adjective" on:click={() => change_adjective(adjective)}>{adjective}</a> and free PvS (Player Versus Smilies) game
		<br>in which you can play as a zombie ... not a casual zombie ... a zombie BOSS!
	</span>
	
	<div class="screenshot">
		<img src="screenshot.png" alt="first-screenshot" loading="lazy">
	</div>
	
	<div class="download">
		<a id="download" href="./download">DOWNLOAD</a>
	</div>
	
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

	#desc {
		display: block;
		margin-top: 1rem;
		text-align: center;
		font-size: 1.6rem;
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		user-select: none;
		transition: color 0.3s;
	}

	#adjective {
		user-select: none;
		cursor: pointer;
		color: gray;
		background-color: gainsboro;
		margin-left: 10px;
		border-radius: 10%;
		transition: color 0.3s;
	}

	#desc-2 {
		display: block;
		user-select: none;
		margin-top: 1.25rem;
		justify-content: center;
		text-align: center;
		font-size: 1.3rem;
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		transition: color 0.3s;
	}

	.download {
		display: block;
		text-align: center;
		margin-top: 3rem;
		user-select: none;
		cursor: pointer;
		font-size: 1.4rem;
		font-family: 'Poppins', sans-serif;
	}

	.download #download {
		background-color:#00a5e6e6;
		color: white;
		border-radius: 5%;
		text-decoration: none;
		padding: 0.9375rem;
		border: none;
		text-decoration: none;
	}

	.screenshot {
		display: block;
		margin-top: 3rem;
		text-align: center;
	}

	.screenshot img {
		padding: 0;
		display: block;
		margin: 0 auto;
		max-height: 35%;
		max-width: 35%;
	}

	@media all and (max-width: 43.75rem) {
		.screenshot img {
			max-height: 35%;
			max-width: 35%;
		}
    }

	@media all and (max-width: 36.25rem) {
		.screenshot img {
			max-height: 35%;
			max-width: 35%;
		}
    }

	@media all and (max-width: 23.75rem) {
		.screenshot img {
			max-height: 70%;
			max-width: 70%;
		}
    }

	@media all and (max-width: 47.5rem) {
		.screenshot img {
			max-height: 85%;
			max-width: 85%;
		}
    }

	@media all and (max-width: 47.5rem) {
		.screenshot img {
			max-height: 85%;
			max-width: 85%;
		}
    }

	@media all and (max-width: 87.5rem) {
		.screenshot img {
			max-height: 45%;
			max-width: 45%;
		}
    }

	@media all and (max-width: 38.125rem) {
		.screenshot img {
			max-height: 70%;
			max-width: 70%;
		}
    }

	@media all and (max-width: 	76.875rem) {
		.screenshot img {
			max-height: 70%;
			max-width: 70%;
		}
    }

	@media all and (max-width: 	25rem) {
		.screenshot img {
			max-height: 80%;
			max-width: 80%;
		}
    }

	@media all and (max-width: 	22.188rem) {
		.screenshot img {
			max-height: 90%;
			max-width: 90%;
		}
    }	
</style>