import Link from 'next/link';
import { Check, ExternalLink } from 'lucide-react';
import Image from 'next/image';

interface ProductCardProps {
    title: string;
    description: string;
    features: string[];
    href: string;
    price: string;
    tags: string[];
    hasDemo?: boolean;
    demoUrl?: string;
    delay?: number;
    isExternal?: boolean;
    imageUrl?: string;
}

export function ProductCard({ title, description, features, href, price, tags, hasDemo, demoUrl, delay = 0, isExternal = false, imageUrl }: ProductCardProps) {
    const isFree = price === 'Free' || price === '0.00' || price === '0';

    return (
        <div className="product-card group animate-fadeInUp h-full" style={{ animationDelay: `${400 + delay}ms` }}>
            <div className="glass-effect rounded-2xl p-8 hover:border-white/20 transition-all duration-500 group hover-lift-card h-full flex flex-col">
                <div className="relative flex-1 flex flex-col">
                    {/* Floating background */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-linear-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500" />

                    {/* Free Badge */}
                    {isFree && (
                        <div className="absolute -top-2 -right-2 bg-linear-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg z-10">
                            FREE
                        </div>
                    )}

                    {/* Product Image */}
                    {imageUrl && (
                        <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden bg-linear-to-br from-purple-900/20 to-pink-900/20">
                            <Image
                                src={imageUrl}
                                alt={`${title} preview`}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    )}

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">{title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {tags.map((tag) => (
                            <span key={tag} className="tech-tag inline-flex items-center rounded-full bg-purple-500/20 px-3 py-1 text-xs font-medium text-purple-300 hover:bg-purple-500/30 hover:text-white transition-all duration-300">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300 grow">{description}</p>

                    <div className="mb-6">
                        <h4 className="text-sm font-semibold text-purple-300 mb-3 group-hover:text-pink-300 transition-colors duration-300">Key Features</h4>
                        <ul className="space-y-2">
                            {features.map((feature) => (
                                <li key={feature} className="feature-item flex items-start text-sm text-gray-400 hover:text-gray-300 transition-colors duration-300">
                                    <Check className="h-4 w-4 text-purple-400 mr-2 mt-0.5 shrink-0 feature-icon" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex gap-3 mt-auto">
                        {isExternal ? (
                            <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 rounded-lg bg-linear-to-r from-purple-600 to-violet-600 px-4 py-2 text-center text-sm font-semibold text-white hover:from-purple-700 hover:to-violet-700 transition-all hover:-translate-y-1 inline-flex items-center justify-center"
                            >
                                {isFree ? 'Get Started' : `Get for ${price}`}
                                <ExternalLink className="ml-2 h-4 w-4 inline" />
                            </a>
                        ) : (
                            <Link
                                href={href}
                                className="flex-1 rounded-lg bg-linear-to-r from-purple-600 to-violet-600 px-4 py-2 text-center text-sm font-semibold text-white hover:from-purple-700 hover:to-violet-700 transition-all hover:-translate-y-1 inline-flex items-center justify-center"
                            >
                                {isFree ? 'Get Started' : `Get for ${price}`}
                            </Link>
                        )}
                        {hasDemo && demoUrl && (
                            <a
                                href={demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-lg border-2 border-purple-500/50 px-4 py-2 text-sm font-semibold text-purple-400 hover:bg-purple-500/10 transition-all hover:-translate-y-1 inline-flex items-center justify-center gap-1"
                            >
                                Try Demo
                                <ExternalLink className="h-3 w-3" />
                            </a>
                        )}
                    </div>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-linear-to-r from-purple-500/5 to-pink-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
            </div>
        </div>
    );
}
