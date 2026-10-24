// This page is superseded by app/[locale]/page.tsx
// The next-intl middleware routes all requests to the appropriate [locale] route.
// This file is kept to satisfy Next.js App Router requirements but will never be rendered
// because the middleware intercepts all requests first.
export { default } from "@/app/[locale]/page";