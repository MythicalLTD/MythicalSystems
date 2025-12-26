import { LegalLayout } from '@/components/legal/LegalLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | MythicalSystems',
    description: 'Read the MythicalSystems Terms of Service to understand the rules and guidelines for using our open-source products and services.',
    keywords: ['terms of service', 'terms and conditions', 'user agreement', 'MythicalSystems', 'legal terms', 'service terms'],
    authors: [{ name: 'MythicalSystems LTD' }],
    metadataBase: new URL('https://docs.mythical.systems'),
    alternates: {
        canonical: '/terms',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://docs.mythical.systems/terms',
        title: 'Terms of Service | MythicalSystems',
        description: 'Read the MythicalSystems Terms of Service to understand the rules and guidelines for using our services.',
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
        title: 'Terms of Service | MythicalSystems',
        description: 'Read the MythicalSystems Terms of Service.',
    },
    robots: {
        index: true,
        follow: true,
    },
};


export default function TermsPage() {
    return (
        <LegalLayout
            title="Terms of Service"
            description="Please read these terms carefully before using MythicalSystems services and products."
            lastUpdated="December 26, 2024"
        >
            <div className="space-y-8 text-gray-300">
                <section>
                    <h2 className="text-3xl font-bold text-white mb-4">Agreement to Terms</h2>
                    <p className="leading-relaxed">
                        By accessing or using any MythicalSystems services, websites, or products, you agree to be bound by these Terms of Service
                        and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-white mb-4">Use License</h2>
                    <p className="leading-relaxed mb-4">
                        Permission is granted to temporarily use MythicalSystems services for personal or commercial use. This license includes:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Access to our open-source projects under their respective licenses</li>
                        <li>Use of our services in accordance with their intended purpose</li>
                        <li>Modification and distribution of open-source code as permitted by project licenses</li>
                    </ul>

                    <h3 className="text-2xl font-semibold text-purple-300 mb-3 mt-6">Restrictions</h3>
                    <p className="leading-relaxed mb-4">You must not:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Use our services for any unlawful purpose or in violation of these terms</li>
                        <li>Attempt to gain unauthorized access to our systems or networks</li>
                        <li>Interfere with or disrupt the integrity or performance of our services</li>
                        <li>Remove or modify any copyright, trademark, or proprietary notices</li>
                        <li>Use our services to transmit malware, spam, or harmful content</li>
                        <li>Impersonate MythicalSystems or any of our representatives</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-white mb-4">User Accounts</h2>
                    <p className="leading-relaxed mb-4">
                        When you create an account with us, you must provide accurate, complete, and current information.
                        You are responsible for:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Maintaining the confidentiality of your account credentials</li>
                        <li>All activities that occur under your account</li>
                        <li>Notifying us immediately of any unauthorized use</li>
                        <li>Ensuring your account information remains up to date</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-white mb-4">Open Source Projects</h2>
                    <p className="leading-relaxed">
                        Many of our projects are open source and licensed under various open-source licenses (MIT, GPL, etc.).
                        Each project's specific license terms apply to the use, modification, and distribution of that project's code.
                        These Terms of Service apply to the use of our services and platforms, while individual project licenses govern the code itself.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-white mb-4">Intellectual Property</h2>
                    <p className="leading-relaxed">
                        The MythicalSystems name, logo, and branding are trademarks of MythicalSystems LTD. Unless otherwise stated,
                        all content, features, and functionality on our services are owned by MythicalSystems and are protected by
                        international copyright, trademark, and other intellectual property laws.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-white mb-4">User-Generated Content</h2>
                    <p className="leading-relaxed mb-4">
                        By submitting content to our services (including but not limited to code contributions, forum posts, and support tickets), you grant us:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>A worldwide, non-exclusive, royalty-free license to use, reproduce, and display your content</li>
                        <li>The right to modify your content for technical or operational purposes</li>
                        <li>The ability to sublicense these rights to service providers</li>
                    </ul>
                    <p className="leading-relaxed mt-4">
                        You retain all ownership rights to your content and are responsible for ensuring you have the necessary rights to share it.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-white mb-4">Service Availability</h2>
                    <p className="leading-relaxed">
                        We strive to maintain high availability of our services but do not guarantee uninterrupted access.
                        We reserve the right to modify, suspend, or discontinue any part of our services at any time,
                        with or without notice, for maintenance, updates, or other reasons.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-white mb-4">Disclaimer of Warranties</h2>
                    <p className="leading-relaxed">
                        Our services are provided "as is" and "as available" without any warranties of any kind, either express or implied.
                        We do not warrant that our services will be error-free, secure, or uninterrupted. You use our services at your own risk.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-white mb-4">Limitation of Liability</h2>
                    <p className="leading-relaxed">
                        To the maximum extent permitted by law, MythicalSystems shall not be liable for any indirect, incidental, special,
                        consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly,
                        or any loss of data, use, goodwill, or other intangible losses resulting from your use of our services.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-white mb-4">Indemnification</h2>
                    <p className="leading-relaxed">
                        You agree to indemnify and hold harmless MythicalSystems, its affiliates, and their respective officers, directors,
                        employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from
                        your use of our services or violation of these terms.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-white mb-4">Termination</h2>
                    <p className="leading-relaxed">
                        We reserve the right to terminate or suspend your access to our services immediately, without prior notice or liability,
                        for any reason, including but not limited to breach of these Terms of Service. Upon termination, your right to use
                        our services will immediately cease.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-white mb-4">Governing Law</h2>
                    <p className="leading-relaxed">
                        These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which
                        MythicalSystems LTD is registered, without regard to its conflict of law provisions.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-white mb-4">Changes to Terms</h2>
                    <p className="leading-relaxed">
                        We reserve the right to modify or replace these Terms at any time. We will provide notice of any material changes
                        by updating the "Last updated" date. Your continued use of our services after any changes constitutes acceptance
                        of the new Terms.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-white mb-4">Contact Information</h2>
                    <p className="leading-relaxed mb-4">
                        If you have any questions about these Terms of Service, please contact us:
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
