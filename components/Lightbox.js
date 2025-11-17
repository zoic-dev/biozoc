"use client";

import React, { useEffect } from "react";
import { Box, IconButton, Fade } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function Lightbox({ open, image, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!open) return null;

  return (
    <Fade in={open}>
      <Box
        onClick={onClose}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          bgcolor: "rgba(255,255,255,0.75)", // ✨ soft white semi-transparent
          backdropFilter: "blur(10px)", // ✨ clean frosted glass effect
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2000,
          padding: 2,
        }}
      >
        {/* Prevent closing when clicking inside the card */}
        <Box
          onClick={(e) => e.stopPropagation()}
          sx={{
            position: "relative",
            borderRadius: 3,
            overflow: "hidden",
            boxShadow: "0 8px 30px rgba(0,0,0,0.15)", // ✨ soft shadow
            bgcolor: "#fff",
            padding: 2,
            animation: "zoomIn 0.25s ease-out",
            "@keyframes zoomIn": {
              from: { transform: "scale(0.92)", opacity: 0 },
              to: { transform: "scale(1)", opacity: 1 },
            },
          }}
        >
          <img
            src={image.src}
            alt="Product"
            style={{
              maxWidth: "100vw",
              maxHeight: "100vh",
              objectFit: "contain",
              borderRadius: "16px",
            }}
          />

          {/* Close button */}
          <IconButton
            onClick={onClose}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              bgcolor: "rgba(255,255,255,0.8)",
              backdropFilter: "blur(6px)",
              "&:hover": { bgcolor: "rgba(255,255,255,1)" },
              boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
    </Fade>
  );
}
