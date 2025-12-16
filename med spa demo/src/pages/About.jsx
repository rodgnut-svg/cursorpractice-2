import Section from '../components/Section';
import CTASection from '../components/CTASection';

const About = () => {
    return (
        <>
            <Section className="pt-32 md:pt-48">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <h1 className="text-4xl md:text-6xl font-semibold mb-8">Redefining <br />Med Spa Luxury</h1>
                        <div className="space-y-6 text-lg text-text-muted leading-relaxed">
                            <p>
                                At Aster Med Spa, we believe that self-care is not a luxury—it's a necessity.
                                Founded in 2024 by Dr. Emily Carter, our clinic bridges the gap between clinical
                                medicine and holistic wellness.
                            </p>
                            <p>
                                Our mission is simple: to help you look and feel your absolute best through
                                personalized, evidence-based aesthetic treatments delivered in a serene,
                                judgement-free environment.
                            </p>
                            <p>
                                We operate on the principles of integrity, safety, and natural results.
                                You will never look "overdone"—just the best version of yourself.
                            </p>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 relative">
                        <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl h-[500px] w-full">
                            <img src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3" alt="Clinic Lobby" className="w-full h-full object-cover" />
                        </div>
                        {/* Decorative blob */}
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10" />
                    </div>
                </div>
            </Section>

            {/* Team Section */}
            <Section bg="soft">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-semibold mb-4">Meet Our Experts</h2>
                    <p className="text-text-muted">Highly trained professionals dedicated to your care.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { name: "Dr. Emily Carter", role: "Medical Director", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1000" },
                        { name: "Sarah James, PA-C", role: "Aesthetic Injector", img: "https://images.unsplash.com/photo-1594824476969-23358380e22c?auto=format&fit=crop&q=80&w=1000" },
                        { name: "Jessica Chen", role: "Licensed Esthetician", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000" }
                    ].map((member, idx) => (
                        <div key={idx} className="group">
                            <div className="overflow-hidden rounded-2xl mb-6 shadow-sm">
                                <img src={member.img} alt={member.name} className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-500 hover:scale-105" />
                            </div>
                            <h3 className="text-xl font-semibold text-center">{member.name}</h3>
                            <p className="text-center text-primary font-medium">{member.role}</p>
                        </div>
                    ))}
                </div>
            </Section>

            <CTASection />
        </>
    );
};

export default About;
