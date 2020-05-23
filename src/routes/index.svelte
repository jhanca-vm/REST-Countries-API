<script>
	import Search from '../components/Search.svelte'
</script>

<style>
	:global(:root) {
		--bg: hsl(0, 0%, 98%);
		--text: hsl(200, 15%, 8%);
		--input: hsl(0, 0%, 52%);
		--elements: hsl(0, 0%, 100%);
		--shadow: 0 1px 7px 0 rgba(51, 51, 51, 0.1);
	}

	:global(body) {
		background-color: var(--bg);
		color: var(--text);
	}
</style>

<svelte:head>
	<title>REST Countries API</title>
</svelte:head>

<Search />