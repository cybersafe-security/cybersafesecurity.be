<script>
	import { scannedIPsStore } from '$lib/stores/ipscan';
	import { fade, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	import { _, locale, time, date, number, t } from 'svelte-i18n';

	export let open = false;
	export let title = '';
	export let message = '';
	export let onClose = () => {};

	let isFinish = false;
	let nbHost = 0;
	let ip = [];

	const unsubscribe = scannedIPsStore.subscribe((value) => {
		isFinish = value.isFinish;
		nbHost = value.nbHost;
		ip = value.ip;
	});
</script>

<div>
	<p style="color:white;">
		<iconify-icon
			icon="material-symbols:network-wifi"
			style="color:#00308F;font-size:30px;"
		/>{nbHost} {$_('fingerprint.devices_found')}
	</p>
	<button
		on:click={() => (open = true)}
		style="background-color:#00308F;border-radius:10px;padding:10px;width:50%;box-shadow:0px 0px 8px black;font-size:15px;color:white;margin-bottom:-50px;"
		><iconify-icon style="font-size:20px;" icon="mdi:account-network" /></button
	>
</div>

{#if open}
	<div class="overlay" on:click={onClose} transition:fade={{ duration: 300 }}>
		<div
			class="dialog"
			on:click|stopPropagation
			in:fly={{ y: 50, duration: 500, easing: quintOut }}
			out:fly={{ y: 50, duration: 300 }}
		>
			{#each ip as address}
				<p>{address}</p>
			{/each}
			<button on:click={() => (open = false)}><iconify-icon icon="carbon:close-filled" /></button>
		</div>
	</div>
{/if}

<style>
	button {
		background-color: #6f147f;
		color: #ffffff;
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 4px;
		cursor: pointer;
		transition: background-color 0.3s ease;
		margin-bottom: 1rem;
	}

	button:hover {
		background-color: black;
	}

	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.8);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
	}

	.dialog {
		background-color: #2c2c2c;
		color: #ffffff;
		border-radius: 8px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		max-width: 90%;
		width: 400px;
		max-height: 90vh;
		display: flex;
		flex-direction: column;
	}

	.dialog-content {
		padding: 2rem;
		overflow-y: auto;
		flex-grow: 1;
	}

	.dialog-actions {
		padding: 1rem 2rem;
		border-top: 1px solid #444;
		text-align: right;
	}

	h2 {
		margin-top: 0;
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}

	p {
		margin-bottom: 0.3rem;
	}
</style>
