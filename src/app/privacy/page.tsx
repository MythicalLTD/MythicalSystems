import { LegalLayout } from '@/components/legal/LegalLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | MythicalSystems',
    description: 'Learn how MythicalSystems collects, uses, and protects your personal information. Our privacy policy outlines our commitment to data security and user privacy.',
    keywords: ['privacy policy', 'data protection', 'GDPR', 'user privacy', 'MythicalSystems', 'data security'],
    authors: [{ name: 'MythicalSystems LTD' }],
    metadataBase: new URL('https://docs.mythical.systems'),
    alternates: {
        canonical: '/privacy',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://docs.mythical.systems/privacy',
        title: 'Privacy Policy | MythicalSystems',
        description: 'Learn how MythicalSystems protects your personal information and ensures data security.',
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
        card: 'summary',
        title: 'Privacy Policy | MythicalSystems',
        description: 'Learn how MythicalSystems protects your personal information.',
    },
    robots: {
        index: true,
        follow: true,
    },
};


export default function PrivacyPage() {
    return (
        <LegalLayout
            title="Privacy Policy"
            description="Your privacy is important to us. This policy outlines how MythicalSystems collects, uses, and protects your information."
            lastUpdated="December 26, 2024"
        >
            <div className="space-y-8 text-gray-300">
                <section>
                    <h2 className="text-3xl font-bold text-white mb-4">Introduction</h2>
                    <p className="leading-relaxed">
                        At MythicalSystems, we are committed to protecting your privacy and ensuring the security of your personal information.
                        This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services,
                        websites, and products.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-white mb-4">Information We Collect</h2>
                    <h3 className="text-2xl font-semibold text-purple-300 mb-3">Personal Information</h3>
                    <p className="leading-relaxed mb-4">
                        We may collect personal information that you voluntarily provide to us when you:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Register for an account</li>
                        <li>Use our services or products</li>
                        <li>Subscribe to our newsletter</li>
                        <li>Contact us for support</li>
                        <li>Participate in our community forums or Discord server</li>
                    </ul>

                    <h3 className="text-2xl font-semibold text-purple-300 mb-3 mt-6">Automatically Collected Information</h3>
                    <p className="leading-relaxed">
                        When you access our services, we may automatically collect certain information, including:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                        <li>IP address and device information</li>
                        <li>Browser type and version</li>
                        <li>Usage data and analytics</li>
                        <li>Cookies and similar tracking technologies</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-white mb-4">How We Use Your Information</h2>
                    <p className="leading-relaxed mb-4">
                        We use the information we collect for various purposes, including:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Providing and maintaining our services</li>
                        <li>Improving and personalizing user experience</li>
                        <li>Communicating with you about updates, security alerts, and support</li>
                        <li>Analyzing usage patterns to enhance our products</li>
                        <li>Detecting and preventing fraud or abuse</li>
                        <li>Complying with legal obligations</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-white mb-4">Data Sharing and Disclosure</h2>
                    <p className="leading-relaxed mb-4">
                        We do not sell your personal information. We may share your information only in the following circumstances:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong className="text-white">Service Providers:</strong> With trusted third-party service providers who assist us in operating our services</li>
                        <li><strong className="text-white">Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                        <li><strong className="text-white">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                        <li><strong className="text-white">With Your Consent:</strong> When you explicitly authorize us to share your information</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-white mb-4">Data Security</h2>
                    <p className="leading-relaxed">
                        We implement appropriate technical and organizational security measures to protect your personal information
                        against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over
                        the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-white mb-4">Your Rights</h2>
                    <p className="leading-relaxed mb-4">
                        Depending on your location, you may have certain rights regarding your personal information:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Access and receive a copy of your personal data</li>
                        <li>Rectify inaccurate or incomplete information</li>
                        <li>Request deletion of your personal data</li>
                        <li>Object to or restrict certain processing activities</li>
                        <li>Data portability</li>
                        <li>Withdraw consent at any time</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-white mb-4">Cookies and Tracking</h2>
                    <p className="leading-relaxed">
                        We use cookies and similar tracking technologies to enhance your experience, analyze usage, and personalize content.
                        You can control cookie preferences through your browser settings, though some features may not function properly if cookies are disabled.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-white mb-4">Children's Privacy</h2>
                    <p className="leading-relaxed">
                        Our services are not intended for children under the age of 13. We do not knowingly collect personal information
                        from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-white mb-4">Changes to This Policy</h2>
                    <p className="leading-relaxed">
                        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy
                        on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
                    <p className="leading-relaxed mb-4">
                        If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
                    </p>
                    <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                        <p className="text-white font-semibold mb-2">MythicalSystems LTD</p>
                        <p>Email: <a href="mailto:contact@mythical.systems" className="text-purple-400 hover:text-purple-300">contact@mythical.systems</a></p>
                        <p>Discord: <a href="https://discord.mythical.systems" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">discord.mythical.systems</a></p>
                    </div>
                </section>
            </div>
        </LegalLayout>
    );
}
