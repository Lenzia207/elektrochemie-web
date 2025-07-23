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
          src={data.egmImages.zt.image}
          alt={"Bild ZT Elektrochemie"}
          width={200}
          height={250}
          className="object-cover rounded-full"
        />
        <p className="text-white text-2xl font-bold">{data?.pageSlogan}</p>
      </div>
      <BackgroundClient />
      <div className="h-96 w-full bg-amber-300">Hello</div>
    </div>
  );
}
