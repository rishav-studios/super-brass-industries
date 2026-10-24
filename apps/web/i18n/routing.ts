import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['en', 'ar', 'nl', 'fr', 'de', 'it', 'pt'],
    defaultLocale: 'en',
    // English served at root (/), other locales at /[locale]/
    localePrefix: 'as-needed',
});

export type Locale = (typeof routing.locales)[number];
