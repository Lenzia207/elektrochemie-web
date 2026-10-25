import { ReactNode } from "react";
import { IconMail, IconPhone } from "@tabler/icons-react";
import Eyebrow from "@/components/ui/Texts/Eyebrow";
import { ContactInfo } from "../../kontakt/data/types/contact-types";
import { SectionHeading } from "../data/types/home-types";

interface ContactBandProps {
  heading: SectionHeading;
  contact: ContactInfo;
}

export default function ContactBand({ heading, contact }: ContactBandProps) {
  const [phoneLabel, phone] = contact.telephone;
  const [emailLabel, email] = contact.email;

  return (
    <section className="bg-egm-blue px-5 py-20 text-white sm:px-8 md:py-[120px]">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-end justify-between gap-14">
        <div className="flex min-w-0 flex-[999_1_520px] flex-col gap-[22px]">
          <Eyebrow className="text-egm-frost">{heading.eyebrow}</Eyebrow>
          <h2 className="text-[clamp(36px,5vw,72px)] leading-[1.02] tracking-[-0.035em]">
            {heading.title}
          </h2>
          <p className="max-w-[560px] text-lg leading-[1.6] text-egm-frost-light">
            {contact.pageDescription}
          </p>
        </div>

        <div className="flex min-w-0 flex-[1_1_360px] flex-col gap-3.5">
          <ContactCard href={`tel:${phone.replace(/\s/g, "")}`} label={phoneLabel} value={phone} icon={<IconPhone size={22} stroke={1.8} />} />
          <ContactCard href={`mailto:${email}`} label={emailLabel} value={email} icon={<IconMail size={22} stroke={1.8} />} />
        </div>
      </div>
    </section>
  );
}

interface ContactCardProps {
  href: string;
  label: string;
  value: string;
  icon: ReactNode;
}

function ContactCard({ href, label, value, icon }: ContactCardProps) {
  return (
    <a
      href={href}
      className="flex min-h-[72px] items-center gap-4 rounded-[18px] border-[1.5px] border-white/40 px-6 py-[18px] transition-colors duration-200 hover:bg-white hover:text-egm-ink"
    >
      <span aria-hidden="true">{icon}</span>
      <span className="flex min-w-0 flex-col gap-0.5">
        <span className="font-mono text-xs uppercase tracking-[0.08em] opacity-80">{label}</span>
        <span className="font-display text-[22px] font-semibold break-words">{value}</span>
      </span>
    </a>
  );
}
