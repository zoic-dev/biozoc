// /app/api/blogs/route.js
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const page = Number(searchParams.get("page") || 1);
    const perPage = Number(searchParams.get("per_page") || 10);

    // Validate PAGE and PER_PAGE
    if (page < 1 || perPage < 1) {
      return NextResponse.json(
        { error: "Invalid pagination values" },
        { status: 400 }
      );
    }

    // Correct WP API base
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
    if (!baseUrl) {
      return NextResponse.json(
        { error: "NEXT_PUBLIC_SITE_URL not configured" },
        { status: 500 }
      );
    }

    // Correct WordPress posts endpoint
    const postsUrl = `${baseUrl}/wp-json/wp/v2/posts?status=publish&per_page=${perPage}&page=${page}&_embed`;

    // Basic Auth (app password)
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

    let response;

    try {
      response = await fetch(postsUrl, {
        headers: {
          "Content-Type": "application/json",
          ...authHeader,
        },
        next: { revalidate: 30 },
      });
    } catch (err) {
      return NextResponse.json(
        { error: "Failed to connect to WordPress API" },
        { status: 500 }
      );
    }

    // WordPress pagination errors (e.g., page > totalPages)
    if (response.status === 400 || response.status === 404) {
      return NextResponse.json({
        posts: [],
        totalPosts: 0,
        totalPages: 1,
        currentPage: 1,
      });
    }

    if (!response.ok) {
      return NextResponse.json(
        { error: `WordPress API failed with status ${response.status}` },
        { status: 500 }
      );
    }

    const data = await response.json();

    // Extract pagination headers safely
    const totalPosts = Number(response.headers.get("X-WP-Total") || 0);
    const totalPages = Number(response.headers.get("X-WP-TotalPages") || 1);

    // Map blog posts safely
    const posts = (data || []).map((post) => ({
      id: post.id,
      title: post.title?.rendered || "",
      excerpt: post.excerpt?.rendered || "",
      content: post.content?.rendered || "",
      date: post.date,
      slug: post.slug || "",
      featured_media_url:
        post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
      categories:
        post._embedded?.["wp:term"]?.[0]?.map((cat) => ({
          id: cat.id,
          name: cat.name,
          slug: cat.slug,
        })) || [],
    }));

    return NextResponse.json({
      posts,
      totalPosts,
      totalPages: totalPages || 1,
      currentPage: page,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Unexpected server error: " + err.message },
      { status: 500 }
    );
  }
}
