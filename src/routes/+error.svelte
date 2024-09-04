<script>
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';

	function handleClick() {
		window.location.href = '/';
	}
</script>

<Header showBackground />

<main>
	<div style="background-image: url('/images/error404.gif')">
		<div class="container">
			<br />
			<button class="back-button" on:click={handleClick}>
				<iconify-icon icon="noto:back-arrow" style="font-size:50px;" />
			</button>
		</div>
	</div>
</main>

<Footer />

<style lang="scss">
	.error-page {
		background: var(--color--page-background);
		position: relative;
	}
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 60vh;
		text-align: center;

		.svg-wrapper {
			width: 300px;
			margin-top: -60px;
			margin-bottom: -30px;

			:global(svg) {
				filter: drop-shadow(2px 6px 0px rgba(0, 0, 0, 0.1));
			}
		}
	}

	.back-button {
		background-color: transparent;
		border: none;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 10px;
		transition: transform 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;
	}

	.back-button:hover {
		transform: scale(1.1);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
		color: #762872;
	}

	.back-button:focus {
		outline: none;
	}

	.back-button:active {
		transform: scale(0.95);
	}
</style>
