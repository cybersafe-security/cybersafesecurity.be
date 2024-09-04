<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { onMount } from 'svelte';
	import { blur,fly} from 'svelte/transition'
	import { detectIncognito } from 'detectincognitojs';
	import IpScanner from './IpScanResult.svelte';

	import { _, locale, time, date, number, t } from 'svelte-i18n';

	let positive_os = $_('fingerprint.positive_os')
	let negative_os = $_('fingerprint.negative_os')
	let tor_phrase = $_('fingerprint.tor_phrase')
	let vpn_phrase = $_('fingerprint.vpn_phrase')
	let notvpn_phrase = $_('fingerprint.notvpn_phrase')
	let btn_protect_phrase = $_('fingerprint.btn_protect_phrase')

	let ipDetails = null;
	let deviceDetails = {
		type: '',
		plateforme: '',
		battery: '',
		isCharged: false,
		useragent: '',
		navigationIsPrivate: false,
		browser: ''
	};
	let error = null;
	let loading = true;
	let isVPN = false;
	let isTorRelay = false

	let resultLeakIP = {
		WebRTC: {
			isLeaked: false,
			ip: ''
		},
		IPv6: {
			isLeaked: false,
			ip: ''
		},
		DNS: {
			isLeaked: false,
			ip: ''
		}
	};

	let os_type_style = {
		Windows: { bg: 'windows-bg.jpg', negative_os, gafam_type: 'Windows' },
		MacOS: { bg: 'macos-bg.webp', phrase: negative_os, gafam_type: 'Apple' },
		Linux: { bg: 'desktop-demo5.png', phrase: positive_os },
		Android: { bg: 'android-bg.png', phrase: negative_os, gafam_type: 'Google' },
		iOS: { bg: 'iphone-bg.webp', phrase: negative_os, gafam_type: 'Apple' }
	};

	function isAndroid() {
		const userAgent = navigator.userAgent.toLowerCase();
		const vendor = navigator.vendor && navigator.vendor.toLowerCase();
		const platform = navigator.platform && navigator.platform.toLowerCase();

		const isAndroid = /android/.test(userAgent);

		const isAndroidTablet = isAndroid && !/mobile/.test(userAgent);

		const isFireOS = /silk/.test(userAgent);

		const isPossibleTablet = isAndroid && !/mobile/.test(userAgent);

		const isChromebook = /cros/.test(userAgent);

		return (isAndroid && !isChromebook) || isFireOS || isPossibleTablet;
	}

	function detectOS() {
		let userAgent = window.navigator.userAgent,
			platform = window.navigator.platform,
			macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
			windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
			iosPlatforms = ['iPhone', 'iPad', 'iPod'],
			os = '';

		if (macosPlatforms.indexOf(platform) !== -1) {
			os = 'MacOS';
		} else if (iosPlatforms.indexOf(platform) !== -1) {
			os = 'iOS';
		} else if (windowsPlatforms.indexOf(platform) !== -1) {
			os = 'Windows';
		} else if (/Android/.test(userAgent)) {
			if (/Ubuntu/.test(userAgent)) {
				os = 'Linux';
			} else {
				os = 'Android';
			}
		} else if (!os && /Linux/.test(platform)) {
			// Vérification supplémentaire pour les tablettes Android,Chrome OS,...
			if (isAndroid()) {
				os = 'Android';
			} else {
				os = 'Linux';
			}
		}

		deviceDetails.plateforme = os;
	}

	detectOS();

	detectIncognito().then((result) => {
		deviceDetails.browser = result.browserName;
		deviceDetails.navigationIsPrivate = result.isPrivate;
	});

	deviceDetails.useragent = navigator.userAgent;

	const detectDeviceType = () =>
		/Mobile|Android|iPhone|iPad/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop';

	deviceDetails.type = detectDeviceType();

	if (navigator.getBattery) {
		navigator
			.getBattery()
			.then(function (battery) {
				// Get current battery level .
				var level = battery.level * 100;
				deviceDetails.battery = level;
				deviceDetails.isCharged = battery.charging;
			})
			.catch(function (e) {
				console.error(e);
			});
	}

	async function fetchIpDetails() {
		try {
			const response = await fetch('https://ipwho.is/');
			if (!response.ok) {
				throw new Error('Failed to fetch data');
			}
			const data = await response.json();
			if (
				data.timezone.id != Intl.DateTimeFormat().resolvedOptions().timeZone.replace(/\\\//g, '/')
			) {
				isVPN = true;
			}
			return data;
		} catch (err) {
			throw new Error(err.message);
		}
	}

	function checkWebRTleak(onNewIP) {
		var myPeerConnection =
			window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
		var pc = new myPeerConnection({ iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] }),
			noop = function () {},
			localIPs = {},
			ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,
			ipFilter =
				/^((?!10\.)(?!127\.)(?!169\.254\.)(?!172\.(1[6-9]|2[0-9]|3[0-1])\.)(?!192\.168\.)(?!fd00:)(?!fe80:)(?!fc00:)(?!fe00:).*)/;

		function ipIterate(ip) {
			if (!localIPs[ip] && ipFilter.test(ip)) {
				onNewIP(ip);
				localIPs[ip] = true;
			}
		}

		pc.createDataChannel('');

		pc.createOffer(function (sdp) {
			sdp.sdp.split('\n').forEach(function (line) {
				if (line.indexOf('candidate') < 0) return;
				line.match(ipRegex).forEach(ipIterate);
			});
			pc.setLocalDescription(sdp, noop, noop);
		}, noop);

		pc.onicecandidate = function (ice) {
			if (
				!ice ||
				!ice.candidate ||
				!ice.candidate.candidate ||
				!ice.candidate.candidate.match(ipRegex)
			)
				return;
			ice.candidate.candidate.match(ipRegex).forEach(ipIterate);
		};
	}

	function checkWRTC(ip) {
		if (ip != '0.0.0.0') {
			if (isVPN && ipDetails.query != ip) {
				resultLeakIP['WebRTC'].isLeaked = true;
				resultLeakIP['WebRTC'].ip = ip;
			}
		}
	}

	checkWebRTleak(checkWRTC);

	function checkIPv6Leak() {
		return new Promise((resolve, reject) => {
			fetch('https://api64.ipify.org?format=json')
				.then((response) => response.json())
				.then((data) => {
					const ip = data.ip;

					// Vérifier si l'adresse IP est au format IPv6
					const isIPv6 = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/.test(ip);

					if (isIPv6) {
						console.log('Fuite IPv6 détectée !');
						resultLeakIP['IPv6'].isLeaked = true;
						resultLeakIP['IPv6'].ip = ip;
						resolve(true);
					} else {
						console.log('Pas de fuite IPv6 détectée.');
						resolve(false);
					}
				})
				.catch((error) => {
					console.error("Erreur lors de la vérification de l'IP :", error);
					reject(error);
				});
		});
	}

	// Utilisation de la fonction
	checkIPv6Leak()
		.then((result) => {
			if (result) {
				console.log('v6 ' + result);
			}
		})
		.catch((error) => {
			console.log('Impossible de vérifier la fuite IPv6 :', error);
		});

	async function checkIfTor() {
  	try {
    	const response = await fetch('https://check.torproject.org/exit-addresses');
    	const exitNodes = await response.text();
    	const userIP = await fetch('https://api.ipify.org?format=json').then(res => res.json()).then(data => data.ip);
    
     return exitNodes.includes(userIP);
  	} catch (error) {
    	console.error('Erreur lors de la vérification Tor:', error);
    	return false;
  	}
	}

	checkIfTor().then(isTor => {
    	 isTorRelay = isTor
	});



	onMount(async () => {
		try {
			ipDetails = await fetchIpDetails();
		} catch (err) {
			error = err.message;
		} finally {
			loading = false;
		}
	});
