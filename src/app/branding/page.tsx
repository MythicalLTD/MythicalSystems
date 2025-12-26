import { LegalLayout } from '@/components/legal/LegalLayout';
import { Download, Palette, Type, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Brand Guidelines | MythicalSystems',
    description: 'Official MythicalSystems brand guidelines, logo downloads, color palette, typography, and usage guidelines for representing our brand correctly.',
    keywords: ['branding', 'brand guidelines', 'logo', 'color palette', 'MythicalSystems', 'brand assets', 'design system'],
    authors: [{ name: 'MythicalSystems LTD' }],
    metadataBase: new URL('https://docs.mythical.systems'),
    alternates: {
        canonical: '/branding',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://docs.mythical.systems/branding',
        title: 'Brand Guidelines | MythicalSystems',
        description: 'Official MythicalSystems brand guidelines including logo, colors, typography, and usage guidelines.',
        siteName: 'MythicalSystems',
        images: [
            {
                url: 'https://github.com/mythicalltd.png',
                width: 1200,
                height: 630,
                alt: 'MythicalSystems Logo',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Brand Guidelines | MythicalSystems',
        description: 'Official MythicalSystems brand guidelines and assets.',
        images: ['https://github.com/mythicalltd.png'],
    },
    robots: {
        index: true,
        follow: true,
    },
};


export default function BrandingPage() {
    return (
        <LegalLayout
            title="Brand Guidelines"
            description="Official branding assets and guidelines for MythicalSystems. Use these resources to represent our brand correctly."
            lastUpdated="December 26, 2024"
        >
            <div className="space-y-12 text-gray-300">
                {/* Logo Section */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <ImageIcon className="h-8 w-8 text-purple-400" />
                        <h2 className="text-3xl font-bold text-white">Logo</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        {/* Light Background */}
                        <div className="bg-white rounded-xl p-8 flex flex-col items-center justify-center min-h-[200px]">
                            <div className="relative w-32 h-32 mb-4">
                                <Image
                                    src="https://github.com/mythicalltd.png"
                                    alt="MythicalSystems Logo"
                                    width={128}
                                    height={128}
                                    className="rounded-lg"
                                />
                            </div>
                            <p className="text-gray-800 font-semibold">On Light Background</p>
                        </div>

                        {/* Dark Background */}
                        <div className="bg-[#0a0a0f] rounded-xl p-8 flex flex-col items-center justify-center min-h-[200px] border border-white/10">
                            <div className="relative w-32 h-32 mb-4">
                                <Image
                                    src="https://github.com/mythicalltd.png"
                                    alt="MythicalSystems Logo"
                                    width={128}
                                    height={128}
                                    className="rounded-lg"
                                />
                            </div>
                            <p className="text-white font-semibold">On Dark Background</p>
                        </div>
                    </div>

                    <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                        <h3 className="text-xl font-semibold text-white mb-4">Logo Usage Guidelines</h3>
                        <ul className="space-y-2 ml-4 list-disc list-inside">
                            <li>Maintain adequate clear space around the logo</li>
                            <li>Do not distort, rotate, or modify the logo</li>
                            <li>Use the provided logo files without alterations</li>
                            <li>Ensure sufficient contrast with the background</li>
                            <li>Do not place the logo on busy or patterned backgrounds</li>
                        </ul>
                        <a
                            href="https://github.com/mythicalltd.png"
                            download
                            className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold transition-colors"
                        >
                            <Download className="h-4 w-4" />
                            Download Logo
                        </a>
                    </div>
                </section>

                {/* Color Palette */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <Palette className="h-8 w-8 text-purple-400" />
                        <h2 className="text-3xl font-bold text-white">Color Palette</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* Primary Purple */}
                        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                            <div className="w-full h-24 rounded-lg mb-4" style={{ backgroundColor: '#a855f7' }}></div>
                            <h3 className="text-white font-semibold mb-2">Primary Purple</h3>
                            <div className="space-y-1 text-sm">
                                <p><span className="text-gray-500">HEX:</span> <code className="text-purple-300">#a855f7</code></p>
                                <p><span className="text-gray-500">RGB:</span> <code className="text-purple-300">168, 85, 247</code></p>
                                <p><span className="text-gray-500">HSL:</span> <code className="text-purple-300">271°, 91%, 65%</code></p>
                            </div>
                        </div>

                        {/* Violet */}
                        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                            <div className="w-full h-24 rounded-lg mb-4" style={{ backgroundColor: '#8b5cf6' }}></div>
                            <h3 className="text-white font-semibold mb-2">Violet</h3>
                            <div className="space-y-1 text-sm">
                                <p><span className="text-gray-500">HEX:</span> <code className="text-purple-300">#8b5cf6</code></p>
                                <p><span className="text-gray-500">RGB:</span> <code className="text-purple-300">139, 92, 246</code></p>
                                <p><span className="text-gray-500">HSL:</span> <code className="text-purple-300">258°, 90%, 66%</code></p>
                            </div>
                        </div>

                        {/* Pink Accent */}
                        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                            <div className="w-full h-24 rounded-lg mb-4" style={{ backgroundColor: '#ec4899' }}></div>
                            <h3 className="text-white font-semibold mb-2">Pink Accent</h3>
                            <div className="space-y-1 text-sm">
                                <p><span className="text-gray-500">HEX:</span> <code className="text-purple-300">#ec4899</code></p>
                                <p><span className="text-gray-500">RGB:</span> <code className="text-purple-300">236, 72, 153</code></p>
                                <p><span className="text-gray-500">HSL:</span> <code className="text-purple-300">330°, 81%, 60%</code></p>
                            </div>
                        </div>

                        {/* Dark Background */}
                        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                            <div className="w-full h-24 rounded-lg mb-4 border border-white/20" style={{ backgroundColor: '#0a0a0f' }}></div>
                            <h3 className="text-white font-semibold mb-2">Dark Background</h3>
                            <div className="space-y-1 text-sm">
                                <p><span className="text-gray-500">HEX:</span> <code className="text-purple-300">#0a0a0f</code></p>
                                <p><span className="text-gray-500">RGB:</span> <code className="text-purple-300">10, 10, 15</code></p>
                                <p><span className="text-gray-500">HSL:</span> <code className="text-purple-300">240°, 20%, 5%</code></p>
                            </div>
                        </div>

                        {/* Light Text */}
                        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                            <div className="w-full h-24 rounded-lg mb-4" style={{ backgroundColor: '#e2e8f0' }}></div>
                            <h3 className="text-white font-semibold mb-2">Light Text</h3>
                            <div className="space-y-1 text-sm">
                                <p><span className="text-gray-500">HEX:</span> <code className="text-purple-300">#e2e8f0</code></p>
                                <p><span className="text-gray-500">RGB:</span> <code className="text-purple-300">226, 232, 240</code></p>
                                <p><span className="text-gray-500">HSL:</span> <code className="text-purple-300">214°, 32%, 91%</code></p>
                            </div>
                        </div>

                        {/* Gray Text */}
                        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                            <div className="w-full h-24 rounded-lg mb-4" style={{ backgroundColor: '#9ca3af' }}></div>
                            <h3 className="text-white font-semibold mb-2">Gray Text</h3>
                            <div className="space-y-1 text-sm">
                                <p><span className="text-gray-500">HEX:</span> <code className="text-purple-300">#9ca3af</code></p>
                                <p><span className="text-gray-500">RGB:</span> <code className="text-purple-300">156, 163, 175</code></p>
                                <p><span className="text-gray-500">HSL:</span> <code className="text-purple-300">218°, 11%, 65%</code></p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Typography */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <Type className="h-8 w-8 text-purple-400" />
                        <h2 className="text-3xl font-bold text-white">Typography</h2>
                    </div>

                    <div className="bg-white/5 rounded-lg p-6 border border-white/10 space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">Primary Font</h3>
                            <p className="text-gray-400 mb-4">We use system fonts for optimal performance and native feel:</p>
                            <code className="text-purple-300 bg-black/30 px-3 py-2 rounded text-sm">
                                font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
                            </code>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">Monospace Font</h3>
                            <p className="text-gray-400 mb-4">For code blocks and technical content:</p>
                            <code className="text-purple-300 bg-black/30 px-3 py-2 rounded text-sm font-mono">
                                font-family: 'Courier New', Courier, monospace
                            </code>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">Font Sizes</h3>
                            <div className="space-y-2">
                                <p className="text-5xl font-bold text-white">Heading 1 - 3rem (48px)</p>
                                <p className="text-4xl font-bold text-white">Heading 2 - 2.25rem (36px)</p>
                                <p className="text-3xl font-semibold text-white">Heading 3 - 1.875rem (30px)</p>
                                <p className="text-xl text-gray-300">Body Large - 1.25rem (20px)</p>
                                <p className="text-base text-gray-300">Body - 1rem (16px)</p>
                                <p className="text-sm text-gray-400">Small - 0.875rem (14px)</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Brand Voice */}
                <section>
                    <h2 className="text-3xl font-bold text-white mb-6">Brand Voice</h2>
                    <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                        <p className="leading-relaxed mb-4">
                            MythicalSystems communicates with a tone that is:
                        </p>
                        <ul className="space-y-3 ml-4">
                            <li className="flex items-start gap-3">
                                <span className="text-purple-400 font-bold">•</span>
                                <div>
                                    <strong className="text-white">Professional yet Approachable:</strong>
                                    <span className="text-gray-400"> We maintain technical credibility while being friendly and accessible</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-purple-400 font-bold">•</span>
                                <div>
                                    <strong className="text-white">Innovative:</strong>
                                    <span className="text-gray-400"> We emphasize cutting-edge solutions and forward-thinking approaches</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-purple-400 font-bold">•</span>
                                <div>
                                    <strong className="text-white">Community-Focused:</strong>
                                    <span className="text-gray-400"> We highlight our open-source values and collaborative spirit</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-purple-400 font-bold">•</span>
                                <div>
                                    <strong className="text-white">Clear and Concise:</strong>
                                    <span className="text-gray-400"> We avoid jargon when possible and explain complex concepts simply</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Usage Examples */}
                <section>
                    <h2 className="text-3xl font-bold text-white mb-6">Proper Usage</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
                            <h3 className="text-green-400 font-semibold mb-3 flex items-center gap-2">
                                <span className="text-2xl">✓</span> Do
                            </h3>
                            <ul className="space-y-2 text-gray-300">
                                <li>• Use the official logo and colors</li>
                                <li>• Maintain proper spacing and proportions</li>
                                <li>• Link back to mythical.systems when featuring our brand</li>
                                <li>• Use high-quality, unmodified assets</li>
                            </ul>
                        </div>

                        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
                            <h3 className="text-red-400 font-semibold mb-3 flex items-center gap-2">
                                <span className="text-2xl">✗</span> Don't
                            </h3>
                            <ul className="space-y-2 text-gray-300">
                                <li>• Alter, distort, or recolor the logo</li>
                                <li>• Use outdated or unofficial assets</li>
                                <li>• Imply endorsement without permission</li>
                                <li>• Use the brand in a misleading way</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Contact */}
                <section>
                    <h2 className="text-3xl font-bold text-white mb-6">Questions?</h2>
                    <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                        <p className="leading-relaxed mb-4">
                            If you have questions about using our brand assets or need special permissions, please contact us:
                        </p>
                        <p>Email: <a href="mailto:contact@mythical.systems" className="text-purple-400 hover:text-purple-300">contact@mythical.systems</a></p>
                    </div>
                </section>
            </div>
        </LegalLayout>
    );
}
