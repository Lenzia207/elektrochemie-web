/** Label/value pairs, e.g. ["Telefon", "+43 699 15111555"] */
export type LabeledValue = [label: string, value: string];

export interface ContactInfo {
    pageTitle: string;
    pageDescription: string;
    companyName: string[];
    telephone: LabeledValue;
    email: LabeledValue;
    address: LabeledValue;
}

export interface ContactPageData extends ContactInfo {
    form: ContactFormData;
}

export interface ContactFormData {
    title: string;
    description: string;
    fields: {
        name: string;
        company: string;
        email: string;
        phone: string;
        topic: string;
        message: string;
    };
    topicPlaceholder: string;
    topics: string[];
    privacy: {
        before: string;
        link: string;
        after: string;
    };
    submit: string;
    mailSubject: string;
}
