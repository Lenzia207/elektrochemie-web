import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Eyebrow from "@/components/ui/Texts/Eyebrow";
import { CommonData } from "@/lib/data/common-data";
import { accentFor, formatIndex } from "@/lib/accent-colors";
import { ServicesPageData } from "./data/types/leistungen-types";
import ServiceArticle, { serviceAnchor } from "./components/ServiceArticle";

interface ServicesPageProps {
  data: ServicesPageData;
  common: CommonData;
}

export default function ServicesScreen({ data, common }: ServicesPageProps) {
  if (!data) return null;
  return (
    <>
      <PageHero
        homeLabel={common.navLinks.home}
        pageLabel={common.navLinks.services}
        breadcrumbLabel={common.labels.breadcrumb}
        title={data.pageTitle}
        description={data.pageDescription}
      />

      {/* Overview */}
      <section className="bg-white px-5 pt-[72px] pb-6 sm:px-8">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-6">
          <Eyebrow>{data.overviewLabel}</Eyebrow>
          <ol className="grid grid-cols-[repeat(auto-fit,minmax(min(360px,100%),1fr))] gap-x-8 border-t border-egm-line">
            {data.expertiseList.map((service, index) => (
              <li key={service.shortTitle} className="border-b border-egm-line">
                <a
                  href={`#${serviceAnchor(index)}`}
                  className="flex items-baseline gap-4 px-2 py-4 font-medium text-egm-ink transition-colors duration-200 hover:bg-egm-mist"
                >
                  <span className={`font-mono text-[13px] ${accentFor(index).text}`}>
                    {formatIndex(index)}
                  </span>
                  {service.shortTitle}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white px-5 pt-16 pb-20 sm:px-8 md:pb-28">
        <div className="mx-auto flex max-w-[1240px] flex-col [&>article:last-child]:border-b">
          {data.expertiseList.map((service, index) => (
            <ServiceArticle
              key={service.expertiseTitle}
              service={service}
              index={index}
              featuredLabel={data.featuredLabel}
              featuredLinkLabel={data.featuredLinkLabel}
            />
          ))}
        </div>
      </section>

      <CtaBand title={data.ctaTitle} buttonLabel={common.labels.contactCta} />
    </>
  );
}
