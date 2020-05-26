<script>
  export let value;
  export let handleSearch;
  export let filterAfrica;
  export let filterAmerica;
  export let filterAsia;
  export let filterEurope;
  export let filterOceania;

  let click = 0;

  function showHide() {
    if (click == 0) {
      document.getElementById('list').style.display="block";
      click += 1
    } else {
      document.getElementById('list').style.display="";
      click = 0
    }
  }
</script>

<style>
  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em 0;
  }

  .search {
    display: flex;
    align-items: center;
    width: 30%;
    padding: 1em 2em;
    border-radius: 5px;
    background-color: var(--elements);
    box-shadow: var(--shadow);
    color: var(--text);
  }
  .search i {
    color: inherit;
    opacity: .3;
  }
  .search input {
    width: 100%;
    border: none;
    margin-left: 2em;
    outline: none;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 14px;
    background-color: inherit;
    color: inherit;
  }
  .search input::placeholder {
    font-family: inherit;
    font-weight: 600;
    color: inherit;
    opacity: .3;
  }

  .filter {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 180px;
    padding: 1em 1.5em;
    border-radius: 5px;
    background-color: var(--elements);
    box-shadow: var(--shadow);
    font-weight: 600;
    position: relative;
    cursor: pointer;
  }
  .filter p {
    margin: 0;
  }
  .filter__list {
    display: none;
    width: 180px;
    padding: .4em 1.5em;
    border-radius: 5px;
    background-color: var(--elements);
    box-shadow: var(--shadow);
    font-weight: 600;
    position: absolute;
    top: 58px;
    left: 0;
    right: 0;
    cursor: default;
  }
  .filter__list ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .filter__list ul li {
    width: fit-content;
    margin: .8em 0;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
		section {
			flex-direction: column;
      align-items: flex-start;
		}

    .search {
      width: 50%;
    }

    .filter {
      margin-top: 2em;
    }

    .filter__list ul li {
      width: initial;
    }
	}

  @media screen and (max-width: 576px) {
    .search {
      width: -webkit-fill-available;
    }
	}

  @media screen and (max-width: 480px) {
		section {
			margin-left: -1em;
      margin-right: -1em;
		}

    .filter {
      margin-bottom: 7px;
    }
	}
</style>

<section>
  <div class="search">
    <i class="fas fa-search"></i>
    <input type="text" value={value} placeholder="Search for a country..." on:input={handleSearch}>
  </div>
  <div on:click={showHide} class="filter" id="menu">
    <p>Filter by Region</p>
    <i class="fas fa-angle-down"></i>
    <div class="filter__list" id="list">
      <ul>
        <li on:click={filterAfrica}>Africa</li>
        <li on:click={filterAmerica}>America</li>
        <li on:click={filterAsia}>Asia</li>
        <li on:click={filterEurope}>Europe</li>
        <li on:click={filterOceania}>Oceania</li>
      </ul>
    </div>
  </div>
</section>