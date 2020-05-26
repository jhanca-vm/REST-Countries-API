<script context="module">
	export async function preload(page, session) {
		const { slug } = page.params;

		const res = await this.fetch(`https://restcountries.eu/rest/v2/alpha/${slug}`);
		const country = await res.json();

		return { country };
	}
</script>

<script>
  export let country;
</script>

<style>
  section {
    padding: 1.5em 0;
  }

  a {
    padding: .5em 2.5em;
    border-radius: 5px;
    background-color: var(--elements);
    box-shadow: var(--shadow);
    font-weight: 600;
    border: none;
    outline: none;
    text-decoration: none;
    color: var(--text);
  }
  a i {
    margin-right: 10px;
  }

  h1 {
    font-size: 32px;
  }

  ul {
    font-size: 16px;
    list-style: none;
    padding: 0;
  }

  .ul-right {
    padding-left: 20px;
  }

  li {
    margin: 10px 0;
  }

  .data {
    padding: 4em 0;
    display: grid;
    grid-template-columns: 40% 1fr;
    grid-gap: 7em;
  }
  .data img {
    width: 100%;
    max-height: 320px;
    object-fit: cover;
  }

  .details {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .items {
    display: flex;
    justify-content: space-between;
  }

  .border {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    padding-top: 1em;
  }
  .border p {
    margin: 0;
    grid-area: 1 / span 2;
    font-size: 16px;
    align-self: center;
  }
  .border a {
    padding: .2em 1em;
    font-weight: 300;
    margin: 5px;
    text-align: center;
    font-size: 14px;
  }

  @media screen and (max-width: 1300px) {
		.border {
      grid-template-columns: repeat(8, 1fr);
		}
	}
  @media screen and (max-width: 1200px) {
		.border {
      grid-template-columns: repeat(7, 1fr);
		}
	}
  @media screen and (max-width: 1080px) {
    .data {
      grid-template-columns: 45% 1fr;
      grid-gap: 4em;
    }

    .items {
      flex-direction: column;
    }
    .items .ul-right {
      padding-left: 0;
      margin-top: 0;
    }

		.border {
      grid-template-columns: repeat(6, 1fr);
		}
	}
  @media screen and (max-width: 960px) {
    .data img {
      max-height: 250px;
    }

		.border {
      grid-template-columns: repeat(5, 1fr);
		}
	}
  @media screen and (max-width: 845px) {
		.border {
      grid-template-columns: repeat(4, 1fr);
		}
	}
  @media screen and (max-width: 725px) {
    .data {
      grid-template-columns: 1fr;
      grid-gap: 3em;
    }
		.border {
      grid-template-columns: repeat(3, 1fr);
		}
    .border p {
      grid-area: 1 / span 3;
      margin-bottom: 7px;
    }
	}
</style>

<svelte:head>
	<title>{country.name}</title>
</svelte:head>

<section>
  <a href='.'><i class="fas fa-arrow-left"></i>Back</a>
  <div class="data">
    <img src={country.flag} alt={country.name}>
    <div class="details">
      <h1>{country.name}</h1>
      <div class="items">
        <ul class="ul-left">
          <li><strong>Native Name: </strong>{country.nativeName}</li>
          <li><strong>Population: </strong>{country.population}</li>
          <li><strong>Region: </strong>{country.region}</li>
          <li><strong>Sub Region: </strong>{country.subregion}</li>
          <li><strong>Capital: </strong>{country.capital}</li>
        </ul>
        <ul class="ul-right">
          <li><strong>Top level Domain: </strong>{country.topLevelDomain}</li>
          <li><strong>Currencies: </strong>
            {#each country.currencies as { name }, i}
              <span>{name}{#if (i + 1) < country.currencies.length},{/if} </span>
            {/each}
          </li>
          <li><strong>Languages: </strong>
            {#each country.languages as { name }, i}
              <span>{name}{#if (i + 1) < country.languages.length},{/if} </span>
            {/each}
          </li>
        </ul>
      </div>
      <div class="border">
        <p><strong>Border Countries: </strong></p>
        {#each country.borders as border}
          <a href={border}>{border}</a>
        {:else}
          <a href=".">None</a>
        {/each}
      </div>
    </div>
  </div>
</section>