import { PreviewLinkCard, PreviewLinkCardTrigger, PreviewLinkCardContent, PreviewLinkCardImage, PreviewLinkCardPortal } from "@/components/animate-ui/primitives/radix/preview-link-card";

export function extractTextForLink(data: string, targetText: string, linkUrl: string) {
        
        if (data.includes(targetText)) {
            const parts = data.split(targetText);
            return (
                <>
                    {parts[0]}
                    <PreviewLinkCard href={linkUrl} openDelay={200} closeDelay={100} >
                        <PreviewLinkCardTrigger 
                            className="underline decoration-dotted decoration-[#1f4f83]/50 hover:decoration-solid hover:decoration-[#1f4f83] cursor-pointer transition-all"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {targetText}
                        </PreviewLinkCardTrigger>
                        <PreviewLinkCardPortal>
                            <PreviewLinkCardContent className="bg-white p-0 overflow-hidden">
                                <PreviewLinkCardImage className="w-full h-64 object-cover rounded-3xl" />
                            </PreviewLinkCardContent>
                        </PreviewLinkCardPortal>
                    </PreviewLinkCard>
                    {parts[1]}
                </>
            );
        }
        return data;
    };


export function normalizePathForLocaleSwitch(path = "/", locales: string[]) {
  const segments = path.split("/").filter(Boolean); // remove empty parts
  if (segments.length > 0 && locales.includes(segments[0])) {
    segments.shift(); // remove existing locale
  }
  if (segments.length === 0) return "/";
  return `/${segments.join("/")}/`; // keep trailing slash per next.config
}