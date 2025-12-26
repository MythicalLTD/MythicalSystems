import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0f]">
            {/* Floating background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Animated circles */}
                <div className="absolute top-20 left-10 w-32 h-32 bg-linear-to-r from-purple-500/20 to-violet-500/20 rounded-full blur-xl animate-pulse" />
                <div className="absolute top-40 right-20 w-24 h-24 bg-linear-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-lg animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }} />
                <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-linear-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-linear-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4s' }} />

                {/* Geometric shapes */}
                <div className="absolute top-1/3 right-10 w-16 h-16 border-2 border-purple-400/30 rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
                <div className="absolute bottom-1/3 left-16 w-12 h-12 border-2 border-violet-400/30 rotate-12 animate-pulse" />

                {/* Grid pattern overlay */}
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)', backgroundSize: '50px 50px' }} />
            </div>

            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10 max-w-7xl">
                {/* Left side content */}
                <div className="z-10 space-y-6 animate-fadeInUp">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                        <span className="bg-linear-to-r from-purple-400 via-violet-400 to-purple-400 bg-clip-text text-transparent shimmer-text bg-size-[200%_100%]">
                            Mythical
                        </span>
                        <span className="block text-white animate-fadeInUp" style={{ animationDelay: '0.5s' }}>Systems</span>
                    </h1>

                    <p className="text-xl text-gray-400 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                        Crafting digital experiences that push the boundaries of innovation and build systems that scale.
                        With a focus on quality and user experience, we are dedicated to delivering excellence in all that we do.
                    </p>

                    <div className="flex flex-wrap gap-4 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                        <Link
                            href="/docs"
                            className="group relative px-8 py-4 bg-linear-to-r from-purple-600 to-violet-600 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(168,85,247,0.5)]"
                        >
                            <span className="relative z-10">Innovate with Mythical</span>
                            <div className="absolute inset-0 bg-linear-to-r from-purple-700 to-violet-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </Link>
                        <Link
                            href="https://github.com/sponsors/nayskutzu"
                            className="px-8 py-4 border-2 border-purple-500/50 rounded-lg font-semibold text-white hover:bg-purple-500/10 transition-all duration-300 hover:-translate-y-1"
                        >
                            Sponsor Us
                        </Link>
                    </div>
                </div>

                {/* Enhanced code editor with typing animation */}
                <div className="hidden md:block relative animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                    <div className="editor-container bg-[#1E1E1E] rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-500">
                        {/* Editor header */}
                        <div className="flex items-center px-4 py-3 bg-[#2D2D2D] border-b border-gray-800">
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/90 hover:bg-red-400 transition-colors" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/90 hover:bg-yellow-400 transition-colors" />
                                <div className="w-3 h-3 rounded-full bg-green-500/90 hover:bg-green-400 transition-colors" />
                            </div>
                            <div className="ml-4 text-sm text-gray-400 flex items-center">
                                <svg className="w-4 h-4 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg>
                                mythical.tsx
                            </div>
                        </div>
                        {/* Code content with typing animation */}
                        <div className="p-6 font-mono text-sm editor-content bg-linear-to-br from-[#1e1e1e] to-[#2d2d2d]">
                            <div className="text-blue-400 typing-line" style={{ animationDelay: '0s' }}>function <span className="text-yellow-300">MythicalApp</span>() {'{'}</div>
                            <div className="pl-4 text-purple-400 typing-line" style={{ animationDelay: '0.5s' }}>
                                const <span className="text-blue-300">[project, setProject]</span> = useState({'{'}
                            </div>
                            <div className="pl-8 text-gray-400 typing-line" style={{ animationDelay: '1s' }}>name: <span className="text-green-300">"Mythical"</span>,</div>
                            <div className="pl-8 text-gray-400 typing-line" style={{ animationDelay: '1.5s' }}>status: <span className="text-green-300">"innovating"</span></div>
                            <div className="pl-4 text-purple-400 typing-line" style={{ animationDelay: '2s' }}>{'});'}</div>
                            <div className="pl-4 text-blue-400 typing-line" style={{ animationDelay: '2.5s' }}>return (</div>
                            <div className="pl-8 text-purple-300 typing-line" style={{ animationDelay: '3s' }}>
                                &lt;div className=<span className="text-green-300">"mythical-app"</span>&gt;
                            </div>
                            <div className="pl-12 text-purple-300 typing-line" style={{ animationDelay: '3.5s' }}>Mythical Systems</div>
                            <div className="pl-8 text-purple-300 typing-line" style={{ animationDelay: '4s' }}>&lt;/div&gt;</div>
                            <div className="pl-4 text-blue-400 typing-line" style={{ animationDelay: '4.5s' }}>);</div>
                            <div className="text-blue-400 typing-line" style={{ animationDelay: '5s' }}>{'}'}</div>
                            <div className="typing-cursor inline-block animate-blink text-blue-400 font-bold">|</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enhanced scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator">
                <div className="flex flex-col items-center space-y-2">
                    <span className="text-xs text-gray-500 uppercase tracking-wider">Scroll</span>
                    <ChevronDown className="w-6 h-6 text-gray-400 scroll-arrow animate-bounce" />
                </div>
            </div>
        </section>
    );
}
