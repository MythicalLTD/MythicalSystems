import { ArrowRight } from 'lucide-react';
import { FloatingBackground } from '../FloatingBackground';

function FAQItem({ question, answer }: { question: string; answer: string }) {
    return (
        <details className="faq-item glass-effect rounded-lg p-6 hover:border-white/20 transition-colors group">
            <summary className="cursor-pointer font-semibold text-white flex justify-between items-center">
                {question}
                <ArrowRight className="h-5 w-5 text-purple-400 group-open:rotate-90 transition-transform" />
            </summary>
            <p className="mt-4 text-gray-400">{answer}</p>
        </details>
    );
}

export function FAQSection() {
    return (
        <section className="py-20 relative overflow-hidden bg-[#0a0a0f]">
            <FloatingBackground />

            <div className="container mx-auto px-4 relative z-10 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 shimmer-text bg-linear-to-r from-purple-400 via-pink-400 to-violet-400 bg-clip-text text-transparent bg-size-[200%_100%]">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
                        Find answers to common questions about our products, services, and support. Can't find what you're looking for? Reach out to us directly.
                    </p>
                </div>

                <div className="space-y-4">
                    <FAQItem
                        question="What services does MythicalSystems offer?"
                        answer="We offer a wide range of open-source projects including game panels, client areas, admin themes, and utilities for Pterodactyl Panel and Minecraft servers."
                    />
                    <FAQItem
                        question="Are your projects open-source?"
                        answer="Yes! Most of our projects are completely open-source and available on GitHub for the community to use, modify, and contribute to."
                    />
                    <FAQItem
                        question="How can I get support for your products?"
                        answer="Join our Discord server for round-the-clock community support, or check our comprehensive documentation for guides and troubleshooting."
                    />
                </div>
            </div>
        </section>
    );
}
