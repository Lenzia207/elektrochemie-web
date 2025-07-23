import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextResponse } from "next/server";
import { NextURL } from "next/dist/server/web/next-url";
import { LocaleParams } from "./i18n/local-params";
import { getLocale } from "next-intl/server";

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: ["/((?!_next).*)"],
};
