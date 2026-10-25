import { ReactNode } from "react";
import { IconMail, IconPhone } from "@tabler/icons-react";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/ui/Texts/Eyebrow";
import { CommonData } from "@/lib/data/common-data";
import { cn } from "@/lib/utils/utils";
import { ContactPageData } from "./data/types/contact-types";

interface KontaktScreenProps {
    data: ContactPageData;
    common: CommonData;
}

export default async function KontaktScreen({ data, common }: KontaktScreenProps) {
    const [phoneLabel, phone] = data.telephone;
    const [emailLabel, email] = data.email;
    // const [addressLabel, address] = data.address;

    return (
        <>
            <PageHero
                homeLabel={common.navLinks.home}
                pageLabel={common.navLinks.contact}
                breadcrumbLabel={common.labels.breadcrumb}
                title={data.pageTitle}
                description={data.pageDescription}
                className="min-h-[460px]"
                contentClassName="md:pb-20"
            />

            <section className="bg-white px-5 py-20 sm:px-8 md:pt-24 md:pb-[120px]">
                <div className="mx-auto flex max-w-[1240px] flex-wrap gap-14">
                    <div className="flex min-w-0 flex-[1_1_360px] flex-col gap-4">
                        <div className="mb-3 flex flex-col gap-2.5">
                            <Eyebrow>{data.companyName[0]}</Eyebrow>
                            <h2 className="whitespace-pre-line text-[26px] leading-tight tracking-[-0.015em] text-egm-ink">
                                {data.companyName[1]}
                            </h2>
                        </div>

                        <ContactCard
                            href={`tel:${phone.replace(/\s/g, "")}`}
                            label={phoneLabel}
                            icon={<IconPhone size={22} stroke={1.8} />}
                            iconClassName="bg-egm-cyan text-egm-ink"
                        >
                            {phone}
                        </ContactCard>
                        <ContactCard
                            href={`mailto:${email}`}
                            label={emailLabel}
                            icon={<IconMail size={22} stroke={1.8} />}
                            iconClassName="bg-egm-blue text-white"
                        >
                            {email}
                        </ContactCard>
                        {/* <ContactCard
                            label={addressLabel}
                            icon={<IconMapPin size={22} stroke={1.8} />}
                            iconClassName="bg-egm-purple text-white"
                        >
                            <span className="text-[19px] leading-[1.35] whitespace-pre-line">{address}</span>
                        </ContactCard> */}
                    </div>

                    {/* <ContactForm data={data.form} recipient={email} /> */}
                </div>
            </section>
        </>
    );
}

interface ContactCardProps {
    href?: string;
    label: string;
    icon: ReactNode;
    iconClassName: string;
    children: ReactNode;
}

function ContactCard({ href, label, icon, iconClassName, children }: ContactCardProps) {
    const content = (
        <>
            <span
                className={cn("flex size-[52px] flex-none items-center justify-center rounded-full", iconClassName)}
                aria-hidden="true"
            >
                {icon}
            </span>
            <span className="flex min-w-0 flex-col gap-0.5">
                <span className="font-mono text-xs uppercase tracking-[0.08em] text-egm-muted">{label}</span>
                <span className="font-display text-[21px] font-semibold break-words">{children}</span>
            </span>
        </>
    );
    const cardStyles = "flex items-center gap-[18px] rounded-[18px] border border-egm-line bg-white px-6 py-[22px] text-egm-ink";

    return href ? (
        <a
            href={href}
            className={cn(cardStyles, "transition duration-200 hover:border-egm-line-strong hover:shadow-[0_14px_32px_-18px_rgba(14,35,64,0.25)]")}
        >
            {content}
        </a>
    ) : (
        <div className={cardStyles}>{content}</div>
    );
}
