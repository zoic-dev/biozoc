"use client";

import { Box, Typography, Container, Chip } from "@mui/material";
import Link from "next/link";

export default function BlogContent({ post }) {
    return (
        <Box>
            {/* HERO IMAGE */}
            {post.featured_media_url && (
                <Box
                    sx={{
                        width: "100%",
                        height: { xs: 250, md: 380 },
                        backgroundImage: `url(${post.featured_media_url})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                ></Box>
            )}

            <Container maxWidth="md" sx={{ py: 5 }}>
                {/* Categories */}
                <Box mb={2} display="flex" gap={1} flexWrap="wrap">
                    {post.categories.map((cat) => (
                        <Link key={cat.id} href={`/blog/category/${cat.slug}/${cat.id}`}>
                            <Chip
                                label={cat.name}
                                sx={{
                                    backgroundColor: "#EC1C24",
                                    color: "#fff",
                                    fontWeight: 500,
                                    cursor: "pointer",
                                    "&:hover": {
                                        backgroundColor: "#c6060dff", // keep the same
                                        color: "#fff", // keep the same
                                    },
                                }}
                                clickable
                            />
                        </Link>
                    ))}
                </Box>


                {/* Title */}
                <Typography
                    variant="h3"
                    sx={{ fontWeight: 700, mb: 2, lineHeight: 1.2 }}
                >
                    {post.title}
                </Typography>

                {/* Meta */}
                <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                    Published on{" "}
                    {new Date(post.date).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}{" "}
                    • By {post.author?.name}
                </Typography>

                {/* Content */}
                <Typography
                    component="div"
                    sx={{
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                        "& img": {
                            maxWidth: "100%",
                            borderRadius: 2,
                            mt: 2,
                        },
                        "& p": {
                            mb: 2,
                        },
                    }}
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </Container>
        </Box>
    );
}
