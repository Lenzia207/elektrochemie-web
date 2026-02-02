import ScrollToTopClient from "./ScrollToTopClient";
import { cache } from "react";

 const fetchCommonData = cache(async function (
  locale: string, 
  data: string
): Promise<string> {
  const [commonData] = await Promise.all([
    import(`../../../../messages/${locale}/common.json`),
  ]);

  return commonData.default[data];
});

const ScrollToTop = async ({locale} : {locale: string}) => {
  const data = await fetchCommonData(locale, "ToTheTop");

  return (
   <ScrollToTopClient data={data} />
  );
}

export default ScrollToTop;

