import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'About', path: '/about' },
        { name: 'Results', path: '/results' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container-custom flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className={`w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-serif italic text-xl transition-colors duration-300 ${isScrolled ? 'bg-primary' : 'bg-primary/90'}`}>A</div>
                    <span className={`text-2xl font-semibold tracking-tight ${isScrolled ? 'text-text-main' : 'text-text-main'}`}>
                        Aster<span className="font-light text-text-muted">MedSpa</span>
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-text-main'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <a href="tel:+13055550199" className="text-sm font-medium text-text-muted hover:text-primary transition-colors flex items-center gap-1">
                        <Phone size={16} /> (305) 555-0199
                    </a>
                    <Link to="/contact" className="btn btn-primary px-5 py-2 text-sm shadow-md hover:shadow-lg">
                        Book Consultation
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-text-main hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 md:hidden flex flex-col p-6 gap-4 animate-in slide-in-from-top-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-lg font-medium py-2 border-b border-gray-50 ${location.pathname === link.path ? 'text-primary' : 'text-text-main'
                                }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        className="btn btn-primary w-full text-center mt-2 group"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Book Consultation
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
