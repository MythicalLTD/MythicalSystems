import { Check } from 'lucide-react';
import { FeatureCard } from '../FeatureCard';
import { FloatingBackground } from '../FloatingBackground';

export function WhyUsSection() {
    return (
        <section id="why-us" className="py-20 relative overflow-hidden bg-[#0a0a0f]">
            <FloatingBackground />

            <div className="container mx-auto px-4 relative z-10 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 shimmer-text bg-linear-to-r from-purple-400 via-pink-400 to-violet-400 bg-clip-text text-transparent bg-size-[200%_100%]">
                        Why us?
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
                        MythicalSystems takes great pride in offering a wide range of projects that are completely free for the entire community to enjoy.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                    <FeatureCard delay={0} icon={<Check className="h-10 w-10 text-purple-400" />} title="Free" description="Access to a wide range of completely free projects for the entire community." />
                    <FeatureCard delay={150} icon={<Check className="h-10 w-10 text-purple-400" />} title="Security" description="Top-notch security ensuring your users' data remains safe and protected." />
                    <FeatureCard delay={300} icon={<Check className="h-10 w-10 text-purple-400" />} title="Speed" description="Lightning-fast performance empowering users to accomplish tasks efficiently." />
                    <FeatureCard delay={450} icon={<Check className="h-10 w-10 text-purple-400" />} title="Open Source" description="All projects are open source, fostering collaboration and continuous improvement." />
                    <FeatureCard delay={600} icon={<Check className="h-10 w-10 text-purple-400" />} title="Support" description="Round-the-clock support for all your inquiries and concerns via our Discord server." />
                    <FeatureCard delay={750} icon={<Check className="h-10 w-10 text-purple-400" />} title="Reliable Hosting" description="Cutting-edge infrastructure ensuring 99.9% uptime for your projects." />
                </div>
            </div>
        </section>
    );
}
