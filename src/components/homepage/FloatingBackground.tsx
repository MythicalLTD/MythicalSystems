export function FloatingBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Floating particles */}
            <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400/30 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
            <div className="absolute top-40 right-20 w-3 h-3 bg-pink-400/40 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }} />
            <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-violet-400/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-20 right-1/3 w-4 h-4 bg-purple-400/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4s' }} />
            <div className="absolute top-1/2 left-20 w-2 h-2 bg-pink-400/30 rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
            <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-violet-400/40 rounded-full animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '2.5s' }} />

            {/* Geometric shapes */}
            <div className="absolute top-1/4 right-10 w-16 h-16 border border-purple-400/20 rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
            <div className="absolute bottom-1/4 left-16 w-12 h-12 border border-pink-400/20 rotate-12 animate-pulse" />
            <div className="absolute top-1/2 right-1/3 w-8 h-8 border border-violet-400/20 rotate-45 animate-spin" style={{ animationDuration: '15s' }} />

            {/* Gradient orbs */}
            <div className="absolute top-10 right-1/4 w-32 h-32 bg-linear-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-linear-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
    );
}
