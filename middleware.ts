import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";
import { NextRequest, NextResponse } from "next/server";
import { i18n } from "./i18n-config";

function getLocale(request: NextRequest) {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore
  const locales: string[] = i18n.locales;

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales
  );

  console.log(languages);
  return match(languages, locales, i18n.defaultLocale);
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: ["/((?!_next).*)"],
};
