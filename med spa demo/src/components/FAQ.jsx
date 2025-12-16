import { useState } from 'react';
import Section from './Section';
import AccordionItem from './AccordionItem';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "How do I know which treatment is right for me?",
            answer: "We offer a complimentary 30-minute consultation where our medical experts analyze your skin and discuss your goals to recommend a personalized treatment plan."
        },
        {
            question: "Is there any downtime after Botox or fillers?",
            answer: "Botox typically has no downtime. Fillers may cause minor swelling or bruising for 24-48 hours. We provide detailed aftercare instructions to minimize any social downtime."
        },
        {
            question: "Are your laser treatments safe for all skin types?",
            answer: "Yes, we use the latest multi-wavelength laser technology that can be safely adjusted for all skin tones, including darker complexions."
        },
        {
            question: "How often should I get a Hydrafacial?",
            answer: "For optimal results, we recommend a Hydrafacial every 4-6 weeks to maintain skin health and glow."
        }
    ];

    return (
        <Section className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">Common Questions</h2>
                <p className="text-text-muted">Everything you need to know before your visit.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-gray-100">
                {faqs.map((faq, idx) => (
                    <AccordionItem
                        key={idx}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === idx}
                        onClick={() => setOpenIndex(idx === openIndex ? -1 : idx)}
                    />
                ))}
            </div>
        </Section>
    );
};

export default FAQ;
