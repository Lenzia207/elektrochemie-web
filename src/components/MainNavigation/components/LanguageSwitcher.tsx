"use client";

import { routing, usePathname } from "@/i18n/routing";
import { normalizePathForLocaleSwitch } from "@/lib/utils/helper";
import useCurrentLocale from "@/hooks/use-current-locale";
import { cn } from "@/lib/utils/utils";

export function SwitchLanguage({ label }: { label: string }) {
    const pathname = usePathname();
    const currentLocale = useCurrentLocale();

    const handleLanguageSwitch = () => {
        const newLocale = currentLocale === "de" ? "en" : "de";
        const normalized = normalizePathForLocaleSwitch(pathname || "/", Array.from(routing.locales));
        const newPath = `/${newLocale}${normalized}`;
        // full reload for SSG-hosted site
        window.location.assign(newPath);
    };

    return (
        <button
            type="button"
            onClick={handleLanguageSwitch}
            className="flex min-h-11 items-center gap-1.5 font-mono text-[13px]"
            aria-label={label}
        >
            {routing.locales.map((locale, index) => (
                <span key={locale} className="flex gap-1.5">
                    {index > 0 ? <span className="opacity-50" aria-hidden="true">/</span> : null}
                    <span className={cn(locale === currentLocale ? "font-medium" : "opacity-70")}>
                        {locale.toUpperCase()}
                    </span>
                </span>
            ))}
        </button>
    );
}
