import { LocaleParams } from "@/i18n/local-params";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }];
}

import PageWrapper from "@/components/PageWrapper";
import KontaktScreen from "./KontaktScreen";
import fetchContactPageData from "./data/contact-data";
import fetchCommonData from "@/lib/data/common-data";


export async function generateMetadata(props: LocaleParams): Promise<Metadata> {
  const { locale } = await props.params;
  const data = await fetchContactPageData(locale);
  return pageMetadata({ locale, path: "kontakt", title: data.pageTitle, description: data.pageDescription });
}

const Kontakt = async (props: LocaleParams) => {
  const { locale } = await props.params;

  const [data, common] = await Promise.all([
    fetchContactPageData(locale),
    fetchCommonData(locale),
  ]);
  

//   if (!data) return <div>Loading...</div>;
  return (
    <PageWrapper
      locale={locale}
      isNavTextOverlaping={true}
      pageContent={<KontaktScreen data={data} common={common} />}
    />
  );
};

export default Kontakt;
