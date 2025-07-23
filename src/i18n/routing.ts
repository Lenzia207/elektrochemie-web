import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "de"],

  // Used when no locale matches
  defaultLocale: "de",

  pathnames: {
    "/": {
      en: "/",
      de: "/",
    },
    "/expertise": {
      en: "/expertise",
      de: "/kompetenzen",
    },
    "/services": {
      en: "/services",
      de: "/leistungen",
    },
    "/team": {
      en: "/team",
      de: "/team",
    },
    "/kontakt": {
      en: "/contact",
      de: "/kontakt",
    },

    "/imprint": {
      en: "/imprint",
      de: "/impressum",
    },
    "/privacy": {
      en: "/privacy",
      de: "/datenschutz",
    },
  },
});

export type Locale = (typeof routing.locales)[number];

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
