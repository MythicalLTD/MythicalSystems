import Script from 'next/script';

export function StructuredData() {
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'MythicalSystems LTD',
        url: 'https://docs.mythical.systems',
        logo: 'https://github.com/mythicalltd.png',
        description: 'MythicalSystems provides innovative open-source solutions for developers and hosting providers.',
        sameAs: [
            'https://github.com/mythicalltd',
            'https://discord.mythical.systems',
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            email: 'contact@mythical.systems',
            contactType: 'Customer Support',
        },
    };

    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'MythicalSystems',
        url: 'https://docs.mythical.systems',
        description: 'Open-source hosting solutions and developer tools',
        publisher: {
            '@type': 'Organization',
            name: 'MythicalSystems LTD',
        },
    };

    const softwareApplicationSchema = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'FeatherPanel',
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Linux',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
        },
        description: 'Modern and sleek alternative to Pterodactyl Panel',
    };

    return (
        <>
            <Script
                id="organization-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <Script
                id="website-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <Script
                id="software-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
            />
        </>
    );
}
