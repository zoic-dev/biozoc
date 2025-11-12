// /app/api/products/route.js
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") || 1;
  const perPage = searchParams.get("per_page") || 20;

  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/wp-json/wc/v3/products?status=publish&per_page=${perPage}&page=${page}`;

  const authString = Buffer.from(
    `${process.env.WP_USERNAME}:${process.env.WP_APP_PASSWORD}`
  ).toString("base64");

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Basic ${authString}`,
      },
      next: { revalidate: 60 }, // optional ISR
    });

    if (!res.ok) {
      throw new Error(`WooCommerce API returned ${res.status}`);
    }

    const data = await res.json();

    // Parse pagination headers from WooCommerce (total pages, total products)
    const totalProducts = res.headers.get("X-WP-Total");
    const totalPages = res.headers.get("X-WP-TotalPages");

    return NextResponse.json({
      products: data,
      totalProducts: Number(totalProducts),
      totalPages: Number(totalPages),
      currentPage: Number(page),
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
