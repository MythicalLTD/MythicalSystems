import { Star } from 'lucide-react';

interface TestimonialCardProps {
    quote: string;
    author: string;
    role: string;
    rating: number;
    delay: number;
}

export function TestimonialCard({ quote, author, role, rating, delay }: TestimonialCardProps) {
    return (
        <div className="testimonial-card group animate-fadeInUp" style={{ animationDelay: `${400 + delay}ms` }}>
            <div className="glass-effect h-full rounded-2xl p-8 hover:border-white/20 transition-all duration-500 relative overflow-hidden hover-lift-card">
                {/* Floating background */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-linear-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500" />

                <div className="relative">
                    {/* Star rating */}
                    <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
                            />
                        ))}
                    </div>

                    {/* Quote */}
                    <p className="text-gray-300 mb-6 italic leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        "{quote}"
                    </p>

                    {/* Author */}
                    <div className="border-t border-gray-700 pt-4">
                        <p className="text-white font-semibold group-hover:text-purple-300 transition-colors duration-300">{author}</p>
                        <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{role}</p>
                    </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-linear-to-r from-purple-500/5 to-pink-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
        </div>
    );
}
