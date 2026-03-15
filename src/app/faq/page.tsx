"use client";

import { useTranslation } from "@/i18n";
import { FaqAccordion } from "@/components/ui/faq-chat-accordion";
import { WaveText } from "@/components/ui/wave-text";

export default function FAQPage() {
  const { t, locale } = useTranslation();

  // Helper component to conditionally render WaveText or plain text based on locale
  const ConditionalWave = ({ text, className = "" }: { text: string, className?: string }) => {
    if (locale === "en") {
      return <WaveText text={text} className={className} />;
    }
    return <span className={className}>{text}</span>;
  };

  const faqs = [
    {
      id: 1,
      question: t.faqPage.q1,
      answer: t.faqPage.a1,
    },
    {
      id: 2,
      question: t.faqPage.q2,
      answer: t.faqPage.a2,
    },
    {
      id: 3,
      question: t.faqPage.q3,
      answer: t.faqPage.a3,
    },
    {
      id: 4,
      question: t.faqPage.q4,
      answer: t.faqPage.a4,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-transparent pt-32 pb-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="max-w-3xl w-full mx-auto text-center mb-12">
        <span className="inline-block py-1 px-3 rounded-full bg-brand/10 text-brand text-sm font-medium mb-4">
          <ConditionalWave text={t.faqPage.tag} />
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-surface-900 mb-6">
          <ConditionalWave text={t.faqPage.title} />
        </h1>
        <p className="text-xl text-surface-600">
          <ConditionalWave text={t.faqPage.desc} />
        </p>
      </div>
      
      <div className="w-full max-w-2xl mx-auto">
        <FaqAccordion data={faqs} timestamp={t.faqPage.timestamp} />
      </div>
    </div>
  );
}
