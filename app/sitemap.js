export const dynamic = "force-dynamic";

/* ============================================================================
   🔵 FETCH ALL PRODUCTS (Including Pagination)
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
        `${wpUrl}/wp-json/wc/v2/products/categories?per_page=100&_fields=slug,id`,
        {
            headers: {
                Authorization: `Basic ${Buffer.from(
                    `${process.env.WP_USERNAME}:${process.env.WP_APP_PASSWORD}`
                ).toString("base64")}`,
                cache: "no-store",
            },
        }
    );

    const categories = await response.json();
    return Array.isArray(categories) ? categories : [];
}

/* ============================================================================
   🔵 FETCH ALL BLOG POSTS
============================================================================ */
async function fetchAllBlogs(wpUrl) {
    let page = 1;
    let blogs = [];
    let batch = [];

    do {
        const res = await fetch(
            `${wpUrl}/wp-json/wp/v2/posts?per_page=100&page=${page}&_fields=slug,modified`,
            { cache: "no-store" }
        );

        batch = await res.json();

        if (Array.isArray(batch) && batch.length > 0) {
            blogs = [...blogs, ...batch];
        }

        page++;
    } while (Array.isArray(batch) && batch.length === 100);

    return blogs;
}

/* ============================================================================
   🔵 FETCH ALL BLOG CATEGORIES
============================================================================ */
async function fetchAllBlogCategories(wpUrl) {
    const res = await fetch(
        `${wpUrl}/wp-json/wp/v2/categories?per_page=100&_fields=slug,id`,
        { cache: "no-store" }
    );

    const categories = await res.json();
    return Array.isArray(categories) ? categories : [];
}

/* ============================================================================
   🔵 MAIN SITEMAP FUNCTION
============================================================================ */
export default async function sitemap() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const wpUrl = process.env.NEXT_PUBLIC_SITE_URL;

    /* ------------------------------------------------------
       1. Fetch Dynamic Data
    ------------------------------------------------------ */
    const [products, productCategories, blogs, blogCategories] = await Promise.all([
        fetchAllProducts(wpUrl),
        fetchAllCategories(wpUrl),
        fetchAllBlogs(wpUrl),
        fetchAllBlogCategories(wpUrl),
    ]);

    /* ------------------------------------------------------
       2. Static Pages
    ------------------------------------------------------ */
    const staticPages = [
        "",
        "/about",
        "/contact",
        "/products",
        "/pcd-franchise",
        "/third-party-manufacturing",
        "/blog",
        "/frequently-asked-questions",
        "/terms-and-conditions",
        "/privacy-policy",
        "/warranty-and-services",
    ].map((path) => ({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
    }));

    /* ------------------------------------------------------
       3. Dynamic Product URLs
    ------------------------------------------------------ */
    const productUrls = products.map((product) => ({
        url: `${baseUrl}/product/${product.slug}`,
        lastModified: product.modified || new Date(),
    }));

    /* ------------------------------------------------------
       4. Dynamic Product Category URLs
    ------------------------------------------------------ */
    const productCategoryUrls = productCategories.map((category) => ({
        url: `${baseUrl}/product/category/${category.slug}/${category.id}`,
        lastModified: new Date(),
    }));

    /* ------------------------------------------------------
       5. Dynamic Blog URLs
          Follows: /blog/[slug]
    ------------------------------------------------------ */
    const blogUrls = blogs.map((blog) => ({
        url: `${baseUrl}/blog/${blog.slug}`,
        lastModified: blog.modified || new Date(),
    }));

    /* ------------------------------------------------------
       6. Dynamic Blog Category URLs
          Follows: /blog/category/[slug]/[id]
    ------------------------------------------------------ */
    const blogCategoryUrls = blogCategories.map((category) => ({
        url: `${baseUrl}/blog/category/${category.slug}/${category.id}`,
        lastModified: new Date(),
    }));

    /* ------------------------------------------------------
       7. Final Sitemap Output
    ------------------------------------------------------ */
    return [
        ...staticPages,
        ...productUrls,
        ...productCategoryUrls,
        ...blogUrls,
        ...blogCategoryUrls,
    ];
}
