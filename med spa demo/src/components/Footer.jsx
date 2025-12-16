import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-serif italic text-xl">A</div>
                            <span className="text-2xl font-semibold tracking-tight text-text-main">
                                Aster<span className="font-light text-text-muted">MedSpa</span>
                            </span>
                        </Link>
                        <p className="text-text-muted text-sm leading-relaxed max-w-xs">
                            Miamis premier destination for aesthetic excellence. We combine medical expertise with spa luxury to reveal your natural radiance.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-secondary-light flex items-center justify-center text-text-muted hover:bg-primary hover:text-white transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-secondary-light flex items-center justify-center text-text-muted hover:bg-primary hover:text-white transition-all">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-secondary-light flex items-center justify-center text-text-muted hover:bg-primary hover:text-white transition-all">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link to="/about" className="text-text-muted hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="text-text-muted hover:text-primary transition-colors">Treatments</Link></li>
                            <li><Link to="/results" className="text-text-muted hover:text-primary transition-colors">Real Results</Link></li>
                            <li><Link to="/contact" className="text-text-muted hover:text-primary transition-colors">Book Consultation</Link></li>
                            <li><Link to="#" className="text-text-muted hover:text-primary transition-colors">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-text-muted">
                                <MapPin className="text-primary mt-1 shrink-0" size={18} />
                                <span>123 Ocean Drive, Suite 400<br />Miami, FL 33139</span>
                            </li>
                            <li className="flex items-center gap-3 text-text-muted">
                                <Phone className="text-primary shrink-0" size={18} />
                                <span>(305) 555-0199</span>
                            </li>
                            <li className="flex items-center gap-3 text-text-muted">
                                <Mail className="text-primary shrink-0" size={18} />
                                <span>hello@astermedspa.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-semibold text-lg mb-6">Stay Updated</h4>
                        <p className="text-text-muted text-sm mb-4">Subscribe for exclusive offers and beauty tips.</p>
                        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full px-4 py-3 rounded-xl bg-secondary-light border-transparent focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                            />
                            <button className="btn btn-primary w-full py-2.5 text-sm">Subscribe</button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-light">
                    <p>&copy; {new Date().getFullYear()} Aster Med Spa. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-text-main">Privacy Policy</a>
                        <a href="#" className="hover:text-text-main">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
