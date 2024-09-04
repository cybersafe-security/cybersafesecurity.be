import { onMount } from 'svelte';
import { writable } from 'svelte/store';

// Créez un store pour les IPs scannées
export const scannedIPsStore = writable({isFinish:false,nbHost:0,ip:[""]});
