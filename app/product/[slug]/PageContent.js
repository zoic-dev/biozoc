"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
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
    Stack,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import { motion } from "framer-motion";
import ProductImages from "@/components/ProductImages";

export default function PageContent({ initialProduct, slug }) {
    const router = useRouter();

    const [product, setProduct] = useState(initialProduct);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // if (initialProduct) {
        //   // Already loaded from server → small delay for smooth UX
        //   setTimeout(() => setLoading(false), 200);
        //   return;
        // }

        async function loadProduct() {
            try {
                setLoading(true);
                const res = await fetch(`/api/product/${slug}`);
                const data = await res.json();

                if (!res.ok) throw new Error(data.error || "Failed to fetch product");
                setProduct(data);
            } catch (err) {
                console.error("Fetch error:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        loadProduct();
    }, [initialProduct, slug]);

    if (loading)
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

    if (error || !product)
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

    const {
        name,
        images,
        price_html,
        short_description,
        description,
        categories,
        sku,
    } = product;

    return (
        <Fade in>
            <Box
                sx={{
                    py: { xs: 4, md: 8 },
                    px: { xs: 2, md: 6 },
                    bgcolor: "linear-gradient(180deg, #ffffff, #f7f7f7)",
                }}
            >
                {/* Back Button */}
                <Box mb={3}>
                    <Button
                        startIcon={<ArrowBackIcon />}
                        variant="outlined"
                        color="inherit"
                        onClick={() => router.push("/products")}
                        sx={{
                            borderRadius: 50,
                            textTransform: "none",
                            fontWeight: 500,
                            px: 3,
                        }}
                    >
                        Back to Products
                    </Button>
                </Box>

                <Grid container spacing={6}>
                    {/* Product Image */}
                    <Grid size={{ xs: 12, md: 5 }}>
                        <ProductImages
                            images={
                                product && product.images && product.images.length > 0
                                    ? product.images
                                    : [
                                        {
                                            src: "/placeholder.jpg",
                                            alt: "No image available",
                                        },
                                    ]
                            }
                        />
                    </Grid>

                    {/* Product Info */}
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Stack spacing={2}>
                            <Typography
                                component="h1"
                                variant="h1"
                                fontWeight={700}
                                sx={{
                                    fontSize: {
                                        xs: "1.5rem",   // mobile  (≈ h6)
                                        sm: "1.75rem",  // small tablets
                                        md: "2rem",     // tablets (≈ h5)
                                        lg: "2.125rem", // desktop (≈ h4)
                                    },
                                    lineHeight: 1.3,
                                }}
                            >
                                {name}
                            </Typography>


                            {categories?.length > 0 && (
                                <Stack direction="row" spacing={1} flexWrap="wrap">
                                    {categories.map((cat) => (
                                        <Link
                                            key={cat.id}
                                            href={`/product/category/${cat.slug}/${cat.id}`}
                                            passHref
                                            style={{ textDecoration: "none" }}
                                        >
                                            <Chip
                                                label={cat.name}
                                                variant="outlined"
                                                clickable
                                                sx={{
                                                    fontSize: "0.9rem",
                                                    fontWeight: 500,
                                                    borderColor: "#1F6A36",
                                                    "&:hover": {
                                                        backgroundColor: "#f5f5f5",
                                                    },
                                                }}
                                            />
                                        </Link>
                                    ))}
                                </Stack>
                            )}

                            {sku && (
                                <Typography variant="body2" color="text.secondary">
                                    SKU: {sku}
                                </Typography>
                            )}

                            <Box
                                sx={{
                                    fontSize: 26,
                                    fontWeight: 700,
                                    color: "#1b5e20",
                                }}
                                dangerouslySetInnerHTML={{ __html: price_html }}
                            />

                            {short_description && (
                                <Box
                                    sx={{
                                        color: "text.secondary",
                                        fontSize: "1.05rem",
                                        lineHeight: 1.8,
                                    }}
                                    dangerouslySetInnerHTML={{ __html: short_description }}
                                />
                            )}

                            <Button
                                variant="contained"
                                size="large"
                                startIcon={<ShoppingCartIcon />}
                                component={Link}
                                href="/contact"
                                sx={{
                                    mt: 2,
                                    alignSelf: "flex-start",
                                    borderRadius: 50,
                                    px: 5,
                                    py: 1.8,
                                    fontSize: "1rem",
                                    fontWeight: 600,
                                    background: "linear-gradient(90deg, #d32f2f, #b71c1c)",
                                    boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
                                    "&:hover": {
                                        background: "linear-gradient(90deg, #b71c1c, #7f0000)",
                                        transform: "translateY(-2px)",
                                    },
                                }}
                            >
                                Enquire Now
                            </Button>
                        </Stack>
                    </Grid>
                </Grid>

                {/* Product Details Section */}
                <Divider sx={{ my: 6 }} />

                {description && (
                    <Box sx={{ maxWidth: "900px", mx: "auto" }}>
                        <Typography
                            variant="h4"
                            fontWeight={700}
                            mb={3}
                            textAlign="center"
                        >
                            Product Details
                        </Typography>

                        <Box
                            sx={{
                                color: "#444",
                                lineHeight: 1.9,
                                fontSize: "1.05rem",
                                "& h2, & h3": {
                                    fontWeight: 600,
                                    mt: 4,
                                    mb: 1,
                                },
                                "& ul": { pl: 3 },
                                "& li": { mb: 1 },
                            }}
                            dangerouslySetInnerHTML={{ __html: description }}
                        />
                    </Box>
                )}
            </Box>
        </Fade>
    );
}
