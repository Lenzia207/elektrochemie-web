import {
  // Alexandria,
  Geist,
  Geist_Mono,
  Licorice,
  Funnel_Sans,
} from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Locale, routing } from "@/i18n/routing";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// const alexandria = Alexandria({
//   subsets: ["latin"],
//   weight: ["400", "500", "700"],
//   variable: "--font-alexandria",
// });

const licorice = Licorice({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-licorice",
});
const funnel = Funnel_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-funnel",
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

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable}  ${licorice.variable} ${funnel.variable} $font-sans`}
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
