import Section from './Section';

const SocialProof = () => {
    const logos = [
        "Vogue", "Allure", "Elle", "Vanity Fair", "Harper's Bazaar"
    ];

    return (
        <Section className="py-10 border-b border-gray-50" noPadding>
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-text-light mb-6">As Seen In</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                {logos.map((logo) => (
                    <span key={logo} className="text-2xl font-serif italic font-bold text-text-muted">{logo}</span>
                ))}
            </div>
        </Section>
    );
};

export default SocialProof;
