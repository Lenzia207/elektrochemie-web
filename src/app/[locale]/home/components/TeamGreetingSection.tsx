interface TeamGreetingSectionProps {
  welcomeMessage: string;
  teamSignature: string;
}

export default function TeamGreetingSection({
  welcomeMessage,
  teamSignature,
}: TeamGreetingSectionProps) {
  return (
    <div className="text-center py-10 max-w-3xl mx-auto">
      <p className="text-xl md:text-2xl text-gray-700 mb-6">
        {welcomeMessage}
      </p>
      <div className="licorice-regular text-3xl md:text-4xl text-[#1f4f83]">
        {teamSignature}
      </div>
    </div>
  );
}
