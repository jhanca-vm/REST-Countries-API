<script>
	export let segment;
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

	i {
		margin-right: 7px;
	}
</style>

<header>
	<a aria-current='{segment === undefined ? "page" : undefined}' href='.'>
		<h2>Where in the world?</h2>
	</a>
	<span><i class="far fa-moon"></i>Dark Mode</span>
</header>
