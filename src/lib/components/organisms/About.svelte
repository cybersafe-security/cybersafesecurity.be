<script>
	import SparklingHighlight from '$lib/components/molecules/SparklingHighlight.svelte';
	import Image from '../atoms/Image.svelte';
	import * as Card from '$lib/components/ui/card/index.js';

	import { onMount } from 'svelte';
	import gsap from 'gsap';

	import {_, locale, time, date, number} from 'svelte-i18n';
    import {escapeHtml} from "$lib/i18n";

	onMount(() => {
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce').matches;

		if (prefersReducedMotion) {
			gsap.set('.hero__heading, .hero__body, .hero__button, .hero__image, .hero__glow', {
				opacity: 1
			});

			return;
		}

		const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });

		tl.fromTo('.hero__heading', { scale: 0.5 }, { scale: 1, opacity: 1, duration: 1.4 });
		tl.fromTo('.hero__body', { y: 20 }, { y: 0, opacity: 1, duration: 1.2 }, '-=0.6');
		tl.fromTo('.hero__button', { scale: 1.5 }, { scale: 1, opacity: 1, duration: 1.3 }, '-=0.8');
		tl.fromTo('.hero__image', { y: 100 }, { y: 0, opacity: 1, duration: 1.3 }, '+=0.3');
		tl.fromTo('.hero__glow', { scale: 0.5 }, { scale: 1, opacity: 1, duration: 1.8 }, '-=1');

		gsap.to('.hero__glow--one', {
			ease: 'power2.inOut',
			repeat: -1,
			repeatDelay: 0,
			keyframes: [
				{ top: '0%', left: '33%', duration: 0 },
				{ top: '33%', left: '33%', duration: 2 },
				{ top: '33%', left: '0%', duration: 3 },
				{ top: '0%', left: '0%', duration: 2 },
				{ top: '0%', left: '33%', duration: 3 }
			]
		});

		gsap.to('.hero__glow--two', {
			ease: 'power2.inOut',
			repeat: -1,
			repeatDelay: 0,
			keyframes: [
				{ top: '33%', left: '0%', duration: 0 },
				{ top: '0%', left: '0%', duration: 2 },
				{ top: '0%', left: '33%', duration: 3 },
				{ top: '33%', left: '33%', duration: 2 },
				{ top: '33%', left: '0%', duration: 3 }
			]
		});
	});
</script>


<div class="hero__image glass-container mt-16 w-fit opacity-0">
	<div
		class="hero__glow hero__glow--one absolute left-1/3 top-0 -z-10 h-2/3 w-2/3 bg-violet-700/50 opacity-0 mix-blend-screen blur-3xl filter md:blur-[120px]"
	/>
	<div
		class="hero__glow hero__glow--two absolute left-0 top-1/3 -z-10 h-2/3 w-2/3 bg-orange-600/50 opacity-0 mix-blend-screen blur-3xl filter md:blur-[120px]"
	/>



<h2 style="text-align:center;margin-bottom:50px;">
	{$_('/.about.title')}
	<SparklingHighlight color="primary">{$_('/.about.title_star')}</SparklingHighlight>
</h2>
<section id="about">
	<div class="info">
		<Card.Root
		style="background: rgba(0, 0, 0, 0.6);border:solid 1px #6f147f;box-shadow:0px 0px 10px black;"
	>
		<Card.Header>
			<Card.Title style="color:white;text-align:center;"
				>{$_('/.about.card1_p1')}</Card.Title
			>
			<Card.Description style="color:white;text-align:center;"
				><p>
					{$_('/.about.card1_p2')}
				</p>
			</Card.Description>
		</Card.Header>
		<Card.Content style="color:white;text-align:center;">
			<h4 style="display: flex; justify-content: center; align-items: center;">
				{$_('/.about.card1_p3')}
				<img width="50" height="50" src="images/logo.png" alt="fingerprint--v1" />
			</h4>
		</Card.Content>
	</Card.Root>
		
	</div>
	<div class="image" style="box-shadow:0px 0px 8px black;">
		<Image src="/images/cs-mobile-degoogliser.jpg" alt="Sample for the static template" />
	</div>
</section>


<Card.Root
		style="background: rgba(0, 0, 0, 0.6);border:solid 1px #6f147f;box-shadow:0px 0px 10px black;"
	>
		<Card.Header>
			<Card.Title style="color:white;text-align:center;"
				><strong>
					{$_('/.about.card2_p1')}
				</strong></Card.Title
			>
			<Card.Description style="color:white;text-align:center;"
				><p>
					{$_('/.about.card2_p2')}
				</p>
			</Card.Description>
		</Card.Header>
		<Card.Content style="color:white;text-align:center;">
			<h4 style="display: flex; justify-content: center; align-items: center;">
				{$_('/.about.card2_p3')}
			</h4>
		</Card.Content>
	</Card.Root>

</div>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	#about {
		position: relative;
		display: grid;
		grid-template-columns: 500px 250px;
		align-items: center;
		justify-content: space-between;
		padding-bottom: 50px;

		@include for-phone-only {
			grid-template-columns: 1fr;
			justify-items: center;
			gap: 20px;
		}

		.info {
			display: flex;
			flex-direction: column;
			gap: 10px;
			h2 {
				@include for-phone-only {
					text-align: center;
				}
			}

			p {
				@include for-phone-only {
					text-align: center;
				}
			}

			@include for-phone-only {
				gap: 20px;
			}
		}

		.socials {
			display: flex;
			align-items: center;
			gap: 15px;

			@include for-phone-only {
				justify-content: center;
				margin-bottom: 10px;
				span {
					display: none;
				}
			}
		}

		.image {
			width: 220px;
			height: 220px;
		}
	}
</style>
