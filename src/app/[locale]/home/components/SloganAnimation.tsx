"use client";

import { useEffect, useRef, useState } from "react";

export default function SloganAnimation() {
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
      className="relative grid grid-cols-1 md:grid-cols-2  pt-20 pb-8 items-center max-w-6xl mx-auto overflow-hidden"
    >
      <div className="relative text-right border-r-4 border-[#1f4f83] pr-8">
        <h2
          className={`text-4xl md:text-5xl font-bold text-[#1f4f83] ${
            isVisible ? "animate-slide-from-border-right" : "opacity-0"
          }`}
        >
          Chemie ist überall
        </h2>
      </div>
      <div className="relative text-left pl-8">
        <h2
          className={`text-4xl md:text-5xl font-bold text-gray-700 ${
            isVisible ? "animate-slide-from-border-left" : "opacity-0"
          }`}
        >
          Wir leben Chemie
        </h2>
      </div>
    </div>
  );
}
