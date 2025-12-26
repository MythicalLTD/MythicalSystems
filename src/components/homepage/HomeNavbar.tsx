'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export function HomeNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Products', href: '#products' },
        { name: 'Why Us', href: '#why-us' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10 rounded-lg overflow-hidden ring-2 ring-purple-500/20 group-hover:ring-purple-500/50 transition-all">
                            <Image
                                src="https://github.com/mythicalltd.png"
                                alt="MythicalSystems Logo"
                                width={40}
                                height={40}
                                className="object-cover"
                            />
                        </div>
                        <span className="text-xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            MythicalSystems
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-300 hover:text-white transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
                            </Link>
                        ))}
                        <Link
                            href="/docs"
                            className="px-4 py-2 rounded-lg bg-linear-to-r from-purple-600 to-violet-600 text-white font-semibold hover:from-purple-700 hover:to-violet-700 transition-all hover:scale-105"
                        >
                            Documentation
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-white/10 animate-fadeIn">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-gray-300 hover:text-white transition-colors px-4 py-2 hover:bg-white/5 rounded-lg"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/docs"
                                onClick={() => setIsMenuOpen(false)}
                                className="px-4 py-2 rounded-lg bg-linear-to-r from-purple-600 to-violet-600 text-white font-semibold hover:from-purple-700 hover:to-violet-700 transition-all text-center"
                            >
                                Documentation
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
