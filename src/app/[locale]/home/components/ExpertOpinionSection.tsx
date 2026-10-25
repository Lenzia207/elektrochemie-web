import Image from "next/image";
import ArrowLink from "@/components/ui/Buttons/ArrowLink";
import Eyebrow from "@/components/ui/Texts/Eyebrow";
import { ExpertOpinion } from "../data/types/home-types";

export default function ExpertOpinionSection({ data }: { data: ExpertOpinion }) {
  return (
    <section className="bg-egm-mist px-5 py-20 sm:px-8 md:py-[120px]">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center gap-16">
        <div className="relative aspect-[4/3] min-w-0 flex-[1_1_440px] overflow-hidden rounded-3xl bg-egm-line">
          <Image
            src={data.image}
            alt={data.imageAlt}
            fill
            sizes="(min-width: 1240px) 590px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex min-w-0 flex-[1_1_440px] flex-col gap-[26px]">
          <Eyebrow>{data.eyebrow}</Eyebrow>
          <h2 className="text-[clamp(32px,3.8vw,52px)] leading-[1.08] tracking-[-0.03em] text-egm-ink">
            {data.title}
          </h2>
          <p className="text-lg leading-[1.65] text-egm-body">{data.description}</p>
          <ul className="flex flex-wrap gap-2.5">
            {data.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-egm-line bg-white px-4 py-[9px] text-sm font-medium text-egm-blue"
              >
                {tag}
              </li>
            ))}
          </ul>
          {data.linkLabel ? (
            <ArrowLink href="/kontakt" variant="solid" size="lg" className="mt-2 self-start">
              {data.linkLabel}
            </ArrowLink>
          ) : null}
        </div>
      </div>
    </section>
  );
}
