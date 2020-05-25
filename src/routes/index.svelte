<script>
	import { onMount } from 'svelte';
	import Search from '../components/Search.svelte';

	const API = 'https://restcountries.eu/rest/v2/';
	let data = [];

	onMount(async () => {
		const response = await fetch(API);
		data = await response.json();
	});
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

	section {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 4em;
		padding: 2em 0;
	}

	a {
		background-color: var(--elements);
		box-shadow: var(--shadow);
		border-radius: 5px;
		text-decoration: none;
		color: var(--text);
		padding-bottom: 2em;
	}
	a p {
		font-size: 14px;
		margin: .5em 18px;
	}
	a h3 {
		font-size: 18px;
		margin: 18px;
	}

	img {
		width: 100%;
		height: 160px;
		border-top-left-radius: inherit;
		border-top-right-radius: inherit;
		object-fit: cover;
	}
</style>

<svelte:head>
	<title>REST Countries API</title>
</svelte:head>

<Search />

<section>
	{#each data as item}
		<a href={item.alpha3Code}>
			<img src={item.flag} alt={item.name}>
			<h3>{item.name}</h3>
			<p><strong>Population:</strong> {item.population}</p>
			<p><strong>Region:</strong> {item.region}</p>
			<p><strong>Capital:</strong> {item.capital}</p>
		</a>
	{/each}
</section>