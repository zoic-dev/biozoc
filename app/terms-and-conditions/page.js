// app/terms-and-conditions/page.js

import { Container, Typography, Box, Divider, List, ListItem, ListItemText } from "@mui/material";

// ✅ Basic SEO (Next.js App Router)
export const metadata = {
    title: "Terms & Conditions | Your Brand Name",
    description:
        "Read the Terms and Conditions governing the use of our website and services. Effective as of 25 May 2018.",
    robots: "index, follow",
};

export default function TermsAndConditionsPage() {
    return (
        <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>

            {/* Page Heading */}
            <Typography variant="h3" component="h1" gutterBottom fontWeight={700}>
                Terms & Conditions
            </Typography>

            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                Terms of Use
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                Effective as of 30 Jan 2026
            </Typography>

            <Divider sx={{ mb: 4 }} />

            {/* Section 1 */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    1. General Information Regarding These Terms of Use
                </Typography>

                <Typography variant="body1" paragraph>
                    Welcome, and thank you for your interest in Creative Commons (“Creative Commons,” “CC,” “we,” “our,” or “us”).
                    Unless otherwise noted on a particular site or service, these master terms of use (“Master Terms”) apply to
                    your use of all of the websites that Creative Commons Corporation operates (collectively, the “Websites”),
                    and all products, information, and services provided through the Websites (the “Services”).
                </Typography>

                <Typography variant="body1" paragraph>
                    In addition to the Master Terms, your use of any Services may also be subject to specific terms applicable to a
                    particular Service (“Additional Terms”). If there is any conflict between the Additional Terms and the Master
                    Terms, the Additional Terms will apply.
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    <strong>Human-readable summary:</strong> These terms create a contract between you and Creative Commons and
                    govern your use of the websites and services.
                </Typography>
            </Box>

            {/* Section 2 */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    2. Your Agreement to the Terms
                </Typography>

                <Typography variant="body1" paragraph>
                    By clicking “I ACCEPT” or otherwise accessing or using any of the Services, you acknowledge that you have read,
                    understood, and agreed to be bound by these Terms. If you do not agree to the Terms, you are not authorized to
                    use any Services.
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    <strong>Human-readable summary:</strong> Please read these terms and only use the services if you agree to them.
                </Typography>
            </Box>

            {/* Section 3 */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    3. Changes to the Terms
                </Typography>

                <Typography variant="body1" paragraph>
                    Creative Commons may change, remove, or add to these Terms at any time. Updated Terms will be posted with a new
                    revision date. Continued use of the Services after changes become effective constitutes acceptance of the
                    revised Terms.
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    <strong>Human-readable summary:</strong> These terms may change. Continued use means you agree to the changes.
                </Typography>
            </Box>

            {/* Section 4 */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    4. No Legal Advice
                </Typography>

                <Typography variant="body1" paragraph>
                    Creative Commons is not a law firm and does not provide legal advice. Use of the Services does not create an
                    attorney-client relationship.
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    <strong>Human-readable summary:</strong> Please consult your own attorney for legal advice.
                </Typography>
            </Box>

            {/* Section 5 */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    5. Content Available through the Services
                </Typography>

                <Typography variant="body1" paragraph>
                    We strive to provide accurate and useful information but make no guarantees regarding completeness or
                    suitability. Content is licensed under CC BY 4.0 unless otherwise stated.
                </Typography>
            </Box>

            {/* Section 6 */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    6. Prohibited Conduct
                </Typography>

                <List>
                    <ListItem>
                        <ListItemText primary="Violating laws or rights of others" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Disruption or interference with services" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Impersonation or unauthorized access" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Harming or harassing others" />
                    </ListItem>
                </List>

                <Typography variant="body2" color="text.secondary">
                    <strong>Human-readable summary:</strong> Play nice. Be lawful. Don’t disrupt or harm others.
                </Typography>
            </Box>

            {/* Disclaimer */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Disclaimer of Warranties
                </Typography>

                <Typography variant="body1" paragraph>
                    The Services are provided “as-is” without warranties of any kind, including implied warranties of
                    merchantability, fitness for a particular purpose, or non-infringement.
                </Typography>
            </Box>

            {/* Copyright */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Copyright Complaints
                </Typography>

                <Typography variant="body1" paragraph>
                    Creative Commons respects copyright laws. To report allegedly infringing content, please follow the DMCA
                    Notice & Takedown Procedure.
                </Typography>
            </Box>

            {/* Misc */}
            <Box>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Miscellaneous Terms
                </Typography>

                <Typography variant="body1" paragraph>
                    These Terms are governed by the laws of the State of California, USA. Any disputes must be brought in courts
                    located in the Northern District of California.
                </Typography>
            </Box>

        </Container>
    );
}
