interface TeamGreetingSectionProps {
  welcomeMessage: string;
  teamSignature: string;
}

export default function TeamGreetingSection({
  welcomeMessage,
  teamSignature,
}: TeamGreetingSectionProps) {
  return (
    <div className="text-center lg:py-10 py-4 lg:max-w-3xl mx-auto">
      <p className="text-sm lg:text-2xl text-gray-700 mb-6">
        {welcomeMessage}
      </p>
      <div className="licorice-regular lg:text-4xl text-2xl text-[#1f4f83]">
        {teamSignature}
      </div>
    </div>
  );
}
