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
    ]
};

export default function Page() {
    return (
        <Suspense fallback={<div>Loading products...</div>}>
            <PageContent />
        </Suspense>
    );
}
