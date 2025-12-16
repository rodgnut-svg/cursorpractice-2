import Section from '../components/Section';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Card from '../components/Card';

const Contact = () => {
    return (
        <>
            <Section className="pt-32 pb-10 bg-secondary-light/30">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-semibold mb-4">Get In Touch</h1>
                    <p className="text-text-muted">We'd love to hear from you. Book your visit today.</p>
                </div>
            </Section>
            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-8">Contact Information</h2>
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Our Location</h3>
                                    <p className="text-text-muted">123 Ocean Drive, Suite 400<br />Miami, FL 33139</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                                    <p className="text-text-muted">(305) 555-0199</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                                    <p className="text-text-muted">hello@astermedspa.com</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Hours</h3>
                                    <p className="text-text-muted">
                                        Mon - Fri: 9am - 7pm<br />
                                        Sat: 10am - 4pm<br />
                                        Sun: Closed
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="mt-12 w-full h-64 bg-gray-100 rounded-2xl flex items-center justify-center text-text-muted font-medium">
                            Map Integration Placeholder
                        </div>
                    </div>

                    {/* Form */}
                    <Card className="p-8 md:p-10 shadow-lg border-none bg-white">
                        <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-text-main">First Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Jane" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-text-main">Last Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-text-main">Email</label>
                                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="jane@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-text-main">Phone</label>
                                <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="(555) 000-0000" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-text-main">Message</label>
                                <textarea className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all h-32 resize-none" placeholder="I'm interested in..." />
                            </div>
                            <button className="btn btn-primary w-full shadow-lg">Submit Request</button>
                            <p className="text-xs text-center text-text-muted">By submitting, you agree to receive communications from Aster Med Spa.</p>
                        </form>
                    </Card>
                </div>
            </Section>
        </>
    );
};

export default Contact;
