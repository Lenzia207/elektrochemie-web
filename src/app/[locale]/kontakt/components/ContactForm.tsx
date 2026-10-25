"use client";

import { FormEvent, ReactNode } from "react";
import { IconArrowRight } from "@tabler/icons-react";
import LocaleLink from "@/components/ui/LocaleLink";
import { ContactFormData } from "../data/types/contact-types";

const fieldStyles =
    "min-h-[52px] w-full rounded-xl border-[1.5px] border-egm-line bg-egm-mist px-4 py-3.5 text-base text-egm-ink focus:border-egm-blue focus:bg-white focus:outline-none";

interface ContactFormProps {
    data: ContactFormData;
    recipient: string;
}

/*
 * The site is a static export without a backend,
 * so the form opens the visitor's mail client with a prefilled message.
 */
export default function ContactForm({ data, recipient }: ContactFormProps) {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const value = (name: string) => String(form.get(name) ?? "").trim();

        const topic = value("topic");
        const subject = topic ? `${data.mailSubject}: ${topic}` : data.mailSubject;
        const body = [
            `${data.fields.name}: ${value("name")}`,
            `${data.fields.company}: ${value("company")}`,
            `${data.fields.email}: ${value("email")}`,
            `${data.fields.phone}: ${value("phone")}`,
            "",
            value("message"),
        ].join("\n");

        window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex min-w-0 flex-[1.4_1_520px] flex-col gap-5 rounded-3xl border border-egm-line bg-white p-[clamp(24px,4vw,44px)] shadow-[0_30px_60px_-40px_rgba(14,35,64,0.35)]"
        >
            <div className="mb-1 flex flex-col gap-2">
                <h2 className="text-[clamp(28px,3vw,38px)] leading-[1.1] tracking-[-0.025em] text-egm-ink">
                    {data.title}
                </h2>
                <p className="text-base leading-[1.55] text-egm-muted">{data.description}</p>
            </div>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))] gap-4">
                <Field label={data.fields.name}>
                    <input className={fieldStyles} type="text" name="name" autoComplete="name" required />
                </Field>
                <Field label={data.fields.company}>
                    <input className={fieldStyles} type="text" name="company" autoComplete="organization" />
                </Field>
                <Field label={data.fields.email}>
                    <input className={fieldStyles} type="email" name="email" autoComplete="email" required />
                </Field>
                <Field label={data.fields.phone}>
                    <input className={fieldStyles} type="tel" name="phone" autoComplete="tel" />
                </Field>
            </div>

            <Field label={data.fields.topic}>
                <select className={fieldStyles} name="topic" defaultValue="">
                    <option value="">{data.topicPlaceholder}</option>
                    {data.topics.map((topic) => (
                        <option key={topic} value={topic}>
                            {topic}
                        </option>
                    ))}
                </select>
            </Field>

            <Field label={data.fields.message}>
                <textarea className={`${fieldStyles} resize-y`} name="message" rows={6} required />
            </Field>

            <label className="flex items-start gap-3 text-sm leading-normal text-egm-body">
                <input
                    type="checkbox"
                    name="privacy"
                    required
                    className="mt-px size-5 flex-none accent-egm-blue"
                />
                <span>
                    {data.privacy.before}
                    <LocaleLink
                        href="/datenschutz"
                        target="_blank"
                        className="text-egm-blue underline underline-offset-2 hover:text-egm-ink"
                    >
                        {data.privacy.link}
                    </LocaleLink>
                    {data.privacy.after}
                </span>
            </label>

            <button
                type="submit"
                className="inline-flex min-h-[54px] cursor-pointer items-center gap-2.5 self-start rounded-full bg-egm-blue px-[30px] py-3.5 text-base font-medium text-white transition-colors duration-200 hover:bg-egm-ink"
            >
                {data.submit}
                <IconArrowRight size={16} stroke={2} aria-hidden="true" />
            </button>
        </form>
    );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
    return (
        <label className="flex flex-col gap-2 text-sm font-medium text-egm-ink">
            {label}
            {children}
        </label>
    );
}
