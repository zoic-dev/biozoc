// app/sitemap.js
export const dynamic = "force-dynamic";

/* ============================================================================ 
   🔵 FETCH ALL PRODUCTS (INCLUDING PAGINATION)
============================================================================ */
async function fetchAllProducts(wpUrl) {
  const consumerKey = process.env.WC_CONSUMER_KEY;
  const consumerSecret = process.env.WC_CONSUMER_SECRET;

  let page = 1;
  let allProducts = [];
  let batch = [];

  do {
    const res = await fetch(
      `${wpUrl}/wp-json/wc/v3/products?per_page=100&page=${page}&_fields=slug,date_modified`,
      {
        cache: "no-store",
        headers: {
          Authorization:
            "Basic " +
            Buffer.from(`${process.env.WP_USERNAME}:${process.env.WP_APP_PASSWORD}`).toString("base64"),
        },
      }
    );

    batch = await res.json();

    if (Array.isArray(batch) && batch.length > 0) {
      allProducts = [...allProducts, ...batch];
    }

    page++;
  } while (Array.isArray(batch) && batch.length === 100);

  return allProducts;
}


/* ============================================================================ 
   🔵 FETCH ALL PRODUCT CATEGORIES (WooCommerce REST API WITH AUTH)
============================================================================ */
async function fetchAllProductCategories(wpUrl) {
  const consumerKey = process.env.WC_CONSUMER_KEY;
  const consumerSecret = process.env.WC_CONSUMER_SECRET;

  let page = 1;
  let allCategories = [];
  let batch = [];

  do {
    const res = await fetch(
      `${wpUrl}/wp-json/wc/v3/products/categories?per_page=100&page=${page}&orderby=id&_fields=id,slug`,
      {
        cache: "no-store",
        headers: {
          Authorization:
            "Basic " +
            Buffer.from(`${process.env.WP_USERNAME}:${process.env.WP_APP_PASSWORD}`).toString("base64"),
        },
      }
    );

    batch = await res.json();
    if (Array.isArray(batch) && batch.length > 0) {
      allCategories = [...allCategories, ...batch];
    }

    page++;
  } while (Array.isArray(batch) && batch.length === 100);

  return allCategories;
}

/* ============================================================================ 
   🔵 FETCH ALL BLOGS
============================================================================ */
async function fetchAllBlogs(wpUrl) {
  let page = 1;
  let allBlogs = [];
  let batch = [];

  do {
    const res = await fetch(
      `${wpUrl}/wp-json/wp/v2/posts?per_page=100&page=${page}&_fields=slug,date`,
      { cache: "no-store" }
    );

    batch = await res.json();
    if (Array.isArray(batch) && batch.length > 0) {
      allBlogs = [...allBlogs, ...batch];
    }

    page++;
  } while (Array.isArray(batch) && batch.length === 100);

  return allBlogs;
}

/* ============================================================================ 
   🔵 FETCH ALL BLOG CATEGORIES
============================================================================ */
async function fetchAllBlogCategories(wpUrl) {
  const res = await fetch(
    `${wpUrl}/wp-json/wp/v2/categories?per_page=100&_fields=id,slug`,
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

  // 1️⃣ Static pages
  const staticPages = [
    "",
    "/about",
    "/contact",
    "/products",
    "/pcd-franchise",
    "/third-party-manufacturing",
    "/blog",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  // 2️⃣ Fetch dynamic products
  const products = await fetchAllProducts(wpUrl);
  const productUrls = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: product.modified || new Date(),
  }));

  // 3️⃣ Fetch product categories
  const productCategories = await fetchAllProductCategories(wpUrl);
  const productCategoryUrls = productCategories.map((cat) => ({
    url: `${baseUrl}/products/category/${cat.slug}/${cat.id}`,
    lastModified: new Date(),
  }));

  // 4️⃣ Fetch blogs
  const blogs = await fetchAllBlogs(wpUrl);
  const blogUrls = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: blog.date || new Date(),
  }));

  // 5️⃣ Fetch blog categories
  const blogCategories = await fetchAllBlogCategories(wpUrl);
  const blogCategoryUrls = blogCategories.map((cat) => ({
    url: `${baseUrl}/blog/category/${cat.slug}/${cat.id}`,
    lastModified: new Date(),
  }));

  // 6️⃣ Final sitemap array
  return [
    ...staticPages,
    ...productUrls,
    ...productCategoryUrls,
    ...blogUrls,
    ...blogCategoryUrls,
  ];
}
