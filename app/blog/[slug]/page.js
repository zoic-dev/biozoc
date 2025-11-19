import BlogContent from "./BlogContent";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/wp-json/wp/v2/posts?slug=${slug}&_embed`, {
    cache: "no-store",
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(
          `${process.env.WP_USERNAME}:${process.env.WP_APP_PASSWORD}`
        ).toString("base64"),
    },
  });

  const data = await res.json();
  const post = data[0];

  if (!post) {
    return {
      title: "Blog Not Found | ZocVeda",
    };
  }

  return {
    title: post.yoast_head_json?.title || post.title?.rendered,
    description: post.yoast_head_json?.description || post.excerpt?.rendered,
    openGraph: {
      title: post.title?.rendered,
      images: [
        post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
          "/default-og.jpg",
      ],
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;

  // Fetch blog details
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/wp-json/wp/v2/posts?slug=${slug}&_embed`, {
    cache: "no-store",
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(
          `${process.env.WP_USERNAME}:${process.env.WP_APP_PASSWORD}`
        ).toString("base64"),
    },
  });

  const data = await res.json();
  const post = data[0];

  if (!post) {
    return <div>Blog not found</div>;
  }

  const cleanedPost = {
    id: post.id,
    title: post.title?.rendered || "Biozoc Inc. - Blog Post",
    content: post.content?.rendered || "",
    excerpt: post.excerpt?.rendered || "",
    date: post.date,
    slug: post.slug,
    featured_media_url:
      post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
    author: {
      name: post._embedded?.author?.[0]?.name || "Admin",
    },
    categories:
      post._embedded?.["wp:term"]?.[0]?.map((cat) => ({
        id: cat.id,
        name: cat.name,
        slug: cat.slug,
      })) || [],
  };

  return <BlogContent post={cleanedPost} />;
}
