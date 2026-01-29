"use client";

import { useEffect, useRef, useState } from "react";

export default function SloganAnimation({ egmSlogan }: { egmSlogan: string[] }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative flex flex-col md:grid md:grid-cols-2 pt-12 md:pt-20 pb-8 gap-6 md:gap-0 items-center max-w-6xl mx-auto overflow-hidden px-4 md:px-8"
    >
      <div className="relative w-full text-center md:text-right md:border-r-4 md:border-[#1f4f83] md:pr-8 pb-6 md:pb-0 border-b-4 md:border-b-0 border-[#1f4f83]">
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-bold text-[#1f4f83] ${
            isVisible ? "animate-slide-from-border-right" : "opacity-0"
          }`}
        >
          {egmSlogan[0]}
        </h2>
      </div>
      <div className="relative w-full text-center md:text-left md:pl-8">
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 ${
            isVisible ? "animate-slide-from-border-left" : "opacity-0"
          }`}
        >
          {egmSlogan[1]}
        </h2>
      </div>
    </div>
  );
}
