import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import ServicesPreview from '../components/ServicesPreview';
import Features from '../components/Features';
import ResultsTeaser from '../components/ResultsTeaser';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTASection from '../components/CTASection';

const Home = () => {
    return (
        <>
            <Hero />
            <SocialProof />
            <ServicesPreview />
            <Features />
            <ResultsTeaser />
            <Testimonials />
            <FAQ />
            <CTASection />
        </>
    );
};

export default Home;
