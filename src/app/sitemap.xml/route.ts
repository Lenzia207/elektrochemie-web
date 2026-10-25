import { routing } from "@/i18n/routing";
import { PAGE_PATHS, SITE_URL, languageAlternates, localizedPath } from "@/lib/seo";

export const dynamic = "force-static";

/*
 * Hand-built instead of app/sitemap.ts: Next 15.4 writes the sitemap namespace
 * as https://www.sitemaps.org/…, the protocol requires http://.
 */
export function GET() {
  const urls = PAGE_PATHS.flatMap((path) => {
    const alternates = Object.entries(languageAlternates(path))
      .map(([lang, url]) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${SITE_URL}${url}"/>`)
      .join("\n");
    return routing.locales.map(
      (locale) => `  <url>\n    <loc>${SITE_URL}${localizedPath(locale, path)}</loc>\n${alternates}\n  </url>`
    );
  });

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...urls,
    "</urlset>",
  ].join("\n");

  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}
