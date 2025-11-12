"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    CircularProgress,
    Container,
    Grid,
    Stack,
    Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useSearchParams, useRouter } from "next/navigation";

export default function ProductsByCategoryPage({ categorySlug, categoryId }) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pageParam = Number(searchParams.get("page")) || 1;

    const [products, setProducts] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);

    const perPage = 20; // Products per page

    useEffect(() => {
        async function loadProducts() {
            if (!categorySlug) return;
            setLoading(true);

            try {
                const res = await fetch(
                    `/api/products-by-category/${categorySlug}?id=${categoryId}&page=${pageParam}&per_page=${perPage}`
                );
                const data = await res.json();

                console.log(data);

                if (data.products) {
                    setProducts(data.products);
                    setTotalPages(data.totalPages || 1);
                }
            } catch (err) {
                console.error("Error loading category products:", err);
            } finally {
                setLoading(false);
            }
        }

        loadProducts();
    }, [categorySlug, pageParam]);

    const handlePageChange = (newPage) => {
        router.push(`?page=${newPage}`, { scroll: false });
    };

    if (loading)
        return (
            <Container sx={{ py: 10, textAlign: "center" }}>
                <CircularProgress color="primary" size={48} />
                <Typography variant="h6" mt={3}>
                    Loading products...
                </Typography>
            </Container>
        );

    return (
        <Container sx={{ py: 8 }}>
            <Typography
                variant="h4"
                fontWeight={700}
                mb={5}
                textAlign="center"
                color="text.primary"
            >
                {categorySlug.replace(/-/g, " ").replace(/\b\w/g, (char, index) => index === 0 ? char.toUpperCase() : char.toLowerCase())} Products
            </Typography>

            {products.length === 0 ? (
                <Typography textAlign="center" color="text.secondary">
                    No products found in this category.
                </Typography>
            ) : (
                <>
                    <Grid container spacing={4}>
                        {products.map((product) => (
                            <Grid key={product.id} size={{ xs: 6, sm: 4, md: 3 }}>
                                <Link href={`/products/${product.slug}`} passHref>
                                    <Card
                                        sx={{
                                            height: "100%",
                                            borderRadius: 3,
                                            overflow: "hidden",
                                            boxShadow: 3,
                                            transition:
                                                "transform 0.25s ease, box-shadow 0.25s ease",
                                            "&:hover": {
                                                transform: "translateY(-5px)",
                                                boxShadow: 6,
                                            },
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={product.images?.[0]?.src || "/placeholder.jpg"}
                                            alt={product.name}
                                            sx={{
                                                objectFit: "contain",
                                                bgcolor: "#fafafa",
                                            }}
                                        />
                                        <CardContent>
                                            <Typography
                                                variant="subtitle1"
                                                fontWeight={600}
                                                gutterBottom
                                                noWrap
                                                title={product.name}
                                            >
                                                {product.name}
                                            </Typography>

                                            {product.short_description && (
                                                <Box
                                                    sx={{
                                                        fontSize: "0.85rem",
                                                        color: "text.secondary",
                                                        "& p": { m: 0 },
                                                        "& ul": { pl: 2, mt: 0, mb: 0 },
                                                        "& li": { lineHeight: 1.4 },
                                                        "& strong": { fontWeight: 600 },
                                                        overflow: "hidden",
                                                        display: "-webkit-box",
                                                        WebkitBoxOrient: "vertical",
                                                        WebkitLineClamp: 3,
                                                    }}
                                                    dangerouslySetInnerHTML={{
                                                        __html: product.short_description,
                                                    }}
                                                />
                                            )}
                                        </CardContent>
                                    </Card>
                                </Link>
                            </Grid>
                        ))}
                    </Grid>

                    {/* Pagination Controls */}
                    <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                        mt={6}
                    >
                        <Button
                            variant="outlined"
                            startIcon={<ArrowBackIcon />}
                            onClick={() => handlePageChange(pageParam - 1)}
                            disabled={pageParam === 1}
                            sx={{
                                borderColor: "#EC1C24",
                                color: "#EC1C24",
                                "&:hover": { backgroundColor: "#EC1C24", color: "#fff" },
                            }}
                        >
                            Previous
                        </Button>

                        <Typography variant="body1" fontWeight={600}>
                            Page {pageParam} of {totalPages}
                        </Typography>

                        <Button
                            variant="outlined"
                            endIcon={<ArrowForwardIcon />}
                            onClick={() => handlePageChange(pageParam + 1)}
                            disabled={pageParam === totalPages}
                            sx={{
                                borderColor: "#EC1C24",
                                color: "#EC1C24",
                                "&:hover": { backgroundColor: "#EC1C24", color: "#fff" },
                            }}
                        >
                            Next
                        </Button>
                    </Stack>
                </>
            )}
        </Container>
    );
}
