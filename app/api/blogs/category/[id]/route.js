import { NextResponse } from "next/server";

export async function GET(req, context) {
  try {
    const params = await context?.params;
    const id = params?.id;
    const { searchParams } = new URL(req.url);
    const page = Number(searchParams.get("page") || 1);
    const perPage = Number(searchParams.get("per_page") || 10);

    if (!id) {
      return NextResponse.json({ error: "Category ID missing" }, { status: 400 });
    }

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
    const postsUrl = `${baseUrl}/wp-json/wp/v2/posts?categories=${id}&status=publish&per_page=${perPage}&page=${page}&_embed`;

    const authHeader =
      process.env.WP_USERNAME && process.env.WP_APP_PASSWORD
        ? {
          Authorization:
            "Basic " +
            Buffer.from(
              `${process.env.WP_USERNAME}:${process.env.WP_APP_PASSWORD}`
            ).toString("base64"),
        }
        : {};

    const response = await fetch(postsUrl, {
      headers: { "Content-Type": "application/json", ...authHeader },
      next: { revalidate: 30 },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch category posts" },
        { status: response.status }
      );
    }

    const data = await response.json();

    const posts = (data || []).map((post) => ({
      id: post.id,
      title: post.title?.rendered || "",
      excerpt: post.excerpt?.rendered || "",
      date: post.date,
      slug: post.slug,
      featured_media_url:
        post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
    }));

    return NextResponse.json({
      posts,
      currentPage: page,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Unexpected server error: " + err.message },
      { status: 500 }
    );
  }
}
