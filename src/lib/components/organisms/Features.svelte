<script lang="ts">
	import FeatureCard from '$lib/components/molecules/FeatureCard.svelte';
	import ContentSection from '$lib/components/organisms/ContentSection.svelte'
	import {_, locale, time, date, number} from 'svelte-i18n';
    import {escapeHtml} from "$lib/i18n";
	import Features from '$lib/data/features'

</script>

<section id="services">
	<ContentSection
		id="features"
		title={$_('/.features.title')}
		description={$_('/.features.description')}
	>
		<div class="features-container">
			<div class="three-group-grid">
				{#each $_('/.features.data') as feature,index}
					<FeatureCard
						name={feature.name}
						description={feature.description}
						image={Features[index].image}
						tags={feature.tags.slice(-1)}
					/>
				{/each}
			</div>
		</div>
	</ContentSection>
</section>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.features-container {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 20px;
	}

	.three-group-grid {
		width: 100%;
		display: grid;
		grid-template-columns: 2fr 1fr;
		grid-gap: 20px;

		@media (max-width: 1085px) {
			grid-template-columns: 1fr 1fr;
		}

		@include for-phone-only {
			grid-template-columns: 1fr;
		}

		// Select every 3 elements, starting from position 2
		// And make it take up 2 rows
		@media (min-width: 1086px) {
			> :global(:nth-child(3n + 2)) {
				grid-row: span 2;
			}
		}

		// Select every 3 elements, starting from position 1
		// And make it take up 2 columns
		> :global(:nth-child(3n + 1)) {
			@media (max-width: 1085px) {
				grid-column: span 2;
			}

			@include for-tablet-portrait-down {
				grid-template-columns: 1fr;
				grid-column: unset;
			}
		}
	}
</style>
