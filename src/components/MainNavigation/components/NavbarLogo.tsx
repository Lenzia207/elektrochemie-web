import Image from "next/image";
import { SwitchLanguage } from "./LanguageSwitcher";
import { Link } from "@/i18n/routing";
import { NavigationPath } from "../types";
import useCurrentLocale from "@/hooks/use-current-locale";

interface NavbarLogoProps {
  image: string;
  url?: NavigationPath | string; // Allow navigation paths or external URLs
  showLanguageSwitcher?: boolean;
}

export const NavbarLogo = ({ image, url = "/", showLanguageSwitcher }: NavbarLogoProps) => {
  const isExternalUrl = url && (url.startsWith('http') || url.startsWith('//'));

  return (
    <div className="flex items-center">
     {showLanguageSwitcher ? <SwitchLanguage /> : null}
     {isExternalUrl ? (
       <a
         href={url}
         target="_blank"
         rel="noopener noreferrer"
         className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal"
       >
         <Image src={image} alt="logo" width={50} height={50} />
       </a>
     ) : (
       <Link
         href={url as NavigationPath}
         locale={useCurrentLocale()}
         className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal"
       >
         <Image src={image} alt="logo" width={50} height={50} />
       </Link>
     )}
    </div>
  );
};
