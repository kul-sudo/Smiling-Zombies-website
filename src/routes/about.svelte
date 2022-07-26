<script>
	import Navbar from '$lib/components/Navbar.svelte'
</script>

<main>
	<Navbar></Navbar>

	<span id="about">About</span>
    <span id="desc">Smiling Zombies is a vigorous clash of zombies and smilies.<br>Zombify every single smiley and form your own tribe of zombies.<br>The smilies look like innocent harmless cuties, but they might turn out to be beastly.<br>Don't let them endear your with their cuteness.</span>
    <a id="learn-more" href="https://github.com/kul-sudo/Smiling-Zombies/blob/main/README.md" target="_blank">Learn more</a>
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
	
	#about {
		display: block;
        margin-top: 1rem;
		text-align: center;
		font-size: 1.8rem;
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		user-select: none;
	}

	#desc {
		display: block;
		margin-top: 1rem;
		text-align: center;
		font-size: 1.3rem;
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		user-select: none;
	}

    #learn-more {
        display: block;
        margin-top: 3rem;
        color: inherit;
		text-align: center;
		font-size: 1.5625rem;
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		user-select: none;
    }

</style>