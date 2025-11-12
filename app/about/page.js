import PageContent from "./PageContent";

export const metadata = {
    title: "About Biozoc Inc. | Leading PCD Pharma Franchise Company in India",
    description:
        "Learn about Biozoc Inc., the PCD division of Zoic Group — a trusted name in India's pharmaceutical industry for over 35 years. Discover our mission, vision, and commitment to quality in healthcare and nutraceutical manufacturing.",
    keywords: [
        "Biozoc Inc",
        "About Biozoc",
        "PCD Pharma Franchise Company",
        "Pharma Manufacturing in India",
        "Pharmaceutical Company Chandigarh",
        "Nutraceutical Manufacturing",
        "WHO-GMP Certified Pharma Company",
        "ISO Certified Pharma Company",
        "Zoic Group",
        "Top Pharma Franchise Company in India"
    ],
    openGraph: {
        title: "About Biozoc Inc. | Trusted PCD Pharma Franchise Company in India",
        description:
            "Know Biozoc Inc., part of Zoic Group — a WHO-GMP and ISO-certified pharma company delivering high-quality formulations and franchise opportunities across India.",
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/about-us`,
        siteName: "Biozoc Inc.",
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/about-biozoc.jpg`,
                width: 1200,
                height: 630,
                alt: "Biozoc Inc. - Leading PCD Pharma Franchise Company in India",
            },
        ],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Biozoc Inc. | PCD Pharma Franchise Company in India",
        description:
            "Biozoc Inc. is a division of Zoic Group — delivering innovation, research-based formulations, and trusted franchise opportunities in India.",
        images: [`${process.env.NEXT_PUBLIC_SITE_URL}/images/about-biozoc.jpg`],
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/about-us`,
    },
};


export default function About() {
    return (
        <>
            <PageContent />
        </>
    )
}