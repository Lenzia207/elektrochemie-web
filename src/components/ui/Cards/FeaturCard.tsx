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
  const variants = [{ bgCard: "bg-[#F3F3F3FF]", text: "text-[#383838FF]" }];

  const { bgCard, text } = variants[index % variants.length];
  return (
    <div
      className={`group relative flex flex-col justify-between gap-10 lg:px-6 lg:py-8 max-w-full ${bgCard} rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 border border-white/20 overflow-hidden backdrop-blur-sm`}
    >
      {/* Glossy top highlight */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/30 via-white/10 to-transparent rounded-2xl pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10">
        {description && (
          <p className={`${text} text-center small-opacity`}>{description}</p>
        )}
      </div>

      <div className="relative z-10 items-center">
        <h5
          className={`mb-4 justify-items-center ${text} transform transition-transform group-hover:scale-110`}
        >
          {icon}
        </h5>
        <h6 className={`mb-2 text-center ${text}`}>{title}</h6>
      </div>
    </div>
  );
}
