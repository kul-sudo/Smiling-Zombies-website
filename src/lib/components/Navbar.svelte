<script>
	import NavOverlay from '../components/NavOverlay.svelte';
	
	let openOverlay = false;
</script>

<NavOverlay bind:open={openOverlay}/>

<main>
    <nav class="header">
        <img id="logo" src="logo.png" alt="navbar-logo" on:click={() => window.location.href = '/'}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="https://github.com/kul-sudo/Smiling-Zombies" target="_blank">Source Code</a>
        <div class="three-dots" on:click={() => openOverlay = true}>
            <div></div>
            <div></div>
            <div></div>
        </div>
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
        background-color: black;
        margin: 0.375rem 0;
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
        object-fit: cover;
        user-select: none;
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
    }

    a:hover {
        background-color: #EBEBEB;
    }

    @media all and (max-width: 60rem) {
        .header a {
            display: none;
        }

        .three-dots {
            display: block;
        }
    }

</style>
