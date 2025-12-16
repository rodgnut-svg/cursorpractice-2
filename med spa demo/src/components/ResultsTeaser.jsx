import Section from './Section';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResultsTeaser = () => {
    return (
        <Section bg="soft">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <span className="block text-primary font-semibold tracking-wide uppercase text-sm mb-3">Real Results</span>
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6">See the Transformation</h2>
                    <p className="text-text-muted mb-8 leading-relaxed">
                        Our gallery showcases the subtle yet impactful changes we achieve for our clients.
                        Natural-looking results are our signature.
                    </p>

                    <div className="flex flex-col gap-4">
                        <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                            <div>
                                <h4 className="font-semibold text-lg">Botox & Dysport</h4>
                                <p className="text-sm text-text-muted">Smoother forehead lines and crow's feet within 7 days.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                            <div>
                                <h4 className="font-semibold text-lg">Lip Filler</h4>
                                <p className="text-sm text-text-muted">Hydrated, plump lips with defined borders.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <Link to="/results" className="btn btn-primary">View Full Gallery</Link>
                    </div>
                </div>

                {/* Visual Comparison */}
                <div className="relative group">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="relative overflow-hidden rounded-2xl md:mt-12 shadow-lg">
                            <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=1000" alt="Result Before" className="w-full h-64 lg:h-80 object-cover hover:scale-105 transition-transform duration-700" />
                            <span className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-md text-xs font-bold shadow-sm">Before</span>
                        </div>
                        <div className="relative overflow-hidden rounded-2xl shadow-lg">
                            <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=1000" alt="Result After" className="w-full h-64 lg:h-80 object-cover hover:scale-105 transition-transform duration-700" />
                            <span className="absolute bottom-4 left-4 bg-primary/90 text-white px-3 py-1 rounded-md text-xs font-bold shadow-sm">After</span>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default ResultsTeaser;
