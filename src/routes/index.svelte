<script>
	import Search from '../components/Search.svelte';

	let region = 'all';
	let promise = printCountries();
	let value = '';
	let dataSearch = [];
	
	const handleSearch = (e) => value = e.target.value;

	const filterAfrica = () => {
		region = 'region/africa';
		promise = printCountries();
	};

	const filterAmerica = () => {
		region = 'region/americas';
		promise = printCountries();
	};

	const filterAsia = () => {
		region = 'region/asia';
		promise = printCountries();
	};

	const filterEurope = () => {
		region = 'region/europe';
		promise = printCountries();
	};

	const filterOceania = () => {
		region = 'region/oceania';
		promise = printCountries();
	};
	
	async function printCountries() {
		const response = await fetch(`https://restcountries.eu/rest/v2/${region}`);
		const data = await response.json();

		if (response.ok) {
			return data;
		} else {
			throw new Error(data);
		};
	};

	$: if (value.length > 1) {
		fetch(`https://restcountries.eu/rest/v2/name/${value}`)
			.then(res => res.json())
			.then(resJson => dataSearch = resJson || [])
	};
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

	.preloader {
		width: 70px;
		height: 70px;
		grid-area: 1 / span 4;
		justify-self: center;
		margin-top: 50px;
		border: 10px solid #eeeeee;
		border-top: 10px solid #666666;
		border-radius: 50%;
		animation-name: rotate;
		animation-duration: 2s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
	}

	@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>

<svelte:head>
	<title>REST Countries API</title>
</svelte:head>

<Search
	value={value}
	handleSearch={handleSearch}
	filterAfrica={filterAfrica}
  filterAmerica={filterAmerica}
  filterAsia={filterAsia}
  filterEurope={filterEurope}
  filterOceania={filterOceania}
/>

<section>
	{#if value == ''}
		{#await promise}
			<div class="preloader"></div>
		{:then data}	
			{#each data as {alpha3Code, flag, name, population, region, capital}}
				<a href={alpha3Code}>
					<img src={flag} alt={name}>
					<h3>{name}</h3>
					<p><strong>Population:</strong> {population}</p>
					<p><strong>Region:</strong> {region}</p>
					<p><strong>Capital:</strong> {capital}</p>
				</a>
			{/each}
		{/await}
	{:else}
		{#each dataSearch as {alpha3Code, flag, name, population, region, capital}}
			<a href={alpha3Code}>
				<img src={flag} alt={name}>
				<h3>{name}</h3>
				<p><strong>Population:</strong> {population}</p>
				<p><strong>Region:</strong> {region}</p>
				<p><strong>Capital:</strong> {capital}</p>
			</a>
		{:else}
			<div class="preloader"></div>
		{/each}
	{/if}
</section>