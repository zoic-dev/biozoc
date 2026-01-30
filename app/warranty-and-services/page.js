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

// ✅ Basic SEO
export const metadata = {
    title: "Warranty & Services | Your Brand Name",
    description:
        "Learn about our warranty, returns, RMA process, shipping timelines, and customer support services.",
    robots: "index, follow",
};

export default function WarrantyAndServicesPage() {
    return (
        <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
            {/* Page Header */}
            <Typography variant="h3" component="h1" gutterBottom fontWeight={700}>
                Warranty and Services
            </Typography>

            <Divider sx={{ mb: 4 }} />

            {/* Section 1 */}
            <Box sx={{ mb: 6 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    1. Returns and Warranty Requests
                </Typography>

                <Typography variant="body1" paragraph>
                    <strong>RMA Management – Manage, Sell, and Facilitate Easy Returns and
                        Warranties.</strong>
                </Typography>

                <Typography variant="body1" paragraph>
                    We manage the RMA process by allowing customers to request and manage
                    returns, exchanges, and warranty claims directly from their user
                    account. Warranty terms can be added to products and variations, and
                    customers can track the status of their requests easily.
                </Typography>

                <List>
                    <ListItem>
                        <ListItemText primary="Standard orders take up to 14 business days to arrive." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Expedited orders are shipped via DHL Express." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Expedited shipping takes up to 5 business days to arrive." />
                    </ListItem>
                </List>
            </Box>

            {/* Section 2 */}
            <Box sx={{ mb: 6 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    2. Easily Set Up Warranties for Products
                </Typography>

                <Typography variant="body1" paragraph>
                    When setting up products, warranties can be assigned directly to a
                    product or specific variations from the product edit screen. Warranty
                    or return time periods, pricing, and conditions can be defined and
                    saved easily.
                </Typography>

                <Typography variant="body1">
                    Warranties are tied directly to the product. Once the warranty expires,
                    the ability to request a warranty claim, return, or exchange also
                    expires.
                </Typography>
            </Box>

            {/* Section 3 */}
            <Box sx={{ mb: 6 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    3. Powerful Warranties and Returns Manager
                </Typography>

                <Typography variant="body1" paragraph>
                    Our Warranties and Returns Manager provides an intuitive dashboard to
                    handle customer requests efficiently. Requests are managed in a
                    separate menu with real-time notifications for new submissions.
                </Typography>

                <Typography variant="body1" paragraph>
                    Requests can be processed in seconds, with options to mark them as
                    <strong> Processing</strong>, <strong>Completed</strong>, or
                    <strong> Rejected</strong>. Support teams can also communicate directly
                    with customers using built-in email templates.
                </Typography>
            </Box>

            {/* Section 4 */}
            <Box sx={{ mb: 6 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    4. Variable Products Warranties
                </Typography>

                <Typography variant="body1" paragraph>
                    Warranty options can be configured individually for variable products.
                    Shipping timelines remain the same across variations:
                </Typography>

                <List>
                    <ListItem>
                        <ListItemText primary="Standard orders: up to 14 business days." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Expedited orders via DHL Express." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Expedited delivery: up to 5 business days." />
                    </ListItem>
                </List>
            </Box>

            {/* FAQ Section */}
            <Box sx={{ mb: 6 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Frequently Asked Questions
                </Typography>

                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                    What is the RMA number?
                </Typography>
                <Typography variant="body1" paragraph>
                    The Return Materials Authorization (RMA) number, or order number, is the
                    reference number for your return. It is included in the email
                    confirmation sent to you and must be clearly labeled on all return
                    packages.
                </Typography>

                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                    What warranty support am I eligible for?
                </Typography>
                <Typography variant="body1" paragraph>
                    Quality is at the core of our products. We oversee the entire
                    development and production process to ensure long-lasting performance
                    and reliable warranty support.
                </Typography>

                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                    How do I use the Online Warranty and Support Tool?
                </Typography>
                <Typography variant="body1" paragraph>
                    Our online warranty and support tool allows you to submit and track
                    warranty requests directly, ensuring a smooth and transparent process.
                </Typography>

                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                    Advanced Warranty Replacement (AWR)
                </Typography>
                <Typography variant="body1" paragraph>
                    Advanced Warranty Replacement ensures minimal downtime by providing
                    efficient replacement solutions while maintaining high product
                    quality standards.
                </Typography>
            </Box>

            {/* Warranty Types */}
            <Box>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Type of Warranty
                </Typography>

                <Typography variant="body1">
                    Warranty types vary by product and are clearly defined at the time of
                    purchase. Please refer to your product documentation or account
                    dashboard for specific warranty details.
                </Typography>
            </Box>
        </Container>
    );
}
