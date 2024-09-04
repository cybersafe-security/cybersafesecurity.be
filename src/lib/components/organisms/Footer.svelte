<script lang="ts">
	import FooterWave from '$lib/icons/footer-wave.svelte';
	import * as Select from '$lib/components/ui/select';
	import Lang from '$lib/i18n';
	import Info from '$lib/data/info';
	export let data;
  
	let currentYear = new Date().getFullYear();

	let logos = [
		'wireguard-logo-label.png',
		'gpl-licence.png',
		'computerhardware-logo.jpg',
		'authme-logo-label.png',
		'electronmail-logo.png',
		'cryptext-logo-label.png',
		'zrok-logo.png',
		'nextcloud-logo-label.png',
		'brave-logo.png',
		'torproject-logo.svg',
		'tor-logo.png'
	];

	import { page } from '$app/stores';
	import { get } from 'svelte/store';

	const { posts } = get(page).data;
	import { _, locale, time, date, number, t } from 'svelte-i18n';

	let value: string = 'en';

	const handleLocaleChange = (event: any) => {
	value = event.value
	$locale = value;
	localStorage.setItem('language', value)
	const url = $page.url.pathname;
            const match = url.match(/^\/([a-z]{2})(\/|$)/);

            if (match && match[1] !== value) {
                const newUrl = url.replace(/^\/[a-z]{2}(\/|$)/, `/${value}/$2`).replace("$2","");
                window.location.pathname = newUrl;
            }
	}

</script>

<footer class="footer">
	<div class="wave">
		<FooterWave />
	</div>
	<div class="footer-content container">
		<div class="footer-section logo">
			<img
				src="/images/logo.png"
				style="width:100px;height:100px;display:block;margin:auto;"
				alt="logo cybersafe"
			/>
			<br />
			<h4>
				« {$_('info.slogan')} »
			</h4>
		</div>

		<div class="footer-section recent-blogs">
			<h4>Cyber Blog</h4>
			<br />
			{#if posts && posts.length > 0}
				{#each posts as post}
				{#if post.postlang === $locale}
					<div class="blog-item">
						<div>
							<a href={'/'+$locale+'/'+post.slug}
								><h5 class="titre-post" style="transition: color 0.3s;">{post.title}</h5>
								<a />
								<p>{post.excerpt}</p>
								<p style="color:grey;">
									<iconify-icon icon="mingcute:time-line" />
									{post.readingTime.replace(/\bread\b/gi, '').trim()}
								</p>
							</a>
						</div>
					</div>
					<br />
					{/if}
				{/each}
			{/if}
		</div>
		<div class="footer-section company">
			<h4> {$_('footer.label.0')}</h4>
			<ul>
				 	<li><a href="/services/analyse-forensique">{$_('/.features.data.5.name')}</a></li>
					<li><a href="/services/consultation">{$_('/.features.data.1.name')}</a></li>
					<li><a href="/services/pc">{$_('/.features.data.0.name')}</a></li>
					<li><a href="/services/mobile">{$_('/.features.data.2.name')}</a></li>
					<li><a href="/services/cloud">{$_('/.features.data.3.name')}</a></li>
					<li><a href="/services/box-routeur">{$_('/.features.data.4.name')}</a></li>
			</ul>
		</div>
		<div class="footer-section quick-links">
			<h4>{$_('footer.label.1')}</h4>
			<ul>
				{#each $_('info.secteur') as secteur}
					<li>{secteur}</li>
				{/each}
			</ul>
		</div>
		<div class="footer-section contact">
			<h4>{$_('info.rdv')}</h4>
			<p><a href="mailto:{Info.email}">{Info.email}</a></p>
			<br />
			<h4>{$_('info.contactme')}</h4>
			<p><a href="tel:{Info.telephone}">{Info.telephone}</a></p>
			<br />
			<Select.Root
			{value} onSelectedChange={(e) => {
				handleLocaleChange(e)
			}}
			>
				<Select.Trigger class="w-[180px]">
					<Select.Value placeholder="Langue" style="color:white;" />
				</Select.Trigger>
				<Select.Content
					style="background-color:black;color:white;border-radius:10%;box-shadow: 0px 0px 0px 2px #762872;margin-top:20px;"
				>
					{#each Lang as lang}
						<Select.Item value={lang.code}
							><iconify-icon icon="circle-flags:{lang.code}" />{lang.label}</Select.Item
						>
					{/each}
				</Select.Content>
			</Select.Root>
		</div>
	</div>
	<div class="footer-bottom">
		<div class="container">
			<div class="copyright" style="font-size:15px;">
				<p>&copy; {currentYear} CyberSafe Security; All Rights Reserved.</p>
			</div>

			<div class="social-icons">
				<div style="display: flex;flex-wrap: wrap;justify-content: center;align-items: center;width: 100%;">
					{#each logos as logo}
						<img src="/images/{logo}" alt="logo" class="img-footer-logo" />
					{/each}
				</div>
			</div>
		</div>
	</div>
</footer>

<style lang="scss">
	footer {
		background: rgb(0, 0, 0);
		background: linear-gradient(
			90deg,
			rgba(0, 0, 0, 1) 0%,
			rgba(121, 9, 92, 1) 68%,
			rgba(73, 57, 251, 1) 100%
		);

		.content {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 15px;
			font-weight: 600;
			text-align: center;

			.credits {
				font-weight: 400;
				font-size: 90%;
				color: var(--color--text-shade);
			}

			.socials {
				display: flex;
				align-items: center;
				gap: 20px;
			}
		}

		a {
			&:hover {
				filter: drop-shadow(0px 0px 3px var(--color--primary));
			}
		}
	}

	.img-footer-logo {
		width: 60px;
		height: 60px;
		border-radius: 100%;
	}
	.footer {
		color: white;
	}
	.footer .container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 20px;
	}
	.footer-section {
		flex: 1;
		margin: 10px;
	}
	.footer-section h3 {
		margin-bottom: 10px;
	}
	.footer-section ul {
		list-style: none;
		padding: 0;
	}
	.footer-section ul li {
		margin-bottom: 10px;
	}
	.footer-section ul li a {
		color: white;
		text-decoration: none;
	}
	.footer-section ul li a:hover {
		text-decoration: underline;
	}
	.footer-bottom {
		padding: 10px 0;
		text-align: center;
	}
	.footer-bottom .container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
	}
	.social-icons a {
		color: white;
		margin: 0 10px;
	}
	.social-icons a:hover {
		color: #bbb;
	}
	.btn {
		background-color: #019dbb;
		color: white;
		padding: 10px 20px;
		border: none;
		cursor: pointer;
	}
	.btn:hover {
		background-color: #017a9c;
	}
	@media (max-width: 768px) {
		.footer .container {
			flex-direction: column;
			text-align: center;
		}
		.footer-section {
			margin: 20px 0;
		}
	}

	.titre-post:hover {
		text-decoration: underline;
	}
</style>
