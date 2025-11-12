"use client";

import { Box, Container, Typography, Grid, Card, CardContent, Button, Stack } from "@mui/material";

export default function PageContent() {
    return (
        <Box>
            {/* ====== Hero Section ====== */}
            <Box
                sx={{
                    py: { xs: 8, md: 10 },
                    backgroundColor: "#fafafa",
                    textAlign: "center",
                    borderBottom: "1px solid #eee",
                }}
            >
                <Container maxWidth="md">
                    <Typography
                        variant="h3"
                        fontWeight={700}
                        sx={{ color: "#EC1C24", mb: 2 }}
                    >
                        Welcome To BIOZOC INC.
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        BIOZOC INC. is the PCD division of Zoic Group, a trusted name in the Indian pharmaceutical industry for over 35 years.
                    </Typography>
                </Container>
            </Box>

            {/* ====== Intro Section ====== */}
            <Container sx={{ py: { xs: 8, md: 10 } }}>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                    Guided by a simple belief that good health should be accessible to everyone, we are committed to delivering
                    science-driven healthcare solutions that blend innovation, research, and tradition.
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                    Established under the visionary leadership of Zoic Group, Biozoc has carried forward a legacy of excellence that began with Zoic Pharmaceuticals — one of India’s earliest ventures to combine Pharma medicines with modern scientific research, development, and production.
                </Typography>
            </Container>

            {/* ====== Our Commitment to Quality ====== */}
            <Box sx={{ backgroundColor: "#fff", py: { xs: 8, md: 10 } }}>
                <Container>
                    <Typography variant="h4" fontWeight={700} sx={{ color: "#EC1C24", mb: 3 }}>
                        Our Commitment to Quality
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                        At Biozoc Inc., every product is developed after extensive research, clinical study, and quality validation.
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                        Our formulations cover a wide spectrum of therapeutic areas and age groups, crafted with precision under WHO-GMP and ISO 9001:2015 certified manufacturing facilities.
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        We take pride in a robust Quality Management System (QMS) that ensures Total Quality Management across all operations — from raw material sourcing to packaging and delivery.
                    </Typography>
                </Container>
            </Box>

            {/* ====== Legacy Section ====== */}
            <Box sx={{ backgroundColor: "#fafafa", py: { xs: 8, md: 10 } }}>
                <Container>
                    <Typography variant="h4" fontWeight={700} sx={{ color: "#EC1C24", mb: 3 }}>
                        Our Legacy & Growth
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                        From humble beginnings to becoming a leader in pharmaceutical, herbal, and nutraceutical formulations — our journey has been marked by continuous growth, innovation, and excellence.
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                        Today, Biozoc offers a diverse range of capsules, tablets, syrups, sachets, powders, injectables, ointments, lotions, and oils, covering antibiotics, hormonal preparations, and more.
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        With a team of dedicated professionals and a strong distribution network, we continue to expand our footprint across India and global markets.
                    </Typography>
                </Container>
            </Box>

            {/* ====== Vision & Mission ====== */}
            <Container sx={{ py: { xs: 8, md: 10 } }}>
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Card
                            elevation={0}
                            sx={{
                                p: 3,
                                borderRadius: 3,
                                border: "1px solid #eee",
                                "&:hover": { borderColor: "#EC1C24", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" },
                            }}
                        >
                            <CardContent>
                                <Typography variant="h5" fontWeight={700} sx={{ color: "#EC1C24", mb: 2 }}>
                                    Our Vision
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    To be a leading international healthcare organization, building lasting trust through quality and excellence.
                                    We aim to delight our customers, empower our people, and create a positive global impact.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Card
                            elevation={0}
                            sx={{
                                p: 3,
                                borderRadius: 3,
                                border: "1px solid #eee",
                                "&:hover": { borderColor: "#EC1C24", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" },
                            }}
                        >
                            <CardContent>
                                <Typography variant="h5" fontWeight={700} sx={{ color: "#EC1C24", mb: 2 }}>
                                    Our Mission
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    To provide standardized and research-based healthcare products through continuous innovation — promoting
                                    healthy lives and delivering unmatched value to our customers and business associates.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>

            {/* ====== Core Values ====== */}
            <Box sx={{ backgroundColor: "#fafafa", py: { xs: 8, md: 10 } }}>
                <Container>
                    <Typography variant="h4" fontWeight={700} sx={{ color: "#EC1C24", mb: 5 }}>
                        Our Values
                    </Typography>
                    <Grid container spacing={4}>
                        {[
                            { title: "Quality", desc: "Excellence in every formulation" },
                            { title: "Integrity", desc: "Honesty and transparency in all we do" },
                            { title: "Innovation", desc: "Continuous improvement and discovery" },
                            { title: "Commitment", desc: "To our partners, customers, and communities" },
                            { title: "Sustainability", desc: "Responsible growth for future generations" },
                        ].map((item, i) => (
                            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                                <Card
                                    elevation={0}
                                    sx={{
                                        p: 3,
                                        borderRadius: 3,
                                        border: "1px solid #eee",
                                        "&:hover": { borderColor: "#EC1C24", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" },
                                    }}
                                >
                                    <CardContent>
                                        <Typography variant="h6" fontWeight={600} sx={{ color: "#EC1C24" }}>
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.desc}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* ====== Franchise Section ====== */}
            <Container sx={{ py: { xs: 8, md: 10 }, textAlign: "center" }}>
                <Typography variant="h4" fontWeight={700} sx={{ color: "#EC1C24", mb: 3 }}>
                    Franchise & Partnerships
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: "800px", mx: "auto" }}>
                    As a Chandigarh-based top pharmaceutical company, Biozoc Inc. offers tremendous opportunities for growth through
                    our PCD Pharma Franchise model.
                    <br />
                    We welcome wholesalers, medical representatives, and pharma entrepreneurs to join our nationwide franchise
                    network and grow with a trusted brand backed by 35 years of manufacturing and marketing excellence.
                </Typography>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "#EC1C24",
                        px: 4,
                        py: 1.2,
                        fontWeight: 600,
                        borderRadius: 2,
                        "&:hover": { backgroundColor: "#b7151b" },
                    }}
                    href="/contact"
                >
                    Become a Franchise Partner
                </Button>
            </Container>
        </Box>
    );
}