</script>

{#if loading || error}
	<section
		style="background-image: url('images/fingerprint-scan.gif');background-size: cover;height: 300px;width: 100%;background-position: center;background-repeat: no-repeat;"
	/>
{:else}
	<div
		style="background-image: url('images/{os_type_style[deviceDetails.plateforme]
			.bg}'); -webkit-filter: blur(1.5px);height: 100%;background-repeat: no-repeat;background-size: cover;"
	/>
	<Card.Root 
		class="card-root"
		style=" background-color: rgb(0,0,0);
  background-color: rgba(0,0,0, 0.4);
  color: white;
  font-weight: bold;
  position: absolute;
  top: 1%;
  z-index: 2;
  width: 90%;
  text-align: center;{deviceDetails.type == 'Desktop' ? 'border:solid 0px;' : ''}"
	>
		<div class="card-content" in:blur="{{ duration: 1000 }}">
			<Card.Header>
				<Card.Title>
					<p
						style="color:{deviceDetails.plateforme == 'Linux'
							? '#018749'
							: '#6f147f'};margin-top:10px;margin-bottom:10px;font-size:{deviceDetails.type ==
						'Desktop'
							? '30'
							: '18'}px;"
					>
						{#if deviceDetails.plateforme == 'Linux'}
							{os_type_style[deviceDetails.plateforme].phrase}
						{:else}
							{os_type_style[deviceDetails.plateforme].gafam_type}
							{os_type_style[deviceDetails.plateforme].phrase}
						{/if}
					</p>
					{#if isVPN}
						<h4 style="color:#018749">
							{vpn_phrase}<iconify-icon icon="solar:shield-bold-duotone" />
						</h4>
					{:else if isTorRelay}
					<h4 style="color:#7C0A02;margin-top:10px;">
						{tor_phrase}<iconify-icon icon="logos:tor"></iconify-icon>
					</h4>
					{:else}
					<h4 style="color:#7C0A02;margin-top:10px;">
						{notvpn_phrase}<iconify-icon icon="ic:sharp-vpn-lock" />
					</h4>
					{/if}
					<br/>
					{ipDetails.type}:
					<iconify-icon
						style="font-size:15px;"
						icon="flag:{ipDetails.country_code.toLowerCase()}-4x3"
					/>
					{ipDetails.ip}
					<br />
					{ipDetails.region}
					<br />
					<iconify-icon icon="marketeq:home-telephone" />{ipDetails.connection.isp}
					{ipDetails.connection.org}
				</Card.Title>
				<Card.Description>
					IPv6 Leak: {#if resultLeakIP['IPv6'].isLeaked}
						<p style="color:#7C0A02;margin-bottom:-20px;">
							{resultLeakIP['IPv6'].ip}
						</p>{:else}<iconify-icon
							style="color:green;font-size:20px;"
							icon="healthicons:no"
						/>{/if}<br />
					WebRTC Leak: {#if resultLeakIP['WebRTC'].isLeaked}
						<p style="color:#7C0A02;">{resultLeakIP['WebRTC'].ip}</p>{:else}<iconify-icon
							style="color:green;font-size:20px;"
							icon="healthicons:no"
						/>{/if}<br />
					DNS Leak: {#if resultLeakIP['DNS'].isLeaked}
						<p style="color:#7C0A02;">{resultLeakIP['DNS'].ip}</p>{:else}<iconify-icon
							style="color:green;font-size:20px;"
							icon="healthicons:no"
						/>{/if}
					<p style="font-size:{deviceDetails.type == 'Desktop' ? '15' : '8'}px;">
						{deviceDetails.useragent}
					</p>
					<div style="color:white;">
						<h5>
							Private navigation<iconify-icon
								style="font-size:20px;"
								icon="fluent:inprivate-account-20-regular"
							/>: {#if deviceDetails.navigationIsPrivate}<iconify-icon
									style="color:green;"
									icon="ep:success-filled"
								/>{:else}<iconify-icon
									style="color:#7C0A02;font-size:20px;"
									icon="healthicons:no"
								/>{/if}
						</h5>
						{#if navigator.getBattery}
							<p>
								{deviceDetails.battery}%
								{#if deviceDetails.isCharged}
									<iconify-icon icon="flat-color-icons:charge-battery" style="font-size:20px;" />
								{:else}
									<iconify-icon
										style="font-size:20px;"
										icon="ic:baseline-battery-{deviceDetails.battery -
											(deviceDetails.battery % 10)}"
									/>
								{/if}
							</p>
						{/if}
					</div>
					<IpScanner />
				</Card.Description>
			</Card.Header>
			<Card.Content style="color:white;">
				<button
					on:click={() => (window.location.href = '/'+$locale+'/device-fingerprint')}
					style="background-color:#6f147f;border-radius:20px;padding:20px;box-shadow:0px 0px 8px black;"
					><h5 style="font-size:15px;">
						 {btn_protect_phrase}<iconify-icon
							style="font-size:20px;"
							icon="iconoir:fingerprint-window"
						/>
					</h5></button
				>
			</Card.Content>
		</div>
	</Card.Root>
{/if}

<style>
	.card-root {
		position: relative;
		color: white;
		text-align: center;
		height: 100%;
	}

	.card-content {
		overflow-y: auto;
		max-height: 100%; /* Ajustez cette valeur selon vos besoins */
		padding: 10px;
	}
</style>
