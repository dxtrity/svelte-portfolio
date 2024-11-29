<script lang="ts">
	import '../app.css';
</script>

<svelte:head>
	<title>Kacper Kaminski</title>
</svelte:head>
<slot></slot>

<style lang="scss">

	:root {
		--bg-base-100: #5e82fc;
		--bg-light-100: #98addd;
		--bg-light-200: #e7e9f6;
	}

	:global(body) {
		background-color: var(--bg-base-100);
	}
</style>