import { StatCard } from '../StatCard';
import { FloatingBackground } from '../FloatingBackground';

export function StatsSection() {
    return (
        <section className="py-20 relative overflow-hidden bg-[#0a0a0f]">
            <FloatingBackground />

            <div className="container mx-auto px-4 relative z-10 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 shimmer-text bg-linear-to-r from-purple-400 via-pink-400 to-violet-400 bg-clip-text text-transparent bg-size-[200%_100%]">
                        Our Impact in Numbers
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
                        See how MythicalSystems is making a difference in the developer community. Our growing network of users and projects demonstrates our commitment to quality and innovation.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
                    <StatCard number="925,164" label="users" delay={0} />
                    <StatCard number="102" label="projects" delay={150} />
                    <StatCard number="99.52%" label="uptime" delay={300} />
                    <StatCard number="687" label="happy customers" delay={450} />
                </div>
            </div>
        </section>
    );
}
