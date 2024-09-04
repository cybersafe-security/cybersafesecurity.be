<script>
	let logos = [
		'brave-logo.png',
		'tor-logo.png',
		'wireguard-logo.png',
		'authme-logo.png',
		'electronmail-logo.png',
		'cryptext-logo-label.png',
		'zrok-logo.png',
		'nextcloud-logo-label.png'
	];
</script>

<div class="timeline">
	{#each logos as logo}
		<div class="logo">
			<img src="images/{logo}" alt="logo" class="img-logo" />
		</div>
	{/each}
	<div class="line" />
	<div class="electric" />
</div>

<style>
	.timeline {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		padding: 20px;
		gap: 20px;
	}

	.img-logo {
		border-radius: 100%;
		width: 80;
		height: 80;
	}

	.logo {
		width: 80px;
		height: 80px;
		border-radius: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
		z-index: 1;
		position: relative;
	}

	.line {
		position: absolute;
		background: #fff;
		z-index: 0;
	}

	.electric {
		position: absolute;
		background: #6f147f;
		z-index: 0;
		animation: electricFlow 5s infinite;
	}

	@keyframes electricFlow {
		0% {
			width: 0;
			height: 0;
		}
		100% {
			width: 100%;
			height: 100%;
		}
	}

	/* Desktop styles */
	@media (min-width: 768px) {
		.timeline {
			flex-direction: row;
		}

		.line,
		.electric {
			height: 2px;
			width: calc(100% - 60px);
			top: 50%;
			left: 30px;
		}

		.electric {
			width: 0;
			animation: electricFlowHorizontal 5s infinite;
		}

		@keyframes electricFlowHorizontal {
			0% {
				width: 0;
			}
			100% {
				width: calc(100% - 60px);
			}
		}
	}

	/* Mobile styles */
	@media (max-width: 767px) {
		.timeline {
			flex-direction: column;
		}

		.line,
		.electric {
			width: 2px;
			height: calc(100% - 60px);
			left: 50%;
			top: 30px;
		}

		.electric {
			height: 0;
			animation: electricFlowVertical 5s infinite;
		}

		@keyframes electricFlowVertical {
			0% {
				height: 0;
			}
			100% {
				height: calc(100% - 60px);
			}
		}
	}
</style>
