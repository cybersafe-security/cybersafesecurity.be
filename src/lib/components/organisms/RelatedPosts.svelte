<script lang="ts">
	import type { BlogPost } from '$lib/utils/types';
	import BlogPostCard from '$lib/components/molecules/BlogPostCard.svelte';
	import ContentSection from '$lib/components/organisms/ContentSection.svelte';
	import {_, locale, time, date, number} from 'svelte-i18n';
    import {escapeHtml} from "$lib/i18n";

	export let posts: BlogPost[];
</script>

<ContentSection
	id="related-posts"
	title={$_('/.blog.alire')}
>
	<div class="simple-grid">
		{#each posts as post}
		{#if post.postlang === window.location.pathname.split('/')[1]}
		  <BlogPostCard
			slug={post.slug}
			title={post.title}
			excerpt={post.excerpt}
			tags={post.tags}
			readingTime={post.readingTime}
			showImage={false}
		  />
		{/if}
	  {/each}
	</div>
</ContentSection>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.simple-grid {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 20px;

		@media (max-width: 1070px) {
			grid-template-columns: 1fr 1fr;
		}

		@include for-tablet-portrait-down {
			grid-template-columns: 1fr;
		}
	}
</style>
