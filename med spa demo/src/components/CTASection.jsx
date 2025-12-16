import Section from './Section';
import { Link } from 'react-router-dom';

const CTASection = () => {
    return (
        <Section bg="primary" className="text-center">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-white tracking-tight">
                    Ready to Reveal Your Radiance?
                </h2>
                <p className="text-white/90 text-lg mb-10 leading-relaxed">
                    Book your complimentary consultation today and let our experts create a personalized treatment plan for you.
                </p>
                <div className="flex justify-center gap-4">
                    <Link to="/contact" className="btn bg-white text-primary hover:bg-secondary-light hover:scale-105 shadow-xl">
                        Book Consultation
                    </Link>
                    <a href="tel:+13055550199" className="btn border border-white/30 text-white hover:bg-white/10">
                        (305) 555-0199
                    </a>
                </div>
            </div>
        </Section>
    );
};

export default CTASection;
