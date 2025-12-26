interface StatCardProps {
    number: string;
    label: string;
    delay: number;
}

export function StatCard({ number, label, delay }: StatCardProps) {
    return (
        <div className="stat-card group animate-fadeInUp" style={{ animationDelay: `${400 + delay}ms` }}>
            <div className="glass-effect h-full rounded-2xl p-8 hover:border-white/20 transition-all duration-500 relative overflow-hidden hover-lift-card">
                {/* Floating background */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-linear-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500" />

                <div className="text-center relative">
                    <h3 className="text-xl font-semibold text-purple-300 capitalize mb-4 group-hover:text-white transition-colors duration-300">{label}</h3>
                    <div className="relative">
                        <p className="text-4xl font-bold text-purple-100 counter-text group-hover:scale-105 transition-transform duration-300">{number}</p>
                        {/* Animated underline */}
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-linear-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-500" />
                    </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-linear-to-r from-purple-500/5 to-pink-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
        </div>
    );
}
