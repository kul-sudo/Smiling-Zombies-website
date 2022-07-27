<script>
	import Navbar from '$lib/components/Navbar.svelte'

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

	<span id="desc">Play as a zombie. Unusual, isn't it?</span>

	<span id="desc-2">
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
	}

	#adjective {
		user-select: none;
		cursor: pointer;
		color: gray;
		background-color: gainsboro;
		margin-left: 10px;
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
	}

	.download {
		display: block;
		text-align: center;
		margin-top: 3rem;
		user-select: none;
		cursor: pointer;
		font-size: 1.6rem;
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
		user-select: none;
		object-fit: cover;
		height: auto;
		width: 35rem;
		text-align: center;
		object-fit: cover;
	}
</style>