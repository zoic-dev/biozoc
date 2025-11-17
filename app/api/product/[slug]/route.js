// app/api/product/[slug]/route.js
import { NextResponse } from "next/server";

export async function GET(req, context) {
  const params = await context?.params;
  const slug = params?.slug;

  if (!slug) {
    console.error("Missing slug param in API route");
    return NextResponse.json({ error: "Missing product slug" }, { status: 400 });
  }

  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/wp-json/wc/v3/products?slug=${slug}&status=publish`;

  const authString = Buffer.from(
    `${process.env.WP_USERNAME}:${process.env.WP_APP_PASSWORD}`
  ).toString("base64");

  try {
    const res = await fetch(url, {
      headers: { Authorization: `Basic ${authString}` },
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error(`WooCommerce API returned ${res.status}`);
    }

    const data = await res.json();

    if (!data || data.length === 0) {
      console.warn(`⚠️ No product found for slug: ${slug}`);
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    console.log(`Product fetched successfully for slug: ${slug}`);
    return NextResponse.json(data[0]);
  } catch (error) {
    console.error("Product API Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
