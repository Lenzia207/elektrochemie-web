import { Link } from "@/i18n/routing";
import Image from "next/image";

interface AppLogoProps {
  readonly logoImage: string;
}

export default function AppLogo({ logoImage }: AppLogoProps) {
  const imageSizes = 150;
  return (
    <div className={"flex-shrink-0"}>
      <Link href="/">
        <Image
          src={logoImage}
          alt="Logo"
          width={imageSizes}
          height={imageSizes}
          className={"h-20 w-auto"}
        />
      </Link>
    </div>
  );
}
