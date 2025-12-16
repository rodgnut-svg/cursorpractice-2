import Section from './Section';
import Card from './Card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
    const reviews = [
        {
            name: "Sarah Jenkins",
            treatment: "Hydrafacial",
            text: "I've never seen my skin glow like this! The team was so knowledgeable and the space is absolutely stunning. My new go-to spot.",
            rating: 5
        },
        {
            name: "Michelle Ross",
            treatment: "Botox",
            text: "The most natural results I've ever had. Dr. Emily really listened to what I wanted. I look rested, not frozen.",
            rating: 5
        },
        {
            name: "Jessica Lee",
            treatment: "Laser Hair Removal",
            text: "Painless and fast. I saw results after just one session. Highly recommend the membership plan!",
            rating: 5
        }
    ];

    return (
        <Section>
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">Loved by Locals</h2>
                <div className="flex items-center justify-center gap-2 text-primary mb-2">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} fill="currentColor" size={20} />)}
                </div>
                <p className="text-text-muted">5-Star Rated on Google</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {reviews.map((review, idx) => (
                    <Card key={idx} className="relative pt-12">
                        <div className="absolute top-6 right-6 text-primary/10">
                            <Quote size={40} fill="currentColor" />
                        </div>
                        <div className="flex gap-1 text-accent mb-4">
                            {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                        </div>
                        <p className="text-text-main leading-relaxed mb-6 italic">"{review.text}"</p>
                        <div>
                            <p className="font-semibold">{review.name}</p>
                            <p className="text-xs text-text-muted uppercase tracking-wide">{review.treatment}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
};

export default Testimonials;
