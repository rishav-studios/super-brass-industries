import { AU, CA, DE, DK, ES, FI, FlagComponent, FR, GB, ID, IN, PL, PT, RU, SG, US } from 'country-flag-icons/react/1x1';

export type ExportCountry = {
    name: string,
    flag: FlagComponent,
    code: string,
    alias?: string
}

export const exportCountries: ExportCountry[] = [
    {
        name: "india",
        flag: IN,
        code: "IN"
    },
    {
        name: "australia",
        flag: AU,
        code: "AU"
    },
    {
        name: "france",
        flag: FR,
        code: "FR"
    },
    {
        name: "canada",
        flag: CA,
        code: "CA"
    },
    {
        name: "united states of america",
        flag: US,
        code: "US",
        alias: "united states"
    },
    {
        name: "singapore",
        flag: SG,
        code: "SG"
    },
    {
        name: "poland",
        flag: PL,
        code: "PL"
    },
    {
        name: "indonesia",
        flag: ID,
        code: "ID"
    },
    {
        name: "united kingdom",
        flag: GB,
        code: "GB",
        alias: "england"
    },
    {
        name: "finland",
        flag: FI,
        code: "FI"
    },
    {
        name: "Portugal",
        flag: PT,
        code: "PT"
    },
    {
        name: "Denmark",
        flag: DK,
        code: "DK"
    },
    {
        name: "russia",
        flag: RU,
        code: "RU"
    },
    {
        name: "germany",
        flag: DE,
        code: "DE"
    },
    {
        name: "spain",
        flag: ES,
        code: "ES"
    },
]