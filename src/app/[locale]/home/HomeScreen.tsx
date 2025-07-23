import { HomePageData } from "./types/home-types";
import Image from "next/image";
import BackgroundClient from "./components/BackgroundClient";

interface HomeScreenProps {
  data: HomePageData;
}

export default async function HomeScreen({ data }: HomeScreenProps) {
  if (!data) return null;

  return (
    <div className="relative ">
      <div className="absolute flex flex-col items-center justify-center min-h-screen min-w-screen">
        <Image
          // src={"/images/zt_Logo_trans.png"}
          src="https://picsum.photos/seed/picsum/200/300"
          alt="Bild"
          width={200}
          height={250}
          className="object-cover rounded-full"
        />
        <p className="text-2xl font-bold">{data?.pageSlogan}</p>
      </div>
      <BackgroundClient />
    </div>
  );
}
