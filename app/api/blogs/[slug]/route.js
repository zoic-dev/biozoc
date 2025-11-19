// /app/api/blogs/[slug]/route.js
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const {slug} = await params;

    if (!slug) {
      return NextResponse.json(
        { error: "Slug is required" },
        { status: 400 }
      );
    }

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

    if (!baseUrl) {
      return NextResponse.json(
        { error: "NEXT_PUBLIC_SITE_URL missing" },
        { status: 500 }
      );
    }

    const url = `${baseUrl}/wp-json/wp/v2/posts?slug=${slug}&status=publish&_embed`;

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

    const response = await fetch(url, {
      headers: { "Content-Type": "application/json", ...authHeader },
      next: { revalidate: 30 },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch blog" },
        { status: response.status }
      );
    }

    const data = await response.json();

    if (!data.length) {
      return NextResponse.json(
        { error: "Blog not found" },
        { status: 404 }
      );
    }

    const post = data[0];

    const cleanPost = {
      id: post.id,
      title: post.title?.rendered || "",
      content: post.content?.rendered || "",
      excerpt: post.excerpt?.rendered || "",
      date: post.date,
      slug: post.slug,
      featured_media_url:
        post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
      author: {
        name:
          post._embedded?.author?.[0]?.name ||
          "Admin",
      },
      categories:
        post._embedded?.["wp:term"]?.[0]?.map((cat) => ({
          id: cat.id,
          name: cat.name,
          slug: cat.slug,
        })) || [],
    };

    return NextResponse.json({ post: cleanPost });
  } catch (err) {
    return NextResponse.json(
      { error: "Server Error: " + err.message },
      { status: 500 }
    );
  }
}
