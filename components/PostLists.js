"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CircularProgress,
  Button,
} from "@mui/material";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function PostsList({ initialPage = 1 }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(1);

  const perPage = 6;

  const fetchPosts = async (page) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/blogs?page=${page}&per_page=${perPage}`);
      const data = await res.json();

      if (!res.ok) throw new Error(data?.error || "Failed to fetch posts");

      setPosts(data.posts || []);
      setTotalPages(data.totalPages || 1);
    } catch (err) {
      console.error("Fetch error:", err?.message ?? err);
      setPosts([]);
      setTotalPages(1);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage]);

  const noPosts = posts.length === 0;

  return (
    <Box p={4}>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
        Latest Blogs
      </Typography>

      {loading ? (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : noPosts ? (
        <Typography>No posts found.</Typography>
      ) : (
        <Grid container spacing={4}>
          {posts.map((post) => (
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
                <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                  <CardActionArea sx={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "stretch" }}>
                    {post.featured_media_url && (
                      <CardMedia
                        component="img"
                        image={post.featured_media_url}
                        alt={post.title || "Post image"}
                        sx={{
                          width: "100%",
                          height: 220,
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
      )}

      {/* Pagination */}
      {!loading && (
        <Box display="flex" justifyContent="center" mt={4} gap={2} alignItems="center">
          <Button
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            sx={{
              borderColor: "#EC1C24",
              color: "#EC1C24",
              "&:hover": { backgroundColor: "#EC1C24", color: "#fff" },
            }}
          >
            Previous
          </Button>

          <Typography variant="body1" display="flex" alignItems="center">
            Page {noPosts ? 0 : currentPage} of {noPosts ? 0 : totalPages}
          </Typography>

          <Button
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage >= totalPages}
            sx={{
              borderColor: "#EC1C24",
              color: "#EC1C24",
              "&:hover": { backgroundColor: "#EC1C24", color: "#fff" },
            }}
          >
            Next
          </Button>
        </Box>
      )}
    </Box>
  );
}
