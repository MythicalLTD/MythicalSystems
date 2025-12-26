import { ProductCard } from '../ProductCard';
import { FloatingBackground } from '../FloatingBackground';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const products = [
    {
        title: 'FeatherPanel',
        description: 'FeatherPanel is a modern and sleek alternative to Pterodactyl Panel.',
        features: ['Native Plugin System', 'AI Driven Panel', 'Friendly Developer Experience', 'Faster', 'Smaller', 'Open Source'],
        href: 'https://featherpanel.com/',
        demoUrl: 'https://featherpanel.com/demo',
        price: 'Free',
        tags: ['PhP', 'MySQL', 'Wings', 'TailWind'],
        imageUrl: '/products/featherpanel.png',
        hasDemo: true,
        isExternal: true,
    },
    {
        title: 'MythicalDash Remastered',
        description: 'Open-Source Client Area for Pterodactyl Panel designed for free hosting providers.',
        features: ['Open-Source', 'Free', 'Highly Customizable', 'Highly Secure', '3rd most used client area'],
        href: '/docs/mythicaldash-v3-remastered/welcome',
        demoUrl: 'https://mythicaldash-v3.mythical.systems',
        price: 'Free',
        tags: ['PhP', 'MySQL', 'Pterodactyl API', 'Vuexy'],
        imageUrl: '/products/mythicaldash.png',
        hasDemo: true,
        isExternal: true,
    },
    {
        title: 'MythicalUI - Pterodactyl Admin Theme',
        description: 'Next generation admin theme for pterodactyl panel.',
        features: ['Color Changes', 'Search Bar', 'Auto Allocations', 'New Icons', 'New Design', 'Blueprint'],
        href: 'https://www.sourcexchange.net/products/mythicalui-pterodactyl-theme',
        price: '€6.00',
        tags: ['Pterodactyl Panel', 'Theme'],
        imageUrl: '/products/mythicalui.png',
        isExternal: true,
    },
    {
        title: 'Gamster.org - Minecraft Network',
        description: 'The ultimate Minecraft network with a wide range of game modes and features.',
        features: ['Cracked', 'Wide Range of Game Modes', 'Wide Range of Features', 'Non Pay2Win'],
        href: 'https://gamster.org',
        demoUrl: 'https://gamster.org',
        price: 'Free',
        tags: ['Cracked', 'BungeeCord', 'Minecraft'],
        imageUrl: '/products/gamster.png',
        hasDemo: true,
        isExternal: true,
    },
    {
        title: 'MythicalAdmin V2',
        description: 'A powerful admin theme for Pterodactyl Panel with modern design and features.',
        features: ['Color Changes', 'Search Bar', 'Auto Allocations', 'New Icons', 'New Design'],
        href: 'https://builtbybit.com/resources/mythical-admin-v2.59417/',
        price: '€14.99',
        tags: ['PhP', 'MySQL', 'Pterodactyl API', 'TailWind'],
        imageUrl: '/products/mythicaladmin-v2.png',
        isExternal: true,
    },
    {
        title: 'Minecraft Utils | Blueprint & Legacy',
        description: 'A collection of utilities and tools to enhance your Minecraft server management experience.',
        features: ['Message Management', 'Player Counter', 'Server Logs', 'Minimessage', 'Motd Builder', 'Gradient Builder'],
        href: 'https://builtbybit.com/resources/minecraft-utils-blueprint-legacy.59420/',
        price: '€9.99',
        tags: ['PhP', 'MySQL', 'Pterodactyl Panel', 'TailWind'],
        imageUrl: '/products/mcutils.png',
        isExternal: true,
    },
    {
        title: 'FeatherEggs | Blueprint & Legacy',
        description: 'A collection of eggs for Pterodactyl Panel with modern design and features.',
        features: ['Massive Egg Collection', 'Blueprint & Legacy', 'Pterodactyl Panel'],
        href: 'https://builtbybit.com/resources/feathereggs.77431/',
        price: '€4.99',
        tags: ['PhP', 'MySQL', 'Pterodactyl Panel', 'TailWind'],
        imageUrl: '/products/feathereggs.webp',
        isExternal: true,
    }
];

export function ProductsSection() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400;
            const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="products" className="py-20 relative overflow-hidden bg-[#0a0a0f]">
            <FloatingBackground />

            <div className="container mx-auto px-4 relative z-10 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 shimmer-text bg-linear-to-r from-purple-400 via-pink-400 to-violet-400 bg-clip-text text-transparent bg-size-[200%_100%]">
                        Our Products
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
                        Explore our suite of innovative products and services designed to empower developers and businesses. All our products are built with performance, security, and user experience in mind.
                    </p>
                </div>

                {/* Scrollable Gallery */}
                <div className="relative">
                    {/* Navigation Buttons */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/80 backdrop-blur-sm hover:bg-gray-700/80 p-3 rounded-full border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 hidden md:block"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-6 h-6 text-purple-400" />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/80 backdrop-blur-sm hover:bg-gray-700/80 p-3 rounded-full border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 hidden md:block"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-6 h-6 text-purple-400" />
                    </button>

                    {/* Products Container */}
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-6 overflow-x-auto scroll-smooth pb-4 px-12 md:px-16 scrollbar-hide snap-x snap-mandatory"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                        }}
                    >
                        {products.map((product, index) => (
                            <div key={product.title} className="shrink-0 w-[90%] md:w-[45%] lg:w-[30%] snap-center">
                                <ProductCard
                                    delay={index * 100}
                                    {...product}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scroll Hint */}
                <div className="text-center mt-8">
                    <p className="text-gray-400 text-sm">
                        ← Scroll to see more products →
                    </p>
                </div>
            </div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
}
