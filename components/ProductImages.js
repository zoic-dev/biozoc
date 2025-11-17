"use client";

import React, { useState } from "react";
import { Box, Stack, Avatar, IconButton } from "@mui/material";
import Lightbox from "./Lightbox";

export default function ProductImages({ images = [] }) {
  const [main, setMain] = useState(images[0]);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      {/* Main Image Container */}
      <Box
        sx={{
          width: "100%",
          height: 420,        // 🔥 fixed height back again
          borderRadius: 3,
          overflow: "hidden",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          bgcolor: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "zoom-in",
        }}
        onClick={() => setLightboxOpen(true)}
      >
        <img
          src={main.src}
          alt="Product"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
          }}
        />
      </Box>

      {/* Thumbnails */}
      <Stack direction="row" spacing={2} mt={2}>
        {images.map((img, idx) => (
          <Avatar
            key={idx}
            src={img.src}
            variant="rounded"
            onClick={() => setMain(img)}
            sx={{
              width: 70,
              height: 70,
              borderRadius: 2,
              cursor: "pointer",
              border: main === img ? "2px solid #1976d2" : "2px solid transparent",
              transition: "0.25s",
              "&:hover": { transform: "scale(1.05)" },
            }}
          />
        ))}
      </Stack>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        image={main}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}
