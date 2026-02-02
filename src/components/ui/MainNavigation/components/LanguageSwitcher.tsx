"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import Image from "next/image";
import { useParams } from "next/navigation";

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = params.locale as string;

  const handleLanguageSwitch = () => {
    const newLocale = currentLocale === "de" ? "en" : "de";
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <button
      onClick={handleLanguageSwitch}
      className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors duration-200"
      aria-label={`Switch to ${currentLocale === "de" ? "English" : "German"}`}
    >
      {currentLocale === "de" ? (
        // UK flag for switching to English
        <svg
          viewBox="0 0 60 30"
          className="w-8 h-6 rounded"
          xmlns="http://www.w3.org/2000/svg"
        >
          <clipPath id="s">
            <path d="M0,0 v30 h60 v-30 z" />
          </clipPath>
          <clipPath id="t">
            <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
          </clipPath>
          <g clipPath="url(#s)">
            <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
            <path
              d="M0,0 L60,30 M60,0 L0,30"
              clipPath="url(#t)"
              stroke="#C8102E"
              strokeWidth="4"
            />
            <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
            <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
          </g>
        </svg>
      ) : (
        // Austrian flag for switching to German
        <svg
          viewBox="0 0 900 600"
          className="w-8 h-6 rounded"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect fill="#ED2939" width="900" height="600" />
          <rect fill="#FFFFFF" y="200" width="900" height="200" />
        </svg>
      )}
    </button>
  );
}
