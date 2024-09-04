<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	import SecurityGridAnimation from '$lib/components/organisms/SecurityGridAnimation.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
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

<div class="relative text-center" style="margin-top:100px;">
	<SecurityGridAnimation />
	<h1
		class="hero__heading mx-auto max-w-3xl text-balance text-5xl font-medium opacity-0 md:text-7xl"
	>
	{$_('/.heros.title')}
	</h1>
	<p class="hero__body mx-auto mt-6 max-w-md text-balance text-gray-300 opacity-0">
		{$_('/.heros.intro')}
	</p>

	<Button href="/#services">{$_('/.heros.btn')}</Button>

	<div class="hero__image glass-container mt-16 w-fit opacity-0">
		<div
			class="hero__glow hero__glow--one absolute left-1/3 top-0 -z-10 h-2/3 w-2/3 bg-violet-700/50 opacity-0 mix-blend-screen blur-3xl filter md:blur-[120px]"
		/>
		<div
			class="hero__glow hero__glow--two absolute left-0 top-1/3 -z-10 h-2/3 w-2/3 bg-orange-600/50 opacity-0 mix-blend-screen blur-3xl filter md:blur-[120px]"
		/>

		<img
			class="rounded-lg"
			src="images/desktop-demo2.png"
			alt=""
			style="box-shadow: 0px 0px 12px black;"
		/>
	</div>
</div>
