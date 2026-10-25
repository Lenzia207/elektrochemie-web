import { HomeHeadline, HomeIntro } from "../data/types/home-types";

// E · G · M – one brand colour per discipline
const DISCIPLINE_COLORS = [
  { dot: "bg-egm-cyan", letter: "text-egm-teal" },
  { dot: "bg-egm-blue", letter: "text-egm-blue" },
  { dot: "bg-egm-purple", letter: "text-egm-purple" },
];

const STAT_COLORS = ["text-egm-blue", "text-egm-purple"];

interface IntroSectionProps {
  headline: HomeHeadline;
  intro: HomeIntro;
}

export default function IntroSection({ headline, intro }: IntroSectionProps) {
  return (
    <section id="intro" className="bg-white px-5 py-20 sm:px-8 md:pt-32 md:pb-[120px]">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-end gap-12 md:gap-[72px]">
        <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-7">
          <div className="flex items-center gap-3 font-mono text-[13px] uppercase tracking-[0.12em] text-egm-muted">
            <span className="flex" aria-hidden="true">
              {DISCIPLINE_COLORS.map((color, index) => (
                <span
                  key={color.dot}
                  className={`size-3 rounded-full ${color.dot} ${index > 0 ? "-ml-1" : ""}`}
                />
              ))}
            </span>
            {headline.welcomeText}
          </div>
          <h2 className="flex flex-col gap-1.5 text-[clamp(24px,7.5vw,44px)] leading-[0.98] tracking-[-0.035em] text-egm-ink md:text-[clamp(44px,7.4vw,104px)]">
            {headline.descriptionText.map((discipline, index) => {
              const color = DISCIPLINE_COLORS[index % DISCIPLINE_COLORS.length];
              return (
                <span key={discipline} className="flex items-center gap-3 md:gap-6">
                  <span
                    className={`size-[0.62em] flex-none rounded-full ${color.dot}`}
                    aria-hidden="true"
                  />
                  <span>
                    <span className={color.letter}>{discipline.charAt(0)}</span>
                    {discipline.slice(1)}
                  </span>
                </span>
              );
            })}
          </h2>
        </div>

        <div className="flex min-w-0 flex-[1_1_340px] flex-col gap-7 pb-2.5">
          <p className="text-[17px] leading-[1.6] text-egm-body md:text-[19px]">{intro.description}</p>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-egm-line bg-egm-line">
            {intro.stats.map((stat, index) => (
              <div key={stat.label} className="flex flex-col gap-1.5 bg-white px-5 py-[22px]">
                <span className={`font-display text-[40px] leading-none font-bold tracking-[-0.02em] ${STAT_COLORS[index % STAT_COLORS.length]}`}>
                  {stat.value}
                </span>
                <span className="text-sm leading-[1.4] text-egm-muted">{stat.label}</span>
              </div>
            ))}
            <div className="col-span-2 flex flex-col gap-1.5 bg-white px-5 py-[22px]">
              <span className="font-display text-[22px] leading-tight font-semibold text-egm-ink">
                {intro.certification.title}
              </span>
              <span className="text-sm leading-[1.4] text-egm-muted">{intro.certification.subtitle}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
