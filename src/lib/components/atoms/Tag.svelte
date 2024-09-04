<script lang="ts">
	export let color: 'primary' | 'secondary' | 'success' = 'primary';
	export let redirect;
</script>

{#if redirect}
	<a href="/{redirect}">
		<div class="tag {color}">
			<slot />
		</div>
	</a>
{:else}
	<div class="tag {color}">
		<slot />
	</div>
{/if}

<style lang="scss">
	.tag {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 5px;
		padding: 5px 15px;
		border-radius: 10px;
		font-weight: 500;
		font-size: 0.85rem;
		width: fit-content;
		white-space: nowrap;

		&.primary {
			background-color: var(--color--primary-tint);
			color: var(--color--primary);
		}
		&.secondary {
			background-color: var(--color--secondary-tint);
			color: var(--color--secondary);
		}
		&.success {
			background-color: var(--color--callout-background--success);
			color: var(--color--callout-accent--success);
		}
	}
</style>
