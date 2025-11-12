import { NextResponse } from "next/server";

export async function GET(req, context) {
    const params = await context?.params;
    const slug = params?.slug;
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const page = searchParams.get("page") || 1;
    const perPage = searchParams.get("per_page") || 8;

    if (!slug) {
        return NextResponse.json({ error: "Missing category slug" }, { status: 400 });
    }

    try {
        // WooCommerce categories typically require category ID — if your API supports slug directly, keep this
        const url = `${process.env.NEXT_PUBLIC_SITE_URL}/wp-json/wc/v3/products?category=${id}&per_page=${perPage}&page=${page}`;

        const response = await fetch(url, {
            headers: {
                Authorization: `Basic ${Buffer.from(
                    `${process.env.WP_USERNAME}:${process.env.WP_APP_PASSWORD}`
                ).toString("base64")}`,
            },
            cache: "no-store",
        });

        if (!response.ok) {
            throw new Error(`WooCommerce API error: ${response.statusText}`);
        }

        const products = await response.json();

        // WooCommerce provides total pages in headers
        const totalPages = Number(response.headers.get("x-wp-totalpages")) || 1;

        return NextResponse.json({ products, totalPages });
    } catch (error) {
        console.error("❌ API route error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
