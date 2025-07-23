import MainNavigation from "@/components/ui/MainNavigation/MainNavigation";
import { ReactNode } from "react";

interface PageWrapperProps {
  locale: string;
  readonly pageContent: ReactNode;
}

export default async function PageWrapper({
  locale,
  pageContent,
}: PageWrapperProps) {
  return (
    // <CookieConsentProvider>
    <div>
      <MainNavigation locale={locale} />

      {/* <CookieBanner /> */}

      <div>{pageContent}</div>

      {/* <Footer /> */}
    </div>
    // </CookieConsentProvider>
  );
}
