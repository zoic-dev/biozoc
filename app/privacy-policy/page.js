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

// ✅ Basic SEO (Next.js App Router)
export const metadata = {
    title: "Privacy Policy | Your Brand Name",
    description:
        "This Privacy Policy explains how we collect, use, disclose, and protect your personal data when you use our services.",
    robots: "index, follow",
};

export default function PrivacyPolicyPage() {
    return (
        <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
            {/* Page Header */}
            <Typography variant="h3" component="h1" gutterBottom fontWeight={700}>
                Privacy Policy
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                Effective date: January 30, 2026
            </Typography>

            <Divider sx={{ mb: 4 }} />

            {/* Intro */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="body1" paragraph>
                    Strollik (“us”, “we”, or “our”) operates our website (the “Service”).
                    This page informs you of our policies regarding the collection, use,
                    and disclosure of personal data when you use our Service and the
                    choices you have associated with that data.
                </Typography>

                <Typography variant="body1">
                    By using the Service, you agree to the collection and use of
                    information in accordance with this Privacy Policy. Terms used in this
                    Privacy Policy have the same meanings as in our Terms and Conditions.
                </Typography>
            </Box>

            {/* Information Collection */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Information Collection and Use
                </Typography>

                <Typography variant="body1">
                    We collect several different types of information for various purposes
                    to provide and improve our Service to you.
                </Typography>
            </Box>

            {/* Types of Data */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Types of Data Collected
                </Typography>

                <Typography variant="h6" gutterBottom>
                    Personal Data
                </Typography>

                <Typography variant="body1" paragraph>
                    While using our Service, we may ask you to provide us with certain
                    personally identifiable information that can be used to contact or
                    identify you (“Personal Data”).
                </Typography>

                <Typography variant="h6" gutterBottom>
                    Usage Data
                </Typography>

                <Typography variant="body1" paragraph>
                    We may also collect information on how the Service is accessed and
                    used. This Usage Data may include your IP address, browser type,
                    browser version, pages visited, time and date of visits, time spent on
                    pages, and other diagnostic data.
                </Typography>

                <Typography variant="h6" gutterBottom>
                    Tracking & Cookies Data
                </Typography>

                <Typography variant="body1" paragraph>
                    We use cookies and similar tracking technologies to track activity on
                    our Service and store certain information. You can instruct your
                    browser to refuse cookies, but some portions of the Service may not
                    function properly.
                </Typography>

                <List>
                    <ListItem>
                        <ListItemText primary="Session Cookies – to operate the Service" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Preference Cookies – to remember preferences" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Security Cookies – for security purposes" />
                    </ListItem>
                </List>
            </Box>

            {/* Use of Data */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Use of Data
                </Typography>

                <List>
                    <ListItem>
                        <ListItemText primary="To provide and maintain the Service" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="To notify you about changes to our Service" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="To provide customer care and support" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="To monitor and improve Service usage" />
                    </ListItem>
                </List>
            </Box>

            {/* Transfer of Data */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Transfer of Data
                </Typography>

                <Typography variant="body1">
                    Your information may be transferred to and maintained on computers
                    located outside your jurisdiction where data protection laws may
                    differ. By submitting your information, you consent to this transfer.
                </Typography>
            </Box>

            {/* Disclosure */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Disclosure of Data
                </Typography>

                <List>
                    <ListItem>
                        <ListItemText primary="To comply with legal obligations" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="To protect and defend our rights or property" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="To prevent or investigate wrongdoing" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="To protect against legal liability" />
                    </ListItem>
                </List>
            </Box>

            {/* Security */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Security of Data
                </Typography>

                <Typography variant="body1">
                    While we strive to use commercially acceptable means to protect your
                    Personal Data, no method of transmission over the Internet is 100%
                    secure, and we cannot guarantee absolute security.
                </Typography>
            </Box>

            {/* Service Providers */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Service Providers
                </Typography>

                <Typography variant="body1">
                    We may employ third-party companies and individuals to facilitate our
                    Service. These third parties have access to Personal Data only to
                    perform tasks on our behalf.
                </Typography>
            </Box>

            {/* Analytics */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Analytics
                </Typography>

                <Typography variant="body1" paragraph>
                    We may use third-party analytics tools such as Google Analytics to
                    monitor and analyze Service usage.
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    Learn more at Google Privacy & Terms.
                </Typography>
            </Box>

            {/* External Links */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Links to Other Sites
                </Typography>

                <Typography variant="body1">
                    Our Service may contain links to external sites. We strongly advise
                    reviewing the Privacy Policy of every site you visit.
                </Typography>
            </Box>

            {/* Policy Updates */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Changes to This Privacy Policy
                </Typography>

                <Typography variant="body1">
                    We may update our Privacy Policy from time to time. Changes are
                    effective when posted on this page.
                </Typography>
            </Box>

        </Container>
    );
}
