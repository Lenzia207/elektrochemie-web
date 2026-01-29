import React from 'react';

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
      // Highlight specific terms with the primary color and bold weight
      if (['Sachverständigengutachten', 'Rechtsanwälten', 'Versicherungen'].includes(part)) {
        return <span key={index} className="font-semibold text-[#1f4f83]">{part}</span>;
      }
      return part;
    });
  };

  return (
    <div className="w-full mt-40 mb-20">
      <div className="
        relative 
        bg-slate-50 
        border border-gray-200 
        p-8 md:p-10 
        rounded-xl
        max-w-4xl mx-auto
      ">
        {/* Flat left accent strip */}
        {/* <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#1f4f83] rounded-l-xl" /> */}
        
        <div className="flex flex-col md:flex-row gap-6 items-start">
           {/* Info Icon */}
           {/* <div className="shrink-0 text-[#1f4f83] mt-1">
             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <circle cx="12" cy="12" r="10" />
               <line x1="12" y1="16" x2="12" y2="12" />
               <line x1="12" y1="8" x2="12.01" y2="8" />
             </svg>
           </div>
            */}
           <div className="flex-1">
             <h4 className="text-[#1f4f83] font-bold text-xs uppercase tracking-widest mb-3 opacity-80">
               Gut zu wissen
             </h4>
             <p className="text-gray-700 leading-relaxed text-lg md:text-xl font-light">
               {renderHighlightedText(text)}
             </p>
           </div>
        </div>
      </div>
    </div>
  );
}