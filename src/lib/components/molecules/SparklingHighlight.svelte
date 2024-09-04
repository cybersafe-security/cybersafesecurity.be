<script lang="ts">
	import Sparkles from '$lib/components/atoms/Sparkles.svelte';

	export let color: 'default' | 'primary' | 'secondary' | 'primary-shade' = 'default';
	export let sparkleColor: 'default' | 'primary' | 'secondary' = 'default';
</script>

<Sparkles color={sparkleColor}><strong class={color}><slot /></strong></Sparkles>

<style lang="scss">
	strong {
		&.primary {
			color: var(--color--primary);
		}
		&.primary-shade {
			color: var(--color--primary-shade);
		}
		&.secondary {
			color: var(--color--secondary);
		}
	}
</style>
