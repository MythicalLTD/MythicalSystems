import { Check } from 'lucide-react';

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    delay: number;
}

export function FeatureCard({ icon, title, description, delay }: FeatureCardProps) {
    return (
        <div className="feature-card group animate-fadeInUp" style={{ animationDelay: `${400 + delay}ms` }}>
            <div className="glass-effect h-full rounded-2xl p-8 hover:border-white/20 transition-all duration-500 relative overflow-hidden hover-lift-card">
                {/* Floating icon background */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-linear-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500" />

                <div className="relative">
                    <div className="mb-4 inline-flex rounded-lg bg-purple-500/10 p-3 group-hover:scale-110 transition-transform icon-bounce">
                        {icon}
                    </div>
                    <h3 className="text-xl font-semibold text-purple-300 mb-2 group-hover:text-white transition-colors duration-300">{title}</h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">{description}</p>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-linear-to-r from-purple-500/5 to-pink-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
        </div>
    );
}
