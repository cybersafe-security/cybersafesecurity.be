<script lang="ts">
	import { dev } from '$app/environment';
	export let src: string;
	export let alt: string;
	export let fullBleed: boolean | undefined = undefined;
	export let formats: string[] = ['avif', 'webp', 'png'];
	export let widths: string[] | undefined = undefined;
	$: fileName = src.split('.')[0];
	function buildSrcset() {
		if (dev) return;
		let srcset = '';
		if (widths) {
			for (let i = 0; i < widths.length; i++) {
				srcset += `${fileName}-${widths[i]}.${formats[0]} ${widths[i]}w`;
				if (i < widths.length - 1) {
					srcset += ', ';
				}
			}
		} else {
			for (let i = 0; i < formats.length; i++) {
				srcset += `${fileName}.${formats[i]}`;
				if (i < formats.length - 1) {
					srcset += ', ';
				}
			}
		}
		return srcset;
	}
</script>

<div class="image-container" class:full-bleed={fullBleed}>
	<img srcset={buildSrcset()} {src} {alt} loading="lazy" decoding="async" />
</div>

<style lang="scss">
	.image-container {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}

	.full-bleed {
		width: 100vw;
		margin-left: 50%;
		transform: translateX(-50%);
	}

	img {
		max-width: 100%;
		max-height: 100%;
		object-fit: contain;
	}
</style>
