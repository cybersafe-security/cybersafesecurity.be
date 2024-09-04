import { browser } from '$app/environment';
import { derived, writable } from 'svelte/store';
import { init, register, locale, getLocaleFromNavigator } from 'svelte-i18n';

const Lang = [
    { code: "fr", label: "Français" },
    { code: "nl", label: "Nederlands" },
    { code: "de", label: "Deutsche" },
    { code: "en", label: "English" }
];

export default Lang;

register('fr', () => import('$lib/lang/fr.json'));
register('nl', () => import('$lib/lang/nl.json'));
register('de', () => import('$lib/lang/de.json'));
register('en', () => import('$lib/lang/en.json'));

const getInitialLocale = () => {
    if (browser) {
        const storedLocale = localStorage.getItem('language');
        if (storedLocale && Lang.some(lang => lang.code === storedLocale)) {
            return storedLocale;
        }

        const browserLang = window.navigator.language.split('-')[0];
        if (Lang.some(lang => lang.code === browserLang)) {
            localStorage.setItem('language', browserLang);
            return browserLang;
        } else {
            localStorage.setItem('language', 'en');
            return 'en';
        }
    }
    return 'en';
};

init({
    fallbackLocale: 'en',
    initialLocale: getInitialLocale()
});

export const isLocaleLoaded = derived(locale, ($locale) => typeof $locale === 'string');


export const escapeHtml = (unsafe: string): string => {
    const replacements: { [key: string]: string } = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return unsafe.replace(/[&<>"']/g, match => replacements[match]);
}

