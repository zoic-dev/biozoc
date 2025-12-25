import BlogContent from "./BlogContent";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/wp-json/wp/v2/posts?slug=${slug}&_embed`,
    {
      cache: "no-store",
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(
            `${process.env.WP_USERNAME}:${process.env.WP_APP_PASSWORD}`
          ).toString("base64"),
      },
    }
  );

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

  // -------------------------
  // Fetch MAIN blog
  // -------------------------
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/wp-json/wp/v2/posts?slug=${slug}&_embed`,
    {
      cache: "no-store",
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(
            `${process.env.WP_USERNAME}:${process.env.WP_APP_PASSWORD}`
          ).toString("base64"),
      },
    }
  );

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

  // -------------------------
  // Fetch RELATED blogs
  // -------------------------
  let relatedPosts = [];

  if (cleanedPost.categories.length > 0) {
    const catId = cleanedPost.categories[0].id;

    const relatedRes = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/wp-json/wp/v2/posts?categories=${catId}&exclude=${cleanedPost.id}&_embed&per_page=6`,
      {
        cache: "no-store",
        headers: {
          Authorization:
            "Basic " +
            Buffer.from(
              `${process.env.WP_USERNAME}:${process.env.WP_APP_PASSWORD}`
            ).toString("base64"),
        },
      }
    );

    relatedPosts = await relatedRes.json();
  }

  // Format related posts cleanly
  const formattedRelated = relatedPosts.map((p) => ({
    id: p.id,
    title: p.title?.rendered,
    slug: p.slug,
    excerpt: p.excerpt?.rendered,
    featured_media_url:
      p._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
  }));

  // -------------------------
  // RETURN FINAL PAGE
  // -------------------------
  return <BlogContent post={cleanedPost} related={formattedRelated} />;
}
