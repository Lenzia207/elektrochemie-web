import {
  Funnel_Display,
  Funnel_Sans,
  JetBrains_Mono,
  Licorice,
} from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Locale, routing } from "@/i18n/routing";
import "../globals.css";

const funnelSans = Funnel_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-funnel-sans",
});

const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-funnel-display",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
});

const licorice = Licorice({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-licorice",
});

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html
      lang={locale}
      className={`${funnelSans.variable} ${funnelDisplay.variable} ${jetbrainsMono.variable} ${licorice.variable} font-sans`}
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
