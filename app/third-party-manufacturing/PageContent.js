"use client";

// app/contract-manufacturing/page.js
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button
} from "@mui/material";

const productionCapacity = [
    { category: "Syrups", capacity: "1200 bottles" },
    { category: "Capsules", capacity: "50,000 capsules" },
    { category: "Tablets", capacity: "50,000 tablets" },
    { category: "Oils", capacity: "1200 bottles" },
    { category: "Powder", capacity: "1200 bottles" },
    { category: "Lotion", capacity: "1200 units" },
    { category: "Ointment", capacity: "5000 units" },
    { category: "Juices", capacity: "1000 bottles" },
    { category: "Sachets", capacity: "10,000 units" },
    {
        category: "Herbal Cosmetics (Soaps, Shampoo, Gels, Facewash etc.)",
        capacity: "1200 each in bottle/carton packing",
    },
    {
        category: "Herbal Cosmetics (Toothpaste, Facewash, Gels etc.)",
        capacity: "5000 in lami tube",
    },
];

const advantages = [
    "WHO-GMP & ISO-certified manufacturing plant",
    "Full service from formulation, production, packaging to dispatch",
    "Low minimum order quantities to support brand launches",
    "Dedicated in-house R&D & quality control laboratory",
    "Flexible timelines and reliable global logistics",
    "Wide product range: tablets, capsules, syrups, injectables, herbal cosmetics",
];

const termsData = [
    {
        title: "TABLETS / CAPSULES / SOFTGELS",
        points: [
            "Drug License and GST Number is required for Billing Purpose.",
            "You have to send your order by mail with design CDR (if you have, otherwise we will make new design for you free of cost).",
            "If qty is > 500 Box, then no inventory charges (else ₹5000/- Inventory charges, refundable on next order).",
            "₹2400/- one-time cylinder charges (for double color cylinder).",
            "40% Payment advance and rest 60% at the time of dispatch.",
            "Guaranteed Delivery within 30 days.",
        ],
    },
    {
        title: "INJECTABLE / DRY SYRUPS / SYRUPS / LOTIONS / EYE DROPS",
        points: [
            "Drug License and GST Number is required for Billing Purpose.",
            "You have to send your order by mail with design CDR (if you have, otherwise we will make new design for you free of cost).",
            "No Inventory Charges.",
            "No Cylinder Charges.",
            "30% Payment advance and rest 70% at the time of dispatch.",
            "Guaranteed Delivery within 30 days.",
        ],
    },
    {
        title: "OINTMENTS / CREAMS / GELS",
        points: [
            "Drug License and GST Number is required for Billing Purpose.",
            "You have to send your order by mail with design CDR (if you have, otherwise we will make new design for you free of cost).",
            "If qty is > 5000 tubes, then no inventory charges (else ₹5000/- Inventory charges, refundable on next order).",
            "₹2400/- one-time cylinder charges (for double color cylinder).",
            "30% Payment advance and rest 70% at the time of dispatch.",
            "Guaranteed Delivery within 30 days.",
        ],
    },
];

