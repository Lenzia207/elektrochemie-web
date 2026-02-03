import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["de", "en"],

  // Used when no locale matches
  defaultLocale: "de",
  localePrefix: 'always',
  // For static export: use same paths for all locales
  // The content will be different based on locale, but URLs stay consistent
  pathnames: {
    "/": "/",
    "/kompetenzen": "/kompetenzen",
    "/leistungen": "/leistungen",
    "/team": "/team",
    "/kontakt": "/kontakt",
    "/impressum": "/impressum",
    "/datenschutz": "/datenschutz",
  },
});

export type Locale = (typeof routing.locales)[number];

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
