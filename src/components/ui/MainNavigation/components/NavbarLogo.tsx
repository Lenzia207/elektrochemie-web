import { SwitchLanguage } from "./LanguageSwitcher";

interface NavbarLogoProps {
  image: string;
  url?: string;
  showLanguageSwitcher?: boolean;
}
export const NavbarLogo = ({ image, url = "/", showLanguageSwitcher }: NavbarLogoProps) => {
  return (
    <div className="flex items-center">
     {showLanguageSwitcher ? <SwitchLanguage /> : null}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal"
      >
        <img src={image} alt="logo" width={50} height={50} />
      </a>
    </div>
  );
};
