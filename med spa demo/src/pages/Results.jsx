import Section from '../components/Section';
import CTASection from '../components/CTASection';
import Testimonials from '../components/Testimonials';

const Results = () => {
    const gallery = [
        { title: "Lip Filler", before: "https://images.unsplash.com/photo-1596483569429-106598c2ca8d?auto=format&fit=crop&q=80&w=500", after: "https://images.unsplash.com/photo-1596483679883-7c98c1995ba0?auto=format&fit=crop&q=80&w=500" },
        { title: "Botox - Forehead", before: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=500", after: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=500" }, // Using placeholders
        { title: "Non-Surgical Rhinoplasty", before: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=500", after: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=500" },
        { title: "Cheek Filler", before: "https://images.unsplash.com/photo-1588647570417-64094e9efdc4?auto=format&fit=crop&q=80&w=500", after: "https://images.unsplash.com/photo-1588647570417-64094e9efdc4?auto=format&fit=crop&q=80&w=500" }
    ];

    return (
        <>
            <Section className="pt-32 pb-10">
                <div className="text-center max-w-2xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-semibold mb-6">Real Results</h1>
                    <p className="text-text-muted text-lg">
                        See the transformations our clients love. We prioritize natural-looking balanced results.
                    </p>
                </div>
            </Section>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {gallery.map((item, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                            <h3 className="text-xl font-semibold mb-4 text-center">{item.title}</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="relative">
                                    <img src={item.before} alt="Before" className="w-full h-64 object-cover rounded-xl" />
                                    <span className="absolute bottom-2 left-2 bg-white/80 px-2 py-1 text-xs font-bold rounded">Before</span>
                                </div>
                                <div className="relative">
                                    <img src={item.after} alt="After" className="w-full h-64 object-cover rounded-xl" />
                                    <span className="absolute bottom-2 left-2 bg-primary text-white px-2 py-1 text-xs font-bold rounded">After</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            <Testimonials />
            <CTASection />
        </>
    );
};

export default Results;
