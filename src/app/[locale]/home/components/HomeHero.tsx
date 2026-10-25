import Image from "next/image";
import { IconArrowDown } from "@tabler/icons-react";
import HeroBackground from "@/components/HeroBackground";
import { EgmImageData } from "@/lib/data/common-data";

interface HomeHeroProps {
  title: string;
  ztLogo: EgmImageData;
  scrollDownLabel: string;
}

export default function HomeHero({ title, ztLogo, scrollDownLabel }: HomeHeroProps) {
  return (
    <header className="relative flex min-h-[100svh] flex-col overflow-hidden md:min-h-[860px]">
      <HeroBackground />
      <div className="absolute inset-0 bg-egm-ink/12" aria-hidden="true" />

      <div className="relative z-[2] flex flex-1 flex-col items-center justify-center gap-14 px-6 pt-36 pb-[120px] text-center">
        <Image
          src={ztLogo.image}
          alt={ztLogo.alt}
          width={220}
          height={119}
          className="h-auto w-[180px] md:w-[220px]"
          priority
        />
        <h1 className="max-w-[980px] whitespace-pre-line font-sans text-[clamp(30px,4.2vw,56px)] leading-[1.25] tracking-[-0.02em] text-white [text-shadow:0_2px_24px_rgba(14,35,64,0.25)]">
          {title}
        </h1>
      </div>

      <a
        href="#intro"
        aria-label={scrollDownLabel}
        className="absolute bottom-9 left-1/2 z-[2] flex size-12 -translate-x-1/2 items-center justify-center rounded-full border-[1.5px] border-white/70 text-white transition-colors hover:bg-white hover:text-egm-ink"
      >
        <IconArrowDown size={18} stroke={2} aria-hidden="true" />
      </a>
    </header>
  );
}
