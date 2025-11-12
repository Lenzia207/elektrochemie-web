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
    <div className="flex flex-col items-center p-6 max-w-full bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
      {description && (
        <p className="text-gray-600 text-center">{description}</p>
      )}
    </div>
  );
}
