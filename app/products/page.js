// /app/products/page.js
import { Suspense } from "react";
import PageContent from "./PageContent";

export default function Page() {
    return (
        <Suspense fallback={<div>Loading products...</div>}>
            <PageContent />
        </Suspense>
    );
}
