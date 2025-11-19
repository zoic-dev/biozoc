"use client";

import { Box, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export default function NotFound() {
    const router = useRouter();

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                bgcolor: "#F9FAFB",
                px: 2,
            }}
        >
            {/* Icon */}
            <Box
                sx={{
                    fontSize: 120,
                    color: "#EC1C24",
                    mb: 3,
                    animation: "bounce 1.5s infinite",
                    "@keyframes bounce": {
                        "0%, 100%": { transform: "translateY(0)" },
                        "50%": { transform: "translateY(-20px)" },
                    },
                }}
            >
                <ErrorOutlineIcon fontSize="inherit" />
            </Box>

            {/* Heading */}
            <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
                404
            </Typography>

            {/* Subtitle */}
            <Typography variant="h5" sx={{ mb: 2, color: "text.secondary" }}>
                Oops! Page Not Found
            </Typography>

            <Typography
                variant="body1"
                sx={{
                    mb: 4,
                    maxWidth: 400,
                    color: "text.secondary",
                    lineHeight: 1.6,
                }}
            >
                The page you are looking for does not exist or has been moved. Go back
                to the homepage and continue exploring.
            </Typography>

            {/* Button */}
            <Button
                variant="contained"
                sx={{
                    bgcolor: "#EC1C24",
                    color: "#fff",
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    "&:hover": { bgcolor: "#B71C1C" },
                }}
                onClick={() => router.push("/")}
            >
                Go to Homepage
            </Button>
        </Box>
    );
}
