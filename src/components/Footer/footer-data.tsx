
import { cache } from "react";

export interface FooterData {
    imprint: string;
    privacyPolicy: string;
    companyName: string;
    zivilTechniker: string;
}


export const fetchFooterData = cache(async function (
    locale: string
): Promise<FooterData> {
    const [footerData] = await Promise.all([
        import(`../../..//messages/${locale}/footer.json`),
    ]);

    return {
        ...footerData.default.Footer,
    };
});

export default fetchFooterData;