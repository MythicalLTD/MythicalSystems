'use client';

import { HomeNavbar } from '@/components/homepage/HomeNavbar';
import { Footer } from '@/components/homepage/sections/Footer';
import { ReactNode } from 'react';

interface LegalLayoutProps {
    children: ReactNode;
    title: string;
    description: string;
    lastUpdated: string;
}

export function LegalLayout({ children, title, description, lastUpdated }: LegalLayoutProps) {
    return (
        <>
            <HomeNavbar />
            <div className="min-h-screen bg-[#0a0a0f] pt-16">
                {/* Hero Section */}
                <div className="relative py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-b from-purple-500/10 via-transparent to-transparent pointer-events-none" />
                    <div className="container mx-auto px-4 max-w-4xl relative z-10">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-purple-400 via-pink-400 to-violet-400 bg-clip-text text-transparent">
                            {title}
                        </h1>
                        <p className="text-xl text-gray-400 mb-4">{description}</p>
                        <p className="text-sm text-gray-500">Last updated: {lastUpdated}</p>
                    </div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 max-w-4xl pb-20">
                    <div className="glass-effect rounded-2xl p-8 md:p-12">
                        <div className="prose prose-invert prose-purple max-w-none">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
