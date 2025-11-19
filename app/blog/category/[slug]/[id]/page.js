import BlogCategoryClient from "./BlogCategoryClient";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  return {
    title: `Category: ${slug} | Blogs`,
    description: `Read blogs under ${slug} category`,
  };
}

export default async function CategoryPage({ params, searchParams }) {
  const { slug, id } = await params;
  const page = searchParams?.page || 1;

  // Fetch posts from our API
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs/category/${id}?page=${page}`,
    { cache: "no-store" }
  );

  const data = await res.json();

  return (
    <BlogCategoryClient
      posts={data.posts || []}
      slug={slug}
      id={id}
      currentPage={data.currentPage}
    />
  );
}
