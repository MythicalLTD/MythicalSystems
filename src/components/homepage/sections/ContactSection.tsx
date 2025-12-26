import { ArrowRight, Mail, MessageCircle, Ticket } from 'lucide-react';
import { FloatingBackground } from '../FloatingBackground';

function ContactCard({ icon, title, description, link, linkText }: any) {
    return (
        <div className="contact-card group animate-fadeInUp">
            <div className="glass-effect rounded-2xl p-8 hover:border-white/20 transition-all text-center group hover-lift-card">
                <div className="mb-4 inline-flex rounded-lg bg-purple-500/10 p-4 group-hover:scale-110 transition-transform">
                    {icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">{title}</h3>
                <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">{description}</p>
                <a href={link} className="inline-flex items-center text-purple-400 font-medium hover:text-purple-300 transition-colors">
                    {linkText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                </a>
            </div>
        </div>
    );
}

export function ContactSection() {
    return (
        <section id="contact" className="py-20 relative overflow-hidden bg-[#0a0a0f]">
            <FloatingBackground />

            <div className="container mx-auto px-4 relative z-10 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 shimmer-text bg-linear-to-r from-purple-400 via-pink-400 to-violet-400 bg-clip-text text-transparent bg-size-[200%_100%]">
                        Reach Us
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
                        Have questions or need support? Our team is here to help. Connect with us through Discord for community support, email us directly for inquiries, or open a ticket on our cloud platform.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
                    <ContactCard
                        icon={<MessageCircle className="h-8 w-8 text-purple-400" />}
                        title="Discord"
                        description="Join our community for support and discussions"
                        link="https://discord.mythical.systems"
                        linkText="Join Discord Server"
                    />
                    <ContactCard
                        icon={<Mail className="h-8 w-8 text-purple-400" />}
                        title="Email"
                        description="Reach out to us directly for inquiries"
                        link="mailto:contact@mythical.systems"
                        linkText="Send an Email"
                    />
                    <ContactCard
                        icon={<Ticket className="h-8 w-8 text-purple-400" />}
                        title="Cloud Platform"
                        description="Open tickets on our cloud platform"
                        link="https://cloud.mythical.systems"
                        linkText="Visit Cloud Platform"
                    />
                </div>
            </div>
        </section>
    );
}
