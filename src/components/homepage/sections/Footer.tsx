import { Github, MessageCircle, Mail, Heart, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
    const currentYear = new Date().getFullYear();

    const footerSections = {
        products: [
            { name: 'FeatherPanel', href: '/docs/featherpanel/panel' },
            { name: 'MythicalDash', href: '/docs/mythicaldash-v3-remastered/welcome' },
        ],
        resources: [
            { name: 'Documentation', href: '/docs' },
            { name: 'GitHub', href: 'https://github.com/mythicalltd', external: true },
            { name: 'Discord', href: 'https://discord.mythical.systems', external: true },
            { name: 'Cloud Platform', href: 'https://cloud.mythical.systems', external: true },
        ],
        company: [
            { name: 'Privacy Policy', href: '/privacy' },
            { name: 'Terms of Service', href: '/terms' },
        ],
        sponsors: [
            { name: 'DeinServerHost', href: 'https://deinserverhost.de/store/aff.php?aff=5361', external: true },
        ],
    };

    return (
        <footer className="relative bg-[#0a0a0f] border-t border-white/10">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                {/* Main Footer Content */}
                <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="relative w-12 h-12 rounded-lg overflow-hidden ring-2 ring-purple-500/20">
                                <Image
                                    src="https://github.com/mythicalltd.png"
                                    alt="MythicalSystems Logo"
                                    width={48}
                                    height={48}
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-2xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                MythicalSystems
                            </span>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed max-w-sm">
                            Building innovative open-source solutions for developers and hosting providers. Empowering the community with modern, reliable tools.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/mythicalltd"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all hover:scale-110"
                                aria-label="GitHub"
                            >
                                <Github className="h-5 w-5" />
                            </a>
                            <a
                                href="https://discord.mythical.systems"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all hover:scale-110"
                                aria-label="Discord"
                            >
                                <MessageCircle className="h-5 w-5" />
                            </a>
                            <a
                                href="mailto:contact@mythical.systems"
                                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all hover:scale-110"
                                aria-label="Email"
                            >
                                <Mail className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Products</h3>
                        <ul className="space-y-3">
                            {footerSections.products.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-purple-400 transition-colors inline-flex items-center gap-1 group"
                                    >
                                        {link.name}
                                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Resources</h3>
                        <ul className="space-y-3">
                            {footerSections.resources.map((link) => (
                                <li key={link.name}>
                                    {link.external ? (
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-purple-400 transition-colors inline-flex items-center gap-1 group"
                                        >
                                            {link.name}
                                            <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </a>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-purple-400 transition-colors inline-flex items-center gap-1 group"
                                        >
                                            {link.name}
                                            <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company & Sponsors */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h3>
                        <ul className="space-y-3 mb-6">
                            {footerSections.company.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-purple-400 transition-colors inline-flex items-center gap-1 group"
                                    >
                                        {link.name}
                                        <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Sponsors</h3>
                        <ul className="space-y-3">
                            {footerSections.sponsors.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-purple-400 transition-colors inline-flex items-center gap-1 group"
                                    >
                                        {link.name}
                                        <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} MythicalSystems LTD. All rights reserved.
                        </p>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <span>Made with</span>
                            <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" />
                            <span>by the MythicalSystems team</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
