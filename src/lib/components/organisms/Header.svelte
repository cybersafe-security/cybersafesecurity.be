<script lang="ts">
	import Logo from '$lib/components/atoms/Logo.svelte';
	import Fingerprint from '$lib/components/atoms/Fingerprint.svelte';
	import IpScan from './IpScan.svelte';

	import {_, locale, time, date, number} from 'svelte-i18n';
    import {escapeHtml} from "$lib/i18n";

	export let showBackground = false;

	let menuActive = false;

	function toggleMenu() {
		menuActive = !menuActive;
	}
</script>

<IpScan />
<header class:has-background={showBackground} class="navbar">
	<nav class="container">
		<div class="navbar-container">
			<a class="logo" href="/" aria-label="Site logo">
				<Logo />
			</a>
			<Fingerprint />
			<div class="menu-icon" class:active={menuActive} on:click={toggleMenu}>
				<div class="bar" />
				<div class="bar" />
				<div class="bar" />
			</div>
			<ul class="navbar-menu" class:active={menuActive}>
				<li><a style="border-bottom:solid 3px #490c39;" href="/" on:click={toggleMenu}>{$_('header.page_label.0')}</a></li>
				<li><a style="border-bottom:solid 3px #490c39;" href="/about" on:click={toggleMenu}>{$_('header.page_label.1')}</a></li>
				<li class="services-dropdown">
					<a style="border-bottom:solid 3px #490c39;">
						<iconify-icon icon="arcticons:p-service" style="color:white;font-size:20px;" />
						{$_('header.page_label.2')}
					</a>
					<div class="dropdown-content">
						<a href="/services/analyse-forensique" on:click={toggleMenu}><iconify-icon icon="iconoir:fingerprint-window"></iconify-icon>{$_('/.features.data.5.name')}</a>
						<a href="/services/consultation" on:click={toggleMenu}><iconify-icon icon="material-symbols-light:frame-person-outline"></iconify-icon>{$_('/.features.data.1.name')}</a>
						<a href="/services/pc" on:click={toggleMenu}><iconify-icon icon="iconoir:pc-firewall"></iconify-icon>{$_('/.features.data.0.name')}</a>
						<a href="/services/mobile" on:click={toggleMenu}><iconify-icon icon="mdi:mobile-phone-lock"></iconify-icon>{$_('/.features.data.2.name')}</a>
						<a href="/services/cloud" on:click={toggleMenu}><iconify-icon icon="solar:server-minimalistic-bold-duotone"></iconify-icon>{$_('/.features.data.3.name')}</a>
						<a href="/services/box-routeur" on:click={toggleMenu}><iconify-icon icon="game-icons:wifi-router"></iconify-icon>{$_('/.features.data.4.name')}</a>
					</div>
				</li>
				<li>
					<a style="border-bottom:solid 3px #490c39;" href="/blog" on:click={toggleMenu}
						><iconify-icon icon="ic:twotone-security" />{$_('header.page_label.3')}</a
					>
				</li>
			</ul>
		</div>
	</nav>
</header>

<style>
	.navbar {
		position: fixed;
		top: 0;
		width: 100%;
		background: rgba(0, 0, 0, 0.9);
		padding: 10px 0;
		z-index: 1000;
		transition: background 0.3s;
		box-shadow: 0px 15px 10px -15px #762872;
	}

	.navbar-container {
		width: 90%;
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.navbar-brand {
		color: white;
		text-decoration: none;
		font-size: 24px;
		font-weight: bold;
	}

	.navbar-menu {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
	}

	.navbar-menu li {
		margin-left: 40px;
		position: relative; /* Needed for dropdown positioning */
	}

	.navbar-menu a {
		color: #ccc;
		text-decoration: none;
		font-size: 16px;
		transition: color 0.3s, padding 0.3s;
	}

	.navbar-menu a:hover {
		color: white;
		padding-bottom: 10px; /* Adding space for the underline */
		border-bottom: solid 3px #490c39;
	}

	.menu-icon {
		display: none;
		flex-direction: column;
		cursor: pointer;
	}

	.bar {
		width: 25px;
		height: 3px;
		background-color: white;
		margin: 4px 0;
		transition: 0.4s;
	}

	@media (max-width: 768px) {
		.navbar-menu {
			flex-direction: column;
			position: fixed;
			top: 60px;
			left: -100%;
			width: 100%;
			background: rgba(0, 0, 0, 0.9);
			transition: left 0.3s ease;
			box-shadow: 0px 15px 10px -15px #762872;
		}

		.navbar-menu.active {
			left: 0;
		}

		.navbar-menu li {
			margin: 20px 0;
			text-align: center;
		}

		.menu-icon {
			display: flex;
		}
	}

	.menu-icon.active .bar:nth-child(1) {
		transform: rotate(-45deg) translate(-9px, 6px);
	}

	.menu-icon.active .bar:nth-child(2) {
		opacity: 0;
	}

	.menu-icon.active .bar:nth-child(3) {
		transform: rotate(45deg) translate(-9px, -6px);
	}

	/* Dropdown Styles */
	.services-dropdown {
		position: relative;
	}

	.dropdown-content {
		display: none;
		position: absolute;
		top: 100%;
		left: 0;
		background-color: rgba(0, 0, 0, 0.9);
		box-shadow: 0px 15px 10px -15px #762872;
		width: 200px;
		padding: 10px 0;
		z-index: 1000;
	}

	.dropdown-content a {
		color: #ccc;
		text-decoration: none;
		display: block;
		padding: 10px 15px;
		transition: background 0.3s, color 0.3s;
	}

	.dropdown-content a:hover {
		background-color: #490c39;
		color: white;
	}

	/* Show dropdown on hover */
	.services-dropdown:hover .dropdown-content {
		display: block;
	}
</style>
