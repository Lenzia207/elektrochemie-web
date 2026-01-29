import { ContactPageData } from "./data/types/contact-types";

export default async function KontaktScreen({ data }: { data: ContactPageData }) {
    return (
        <div className="max-w-4xl mx-auto pt-40 px-6 py-12 pb-24">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1f4f83] mb-8">{data.pageTitle}</h1>

            <p className="text-gray-700 text-lg mb-12">
                {data.pageDescription}
            </p>

            <div className="bg-gradient-to-br from-[#1f4f83] to-[#2a6ba8] rounded-2xl shadow-xl p-8 md:p-12 text-white">
                <div className="space-y-6">
                    {/* Company Name */}
                    <div className="border-b border-white/20 pb-6">
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">{data.companyName[0]}</h2>
                        <p className="text-lg md:text-xl leading-relaxed opacity-95">
                            {data.companyName[1]}
                        </p>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-5 pt-2">
                        {/* Phone */}
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    strokeWidth={2} 
                                    stroke="currentColor" 
                                    className="w-6 h-6"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" 
                                    />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm uppercase tracking-wider opacity-75 mb-1">{data.telephone[0]}</p>
                                <a 
                                    href={`tel:${data.telephone[1].replace(/ /g, "")}`} 
                                    className="text-xl font-semibold hover:underline transition-all"
                                >
                                    {data.telephone[1]}
                                </a>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    strokeWidth={2} 
                                    stroke="currentColor" 
                                    className="w-6 h-6"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" 
                                    />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm uppercase tracking-wider opacity-75 mb-1">{data.email[0]}</p>
                                <a 
                                    href={`mailto:${data.email[1]}`} 
                                    className="text-xl font-semibold hover:underline transition-all break-all"
                                >
                                    {data.email[1]}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}