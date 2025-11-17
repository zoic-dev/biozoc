// /app/products/page.js
import { Suspense } from "react";
import PageContent from "./PageContent";

// ⭐ Basic SEO Setup
export const metadata = {
    title: "Products | Biozoc Pharmaceuticals",
    description:
        "Explore a wide range of high-quality Ayurvedic and pharmaceutical products by Biozoc Pharmaceuticals. Safe, effective, and scientifically formulated.",
    keywords: [
        "Biozoc",
        "Biozoc Pharmaceuticals",
        "Ayurvedic products",
        "pharma products",
        "herbal products",
        "nutraceuticals",
        "health supplements"
    ],
    openGraph: {
        title: "Biozoc Pharmaceuticals – Products",
        description:
            "Discover premium Ayurvedic, herbal, and pharmaceutical products from Biozoc Pharmaceuticals.",
        url: "https://biozoc.com/products",
        siteName: "Biozoc Pharmaceuticals",
        images: [
            {
                url: "https://biozoc.com/og-products.jpg",
                width: 1200,
                height: 630,
                alt: "Biozoc Products",
            },
        ],
        type: "website",
    },
    alternates: {
        canonical: "https://biozoc.com/products",
    },
};

export default function Page() {
    return (
        <Suspense fallback={<div>Loading products...</div>}>
            <PageContent />
        </Suspense>
    );
}
