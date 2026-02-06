"use client";

import FAQComponent from "@/components/FAQComponent";
import SimpleSlider from "@/components/SimpleSlider";
import TestimonialSlider from "@/components/TestimonialSlider";
import { PAGE_FAQS } from "@/data/faqsData";
import { Button, Container, Grid, Stack, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

const productCategories = [
  {
    label: "Capsules",
    img: "/categories/capsules.jpg",
    link: "/product/category/capsules/37"
  },
  {
    label: "Protein",
    img: "/categories/protein.jpg",
    link: "/product/category/protein/40"
  },
  {
    label: "Ointments",
    img: "/categories/ointments.jpg",
    link: "/product/category/ointments/39"
  },
  {
    label: "Herbal",
    img: "/categories/herbal.jpg",
    link: "/product/category/herbal/48"
  },
  {
    label: "Syrup",
    img: "/categories/syrup.jpg",
    link: "/product/category/syrup/36"
  },
  {
    label: "Energy Drink",
    img: "/categories/energy-drinks.jpg",
    link: "/product/category/energy-drinks/49"
  },
  {
    label: "Allopathy",
    img: "/categories/drug.jpg",
    link: "/product/category/allopathy/63"
  },
  {
    label: "Lotions",
    img: "/categories/lotions.jpg",
    link: "/product/category/lotions/44"
  },
  {
    label: "Sachets",
    img: "/categories/sachets.jpg",
    link: "/product/category/sachets/41"
  },
  {
    label: "Gynaec Range",
    img: "/categories/gynaec.jpg",
    link: "/product/category/gynaec/52"
  },
  {
    label: "Tablets",
    img: "/categories/tablets.jpg",
    link: "/product/category/tablets/38"
  },
  {
    label: "Soap",
    img: "/categories/soap.jpg",
    link: "/product/category/soap/43"
  }
];

const whyChoose = [
  {
    img: "/choose/experience.png",
    label: "Since 1990"
  },
  {
    img: "/choose/unit.png",
    label: "Modern Manufacturing Units"
  },
  {
    img: "/choose/ethics.png",
    label: "Transparent Business Ethics"
  },
  {
    img: "/choose/worldwide.png",
    label: "Strong Nationwide presence"
  },
  {
    img: "/choose/team.png",
    label: "Expert R&D and Marketing Teams"
  },
  {
    img: "/choose/formulation.png",
    label: "Reseach-backed Formulations"
  }
]

export default function Home() {
  return (
    <>
      <SimpleSlider />

      <Container>

        {/* Our Products Section */}
        <Stack spacing={5} py={5} textAlign={"center"}>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "1.25rem", sm: "2.125rem" }, // h6 → h4 sizes
              fontWeight: 600,
            }}
          >
            Your Trusted Range of Healthcare Products
          </Typography>

          <Grid container spacing={4}>
            {
              productCategories.length > 0 ?
                productCategories.map((item, i) => (
                  <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }} key={i}>
                    <Link
                      href={item.link || "#"}
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        display: "block"  // ✅ makes the entire grid area clickable
                      }}
                    >
                      <img src={item.img} className="product-category-image" />
                      <Typography className="product-category-text">{item.label}</Typography>
                    </Link>
                  </Grid>
                ))
                :
                <></>
            }
          </Grid>
        </Stack>


        {/* About Us Section */}
        <Grid container alignItems={"center"} spacing={4} py={5}>
          <Grid size={{ xs: 12, sm: 12, md: 6 }}>
            <img src="/about-section.png" style={{ width: '100%' }} />
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 6 }}>
            <Stack spacing={2}>
              <Typography variant="h3"
                sx={{
                  fontSize: { xs: "1.5rem", sm: "2.125rem" }, // h6 → h4 sizes
                  fontWeight: 600,
                }}
              >
                Best Pharma Franchise Company in India
              </Typography>
              <Typography variant="body1" textAlign={"justify"}>
                BIOZOC INC. is Chandigarh based top pharmaceutical company. We have the great chance to bring our superior quality product around the globe. We offer PCD pharma franchise in India. All the wholesalers, medical representatives & pharma merchants are highly welcomed to become our franchise partner. We really feel proud that BIOZOC INC. is one of the most 3rd party manufacturing company in India.
              </Typography>
              <Typography variant="body1" textAlign={"justify"}>
                Biozoc Inc. is a PCD division of Zoic Group in India. Here , we believe that good heath should be accessible to everyone and we strive to make this possible through our commitment to science driven healthcare. Zoic Group began its illustrious journey around three decades ago with the start of its first venture Zoic Pharmaceuticals . It started with an innovative thought to take “Pharmamedicines” to the realms of scientific research , development and productions.
              </Typography>
              <Link href="/about">
                <Typography variant="subtitle2">
                  Learn more...
                </Typography>
              </Link>
            </Stack>
          </Grid>
        </Grid>


        {/* Section */}
        <Grid
          container
          spacing={4}
          py={5}
          textAlign="center"
          alignItems="stretch"   // ✅ equal height alignment
        >
          {[
            {
              title: "About Us",
              text: "Biozoc Inc. is a PCD division of Zoic Group in India. Here, we believe that good health should be accessible to everyone and we strive to make this possible through our commitment to science driven healthcare.",
              link: "/about"
            },
            {
              title: "PCD Pharma Franchise",
              text: "Biozoc Inc. is an ISO 9001:2015 Certified Pharma Franchise Company in Chandigarh offering more than 250+ high quality Medical Products.",
              link: "/pcd-franchise"
            },
            {
              title: "3rd Party Manufacturing",
              text: "We have 250+ product approvals of which many are latest molecules launched in industry. We cater to all segments like Gynaecology, Dermatology.",
              link: "/third-party-manufacturing"
            },
          ].map((item, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }} display="flex">
              <Stack
                spacing={2}
                p={3}
                sx={{
                  borderRadius: 3,
                  flexGrow: 1,
                  justifyContent: "space-between",
                  boxShadow: "rgb(0 0 0 / 10%) 0px 3px 8px",  // ✅ subtle and elegant shadow
                  transition: "all 0.3s ease",
                  backgroundColor: "#fff",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "rgb(0 0 0 / 20%) 0px 6px 12px",
                  },
                }}
              >
                <Stack spacing={2}>
                  <Typography variant="h5" fontWeight={600} gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" textAlign={"justify"}>{item.text}</Typography>
                </Stack>

                <Button
                  variant="outlined"
                  component={Link}
                  href={item.link}
                  sx={{
                    borderColor: "#EC1C24",
                    color: "#EC1C24",
                    fontWeight: 600,
                    "&:hover": { backgroundColor: "#EC1C24", color: "#fff" },
                  }}
                >
                  ENQUIRE NOW
                </Button>
              </Stack>
            </Grid>
          ))}
        </Grid>


        {/* Why Choose Us Section */}

        <Stack spacing={4} py={5}>
          <Typography variant="h4" textAlign={"center"}>
            Why Choose Us?
          </Typography>

          <Grid container spacing={4} justifyContent={"center"} textAlign={"center"} alignItems="stretch">
            {
              whyChoose.map((item, i) => (
                <Grid key={i} size={{ xs: 6, sm: 4 }} display="flex">
                  <Stack spacing={2} alignItems={"center"} justifyContent={"center"} sx={{ flexGrow: 1, }}>
                    <img src={item.img} className="why-choose-us-image" />
                    <Typography variant="body2">
                      {item.label}
                    </Typography>
                  </Stack>
                </Grid>
              ))
            }
          </Grid>
        </Stack>
      </Container>

      <Toolbar />

      {/* Testimonial Slider */}
      <TestimonialSlider />

      <Container>
        <FAQComponent faqs={PAGE_FAQS.home} />
      </Container>
    </>
  );
}
