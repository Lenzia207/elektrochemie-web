import MainNavigation from "@/components/MainNavigation/MainNavigation";
import { ReactNode } from "react";
import { Footer } from "./Footer/Footer";
import ScrollToTop from "./ui/ScrollToTop/ScrollToTop";

interface PageWrapperProps {
  locale: string;
  readonly pageContent: ReactNode;
  isNavTextOverlaping?: boolean;
  showToTop?: boolean;
}

export default async function PageWrapper({
  locale,
  pageContent,
  isNavTextOverlaping = false,
  showToTop = true,
}: PageWrapperProps) {
  console.log(locale);
  return (
    <div className="bg-white">
      <MainNavigation
        locale={locale}
        trackHeaderOverlap={isNavTextOverlaping}
      />
      <div className="pb-20">{pageContent}</div>
      {showToTop ? <ScrollToTop locale={locale} /> : null}

      <Footer locale={locale} />
    </div>

  );
}
