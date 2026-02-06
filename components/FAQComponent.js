import React from "react";
import {
    Box,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Pass PRIMARY from parent or set a fallback
export default function FAQComponent({ faqs = [], PRIMARY = "#EC1C24" }) {
    return (
        <Box sx={{ my: 6 }}>
            {/* Section Title */}
            {
                faqs.length > 0 ?
                    <Typography
                        variant="h5"
                        sx={{ color: PRIMARY, fontWeight: 800, mb: 2 }}
                    >
                        Frequently Asked Questions
                    </Typography>
                    :
                    <></>
            }

            {/* FAQ Accordion List */}
            {faqs.map((f, idx) => (
                <Accordion
                    key={idx}
                    sx={{
                        mb: 1,
                        borderRadius: 2,
                        overflow: "hidden",
                        boxShadow: "0px 1px 3px rgba(0,0,0,0.1)",
                    }}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography sx={{ fontWeight: 700, fontSize: 15 }}>
                            {f.q}
                        </Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <Typography sx={{ color: "#444", fontSize: 14 }}>
                            {f.a}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
}
