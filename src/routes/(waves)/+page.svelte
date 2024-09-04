<script lang="ts">
	import Heros from '$lib/components/organisms/Heros.svelte';
	import About from '$lib/components/organisms/About.svelte';
	import RecentPosts from '$lib/components/organisms/RecentPosts.svelte';
	import Features from '$lib/components/organisms/Features.svelte';
	import type { Feature, BlogPost } from '$lib/utils/types';
	import ServiceTimeline from '$lib/components/organisms/ServiceTimeline.svelte';

	export let data: {
		features: Feature[];
		posts: BlogPost[];
	};

	let { features, posts } = data;
</script>

<div class="container">
	<Heros />
	<About />
	<Features {features} />
	<ServiceTimeline />
	{#if posts && posts.length > 0}
		<RecentPosts {posts} />
	{/if}
</div>
