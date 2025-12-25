// /product/[slug]/page.js
import PageContent from "./PageContent";
import YoastHead from "./YoastHead"; // Client component to inject SEO

// Fetch product data
async function getProduct(slug) {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

  const res = await fetch(`${baseURL}/api/product/${slug}`, {
    cache: "no-store",
  });

  return res.json();
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product || !product.yoast_head) {
    return {
      title: "Product",
      description: "Product details",
    };
  }

  const yoast = product.yoast_head;

  const title =
    yoast.match(/<title>(.*?)<\/title>/)?.[1] ?? "Product";

  const description =
    yoast.match(/<meta name="description" content="(.*?)"/)?.[1] ?? "";

  return {
    title,
    description,
  };
}


export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = await getProduct(slug);

  return (
    <>
      {/* Inject full Yoast SEO tags */}
      <YoastHead html={product.yoast_head} />

      {/* Render actual product page */}
      <PageContent initialProduct={product} slug={slug} />
    </>
  );
}
