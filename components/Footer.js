"use client";
import React from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    Link as MUILink,
    Stack,
    Divider,
    IconButton,
} from "@mui/material";
import Link from "next/link";
import { Email, Facebook, Instagram, LinkedIn, Phone, X, YouTube } from "@mui/icons-material";

const productLinks1 = [
    {
        label: 'Tablets',
        href: '/product/category/tablets/38'
    },
    {
        label: 'Capsules',
        href: '/product/category/capsules/37'
    },
    {
        label: 'Syrup',
        href: '/product/category/syrups/36'
    },
    {
        label: 'Injectables',
        href: '/product/category/injections/15'
    },
    {
        label: 'Ointments',
        href: '/product/category/ointments/39'
    }
];

const productLinks2 = [
    {
        label: 'Protein',
        href: '/product/category/protein/40'
    },
    {
        label: 'Energy Drink',
        href: '/product/category/energy-drinks/49'
    },
    {
        label: 'Gyanaec Range',
        href: '/product/category/gynae/52'
    },
    {
        label: 'Herbal',
        href: '/product/category/herbal/48'
    },
    {
        label: 'Sachets',
        href: '/product/category/sachets/41'
    }
];

const additionalLinks = [
    {
        label: 'About Us',
        href: '/about'
    },
    {
        label: 'Contact Us',
        href: '/contact'
    },
    {
        label: 'FAQs',
        href: '/frequently-asked-questions'
    },
    {
        label: 'PCD Pharma',
        href: '/pcd-franchise'
    },
    {
        label: 'Third Party Manufacturing',
        href: '/third-party-manufacturing'
    },
];

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: "rgba(0, 0, 0, 1)",
                color: "#fff",
                pt: { xs: 6, md: 10 },
                pb: { xs: 4, md: 8 },
            }}
        >
            <Container>
                <Grid container spacing={4}>
                    
                {/* Stay With Us */}
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Typography
                            variant="h6"
                            sx={{
                                letterSpacing: 1,
                                fontWeight: 500,
                                mb: 2,
                                color: "#EC1B24",
                            }}
                        >
                            Contact Us
                        </Typography>
                        <Stack spacing={2} mb={2}>
                            <Stack direction={"row"} spacing={1}>
                                <Email fontSize="small" />

                                <MUILink
                                    component={Link}
                                    href={"mailto:info@biozoc.com"}
                                    underline="none"
                                    sx={{
                                        color: "#acacac",
                                        fontSize: 16,
                                        transition: "0.3s",
                                        "&:hover": { color: "#EC1B24" },
                                    }}
                                >
                                    info@biozoc.com
                                </MUILink>
                            </Stack>

                            <Stack direction={"row"} spacing={1}>
                                <Phone fontSize="small" />
                                <MUILink
                                    component={Link}
                                    href={"tel:9815620908"}
                                    underline="none"
                                    sx={{
                                        color: "#acacac",
                                        fontSize: 16,
                                        transition: "0.3s",
                                        "&:hover": { color: "#EC1B24" },
                                    }}
                                >
                                    +91-9815620908
                                </MUILink>
                            </Stack>

                            <Stack direction={"row"} spacing={1}>
                                <Phone fontSize="small" />
                                <MUILink
                                    component={Link}
                                    href={"tel:9876800625"}
                                    underline="none"
                                    sx={{
                                        color: "#acacac",
                                        fontSize: 16,
                                        transition: "0.3s",
                                        "&:hover": { color: "#EC1B24" },
                                    }}
                                >
                                    +91-9876800625
                                </MUILink>
                            </Stack>
                        </Stack>

                        <Stack direction="row" spacing={1} justifyContent="start" mt={3}>
                            <IconButton
                                href="https://www.facebook.com/biozoc/"
                                target="_blank"
                                sx={{
                                    color: "#fff",
                                    backgroundColor: "#1877F2",
                                    "&:hover": { backgroundColor: "#1877F2" },
                                }}
                            >
                                <Facebook />
                            </IconButton>
                            <IconButton
                                href="https://twitter.com/biozoc"
                                target="_blank"
                                sx={{
                                    color: "#fff",
                                    backgroundColor: "rgba(128,128,128,0.2)",
                                    "&:hover": { backgroundColor: "rgba(128,128,128,0.2)" },
                                }}
                            >
                                <X />
                            </IconButton>
                            <IconButton
                                href="https://www.youtube.com/channel/UCE2PX3YCrJzwWMxkNnkdXxw"
                                target="_blank"
                                sx={{
                                    color: "#fff",
                                    backgroundColor: "#FF0000",
                                    "&:hover": { backgroundColor: "#FF0000" },
                                }}
                            >
                                <YouTube />
                            </IconButton>
                            <IconButton
                                href="https://www.linkedin.com/in/biozoc-pharma-53b4a6193/"
                                target="_blank"
                                sx={{
                                    color: "#fff",
                                    backgroundColor: "#0077B5",
                                    "&:hover": { backgroundColor: "#0077B5" },
                                }}
                            >
                                <LinkedIn />
                            </IconButton>
                        </Stack>
                    </Grid>
                    
                    {/* Services */}
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Typography
                            variant="h6"
                            sx={{
                                letterSpacing: 1,
                                fontWeight: 500,
                                mb: 2,
                                color: "#EC1B24",
                            }}
                        >
                            Product Categories
                        </Typography>

                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Stack spacing={2}>
                                    {productLinks1.map(
                                        (item, i) => (
                                            <MUILink
                                                key={i}
                                                component={Link}
                                                href={item.href}
                                                underline="none"
                                                sx={{
                                                    color: "#acacac",
                                                    fontSize: 16,
                                                    transition: "0.3s",
                                                    "&:hover": { color: "#EC1B24" },
                                                }}
                                            >
                                                {item.label}
                                            </MUILink>
                                        )
                                    )}
                                </Stack>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Stack spacing={2}>
                                    {productLinks2.map(
                                        (item, i) => (
                                            <MUILink
                                                key={i}
                                                component={Link}
                                                href={item.href}
                                                underline="none"
                                                sx={{
                                                    color: "#acacac",
                                                    fontSize: 16,
                                                    transition: "0.3s",
                                                    "&:hover": { color: "#EC1B24" },
                                                }}
                                            >
                                                {item.label}
                                            </MUILink>
                                        )
                                    )}
                                </Stack>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography
                            variant="h6"
                            sx={{ letterSpacing: 1, fontWeight: 500, mb: 2, color: "transparent" }}
                        >
                            Product Categories
                        </Typography>
                        <Stack spacing={2}>
                            {productLinks2.map((item, i) => (
                                <MUILink
                                    key={i}
                                    component={Link}
                                    href={item.href}
                                    underline="none"
                                    sx={{
                                        color: "#acacac",
                                        fontSize: 16,
                                        transition: "0.3s",
                                        "&:hover": { color: "#EC1B24" },
                                    }}
                                >
                                    {item.label}
                                </MUILink>
                            ))}
                        </Stack>
                    </Grid> */}

                    {/* Company */}
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Typography
                            variant="h6"
                            sx={{ letterSpacing: 1, fontWeight: 500, mb: 2, color: "#EC1B24" }}
                        >
                            Company
                        </Typography>
                        <Stack spacing={2}>
                            {additionalLinks.map((item, i) => (
                                <MUILink
                                    key={i}
                                    component={Link}
                                    href={item.href}
                                    underline="none"
                                    sx={{
                                        color: "#acacac",
                                        fontSize: 16,
                                        transition: "0.3s",
                                        "&:hover": { color: "#EC1B24" },
                                    }}
                                >
                                    {item.label}
                                </MUILink>
                            ))}
                        </Stack>
                    </Grid>
                </Grid>
            </Container>

            {/* Divider / Gradient Line */}
            <Divider
                sx={{
                    mt: 6,
                    mb: 2,
                    borderColor: "rgba(255,255,255,0.1)",
                    width: "80%",
                    mx: "auto",
                }}
            />

            {/* Copyright Section */}
            <Box
                sx={{
                    bgcolor: "rgba(0, 0, 0, 0.7)",
                    py: 2,
                    mt: 3,
                }}
            >
                <Container>
                    <Grid container alignItems="center">
                        <Grid size={{ xs: 12, md: 12 }}>
                            <Typography
                                variant="body2"
                                textAlign={"center"}
                                sx={{ color: "#acacac", mt: { xs: 2, md: 0 } }}
                            >
                                © Biozoc 2025. All Rights Reserved
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default Footer;
