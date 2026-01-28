interface ExpertiseHighlightSectionProps {
  text: string;
}

export default function ExpertiseHighlightSection({
  text,
}: ExpertiseHighlightSectionProps) {
  // Split text by bold markers to highlight key words
  const renderHighlightedText = (text: string) => {
    const parts = text.split(/(Sachverständigengutachten|Rechtsanwälten|Versicherungen)/g);
    
    return parts.map((part, index) => {
      if (['Sachverständigengutachten', 'Rechtsanwälten', 'Versicherungen'].includes(part)) {
        return <span key={index} className="font-bold">{part}</span>;
      }
      return part;
    });
  };

  return (
    <div className="relative my-20 bg-gradient-to-r from-[#1f4f83d0] to-[#1f4f83] py-12 -mx-20">
      <div className="max-w-4xl mx-auto px-8">
        <p className="text-white text-center leading-relaxed md:text-xl">
          {renderHighlightedText(text)}
        </p>
      </div>
    </div>
  );
}
