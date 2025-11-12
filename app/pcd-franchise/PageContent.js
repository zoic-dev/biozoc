"use client";

import {
    Box,
    Container,
    Typography,
    Grid,
    Stack,
    Button,
    Card,
    CardContent,
} from "@mui/material";

export default function PageContent() {
    const features = [
        {
            title: "Proven Product Efficacy & Safety",
            desc: "Each product is scientifically tested and manufactured under strict WHO-GMP standards.",
        },
        {
            title: "Extensive Product Portfolio",
            desc: "A wide range of formulations across multiple therapeutic segments ensuring comprehensive coverage.",
        },
        {
            title: "Marketing & Promotional Support",
            desc: "Complete assistance with marketing materials, visual aids, and digital resources.",
        },
        {
            title: "Attractive Packaging",
            desc: "Modern, durable, and premium designs that enhance product appeal and trust.",
        },
        {
            title: "Strong Brand Recognition",
            desc: "Backed by decades of experience and an established name in Indian pharmaceuticals.",
        },
    ];

    const terms = [
        {
            title: "Selection Criteria",
            points: [
                "Minimum 500 sq.ft hygienic storage facility",
                "Good market reputation and service record",
                "Adequate delivery and administrative setup",
                "Proper infrastructure for distribution",
            ],
        },
        {
            title: "Distributor Responsibilities",
            points: [
                "Place orders at least 15 days in advance",
                "Assist in regional marketing initiatives",
                "Maintain transparent sales records",
                "Ensure territory-wise product availability",
            ],
        },
    ];

    return (
        <Box sx={{ bgcolor: "#fff", color: "#222" }}>
            {/* Hero Section */}
            <Box
                sx={{
                    py: { xs: 10, md: 14 },
                    textAlign: "center",
                    background:
                        "linear-gradient(180deg, rgba(236,28,36,0.08) 0%, rgba(255,255,255,0) 100%)",
                }}
            >
                <Container maxWidth="md">
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 700,
                            fontSize: { xs: 32, md: 44 },
                            mb: 2,
                            color: "#EC1C24",
                        }}
                    >
                        PCD Pharma Franchise in Chandigarh
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        Biozoc Inc. — a name synonymous with trust, quality, and innovation
                        in India’s pharmaceutical sector.
                    </Typography>
                </Container>
            </Box>

            {/* About Section */}
            <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
                <Grid container spacing={6} alignItems="center">
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="h4" fontWeight={600} gutterBottom>
                            Leading the Way in Indian Pharmaceutical Franchise
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            Biozoc Inc. is among the top PCD Pharma Franchise Companies in
                            Chandigarh. With WHO-GMP certified facilities and a strong R&D
                            foundation, we deliver superior healthcare formulations across
                            India.
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Our transparent policies, ethical practices, and robust logistics
                            empower franchise partners to grow with confidence and credibility.
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box
                            component="img"
                            src="/pharma-office.jpg"
                            alt="Biozoc Pharma Facility"
                            sx={{
                                width: "100%",
                                borderRadius: 3,
                                boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>

            {/* Why Choose Us Section */}
            <Box sx={{ bgcolor: "#fafafa", py: { xs: 8, md: 10 } }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h4"
                        fontWeight={600}
                        textAlign="center"
                        gutterBottom
                    >
                        Why Partner with Biozoc Inc.?
                    </Typography>
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        textAlign="center"
                        maxWidth="md"
                        mx="auto"
                        mb={6}
                    >
                        Explore the key strengths that make Biozoc Inc. a preferred choice
                        for pharma franchise partners across India.
                    </Typography>

                    <Grid
                        container
                        spacing={4}
                        sx={{
                            justifyContent: "center",
                            alignItems: "stretch", // ensures equal height
                        }}
                    >
                        {features.map((item, i) => (
                            <Grid size={{xs:12,sm:6,md:4}} key={i}>
                                <Card
                                    elevation={0}
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        p: 3,
                                        borderRadius: 3,
                                        border: "1px solid #eee",
                                        transition: "0.3s ease",
                                        "&:hover": {
                                            borderColor: "#EC1C24",
                                            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                                        },
                                    }}
                                >
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography
                                            variant="h6"
                                            fontWeight={600}
                                            gutterBottom
                                            sx={{
                                                color: "#EC1C24",
                                                fontSize: "1.05rem",
                                                lineHeight: 1.4,
                                            }}
                                        >
                                            {item.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{
                                                lineHeight: 1.6,
                                                fontSize: "0.95rem",
                                            }}
                                        >
                                            {item.desc}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                </Container>
            </Box>

            {/* Terms Section */}
            <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
                <Typography
                    variant="h4"
                    fontWeight={600}
                    textAlign="center"
                    gutterBottom
                >
                    PCD Pharma Franchise – Terms & Conditions
                </Typography>

                <Grid container spacing={6} sx={{ mt: 4 }} textAlign={"center"}>
                    {terms.map((section, i) => (
                        <Grid size={{ xs: 12, md: 6 }} key={i}>
                            <Typography variant="h6" fontWeight={600} mb={2}>
                                {section.title}
                            </Typography>
                            <Stack spacing={1.5}>
                                {section.points.map((point, idx) => (
                                    <Typography key={idx} variant="body2" color="text.secondary">
                                        • {point}
                                    </Typography>
                                ))}
                            </Stack>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Contact CTA */}
            <Box
                sx={{
                    py: { xs: 8, md: 10 },
                    textAlign: "center",
                    backgroundColor: "#EC1C24",
                    color: "#fff",
                }}
            >
                <Container maxWidth="md">
                    <Typography
                        variant="h4"
                        fontWeight={700}
                        gutterBottom
                        sx={{ letterSpacing: 0.5 }}
                    >
                        Interested in Partnering with Biozoc Inc.?
                    </Typography>
                    <Typography variant="body1" mb={3} color="rgba(255,255,255,0.9)">
                        Connect with us and explore growth opportunities with a trusted
                        pharmaceutical brand.
                    </Typography>
                    <Button
                        variant="contained"
                        href="mailto:info@biozoc.com"
                        sx={{
                            background: "#fff",
                            color: "#EC1C24",
                            fontWeight: 600,
                            px: 4,
                            py: 1.2,
                            "&:hover": { background: "#f9f9f9" },
                        }}
                    >
                        info@biozoc.com
                    </Button>
                </Container>
            </Box>
        </Box>
    );
}
