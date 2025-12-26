import { TestimonialCard } from '../TestimonialCard';
import { FloatingBackground } from '../FloatingBackground';

export function TestimonialsSection() {
    return (
        <section id="testimonials" className="py-20 relative overflow-hidden bg-[#0a0a0f]">
            <FloatingBackground />

            <div className="container mx-auto px-4 relative z-10 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 shimmer-text bg-linear-to-r from-purple-400 via-pink-400 to-violet-400 bg-clip-text text-transparent bg-size-[200%_100%]">
                        What Our Clients Say
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
                        Hear from our satisfied clients and discover the impact of our services on their businesses. Real feedback from real users who trust MythicalSystems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <TestimonialCard
                        delay={0}
                        rating={5}
                        quote="FeatherPanel redefined our hosting experience — it's lightning fast, feather-light on resources, and astonishingly intuitive. You can tell it was built by people who understand hosting inside and out!"
                        author="Galaxy OP"
                        role="CEO, Blazars Cloud"
                    />
                    <TestimonialCard
                        delay={150}
                        rating={5}
                        quote="I've worked with all the panels out there, and nothing comes close to FeatherPanel's modern design and seamless performance. Deployment is effortless, and our clients love the user experience."
                        author="Blanco"
                        role="Cloud Architect"
                    />
                    <TestimonialCard
                        delay={300}
                        rating={5}
                        quote="How am I only just finding this panel? It works perfectly and looks amazing. Finally, a dev who actually keeps things updated!"
                        author="Adam"
                        role="Founder, ONHost"
                    />
                    <TestimonialCard
                        delay={450}
                        rating={5}
                        quote="We switched to FeatherPanel after months of frustration with other solutions. The migration was simple, support was stellar, and our server operations have never been smoother."
                        author="ChristiannX"
                        role="Founder, MultyPlay & ScrifySystems"
                    />
                    <TestimonialCard
                        delay={600}
                        rating={5}
                        quote="FeatherPanel brought robust features, modern security, and true reliability to our network. It's the upgrade I wish we'd made years ago!"
                        author="Alexutzerion5"
                        role="Founder, RexSystems & Lethal Romania"
                    />
                    <TestimonialCard
                        delay={750}
                        rating={5}
                        quote="I was impressed with how light and responsive FeatherPanel is. Managing even large fleets of servers is a breeze it's seriously next-gen."
                        author="Th3Hunter"
                        role="Founder, KingsDomain"
                    />
                </div>
            </div>
        </section>
    );
}
