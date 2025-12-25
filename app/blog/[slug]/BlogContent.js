"use client";

import { Box, Typography, Container, Chip, Grid, Card, CardActionArea, CardMedia, CardContent } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function BlogContent({ post, related }) {
    return (
        <Box>
            {/* HERO IMAGE */}
            {post.featured_media_url && (
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",    // centers the image
                    }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            maxWidth: { xs: "100%", md: "900px" },  // limit width on desktop
                            maxHeight: { xs: "none", md: 450 },     // limit height on desktop
                            overflow: "hidden",
                        }}
                    >
                        <Image
                            src={post.featured_media_url}
                            alt={post.title?.rendered || "Hero Image"}
                            width={1920}
                            height={1080}
                            priority
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "contain",
                                display: "block",
                            }}
                        />
                    </Box>
                </Box>
            )}

            <Container maxWidth="md" sx={{ pt: 5, pb: 2 }}>
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
                    sx={{
                        fontWeight: 700,
                        mb: 2,
                        lineHeight: 1.25,
                        fontSize: {
                            xs: "1.6rem",   // mobile
                            sm: "1.9rem",   // small tablets
                            md: "2.2rem",   // desktop start
                            lg: "2.6rem",   // larger screens
                        },
                    }}
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

                        /* Images inside content */
                        "& img": {
                            maxWidth: "100%",
                            borderRadius: 2,
                            width:'100%',
                            height:"auto",
                            mt: 2,
                        },

                        /* Paragraphs */
                        "& p": {
                            mb: 2,
                        },

                        /* LINKS inside blog content */
                        "& a": {
                            color: "#EC1C24",              // your brand red
                            fontWeight: 500,
                            textDecoration: "none",
                            borderBottom: "1px solid transparent",
                            transition: "all 0.25s ease",
                        },
                        "& a:hover": {
                            color: "#c6060d",              // darker red hover
                            borderBottom: "1px solid #c6060d",
                        },

                        /* Make external links icon-visible if needed */
                        "& a[target='_blank']::after": {
                            content: '" ↗"',
                            fontSize: "0.85em",
                        },
                    }}
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </Container>

            <Container maxWidth="lg" sx={{ mb: 4 }}>
                {/* RELATED BLOGS */}
                {related && related.length > 0 && (
                    <Box mt={8}>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
                            Related Blogs
                        </Typography>

                        <Grid container spacing={4}>
                            {related.map((post) => (
                                <Grid key={post.id} size={{ xs: 12, sm: 6, md: 4 }}>
                                    <Card
                                        sx={{
                                            height: "100%",
                                            borderRadius: 3,
                                            overflow: "hidden",
                                            boxShadow: "0px 2px 10px rgba(0,0,0,0.08)",
                                            transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                            "&:hover": {
                                                transform: "translateY(-6px)",
                                                boxShadow: "0px 10px 25px rgba(0,0,0,0.15)",
                                            },
                                        }}
                                    >
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            style={{ textDecoration: "none" }}
                                        >
                                            <CardActionArea
                                                sx={{
                                                    height: "100%",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "stretch",
                                                }}
                                            >
                                                {post.featured_media_url && (
                                                    <CardMedia
                                                        component="img"
                                                        image={post.featured_media_url}
                                                        alt={post.title}
                                                        sx={{
                                                            width: "100%",
                                                            height: "auto",
                                                            objectFit: "cover",
                                                        }}
                                                    />
                                                )}

                                                <CardContent sx={{ flexGrow: 1, p: 2.5 }}>
                                                    <Typography
                                                        variant="h6"
                                                        sx={{
                                                            mb: 1,
                                                            fontWeight: 700,
                                                            lineHeight: 1.3,
                                                            fontSize: "1.05rem",
                                                        }}
                                                    >
                                                        {post.title}
                                                    </Typography>

                                                    <Typography
                                                        variant="body2"
                                                        color="text.secondary"
                                                        dangerouslySetInnerHTML={{ __html: post.excerpt || "" }}
                                                        sx={{
                                                            display: "-webkit-box",
                                                            WebkitLineClamp: 3,
                                                            WebkitBoxOrient: "vertical",
                                                            overflow: "hidden",
                                                        }}
                                                    />
                                                </CardContent>
                                            </CardActionArea>
                                        </Link>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                )}
            </Container>
        </Box>
    );
}
