"use client";

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const clientHeight = window.innerHeight;
      
      // Calculate scroll percentage
      const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
      
      // Show when scrolled 90% or more
      setIsVisible(scrollPercentage >= 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-8 right-8 transition-all duration-500 ease-out hidden md:block ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="group flex items-center gap-3 bg-white/90 backdrop-blur-sm hover:bg-[#1f4f83] text-[#1f4f83] hover:text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-[#1f4f83]/20"
        aria-label="Scroll to top"
      >
        <span className="text-sm font-medium">zum Anfang</span>
        <FaArrowUp className="text-lg transition-transform group-hover:-translate-y-1" />
      </button>
    </div>
  );
}
