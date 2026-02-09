// app/privacy-policy/page.js

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
    title: "Privacy Policy | PCD Pharma Franchise Site Guidelines",
    description:
        "Read the privacy policy for this PCD pharma franchise site, outlining how personal information is collected, used, stored, and protected for safety & compliance.",
    keywords: [
        "pcd pharma franchise in india",
        "pharma franchise opportunities",
        "pcd pharma franchise company in india",
        "best pcd pharma franchise company",
        "pcd pharma business in india"
    ]
};

export default function PrivacyPolicyPage() {
    return (
        <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
            {/* Page Header */}
            <Typography variant="h3" component="h1" gutterBottom fontWeight={700}>
                Privacy Policy
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                Biozoc – A brand of Zoic Pharmaceuticals
            </Typography>

            <Divider sx={{ mb: 4 }} />

            {/* Introduction */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="body1" paragraph>
                    This Privacy Policy explains how <strong>Biozoc</strong>, a brand
                    operated by <strong>Zoic Pharmaceuticals</strong>, collects,
                    uses, and protects information shared by visitors and business
                    associates through <strong>www.biozoc.com</strong> (“Website”).
                </Typography>

                <Typography variant="body1" paragraph>
                    By accessing this Website, you agree to the terms of this Privacy
                    Policy. If you do not agree, please discontinue use of the Website.
                </Typography>

                <Typography variant="body1">
                    This policy is framed in accordance with the Information Technology
                    Act, 2000 and applicable rules thereunder.
                </Typography>
            </Box>

            {/* Information We Collect */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Information We Collect
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
                        <ListItemText primary="Name of individual or organisation" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Email address and phone number" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="City, state, and country" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Business enquiry details" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Information voluntarily submitted via forms, email, or phone" />
                    </ListItem>
                </List>

                <Typography variant="body1">
                    We do not collect online payment details or sensitive financial
                    information through this Website.
                </Typography>
            </Box>

            {/* Purpose */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Purpose of Data Collection
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
                        <ListItemText primary="Responding to business and service enquiries" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Providing information about the pharmaceutical services offered by Biozoc" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Internal record keeping and communication" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Improving Website functionality and user experience" />
                    </ListItem>
                </List>

                <Typography variant="body1">
                    Your information is never sold or shared for commercial gain.
                </Typography>
            </Box>

            {/* Cookies */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Cookies
                </Typography>

                <Typography variant="body1" paragraph>
                    The Website may use cookies to analyse visitor behaviour and enhance
                    performance. Cookies do not personally identify users.
                </Typography>

                <Typography variant="body1">
                    You may disable cookies through your browser settings; however, some
                    Website features may be affected.
                </Typography>
            </Box>

            {/* Data Protection */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Data Protection
                </Typography>

                <Typography variant="body1">
                    We adopt reasonable security measures to protect your information from
                    unauthorised access or misuse. However, no online transmission can be
                    guaranteed as fully secure.
                </Typography>
            </Box>

            {/* Third Party */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Third-Party Links
                </Typography>

                <Typography variant="body1">
                    Our Website may include links to external websites. Biozoc is not
                    responsible for the privacy practices or content of such third-party
                    sites.
                </Typography>
            </Box>

            {/* Children */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Children’s Privacy
                </Typography>

                <Typography variant="body1">
                    Biozoc’s services are intended for professional and business use only.
                    We do not knowingly collect data from individuals under 18 years of
                    age.
                </Typography>
            </Box>

            {/* Updates */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Policy Updates
                </Typography>

                <Typography variant="body1">
                    Biozoc reserves the right to update this Privacy Policy at any time.
                    Changes will be effective immediately upon posting on this page.
                </Typography>
            </Box>

            {/* Contact */}
            <Box>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Contact Information
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
