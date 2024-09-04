<script lang="ts">
	import BlogPostCard from '$lib/components/molecules/BlogPostCard.svelte';
	import ContentSection from '$lib/components/organisms/ContentSection.svelte';
	import type { BlogPost } from '$lib/utils/types';
	import Button from '$lib/components/atoms/Button.svelte';
	import {_, locale, time, date, number} from 'svelte-i18n';
    import {escapeHtml} from "$lib/i18n";

	export let posts: BlogPost[];
</script>

<ContentSection
	id="recent-posts"
	title={$_('/.blog.title')}
	description={$_('/.blog.intro')}
	align="left"
>
	<div slot="button">
		<Button href="/blog">{$_('/.blog.btn')}</Button>
	</div>
	<div class="grid">
		{#each posts as post}
		{#if post.postlang === $locale}
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

	.grid {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 20px;

		@include for-phone-only {
			grid-template-columns: 1fr;
		}
	}
</style>
