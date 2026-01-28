import { LocaleParams } from "@/i18n/local-params";

import PageWrapper from "@/components/PageWrapper";
import ImprintScreen from "./ImprintScreen";

/// TODO add Englisch Version of Imprint Screen
const Imprint = async (props: LocaleParams) => {
  const { locale } = await props.params;

//   const data = await fetchHomePageData(locale);
  console.log(locale);

//   if (!data) return <div>Loading...</div>;
  return (
    <PageWrapper
      locale={locale}
      isNavTextOverlaping={false}
      pageContent={<ImprintScreen />}
    />
  );
};

export default Imprint;
