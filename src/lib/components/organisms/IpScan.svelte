<script lang="ts">
	import { onMount } from 'svelte/internal';
	import { scannedIPsStore } from '$lib/stores/ipscan';

	export let showBackground = false;

	let menuActive = false;

	function toggleMenu() {
		menuActive = !menuActive;
	}

	let state = {
		hosts: [],
		timeAsked: 255,
		nbHostsScanned: 0,
		scanned_networks: 0,
		timeout: 1000,
		currentTimeout: 500,
		ipNetwork: null,
		started: false,
		finished: false,
		minTime: Infinity
	};

	async function ping(ip, onSuccess) {
		return new Promise((resolve, reject) => {
			fetchWithTimeout('//' + ip + ':45543', 4000, {}).then(
				() => console.log('Ne devrait pas arriver'),
				onSuccess
			);
		});
	}

	async function pingV2(ip, timeout = 1000, nbHosts = 254) {
		return new Promise((resolve, reject) => {
			fetchWithTimeout('//' + ip + ':45543', timeout, {}).then(
				() => {},
				(err) => {
					if (('' + err).indexOf('aborted') === -1) {
						state.hosts = [...state.hosts, ip];
						scannedIPsStore.update((state) => {
							return {
								...state,
								nbHost: state.nbHost + 1,
								ip: [...state.ip, ip]
							};
						});
						console.log(ip + ' ' + err);
					}
					state.nbHostsScanned += 1;
					if (state.nbHostsScanned === nbHosts) {
						state.finished = true;
						scannedIPsStore.update((state) => {
							return {
								...state,
								isFinish: true
							};
						});
					}
					resolve();
				}
			);
		});
	}

	function transform_netmask(mask) {
		let bit_mask = [0, 0, 0, 0];
		for (let i = 0; i <= 32; i++) {
			if (i < mask) {
				bit_mask[~~(i / 8)] += 1;
			}
		}
		return bit_mask.map((e) => Math.pow(2, e) - 1);
	}

	function multi_ping(ipList) {
		return new Promise((resolve, reject) => {
			let e = 0;

			for (let i = 0; i < ipList.length; i++) {
				pingV2(ipList[i], state.timeout).then(() => {
					e += 1;
					if (e === ipList.length) {
						resolve();
					}
				});
			}
		});
	}

	async function scan_network(network, mask = 24) {
		return new Promise(async (resolve, reject) => {
			state.hosts = [];
			const net = network.split('.');
			let bit_mask = transform_netmask(mask);
			let tmp = 0;
			let ipList = [];

			for (let i = 0; i < 256 - bit_mask[0]; i++) {
				for (let j = 0; j < 256 - bit_mask[1]; j++) {
					for (let k = 0; k < 256 - bit_mask[2]; k++) {
						for (let l = 1; l < 255 - bit_mask[3]; l++) {
							const ip = [
								parseInt(net[0]) + i,
								parseInt(net[1]) + j,
								parseInt(net[2]) + k,
								parseInt(net[3]) + l
							].join('.');
							if (tmp % parseInt(256 / state.timeAsked) === 0) {
								ipList.push([ip]);
							} else {
								ipList[ipList.length - 1] = [...ipList[ipList.length - 1], ip];
							}
							tmp++;
						}
					}
				}
			}
			for (const list of ipList) {
				await multi_ping(list);
			}
		});
	}

	function smallMaskDetection() {
		const t = new Date().getTime();
		for (let i = 0; i < 255; i++) {
			ping(`192.168.${i}.255`, () => {
				if (!state.ipNetwork) {
					state.ipNetwork = `192.168.${i}.0`;
				}
			}).catch(() => {
				state.scanned_networks += 1;
				const finalT = new Date().getTime() - t;
				if (state.minTime > finalT) {
					state.minTime = finalT;
				}
			});
		}
	}

	async function fetchWithTimeout(resource, to, options) {
		const { timeout = to } = options;

		const controller = new AbortController();
		setTimeout(() => controller.abort(), timeout);

		return fetch(resource, {
			...options,
			signal: controller.signal
		});
	}

	function startDetection() {
		state.started = true;
		state.finished = false;
		state.hosts = [];
		state.timeout = state.currentTimeout;
		state.nbHostsScanned = 0;

		if (state.ipNetwork) {
			scan_network(state.ipNetwork, 24, state.timeout);
		}
	}

	onMount(() => {
		scannedIPsStore.update((state) => {
			return {
				...state,
				nbHost: 0,
				ip: []
			};
		});
		smallMaskDetection();
		if (navigator.appVersion.indexOf('Win') >= 0) {
			state.currentTimeout = 3500;
		}
		const timer = setTimeout(() => {
			startDetection();
		}, 4000);
	});
</script>
