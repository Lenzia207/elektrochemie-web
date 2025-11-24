import MainNavigation from "@/components/ui/MainNavigation/MainNavigation";
import { ReactNode } from "react";

interface PageWrapperProps {
  locale: string;
  readonly pageContent: ReactNode;
  isNavTextOverlaping?: boolean;
}

export default async function PageWrapper({
  locale,
  pageContent,
  isNavTextOverlaping = false,
}: PageWrapperProps) {
  console.log(locale);
  return (
    // <CookieConsentProvider>
    <div className="bg-white">
      <MainNavigation
        locale={locale}
        trackHeaderOverlap={isNavTextOverlaping}
      />

      {/* <CookieBanner /> */}

      <div>{pageContent}</div>

      {/* <Footer /> */}
    </div>
    // </CookieConsentProvider>
  );
}
