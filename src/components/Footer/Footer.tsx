import Image from "next/image";
import { Link } from "@/i18n/routing";
import fetchCommonData from "@/lib/data/common-data";
import fetchFooterData from "./footer-data";

const linkStyles = "text-egm-frost transition-colors duration-200 hover:text-white";

export async function Footer({ locale }: { locale: string }) {
  const [data, { navLinks, egmImages }] = await Promise.all([
    fetchFooterData(locale),
    fetchCommonData(locale),
  ]);

  const pageLinks = [
    { href: "/kompetenzen", name: navLinks.expertise },
    { href: "/leistungen", name: navLinks.services },
    { href: "/team", name: navLinks.team },
    { href: "/kontakt", name: navLinks.contact },
  ] as const;

  return (
    <footer className="bg-egm-ink px-5 pt-16 pb-10 text-egm-frost sm:px-8 justify-center ">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-5">
        <div className="flex flex-col gap-6 md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-10">
          <div className="flex max-w-[520px] items-center gap-4 md:gap-[18px]">
            <Image
              src={egmImages.logo.image}
              alt={egmImages.logo.alt}
              width={64}
              height={64}
              className="size-12 flex-none md:size-16"
            />
            {/* Forced line break only where there is room for it */}
            <p className="text-[15px] leading-[1.55] text-white md:whitespace-pre-line">
              {data.companyName}
            </p>
          </div>

          {/* Mobile: links move below both logos (order-last); desktop keeps logo · links · ZT */}
          <nav className="order-last grid grid-cols-2 gap-x-6 gap-y-3 border-t border-white/15 pt-6 text-[15px] text-center md:order-none md:flex md:flex-wrap md:gap-7 md:border-0 md:pt-0">
            {pageLinks.map((link) => (
              <Link key={link.href} locale={locale} href={link.href} className={linkStyles}>
                {link.name}
              </Link>
            ))}
          </nav>

          <a href={data.ztMemberLink} target="_blank" rel="noopener noreferrer" className="-ml-3 self-start md:ml-0 md:self-auto">
            <Image
              src={egmImages.zt.image}
              alt={egmImages.zt.alt}
              width={110}
              height={60}
              className="h-auto w-[88px] md:w-[110px]"
            />
          </a>
        </div>

        {/* Mobile: legal links first, copyright as the last line */}
        <div className="flex flex-col-reverse gap-4 border-t border-white/15 pt-6 text-sm md:flex-row md:flex-wrap md:justify-between md:gap-x-7">
          <span>
            © {new Date().getFullYear()} {data.copyright}
          </span>
          <div className="flex gap-7">
            <Link locale={locale} href="/impressum" className={linkStyles}>
              {data.imprint}
            </Link>
            <Link locale={locale} href="/datenschutz" className={linkStyles}>
              {data.privacyPolicy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
