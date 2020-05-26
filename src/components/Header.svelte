<script>
	export let segment;

	let darkMode = false;

	function toggle() {
		darkMode = !darkMode;
		document.body.classList.toggle('dark-mode');
		
		if (darkMode == true) {
			document.getElementById('moon').className = 'fas fa-moon';
			document.getElementById('moon').style.marginRight = '7px';
		} else {
			document.getElementById('moon').className = 'far fa-moon';
		}
	};
</script>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1em 4em;
		background-color: var(--elements);
		box-shadow: var(--shadow);
	}

	a {
		text-decoration: none;
		color: var(--text);
	}

	span {
		cursor: pointer;
		font-weight: 600;
	}

	span i {
		margin-right: 7px;
	}

	:global(body.dark-mode) {
		--bg: hsl(207, 26%, 17%);
		--text: hsl(0, 0%, 100%);
		--input: hsl(0, 0%, 52%);
		--elements: hsl(209, 23%, 22%);
		--shadow: 0 1px 7px 0 rgba(51, 51, 51, 0.1);
	}

	@media screen and (max-width: 576px) {
		header a {
			font-size: 12px;
		}
		header span {
			font-size: 11px;
		}
	}

	@media screen and (max-width: 480px) {
		header {
			padding: 1.2em 1.5em;
		}
	}
</style>

<header>
	<a aria-current='{segment === undefined ? "page" : undefined}' href='.'>
		<h2>Where in the world?</h2>
	</a>
	<span on:click={toggle}><i class="far fa-moon" id="moon"></i>Dark Mode</span>
</header>
