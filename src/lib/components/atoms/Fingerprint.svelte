<script lang="ts">
	import 'iconify-icon';
	import BottomFinferprint from './BottomFinferprint.svelte';

	let iconColor = 'white';
	let ToggleBottom;

	function checkFingerprint() {
		if (navigator.vibrate) {
			navigator.vibrate(200);
		}
		ToggleBottom.toggleBottomSheet();
		iconColor = 'green';
	}
</script>

<iconify-icon
	on:click={checkFingerprint}
	icon="arcticons:fingerprint"
	style="color: {iconColor};font-size: 40px"
/>

<BottomFinferprint bind:this={ToggleBottom} />
