// app/terms-and-conditions/page.js

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
    title: "Terms and Conditions | PCD Pharma Franchise Site Use",
    description:
        "Review the terms and conditions for this PCD pharma franchise site, detailing user responsibilities, use, legal agreements, and rights for visitors.",
    keywords: [
        "pcd pharma franchise in india",
        "pharma franchise opportunities",
        "pcd pharma franchise company in india",
        "best pcd pharma franchise company",
        "pcd pharma business in india"
    ]
};

export default function TermsAndConditionsPage() {
    return (
        <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
            {/* Page Header */}
            <Typography variant="h3" component="h1" gutterBottom fontWeight={700}>
                Terms & Conditions
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                Biozoc – A brand of Zoic Pharmaceuticals
            </Typography>

            <Divider sx={{ mb: 4 }} />

            {/* Acceptance of Terms */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Acceptance of Terms
                </Typography>

                <Typography variant="body1" paragraph>
                    By accessing <strong>www.biozoc.com</strong>, you acknowledge that you
                    have read, understood, and agreed to these Terms and Conditions.
                </Typography>

                <Typography variant="body1">
                    If you do not accept these Terms, please discontinue use of the
                    Website.
                </Typography>
            </Box>

            {/* Website Purpose */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Website Purpose
                </Typography>

                <Typography variant="body1">
                    This Website provides general information regarding pharmaceutical
                    services offered by Biozoc. No binding commercial transaction is
                    executed through this Website.
                </Typography>
            </Box>

            {/* User Responsibilities */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    User Responsibilities
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
                        <ListItemText primary="Use the Website for lawful and legitimate purposes only" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Do not misuse content for unauthorized commercial activity" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Do not attempt data scraping, hacking, or interference" />
                    </ListItem>
                </List>
            </Box>

            {/* Intellectual Property */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Intellectual Property
                </Typography>

                <Typography variant="body1">
                    All content on this Website, including text, logos, images, graphics,
                    and layout, is the property of{" "}
                    <strong>Zoic Pharmaceuticals</strong>. Unauthorized copying,
                    reproduction, or redistribution is strictly prohibited.
                </Typography>
            </Box>

            {/* Business Disclaimer */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Business Disclaimer
                </Typography>

                <Typography variant="body1">
                    Submitting an enquiry does not constitute a contract, offer, or
                    guarantee of services. All business engagements are finalized through
                    formal offline agreements.
                </Typography>
            </Box>

            {/* Limitation of Liability */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Limitation of Liability
                </Typography>

                <Typography variant="body1" paragraph>
                    Biozoc shall not be liable for any losses or damages arising from:
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
                        <ListItemText primary="Use or inability to use the Website" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Reliance on Website information" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Technical interruptions or inaccuracies" />
                    </ListItem>
                </List>
            </Box>

            {/* External Links */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    External Links
                </Typography>

                <Typography variant="body1">
                    Links to third-party websites are provided for convenience only.
                    Biozoc does not endorse or control their content.
                </Typography>
            </Box>

            {/* Governing Law */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Governing Law
                </Typography>

                <Typography variant="body1">
                    These Terms are governed by the laws of India, and disputes shall fall
                    under the jurisdiction of Indian courts.
                </Typography>
            </Box>

            {/* Modifications */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Modifications
                </Typography>

                <Typography variant="body1">
                    Biozoc reserves the right to amend these Terms at any time without
                    prior notice.
                </Typography>
            </Box>

            {/* Contact */}
            <Box>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Contact
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
