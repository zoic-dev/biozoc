"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
    Box,
    Typography,
    Grid,
    Button,
    CircularProgress,
    Paper,
    Divider,
    Fade,
    Chip,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";

export default function ProductPage() {
    const { slug } = useParams();
    const router = useRouter();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!slug) return;

        async function loadProduct() {
            try {
                setLoading(true);

                const res = await fetch(`/api/product/${slug}`);
                const data = await res.json();

                if (!res.ok) throw new Error(data.error || "Failed to fetch product");
                setProduct(data);
            } catch (err) {
                console.error("Error loading product:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        loadProduct();
    }, [slug]);

    if (loading) {
        return (
            <Box
                sx={{
                    minHeight: "80vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "#fafafa",
                }}
            >
                <CircularProgress size={40} />
            </Box>
        );
    }

    if (error || !product) {
        return (
            <Box
                sx={{
                    minHeight: "80vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "#fafafa",
                }}
            >
                <Typography color="error">{error || "Product not found."}</Typography>
            </Box>
        );
    }

    const { name, images, price_html, short_description, description, categories, sku } = product;

    return (
        <Fade in>
            <Box sx={{ py: 6, px: { xs: 2, md: 8 }, bgcolor: "#fff" }}>
                {/* Back Button */}
                <Button
                    startIcon={<ArrowBackIcon />}
                    variant="outlined"
                    color="error"
                    sx={{ mb: 4 }}
                    onClick={() => router.push("/products")}
                >
                    Back to Products
                </Button>

                <Grid container spacing={6} alignItems="center">
                    {/* Image Section */}
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Paper
                            elevation={3}
                            sx={{
                                borderRadius: 4,
                                overflow: "hidden",
                                p: 2,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                bgcolor: "#f9f9f9",
                            }}
                        >
                            <img
                                src={images?.[0]?.src || "/placeholder.png"}
                                alt={name}
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    objectFit: "contain",
                                    transition: "transform 0.4s ease",
                                }}
                                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                            />
                        </Paper>
                    </Grid>

                    {/* Info Section */}
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Typography variant="h4" fontWeight={700} mb={2}>
                            {name}
                        </Typography>

                        {categories?.length > 0 && (
                            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                                {categories.map((cat) => (
                                    <Link
                                        key={cat.id}
                                        href={`/products/category/${cat.slug}/${cat.id}`}
                                        passHref
                                        style={{
                                            textDecoration: "none", // no underline
                                        }}
                                    >
                                        <Chip
                                            label={cat.name}
                                            color="default"
                                            clickable
                                            sx={{
                                                cursor: "pointer",
                                                "&:hover": {
                                                    backgroundColor: "#e0e0e0",
                                                },
                                            }}
                                        />
                                    </Link>
                                ))}
                            </Box>
                        )}

                        {sku && (
                            <Typography variant="body2" color="text.secondary" mb={1}>
                                SKU: {sku}
                            </Typography>
                        )}

                        <Box
                            sx={{ fontSize: 22, fontWeight: 600, color: "#2e7d32", mb: 3 }}
                            dangerouslySetInnerHTML={{ __html: price_html }}
                        />

                        {short_description && (
                            <Box
                                sx={{ color: "#555", mb: 4 }}
                                dangerouslySetInnerHTML={{ __html: short_description }}
                            />
                        )}

                        <Button
                            variant="contained"
                            size="large"
                            startIcon={<ShoppingCartIcon />}
                            sx={{
                                bgcolor: "#d32f2f",
                                fontWeight: 600,
                                px: 4,
                                py: 1.5,
                                "&:hover": { bgcolor: "#b71c1c" },
                            }}
                        >
                            Enquire Now
                        </Button>
                    </Grid>
                </Grid>

                {/* Divider and Full Description */}
                <Divider sx={{ my: 6 }} />

                {description && (
                    <Box sx={{ maxWidth: "900px", mx: "auto" }}>
                        <Typography variant="h5" fontWeight={700} mb={2}>
                            Product Details
                        </Typography>
                        <Box
                            sx={{
                                color: "#444",
                                lineHeight: 1.8,
                                "& h2": { fontSize: "1.3rem", fontWeight: 600, mt: 3 },
                                "& ul": { pl: 3 },
                            }}
                            dangerouslySetInnerHTML={{ __html: description }}
                        />
                    </Box>
                )}
            </Box>
        </Fade>
    );
}
