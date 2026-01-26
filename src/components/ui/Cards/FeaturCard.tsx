import React from "react";

interface FeatureCardProps {
  index?: number;
  icon: React.ReactNode;
  title: string;
  description?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  index = 0,
}: FeatureCardProps) {
  return (
    <div
      className="
        group relative flex flex-col items-center text-center
        h-full w-full
        p-8
        bg-white
        rounded-2xl
        shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
        border border-gray-100
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]
        overflow-hidden
      "
    >
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon Container */}
      <div className="
        mb-6 p-4
        rounded-full
        bg-primary/5 text-primary
        group-hover:bg-primary group-hover:text-white
        transition-all duration-300
        shadow-sm
      ">
        <div className="text-3xl flex items-center justify-center w-8 h-8">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 z-10">
        <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        {description && (
          <p className="text-gray-500 leading-relaxed text-sm font-medium">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
