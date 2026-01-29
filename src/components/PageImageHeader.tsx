import Image from "next/image";

interface PageImageHeaderProps {
    imageSrc: string;
    title: string;
    description?: string;
    altText: string;
}

export default function PageImageHeader({ imageSrc, title, description, altText }: PageImageHeaderProps) {
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
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 z-10 px-4">
                  <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-6">
                    {title}
                  </h1>
                  <p className="text-xl text-white text-center max-w-3xl">
                    {description}
                  </p>
                </div>
              </div>
    );
}