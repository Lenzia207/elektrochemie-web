import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div
      className="
        group h-full w-full
        p-6 md:p-8
        bg-white
        border border-gray-200
        flex flex-col items-start text-left
        transition-all duration-300
        rounded-xl hover:shadow-sm
        hover:border-primary/50 hover:bg-gray-50/50
      "
    >
      {/* Icon Container - Clean and Minimal */}
      <div className="
        mb-5
        text-primary/90
        group-hover:text-primary group-hover:scale-105
        transition-all duration-300 origin-left
      ">
        <div className="text-3xl md:text-4xl">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2">
        <p className="text-xl font-bold text-gray-900 tracking-tight">
          {title}
        </p>
        
        {description && (
          <p className="text-gray-600 leading-relaxed text-md text-balance">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}