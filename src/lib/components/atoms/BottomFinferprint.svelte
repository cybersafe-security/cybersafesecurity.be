<script lang="ts">
	import 'iconify-icon';
	import { spring } from 'svelte/motion';
	import { onMount } from 'svelte';
	import FingerprintDetails from './FingerprintDetails.svelte';

	let isVisible = false;
	let isDragging = false;
	let startY;
	let startHeight;
	let minHeight = 0;
	let maxHeight;
	let threshold;
	const velocityThreshold = 0.3;

	let lastY;
	let lastTime;
	let velocity = 0;

	const height = spring(minHeight, {
		stiffness: 0.2,
		damping: 0.65,
		precision: 0.1
	});

	const isMobile = () => /Mobile|Android|iPhone|iPad/i.test(window.navigator.userAgent);

	function updateDimensions(dimension) {
		maxHeight = window.innerHeight
		threshold = maxHeight * 0.2; // 20% de la hauteur maximale
	}

	onMount(() => {
		updateDimensions(isMobile()?0:88);
		window.addEventListener('resize', updateDimensions);
		return () => window.removeEventListener('resize', updateDimensions);
	});

	export function toggleBottomSheet() {
		isVisible = !isVisible;
		animateHeight(isVisible ? maxHeight : minHeight);
	}

	function handleStart(e) {
		isDragging = true;
		startY = getEventY(e);
		startHeight = $height;
		lastY = startY;
		lastTime = Date.now();
		velocity = 0;
	}

	function handleMove(e) {
		if (!isDragging) return;
		const currentY = getEventY(e);
		const currentTime = Date.now();
		const timeDiff = currentTime - lastTime;

		if (timeDiff > 0) {
			velocity = (lastY - currentY) / timeDiff;
		}

		const diff = (startY - currentY) * 1.5;
		let newHeight = startHeight + diff;
		newHeight = Math.max(minHeight, Math.min(newHeight, maxHeight));
		height.set(newHeight, { hard: false });

		lastY = currentY;
		lastTime = currentTime;
	}

	function handleEnd() {
		isDragging = false;
		if (velocity < -velocityThreshold || $height < threshold) {
			closeBottomSheet();
		} else if (velocity > velocityThreshold || $height > maxHeight - threshold) {
			animateHeight(maxHeight);
		} else {
			animateHeight(maxHeight / 2);
		}
	}

	function closeBottomSheet() {
		isVisible = false;
		animateHeight(minHeight);
	}

	function animateHeight(targetHeight) {
		height.set(targetHeight, {
			hard: false,
			duration: 300
		});
	}

	function getEventY(e) {
		return e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;
	}
</script>

{#if isVisible}
	<div class="overlay" on:click={closeBottomSheet} />

	<div
		class="bottom-sheet"
		style="height: {$height}px;"
		on:mousedown={handleStart}
		on:mousemove={handleMove}
		on:mouseup={handleEnd}
		on:mouseleave={handleEnd}
		on:touchstart={handleStart}
		on:touchmove|preventDefault={handleMove}
		on:touchend={handleEnd}
	>
		<div class="handle" />
		<div class="content">
			<FingerprintDetails />
		</div>
	</div>
{/if}

<style>
	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 100;
		opacity: 0;
		animation: fadeIn 0.3s forwards;
	}

	.bottom-sheet {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: black;
		box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
		z-index: 101;
		overflow: hidden;
		border-top: 1px solid #6f147f;
		box-shadow: 0 -4px 10px rgba(111, 20, 127, 0.3);
		transition: height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		transform: translateY(100%);
		animation: slideUp 0.3s forwards;
	}

	.handle {
		width: 40px;
		height: 4px;
		background-color: #ccc;
		border-radius: 2px;
		margin: 10px auto;
	}

	.content {
		padding: 20px;
		overflow-y: auto;
		height: calc(100% - 24px);
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes slideUp {
		from {
			transform: translateY(100%);
		}
		to {
			transform: translateY(0);
		}
	}
</style>
