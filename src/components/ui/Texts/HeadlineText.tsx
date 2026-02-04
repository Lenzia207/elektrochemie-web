"use client";

import { sep } from "path";
import React, { useEffect, useRef, useState } from "react";
import { FaFlask } from "react-icons/fa";

export default function HeadlineText({ welcomeText, descriptionText }: { welcomeText: string; descriptionText: string[] }) {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

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

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={textRef} className="relative text-center lg:p-20 p-10 md:pb-20">
      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="font-bold mb-6">
          <span className="block  mb-2">{welcomeText}</span>
        </h2>
        <div className="flex items-center justify-center gap-4 mt-6">
          <div
            className={`h-1 w-20 bg-[#1f4f83] ${isVisible ? "animate-border-left" : "opacity-0"
              }`}
          ></div>
          <FaFlask className="text-[#1f4f83] text-3xl" />
          <div
            className={`h-1 w-20 bg-[#1f4f83] ${isVisible ? "animate-border-right" : "opacity-0"
              }`}
          ></div>
        </div>
        <div
          className={`inline-block  ${isVisible ? "animate-slide-up" : "opacity-0"
            }  px-8 py-4 mt-4`}
        >
          <h3 className="font-bold">
            <div className="md:block hidden">
              {descriptionText.map(s => s.trim()).join(" - ")}
            </div>
            <div className="md:hidden flex flex-col gap-2">
              {descriptionText.map((s, i) => <div key={i}>{s.trim()}</div>)}
            </div>
          </h3>
        </div>
      </div>
    </div>
  );
}
