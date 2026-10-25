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
    <footer className="bg-egm-ink px-5 pt-16 pb-10 text-egm-frost sm:px-8">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-10">
        <div className="flex flex-wrap items-start justify-between gap-10">
          <div className="flex max-w-[520px] items-center gap-[18px]">
            <Image
              src={egmImages.logo.image}
              alt={egmImages.logo.alt}
              width={64}
              height={64}
              className="size-16 flex-none"
            />
            <p className="whitespace-pre-line text-[15px] leading-[1.55] text-white">
              {data.companyName}
            </p>
          </div>

          <nav className="flex flex-wrap gap-7 text-[15px]">
            {pageLinks.map((link) => (
              <Link key={link.href} locale={locale} href={link.href} className={linkStyles}>
                {link.name}
              </Link>
            ))}
          </nav>

          <a href={data.ztMemberLink} target="_blank" rel="noopener noreferrer">
            <Image
              src={egmImages.zt.image}
              alt={egmImages.zt.alt}
              width={110}
              height={60}
              className="h-auto w-[110px]"
            />
          </a>
        </div>

        <div className="flex flex-wrap justify-between gap-x-7 gap-y-4 border-t border-white/15 pt-6 text-sm">
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
