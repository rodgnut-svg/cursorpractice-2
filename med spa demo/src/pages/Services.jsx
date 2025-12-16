import Section from '../components/Section';
import Card from '../components/Card';
import CTASection from '../components/CTASection';
import { Syringe, Zap, Droplets, Sparkles, Activity, Sun } from 'lucide-react';

const Services = () => {
    const categories = [
        {
            title: "Injectables",
            items: [
                { name: "Botox & Dysport", desc: "Reduce wrinkles and fine lines.", price: "$12/unit" },
                { name: "Dermal Fillers", desc: "Restore volume and contour.", price: "From $650" },
                { name: "Kybella", desc: "Dissolve submental fat.", price: "From $600" }
            ],
            icon: <Syringe size={32} />
        },
        {
            title: "Laser & Light",
            items: [
                { name: "Laser Hair Removal", desc: "Permanent hair reduction.", price: "Consultation" },
                { name: "IPL Photofacial", desc: "Treat sun damage and redness.", price: "$350" },
                { name: "Laser Resurfacing", desc: "Improve skin texture.", price: "$800" }
            ],
            icon: <Zap size={32} />
        },
        {
            title: "Facials & Peels",
            items: [
                { name: "Hydrafacial", desc: "Cleanse, extract, verify.", price: "$199" },
                { name: "Chemical Peels", desc: "Exfoliate and renew.", price: "From $150" },
                { name: "Microneedling", desc: "Stimulate collagen production.", price: "$350" }
            ],
            icon: <Sparkles size={32} />
        },
        {
            title: "Body Contouring",
            items: [
                { name: "CoolSculpting", desc: "Freeze stubborn fat.", price: "Consultation" },
                { name: "Emsculpt", desc: "Build muscle and tone.", price: "Consultation" },
                { name: "Skin Tightening", desc: "Firm loose skin.", price: "From $400" }
            ],
            icon: <Activity size={32} />
        }
    ];

    return (
        <>
            <div className="pt-32 pb-20 bg-secondary-light/30">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-6xl font-semibold mb-6">Our Treatments</h1>
                    <p className="text-lg text-text-muted max-w-2xl mx-auto">
                        Comprehensive aesthetic solutions tailored to your unique needs.
                        We use only premium, FDA-approved products.
                    </p>
                </div>
            </div>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {categories.map((cat, idx) => (
                        <div key={idx} className="space-y-6">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    {cat.icon}
                                </div>
                                <h2 className="text-2xl font-semibold">{cat.title}</h2>
                            </div>
                            <div className="space-y-4">
                                {cat.items.map((item, i) => (
                                    <Card key={i} className="flex justify-between items-center group cursor-pointer hover:border-primary/30" padding="p-5">
                                        <div>
                                            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{item.name}</h3>
                                            <p className="text-sm text-text-muted">{item.desc}</p>
                                        </div>
                                        <div className="text-sm font-medium text-text-light whitespace-nowrap pl-4">
                                            {item.price}
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            <CTASection />
        </>
    );
};

export default Services;
