import { motion } from "motion/react";
import Image from "next/image";

interface PageImageHeaderProps {
  imageSrc: string;
  title: string;
  altText: string;
}

export default function PageImageHeader({ imageSrc, title, altText }: PageImageHeaderProps) {
  return (
    <div className="relative min-h-screen w-full">
 
        {/* Background Image */}
        <Image
          src={imageSrc}
          alt={altText}
          fill
          className="object-cover"
          priority
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30 z-[1]" />

        {/* Content Layer */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center gap-8 z-10 px-4"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl lg:text-6xl font-bold rounded-sm bg-white/80 lg:p-10 p-6  text-black text-center">
            {title}
          </h1>
        </motion.div>
    
    </div>
  );
}