export default function PageContent() {
    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            {/* Heading */}
            <Box textAlign="center" mb={6}>
                <Typography
                    variant="h3"
                    fontWeight={700}
                    sx={{ color: "#EC1C24", mb: 2 }}
                >
                    End-to-End Pharma & Nutraceutical Contract Manufacturing in India
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    Quick turnaround • Low MOQ • WHO-GMP compliant • Full packaging solutions
                </Typography>
            </Box>

            {/* Intro Section */}
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 2 }}>
                <b>Biozoc Inc.</b> is one of India’s most recommended 3rd party pharmaceutical
                manufacturers. Our clients consistently trust our expertise, quality, and reliability.
                We ensure seamless execution — from order placement to dispatch — allowing you to
                focus on building your brand while we take care of the rest.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                Equipped with modern technology, advanced production units, and WHO-GMP certified
                infrastructure, we manufacture a diverse range including <b>nutraceuticals, derma,
                    ortho drugs, tablets, capsules, syrups, lotions, injectables, and more.</b> Our goal is
                simple — consistent quality and timely delivery for every client.
            </Typography>

            {/* Production Table */}
            <Box mt={8}>
                <Typography
                    variant="h4"
                    fontWeight={700}
                    sx={{ color: "#EC1C24", mb: 3 }}
                >
                    Contract Manufacturing Capacities
                </Typography>
                <TableContainer
                    component={Paper}
                    elevation={0}
                    sx={{
                        border: "1px solid #eee",
                        borderRadius: 3,
                        overflow: "hidden",
                    }}
                >
                    <Table>
                        <TableHead sx={{ backgroundColor: "#f9f9f9" }}>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 700 }}>Category</TableCell>
                                <TableCell sx={{ fontWeight: 700 }}>Production Capacity</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {productionCapacity.map((row, i) => (
                                <TableRow
                                    key={i}
                                    sx={{
                                        "&:nth-of-type(even)": { backgroundColor: "#fafafa" },
                                        "&:hover": { backgroundColor: "#fff5f5" },
                                        transition: "0.2s ease",
                                    }}
                                >
                                    <TableCell>{row.category}</TableCell>
                                    <TableCell>{row.capacity}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>

            {/* Terms Section */}
            <Box mt={8}>
                <Typography variant="h4" fontWeight={700} sx={{ color: "#EC1C24", mb: 4 }}>
                    Terms & Conditions
                </Typography>

                <Grid container spacing={4}>
                    {termsData.map((section, index) => (
                        <Grid size={{ xs: 12, md: 6 }} key={index}>
                            <Card
                                elevation={0}
                                sx={{
                                    border: "1px solid #eee",
                                    borderRadius: 3,
                                    height: "100%",
                                    transition: "0.3s ease",
                                    "&:hover": {
                                        borderColor: "#EC1C24",
                                        boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                                    },
                                }}
                            >
                                <CardContent>
                                    <Typography
                                        variant="h6"
                                        fontWeight={700}
                                        sx={{ mb: 1.5, color: "#EC1C24" }}
                                    >
                                        {section.title}
                                    </Typography>
                                    <ul style={{ margin: 0, paddingLeft: "1.5rem", color: "#555" }}>
                                        {section.points.map((point, i) => (
                                            <li key={i} style={{ marginBottom: "0.5rem" }}>
                                                <Typography variant="body2" color="text.secondary">
                                                    {point}
                                                </Typography>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Why Work With Us */}
            <Box mt={8}>
                <Typography variant="h4" fontWeight={700} sx={{ color: "#EC1C24", mb: 3 }}>
                    Why Work With Us?
                </Typography>
                <Grid container spacing={4} alignItems="stretch">
                    {advantages.map((adv, i) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                            <Card
                                elevation={0}
                                sx={{
                                    borderRadius: 3,
                                    border: "1px solid #eee",
                                    p: 3,
                                    transition: "0.3s ease",
                                    "&:hover": {
                                        borderColor: "#EC1C24",
                                        boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                                    },
                                }}
                            >
                                <CardContent>
                                    <Typography
                                        variant="body1"
                                        fontWeight={600}
                                        color="text.primary"
                                        sx={{ lineHeight: 1.6 }}
                                    >
                                        {adv}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* CTA */}
            <Box textAlign="center" mt={10}>
                <Typography variant="h5" fontWeight={600} sx={{ mb: 3 }}>
                    Ready to launch your own brand with Biozoc?
                </Typography>
                <Button
                    component="a"
                    href={`${process.env.NEXT_PUBLIC_SITE_URL}/wp-content/uploads/2019/05/BIOZOC-PCD-Newfinal-converted.pdf`}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    sx={{
                        backgroundColor: "#EC1C24",
                        px: 4,
                        py: 1.2,
                        fontWeight: 600,
                        borderRadius: 2,
                        "&:hover": { backgroundColor: "#b7151b" },
                    }}
                >
                    Download Product List
                </Button>

            </Box>
        </Container>
    );
}
