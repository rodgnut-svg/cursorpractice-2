import Section from './Section';
import Card from './Card';
import { ArrowRight, Sparkles, Syringe, Zap, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPreview = () => {
    const services = [
        {
            title: "Botox & Dysport",
            desc: "Smooth fine lines and restore a youthful, refreshed look with our expert injectables.",
            icon: <Syringe size={24} className="text-primary" />,
        },
        {
            title: "Laser Hair Removal",
            desc: "Experience smooth, hair-free skin with our advanced, pain-free laser technology.",
            icon: <Zap size={24} className="text-primary" />,
        },
        {
            title: "Hydrafacial",
            desc: "Deeply cleanse, extract, and hydrate for an instant glow with zero downtime.",
            icon: <Droplets size={24} className="text-primary" />,
        },
        {
            title: "Skin Rejuvenation",
            desc: "Target tone, texture, and elasticity with our range of medical-grade peels and microneedling.",
            icon: <Sparkles size={24} className="text-primary" />,
        },
    ];

    return (
        <Section bg="soft">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-text-main">Curated Treatments</h2>
                <p className="text-text-muted">Discover our most popular services designed to enhance your natural beauty.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, idx) => (
                    <Card key={idx} className="flex flex-col h-full group">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                        <p className="text-text-muted text-sm mb-6 flex-grow">{service.desc}</p>
                        <Link to="/services" className="text-primary font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                            Learn more <ArrowRight size={16} />
                        </Link>
                    </Card>
                ))}
            </div>

            <div className="text-center mt-12">
                <Link to="/services" className="btn btn-secondary">View All Services</Link>
            </div>
        </Section>
    );
};

export default ServicesPreview;
