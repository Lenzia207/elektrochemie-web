import type { Metadata } from "next";
import { routing } from "@/i18n/routing";

/** Public origin of the site, used for canonical, hreflang and sitemap URLs */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://elektrochemie.eu";

export const SITE_NAME = "EGM Ziviltechniker GmbH";

/** Page paths without locale, as served with trailingSlash: true */
export const PAGE_PATHS = ["", "kompetenzen", "leistungen", "team", "kontakt", "impressum", "datenschutz"] as const;
export type PagePath = (typeof PAGE_PATHS)[number];

export function localizedPath(locale: string, path: PagePath) {
  return `/${locale}/${path ? `${path}/` : ""}`;
}

/** hreflang map for one page: every locale plus x-default pointing at the language redirect */
export function languageAlternates(path: PagePath) {
  return {
    ...Object.fromEntries(routing.locales.map((locale) => [locale, localizedPath(locale, path)])),
    "x-default": path ? localizedPath(routing.defaultLocale, path) : "/",
  };
}

interface PageMetadataOptions {
  locale: string;
  path: PagePath;
  title: string;
  description: string;
  /** Use the title as-is instead of appending the site name */
  absoluteTitle?: boolean;
}

export function pageMetadata({ locale, path, title, description, absoluteTitle = false }: PageMetadataOptions): Metadata {
  const url = localizedPath(locale, path);
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
      languages: languageAlternates(path),
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title,
      description,
      url,
      locale: locale === "de" ? "de_AT" : "en_US",
    },
  };
}
