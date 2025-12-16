import Section from './Section';
import { ShieldCheck, Heart, UserCheck, Clock } from 'lucide-react';

const Features = () => {
    const features = [
        {
            title: "Medical Expertise",
            desc: "Our board-certified team ensures safe, effective treatments tailored to your unique anatomy.",
            icon: <ShieldCheck size={24} />,
        },
        {
            title: "Personalized Care",
            desc: "We listen to your goals and create a customized treatment plan just for you.",
            icon: <Heart size={24} />,
        },
        {
            title: "Premium Experience",
            desc: "From our serene environment to our attentive staff, every detail is designed for your comfort.",
            icon: <UserCheck size={24} />,
        },
        {
            title: "Proven Results",
            desc: "We use only FDA-approved products and evidence-based techniques to deliver real results.",
            icon: <Clock size={24} />,
        }
    ];

    return (
        <Section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                    <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2068&ixlib=rb-4.0.3"
                            alt="Clinic Interior"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full -z-10 blur-3xl" />
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full -z-10 blur-2xl" />
                </div>

                <div>
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6">Why Choose Aster Med Spa?</h2>
                    <p className="text-text-muted mb-8 leading-relaxed">
                        We believe in a holistic approach to aesthetics, combining the latest medical advancements with the relaxing atmosphere of a luxury spa.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                        {features.map((feature, idx) => (
                            <div key={idx} className="flex flex-col gap-3">
                                <div className="w-10 h-10 rounded-full bg-secondary-light flex items-center justify-center text-primary">
                                    {feature.icon}
                                </div>
                                <h3 className="font-semibold text-lg">{feature.title}</h3>
                                <p className="text-sm text-text-muted leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Features;
