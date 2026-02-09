// /app/products/page.js
import { Suspense } from "react";
import PageContent from "./PageContent";

// ⭐ Basic SEO Setup
export const metadata = {
    title: "PCD Pharma Products Range for Franchise",
    description:
        "Explore quality PCD pharma products including tablets, capsules, syrups, ointments and injectables for ethical franchise growth and strong market demand",
    keywords: [
        "pcd pharma products",
        "pharma products for franchise",
        "medicine product range franchise",
        "pharma medicines for franchise"
    ]
};

export default function Page() {
    return (
        <Suspense fallback={<div>Loading products...</div>}>
            <PageContent />
        </Suspense>
    );
}
