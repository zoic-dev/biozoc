"use client";

import ProductsByCategoryPage from "@/components/ProductsByCategoryPage";
import { useParams } from "next/navigation";

export default function CategoryPage() {
    const { slug, id } = useParams();

    console.log(slug, id);

    return <ProductsByCategoryPage categorySlug={slug} categoryId={id} />;
}
