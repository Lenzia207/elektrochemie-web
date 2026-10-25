"use client";

import { ComponentProps } from "react";
import { Link } from "@/i18n/routing";
import useCurrentLocale from "@/hooks/use-current-locale";

/*
 * next-intl Link bound to the locale of the current route,
 * so server components can render localized links without passing the locale around.
 */
export default function LocaleLink(props: ComponentProps<typeof Link>) {
  const locale = useCurrentLocale();
  return <Link locale={locale} {...props} />;
}
