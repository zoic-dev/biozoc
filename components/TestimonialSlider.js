"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography, Avatar, Stack } from "@mui/material";
import "./TestimonialSlider.css";


const testimonials = [
  {
    text: "In the era of chemical Biozoc is providing wonderful herbal products for every kind of disease. Really commendable!",
    name: "Anul Ansari",
    location: "Jharkhand",
  },
  {
    text: "Biozoc’s herbal supplements have made a huge difference in my daily energy and immunity. Absolutely trust their natural approach!",
    name: "Meena Sharma",
    location: "Rajasthan",
  },
  {
    text: "Very satisfied with their protein powder and ayurvedic tonics. They really maintain quality and purity in every product.",
    name: "Rohit Verma",
    location: "Delhi",
  },
  {
    text: "After switching to Biozoc’s herbal range, my digestion and skin have improved drastically. The products feel genuinely natural!",
    name: "Poonam Sethi",
    location: "Punjab",
  },
  {
    text: "Excellent herbal solutions for common health issues. I’ve recommended Biozoc to my entire family!",
    name: "Amitabh Yadav",
    location: "Uttar Pradesh",
  },
  {
    text: "Biozoc provides affordable and trustworthy herbal care. The team is very responsive and professional too.",
    name: "Kiran Patel",
    location: "Gujarat",
  },
  {
    text: "I’ve been using Biozoc’s immunity booster syrup for months — very effective and completely side-effect free.",
    name: "Saurabh Mishra",
    location: "Madhya Pradesh",
  },
  {
    text: "Their products are authentic and show real results. Loved the packaging and timely delivery as well!",
    name: "Priya Nair",
    location: "Kerala",
  },
  {
    text: "I appreciate Biozoc’s dedication to Ayurveda. Their herbal capsules helped me manage stress naturally.",
    name: "Rakesh Kumar",
    location: "Haryana",
  },
  {
    text: "Every product I’ve tried from Biozoc has exceeded my expectations — safe, pure, and effective. Highly recommended!",
    name: "Sonia Mehta",
    location: "Himachal Pradesh",
  },
];


const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <Box
      sx={{
        backgroundColor: "#6b8200",
        color: "white",
        textAlign: "center",
        py: { xs: 6, md: 8 },
        px: 2,
      }}
    >
      <Typography variant="h5" fontWeight={700}>
        Our Happy Client's
      </Typography>
      <Typography
        variant="h6"
        fontStyle={"italic"}
        sx={{
          fontFamily: "'Dancing Script', cursive",
          mt: 1,
        }}
      >
        100% Positive Reviews
      </Typography>

      <Box sx={{ maxWidth: 900, mx: "auto", mt: 5 }} className="testimonial-slider">
        <Slider {...settings}>
          {testimonials.map((item, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 300,
              }}
            >
              <Typography
                variant="h6"
                fontStyle="italic"
                sx={{
                  maxWidth: 700,
                  mx: "auto",
                  mb: 4,
                  lineHeight: 1.6,
                  fontWeight: 400,
                  overflowWrap: "break-word",
                  wordBreak: "break-word",
                }}
              >
                {item.text}
              </Typography>

              <Stack direction="column" spacing={1} alignItems="center">
                <Avatar
                  alt={item.name}
                  sx={{
                    width: 60,
                    height: 60,
                    border: "1px solid white",
                    bgcolor: "#fff2",
                  }}
                >
                  {item.name.charAt(0)}
                </Avatar>
                <Typography variant="body1" fontWeight={600}>
                  {item.name}
                </Typography>
                <Typography variant="body2">{item.location}</Typography>
              </Stack>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default TestimonialSlider;
