// app/warranty-and-services/page.js

import {
    Container,
    Typography,
    Box,
    Divider,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";

/* =========================
   SEO – Next.js App Router
========================= */
export const metadata = {
    title: "Warranty & Services | PCD Pharma Franchise Support Info",
    description:
        "Learn about warranty terms and services for PCD pharma franchise partners, including product support, assurance, service policies, and customer carenow.",
    keywords: [
        "pcd pharma franchise in india",
        "pharma franchise opportunities",
        "pcd pharma franchise company in india",
        "best pcd pharma franchise company",
        "pcd pharma business in india"
    ]
};

export default function WarrantyAndServicesPage() {
    return (
        <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
            {/* Page Header */}
            <Typography variant="h3" component="h1" gutterBottom fontWeight={700}>
                Warranty & Services
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                Biozoc – A brand of Zoic Pharmaceuticals
            </Typography>

            <Divider sx={{ mb: 4 }} />

            {/* Quality Commitment */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Quality Commitment
                </Typography>

                <Typography variant="body1" paragraph>
                    Biozoc endeavours to ensure that pharmaceutical products and related
                    services offered under its operations are aligned with generally
                    accepted quality standards and applicable regulatory norms at the
                    time of manufacture and dispatch.
                </Typography>

                <Typography variant="body1">
                    Products are manufactured and supplied through approved facilities
                    operating under documented quality control procedures. Information
                    provided herein is for general reference only and does not constitute
                    a statutory or unconditional warranty.
                </Typography>
            </Box>

            {/* Warranty Coverage */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Warranty Coverage
                </Typography>

                <List
                    sx={{
                        listStyleType: "disc",
                        pl: 4,
                        "& .MuiListItem-root": {
                            display: "list-item",
                            paddingLeft: 0,
                        },
                    }}
                >
                    <ListItem>
                        <ListItemText primary="Warranty coverage, if any, is limited strictly to manufacturing-related defects identifiable at the time of dispatch." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Products are reviewed for conformity with internally approved specifications prior to dispatch." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Any warranty-related request must be supported with relevant batch details and corresponding invoice reference." />
                    </ListItem>
                </List>
            </Box>

            {/* Exclusions */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Exclusions
                </Typography>

                <Typography variant="body1" paragraph>
                    Warranty coverage does not extend to circumstances including, but not
                    limited to:
                </Typography>

                <List
                    sx={{
                        listStyleType: "disc",
                        pl: 4,
                        "& .MuiListItem-root": {
                            display: "list-item",
                            paddingLeft: 0,
                        },
                    }}
                >
                    <ListItem>
                        <ListItemText primary="Improper or non-compliant storage, handling, or transportation practices" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Products sold, stored, or used beyond their stated expiry date" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Damage or deterioration occurring after delivery acceptance" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Unauthorized modification, repackaging, relabeling, or alteration of products" />
                    </ListItem>
                </List>
            </Box>

            {/* Service Support */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Service Support
                </Typography>

                <Typography variant="body1" paragraph>
                    Subject to mutual understanding and applicable agreements, Biozoc may
                    extend certain non-binding support services, which can include:
                </Typography>

                <List
                    sx={{
                        listStyleType: "disc",
                        pl: 4,
                        "& .MuiListItem-root": {
                            display: "list-item",
                            paddingLeft: 0,
                        },
                    }}
                >
                    <ListItem>
                        <ListItemText primary="General business or operational consultation" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Product-related informational guidance" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Assistance with documentation or information sharing, where applicable" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Ongoing communication for coordination purposes" />
                    </ListItem>
                </List>

                <Typography variant="body1">
                    The scope, nature, and availability of services may vary and shall not
                    be construed as a contractual obligation unless expressly agreed in
                    writing.
                </Typography>
            </Box>

            {/* Claim Process */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Claim Process
                </Typography>

                <Typography variant="body1">
                    Warranty or service-related concerns, if any, should be communicated
                    through official channels. Each request is subject to internal review
                    and assessment. Submission of a request does not imply acceptance of
                    liability, replacement, or compensation.
                </Typography>
            </Box>

            {/* Delivery Disclaimer */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Delivery Disclaimer
                </Typography>

                <Typography variant="body1">
                    Delivery timelines communicated are indicative in nature and may vary
                    due to logistical constraints or factors beyond reasonable control.
                    Biozoc shall not be responsible for delays attributable to third-party
                    logistics providers or external circumstances.
                </Typography>
            </Box>

            {/* Policy Updates */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Policy Updates
                </Typography>

                <Typography variant="body1">
                    Biozoc reserves the right to revise or update this Warranty & Services
                    policy at its discretion. Any such changes shall be effective upon
                    publication on this Website and shall not create retrospective
                    obligations.
                </Typography>
            </Box>

            {/* Contact */}
            <Box>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Support Contact
                </Typography>

                <Typography variant="body1">
                    <strong>Biozoc</strong>
                    <br />
                    A brand of Zoic Pharmaceuticals
                    <br />
                    Website: https://www.biozoc.com
                    <br />
                    Email: info@biozoc.com
                    <br />
                    Phone: +91-9876800625
                </Typography>
            </Box>
        </Container>
    );
}
