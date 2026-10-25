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

  return (
    // min-h-svh + flex-1 on main keeps the footer at the bottom on short pages
    <div className="flex min-h-svh flex-col bg-white">
      <MainNavigation
        locale={locale}
        trackHeaderOverlap={isNavTextOverlaping}
      />
      <main className="flex-1">{pageContent}</main>
      {showToTop ? <ScrollToTop locale={locale} /> : null}

      <Footer locale={locale} />
    </div>

  );
}
