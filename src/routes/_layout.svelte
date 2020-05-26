<script>
	import Header from '../components/Header.svelte';

	export let segment;
</script>

<style>
	main {
		max-width: 1440px;
		padding: 2em 4em;
		margin: 0 auto;
		box-sizing: border-box;
	}

	@media screen and (max-width: 480px) {
		main {
			padding: 1.5em 2.5em;
		}
	}
</style>

<Header {segment}/>

<main>
	<slot></slot>
</main>