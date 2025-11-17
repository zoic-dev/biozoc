// app/sitemap.js
export const dynamic = "force-dynamic";

/* ============================================================================
   🔵 FETCH ALL PRODUCTS (Including Pagination)
   This will fetch ALL products even if you have 300+, 500+, or 1000+ items.
============================================================================ */
async function fetchAllProducts(wpUrl) {
    let page = 1;
    let allProducts = [];
    let batch = [];

    do {
        const response = await fetch(
            `${wpUrl}/wp-json/wp/v2/product?per_page=100&page=${page}&_fields=slug,modified`,
            { cache: "no-store" }
        );

        batch = await response.json();

        if (Array.isArray(batch) && batch.length > 0) {
            allProducts = [...allProducts, ...batch];
        }

        page++;
    } while (Array.isArray(batch) && batch.length === 100);

    return allProducts;
}

/* ============================================================================
   🔵 FETCH ALL PRODUCT CATEGORIES
============================================================================ */
async function fetchAllCategories(wpUrl) {
    const response = await fetch(
        `${wpUrl}/wp-json/wp/v2/products/categories?per_page=100&_fields=slug,id`,
        { cache: "no-store" }
    );

    const categories = await response.json();
    return Array.isArray(categories) ? categories : [];
}

/* ============================================================================
   🔵 MAIN SITEMAP FUNCTION
============================================================================ */
export default async function sitemap() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const wpUrl = process.env.NEXT_PUBLIC_SITE_URL;

    /* ------------------------------------------------------
       1. Fetch ALL PRODUCTS
    ------------------------------------------------------ */
    const products = await fetchAllProducts(wpUrl);

    /* ------------------------------------------------------
       2. Fetch ALL CATEGORIES
    ------------------------------------------------------ */
    const categories = await fetchAllCategories(wpUrl);

    /* ------------------------------------------------------
       3. Static Pages Sitemap
    ------------------------------------------------------ */
    const staticPages = [
        "",
        "/about",
        "/contact",
        "/products",
        "/pcd-franchise",
        "/third-party-manufacturing",
    ].map((path) => ({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
    }));

    /* ------------------------------------------------------
       4. Dynamic Product URLs
    ------------------------------------------------------ */
    const productUrls = products.map((product) => ({
        url: `${baseUrl}/products/${product.slug}`,
        lastModified: product.modified || new Date(),
    }));

    /* ------------------------------------------------------
       5. Dynamic Category URLs
    ------------------------------------------------------ */
    const categoryUrls = categories.map((category) => ({
        url: `${baseUrl}/products/category/${category.slug}/${category.id}`,
        lastModified: new Date(),
    }));

    /* ------------------------------------------------------
       6. Final Export
    ------------------------------------------------------ */
    return [...staticPages, ...productUrls, ...categoryUrls];
}
