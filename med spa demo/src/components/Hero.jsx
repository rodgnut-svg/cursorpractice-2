import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background Decor - Abstract shapes/gradients similar to ZenTemplate */}
            <div className="absolute top-0 right-0 w-1/2 h-screen bg-gradient-to-bl from-primary/10 to-transparent -z-10 rounded-bl-[100px]" />
            <div className="absolute top-20 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10" />

            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Content */}
                    <div className="space-y-8 animate-in slide-in-from-bottom-5 duration-700">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-secondary shadow-sm text-xs font-semibold tracking-wide uppercase text-primary">
                            <Star size={12} fill="currentColor" />
                            <span>Voted Best Med Spa in Miami</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight">
                            Reveal Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">Natural Radiance</span>
                        </h1>

                        <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-lg">
                            Experience the perfect balance of medical expertise and spa luxury.
                            Personalized treatments to enhance your beauty and confidence.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link to="/contact" className="btn btn-primary text-lg px-8">
                                Book Consultation
                            </Link>
                            <Link to="/services" className="btn btn-secondary text-lg px-8 group">
                                View Services <ArrowRight className="inline-block ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>

                        <div className="pt-8 flex items-center gap-4 text-sm text-text-muted">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Client" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                            <div>
                                <div className="flex gap-0.5 text-accent">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                                </div>
                                <p><span className="font-semibold text-text-main">500+</span> 5-star reviews</p>
                            </div>
                        </div>
                    </div>

                    {/* Hero Visual - LotusW style image block */}
                    <div className="relative animate-in slide-in-from-right-5 duration-1000 delay-100 lg:h-[600px] flex items-center justify-center">
                        <div className="relative z-10 w-full h-[500px] md:h-[600px] rounded-t-[150px] rounded-b-[20px] overflow-hidden shadow-2xl">
                            {/* Placeholder Image - Spa/Woman */}
                            <img
                                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
                                alt="Woman with glowing skin"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Floating Elements/Badges */}
                        <div className="absolute bottom-10 -left-10 z-20 bg-white p-4 rounded-2xl shadow-card max-w-[200px] hidden md:block">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <Star size={20} fill="currentColor" />
                                </div>
                                <div>
                                    <p className="text-xs text-text-muted">Results</p>
                                    <p className="font-bold text-lg">100%</p>
                                </div>
                            </div>
                            <p className="text-xs text-text-muted">Client satisfaction guaranteed</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
