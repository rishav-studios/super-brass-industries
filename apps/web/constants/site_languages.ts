import { DE, FlagComponent, FR, GB, IT, NL, PT, SA } from 'country-flag-icons/react/1x1';
export type Language = {
    code: string;
    name: string;
    nativeName: string;
    flag: FlagComponent;
}


export const LANGUAGES: Language[] = [
    { code: "en", name: "English", nativeName: "English", flag: GB },
    { code: "ar", name: "Arabic", nativeName: "العربية", flag: SA },
    { code: "nl", name: "Dutch", nativeName: "Nederlands", flag: NL },
    { code: "fr", name: "French", nativeName: "Français", flag: FR },
    { code: "de", name: "German", nativeName: "Deutsch", flag: DE },
    { code: "it", name: "Italian", nativeName: "Italiano", flag: IT },
    { code: "pt", name: "Portuguese", nativeName: "Português", flag: PT },
];
