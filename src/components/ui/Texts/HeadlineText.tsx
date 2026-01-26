"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaFlask } from "react-icons/fa";

export default function HeadlineText() {
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
    <div ref={textRef} className="relative text-center p-20">
      <div className="relative z-10 max-w-5xl mx-auto">
        <h1 className="  mb-6">
          <span className="block mb-2">Willkommen im Institut für</span>
        </h1>
        <div className="flex items-center justify-center gap-4 mt-6">
          <div
            className={`h-1 w-20 bg-[#1f4f83] ${
              isVisible ? "animate-border-left" : "opacity-0"
            }`}
          ></div>
          <FaFlask className="text-[#1f4f83] text-3xl" />
          <div
            className={`h-1 w-20 bg-[#1f4f83] ${
              isVisible ? "animate-border-right" : "opacity-0"
            }`}
          ></div>
        </div>
        <div
          className={`inline-block border-2 border-[#1f4f83] ${
            isVisible ? "animate-slide-up" : "opacity-0"
          } rounded-full px-8 py-4 mt-4`}
        >
          <p className="text-lg md:text-xl font-medium text-gray-700">
            Elektrochemie • Galvanotechnik • Materialchemie
          </p>
        </div>
      </div>
    </div>
  );
}
