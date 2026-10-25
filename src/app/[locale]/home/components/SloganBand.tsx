export default function SloganBand({ slogan }: { slogan: string[] }) {
  return (
    <section className="relative overflow-hidden bg-egm-ink px-5 py-24 text-white sm:px-8 md:py-[140px]">
      {/* Three overlapping rings echoing the EGM logo – half size in the bottom-right corner on mobile */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -bottom-10 h-[600px] w-[640px] origin-bottom-right scale-50 md:top-1/2 md:-right-[120px] md:bottom-auto md:origin-center md:-translate-y-1/2 md:scale-100"
      >
        <div className="absolute top-0 left-40 size-[340px] rounded-full border-2 border-egm-cyan opacity-55" />
        <div className="absolute top-[250px] left-0 size-[340px] rounded-full border-2 border-egm-ring-blue opacity-60" />
        <div className="absolute top-[250px] left-[300px] size-[340px] rounded-full border-2 border-egm-ring-purple opacity-60" />
      </div>
      <div className="relative mx-auto flex max-w-[1240px] flex-col gap-2 font-display text-[clamp(44px,7vw,108px)] leading-none font-bold tracking-[-0.035em]">
        {slogan.map((line, index) => (
          <p key={line} className={index > 0 ? "text-egm-cyan" : undefined}>
            {line}
          </p>
        ))}
      </div>
    </section>
  );
}
