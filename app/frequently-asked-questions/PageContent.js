"use client";

import React, { useState, useMemo } from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  InputAdornment,
  IconButton,
  Stack,
  Chip,
  Divider,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Link from "next/link";

const PRIMARY = "#617F00";
const BG = "#FFF";

const FAQS = [
  {
    q: "What is a PCD Pharma Franchise?",
    a: "A PCD Pharma Franchise is a business opportunity where you can market and distribute pharmaceutical products under exclusive rights in a specific area. Biozoc allows franchise partners to sell high-quality medicines, giving them a competitive edge and full business support.",
    tag: "PCD Pharma Franchise"
  },
  {
    q: "How can I start a franchise with Biozoc?",
    a: "Starting a franchise with Biozoc is simple. Fill out the franchise inquiry form on the website or contact our team directly. Once your area is approved, you’ll get a product list, marketing support, and exclusive rights to start your business.",
    tag: "PCD Pharma Franchise"
  },
  {
    q: "Do I get monopoly rights in my area?",
    a: "Yes. Biozoc provides exclusive marketing and distribution rights in your selected location. This ensures minimal competition and maximum business potential in your territory.",
    tag: "PCD Pharma Franchise"
  },
  {
    q: "What product categories are offered?",
    a: `Biozoc offers a wide range of pharmaceutical products, including:
    <ul>
    <li>Tablets & Capsules</li>
    <li>Syrups & Dry Syrups</li>
    <li>Ointments & Topicals</li>
    <li>Herbal Medicines & Nutraceuticals</li>
    <li>Personal care products like soaps, lotions, and sachets</li>
    </ul>
    `,
    tag: "Product Range & Quality Assurance"
  },
  {
    q: "Are Biozoc products GMP/ISO certified?",
    a: "Yes. All Biozoc products are manufactured in ISO and GMP-certified facilities, ensuring high-quality, safe, and effective medicines.",
    tag: "Product Range & Quality Assurance"
  },
  {
    q: "How is product quality ensured?",
    a: "Biozoc follows strict quality control processes, from raw material sourcing to packaging. Each batch is tested under modern laboratory standards to ensure purity, efficacy, and compliance with regulatory norms.",
    tag: "Product Range & Quality Assurance"
  },
  {
    q: "How much investment is required for a franchise?",
    a: "The investment depends on the product range and territory size. Biozoc provides flexible options to accommodate beginners and experienced business owners. Our team can guide you to select the right plan for your budget.",
    tag: "Business, Investment & Ownership"
  },
  {
    q: "What is the ROI for PCD franchise partners?",
    a: "Biozoc franchise partners typically enjoy high-profit margins due to competitive pricing, monopoly rights, and strong product demand. ROI depends on your sales efforts, marketing strategies, and territory size.",
    tag: "Business, Investment & Ownership"
  },
  {
    q: "Can beginners join without prior pharma experience?",
    a: "Absolutely. Biozoc welcomes both beginners and experienced entrepreneurs. We provide full training, product guidance, and marketing support to help you start and grow your business.",
    tag: "Business, Investment & Ownership"
  },
  {
    q: "What is Biozoc’s history and reputation?",
    a: "Biozoc is a trusted pharma company with decades of experience in manufacturing and distributing high-quality medicines. We are known for our ethical practices, strong product portfolio, and reliable business support.",
    tag: "Company Information"
  },
  {
    q: "Are Biozoc products widely recognized?",
    a: "Yes. Our products are recognized by doctors, pharmacists, and medical distributors across India for their quality, effectiveness, and affordability.",
    tag: "Company Information"
  },
  {
    q: "Where is Biozoc located?",
    a: "Biozoc is headquartered in Mohali, India, with distribution networks across multiple states, ensuring timely product delivery and franchise support nationwide.",
    tag: "Company Information"
  },
  {
    q: "What is the pharma market potential in India?",
    a: "India’s pharmaceutical market is growing rapidly, with increasing demand for quality medicines, nutritional supplements, and herbal products. This makes PCD Pharma Franchises a lucrative business opportunity.",
    tag: "General Pharma Business & Industry"
  },
  {
    q: "How competitive is the PCD pharma business?",
    a: "While competition exists, Biozoc offers monopoly rights, quality products, and marketing support, giving franchise partners a strong advantage to succeed in their territory.",
    tag: "General Pharma Business & Industry"
  },
  {
    q: "What strategies help grow a pharma franchise?",
    a: "Effective strategies include building strong doctor and chemist networks, promoting your products with Biozoc’s marketing materials, and offering excellent customer service to clients.",
    tag: "General Pharma Business & Industry"
  },
  {
    q: "Why choose Biozoc over other pharma franchise companies?",
    a: "Biozoc combines high-quality products, ethical business practices, and extensive franchise support, making it a preferred choice for entrepreneurs looking to grow in the pharma sector.",
    tag: "Why Biozoc?"
  },
  {
    q: "What support does Biozoc provide?",
    a: `Biozoc provides:
    <ul>
    <li>Product catalogues and samples</li>
    <li>Marketing and promotional materials</li>
    <li>Business guidance and training</li>
    <li>Timely supply and delivery support</li>
    </ul>
    `,
    tag: "Why Biozoc?"
  },
  {
    q: "How is Biozoc different in terms of product quality?",
    a: "Biozoc follows strict quality standards, using premium raw materials and advanced manufacturing processes to ensure products are safe, effective, and compliant with regulations.",
    tag: "Why Biozoc?"
  },
  {
    q: "Are formulations research-backed?",
    a: "Yes. All Biozoc products are developed based on scientific research and clinical standards, ensuring effective and safe medicines for patients.",
    tag: "Product & Formulation"
  },
  {
    q: "Are herbal or ayurvedic products available?",
    a: "Yes. Biozoc offers a wide range of herbal, ayurvedic, and natural products, catering to the growing demand for alternative medicines.",
    tag: "Product & Formulation"
  },
  {
    q: "Can I request customized formulations?",
    a: "Biozoc provides custom formulation services for partners seeking specific products under their brand. Our team will guide you through the process.",
    tag: "Product & Formulation"
  },
  {
    q: "Are franchise prices competitive?",
    a: "Yes. Biozoc offers affordable and transparent pricing, helping franchise partners maximize profits while maintaining product quality.",
    tag: "Financial, Pricing & Investment"
  },
  {
    q: "How is profit margin structured?",
    a: "Profit margins depend on the product line and territory. Biozoc ensures high margins to make your franchise business profitable and sustainable.",
    tag: "Financial, Pricing & Investment"
  },
  {
    q: "Are there hidden costs in starting a franchise?",
    a: "No. Biozoc provides clear and upfront cost structures, including product pricing, marketing support, and franchise fees, with no hidden charges.",
    tag: "Financial, Pricing & Investment"
  },
  {
    q: "Can I sell products under my brand?",
    a: "Yes. Biozoc allows private labelling, enabling franchise partners to sell products under their own brand name.",
    tag: "Branding, Label Design & Private Labelling"
  },
  {
    q: "Does Biozoc help with marketing and labeling?",
    a: "Absolutely. Biozoc provides professional label designs, marketing materials, and promotional support to help franchise partners grow.",
    tag: "Branding, Label Design & Private Labelling"
  },
  {
    q: "Are promotional materials provided?",
    a: "Yes. We provide visual aids, brochures, sample kits, and digital marketing materials to help you promote your business effectively.",
    tag: "Branding, Label Design & Private Labelling"
  }
]

// const FAQS = [
//   {
//     q: "How does the Ayurvedic PCD franchise business model work in India?",
//     a: "The Ayurvedic PCD franchise business works on a distribution-based model where Zocveda - PCD Pharma Company provides Ayurvedic products, marketing materials, monopoly rights, and business support to franchise partners. You can promote and sell our herbal and Ayurvedic product range in your own territory. This model is trending because it offers low investment, high profits, and long-term growth.",
//     tag: "Ayurvedic PCD Franchise",
//   },
//   {
//     q: "What are the requirements to start an Ayurvedic PCD franchise with Zocveda?",
//     a: `
//     To start an Ayurvedic PCD franchise, you need:
//         <ul>
//         <li>A valid GST Number</li>
//         <li>Experience in pharma or Ayurvedic sales (recommended, not compulsory)</li>
//         <li>A small investment in stock</li>
//         <li>Basic infrastructure, like a shop or warehouse</li>
//         </ul>
//         Zocveda - PCD Pharma Company helps new entrepreneurs easily start their Ayurvedic PCD Pharma franchise.
//         `,
//     tag: "Ayurvedic PCD Franchise",
//   },
//   {
//     q: "What support does Zocveda offer to Ayurvedic PCD franchise partners?",
//     a: `
//     We provide full business support, including:
//     <ul>
//     <li>Monopoly rights</li>
//     <li>Free marketing materials</li>
//     <li>Promotional tools</li>
//     <li>High-quality Ayurvedic products</li>
//     <li>Fast delivery and reliable service</li>
//     </ul>
//     Our support ensures that franchise owners can scale their Ayurvedic franchise business quickly.
//     `,
//     tag: "Ayurvedic PCD Franchise",
//   },
//   {
//     q: "How profitable is the Ayurvedic PCD franchise business in India?",
//     a: "The Ayurvedic market in India is growing rapidly, making the Ayurvedic PCD franchise business highly profitable. With increasing demand for herbal wellness products, franchise owners enjoy high margins, repeat orders, and stable monthly income. Zocveda’s premium product range further boosts profitability.",
//     tag: "Ayurvedic PCD Franchise",
//   },
//   {
//     q: "Does Zocveda provide Ayurvedic third-party manufacturing services?",
//     a: "Yes, Zocveda - PCD Pharma Company offers Ayurvedic third-party manufacturing for startups, MSMEs, and established Ayurvedic brands across India. We manufacture syrups, tablets, capsules, oils, juices, herbal powders, and more with premium quality standards and fast turnaround time.",
//     tag: "Ayurvedic & Herbal Third Party Manufacturing"
//   },
//   {
//     q: "What is the minimum order quantity (MOQ) for Ayurvedic third-party manufacturing?",
//     a: "Our MOQ is flexible and ideal for small & medium businesses. You can start with small batches, making it easy to launch your own Ayurvedic private label products without heavy investment.",
//     tag: "Ayurvedic & Herbal Third Party Manufacturing"
//   },
//   {
//     q: "How does Zocveda ensure product quality in Ayurvedic manufacturing?",
//     a: "Zocveda - PCD Pharma Company follows strict GMP, ISO, and Ayush-approved standards. We use authentic herbs, maintain clean manufacturing practices, and ensure every product passes quality checks for purity, safety, and effectiveness.",
//     tag: "Ayurvedic & Herbal Third Party Manufacturing"
//   },
//   {
//     q: "What Ayurvedic and herbal products does Zocveda offer?",
//     a: `Zocveda - PCD Pharma Company offers a wide Ayurvedic and herbal product range, including:
//       <ul>
//       <li>Digestive care syrups</li>
//       <li>Pain relief oils and balms</li>
//       <li>Immunity boosters</li>
//       <li>Herbal juices</li>
//       <li>Ayurvedic tablets & capsules</li>
//       <li>Skincare & personal care products</li>
//       </ul>
//       We specialise in high-demand Ayurvedic formulations for PCD and third-party clients.
//       `,
//     tag: "Product Range & Quality Assurance"
//   },
//   {
//     q: "Are Zocveda’s Ayurvedic products approved by regulatory authorities?",
//     a: "Yes. All our herbal and Ayurvedic products are manufactured under Ayush-approved formulations, following GMP & ISO quality standards. This ensures safety, purity, and compliance with Indian regulatory norms.",
//     tag: "Product Range & Quality Assurance"
//   },
//   {
//     q: "What is the investment cost to start an Ayurvedic PCD franchise?",
//     a: "Starting an Ayurvedic PCD franchise with Zocveda - PCD Pharma Company requires low investment, typically between ₹10,000–₹50,000, depending on your chosen product range. You can scale the investment as your business grows.",
//     tag: "Business, Investment & Ownership"
//   },
//   {
//     q: "How can I apply for the Ayurvedic PCD franchise or third-party manufacturing?",
//     a: `You can easily apply via:
//         <ul>
//         <li>Our website contact form</li>
//         <li>WhatsApp</li>
//         <li>Direct call</li>
//         <li>Email</li>
//         </ul>
//         Zocveda’s team will guide you through product selection, pricing, documentation, and onboarding.
//       `,
//     tag: "Business, Investment & Ownership"
//   },
//   {
//     q: "Why choose Zocveda as your Ayurvedic PCD franchise or third-party manufacturing partner?",
//     a: `
//     Zocveda - PCD Pharma Company is one of the most trusted Ayurvedic PCD franchise companies in India, known for:
//     <ul>
//     <li>High-quality Ayurvedic products</li>
//     <li>Ethical business practices</li>
//     <li>Monopoly-based franchise model</li>
//     <li>Fast manufacturing & delivery</li>
//     <li>Transparent pricing</li>
//     </ul>
//     Our expertise makes us a reliable partner in the Ayurvedic pharma industry.
//     `,
//     tag: "Company Information"
//   },
//   {
//     q: "Where is Zocveda located?",
//     a: "Zocveda - PCD Pharma Company is based in Mohali, Punjab, and supplies Ayurvedic products across Pan India through PCD franchise and third-party manufacturing services.",
//     tag: "Company Information"
//   },
//   {
//     q: "Why is the Ayurvedic industry growing so fast in India?",
//     a: "The Ayurvedic industry is growing because customers prefer natural, chemical-free wellness products, and the Indian government supports Ayurveda through AYUSH initiatives. This creates huge opportunities for Ayurvedic PCD franchise owners and herbal product manufacturers.",
//     tag: "General Ayurveda Business & Industry"
//   },
//   {
//     q: "Is an Ayurvedic business profitable in small towns and rural areas?",
//     a: "Yes. Ayurvedic products have a strong demand in Tier-2 and Tier-3 towns, making it highly profitable even with low investment. Zocveda supplies fast-moving Ayurvedic products ideal for rural markets.",
//     tag: "General Ayurveda Business & Industry"
//   },
//   {
//     q: "Can I start an Ayurvedic business without a physical shop?",
//     a: "Yes. Many franchise partners run the business through online selling, WhatsApp, and local distribution without a shop. A storage space is enough.",
//     tag: "General Ayurveda Business & Industry"
//   },
//   {
//     q: "What makes Ayurveda better than allopathic products for business?",
//     a: "Ayurveda offers fewer side effects, repeat purchases, high trust, and low entry barriers, making it attractive for entrepreneurs.",
//     tag: "General Ayurveda Business & Industry"
//   },
//   {
//     q: "Does Ayurveda require cold storage or special storage conditions?",
//     a: "No. Ayurvedic products require only a cool, dry place, making storage and logistics very easy.",
//     tag: "General Ayurveda Business & Industry"
//   },
//   {
//     q: "What makes Zocveda different from other Ayurvedic companies?",
//     a: "Zocveda stands out because of premium-quality formulations, research-based products, competitive pricing, fast delivery, and dedicated support for both PCD franchise and private-label clients.",
//     tag: "Why Zocveda?"
//   },
//   {
//     q: "What are the trending Ayurvedic formulations for 2025?",
//     a: `
//     Trending products include:
//     <ul>
//     <li>Liver detox syrup</li>
//     <li>Female wellness tonics</li>
//     <li>Immunity boosters</li>
//     <li>Ayurvedic juices</li>
//     <li>Pain relief oils</li>
//     <li>Gut health formulations</li>
//     </ul>
//     These are high-demand products for both PCD franchise and private-label brands.
//     `,
//     tag: "Product & Formulation"
//   },
//   {
//     q: "How does Zocveda ensure herbs are sourced ethically?",
//     a: "We use certified suppliers, follow AYUSH guidelines, and source herbs from trusted farmers to ensure ethical and pure raw materials.",
//     tag: "Product & Formulation"
//   },
//   {
//     q: "Are your herbal products suitable for all age groups?",
//     a: "Most products are safe for adults. However, certain formulations for kids, seniors, or pregnant women are categorized separately.",
//     tag: "Product & Formulation"
//   },
//   {
//     q: "How fast does Zocveda ship PCD franchise orders?",
//     a: "We dispatch orders within 1 - 2 weeks, depending on the location, ensuring quick supply for distributors across India.",
//     tag: "Distribution, Logistics & Ordering"
//   },
//   {
//     q: "Does Zocveda provide express shipping for urgent requirements?",
//     a: "Yes. We offer priority shipping and express courier services on request.",
//     tag: "Distribution, Logistics & Ordering"
//   },
//   {
//     q: "Can I track my Ayurvedic product shipment online?",
//     a: "Yes. We share tracking details so you can monitor your shipment in real time.",
//     tag: "Distribution, Logistics & Ordering"
//   },
//   {
//     q: "What if products get damaged during shipping?",
//     a: "We follow secure packaging, but if damage occurs, Zocveda provides quick replacement support after verification.",
//     tag: "Distribution, Logistics & Ordering"
//   },
//   {
//     q: "Can I reorder online or through WhatsApp?",
//     a: "Yes. You can easily reorder through WhatsApp, call, or our website inquiry form.",
//     tag: "Distribution, Logistics & Ordering"
//   },
//   {
//     q: "Are there hidden charges involved in the Ayurvedic PCD franchise?",
//     a: "No. Zocveda follows transparent pricing with no hidden fees, royalty charges, or annual renewal fees.",
//     tag: "Financial, Pricing & Investment"
//   },
//   {
//     q: "Do you offer credit or flexible payment options to distributors?",
//     a: "Initially, we follow an advance payment, but long-term partners may get flexible options based on trust and performance.",
//     tag: "Financial, Pricing & Investment"
//   },
//   {
//     q: "Why do Ayurvedic products offer higher profit margins than allopathic?",
//     a: "Because Ayurveda has low production cost, high demand, repeat customers, and brand loyalty, increasing margin potential.",
//     tag: "Financial, Pricing & Investment"
//   },
//   {
//     q: "How does product seasonality affect Ayurvedic sales?",
//     a: "Some products (like immunity & respiratory care) sell more seasonally, but most Ayurvedic products show year-round demand.",
//     tag: "Financial, Pricing & Investment"
//   },
//   {
//     q: "Are price lists tailored based on region or state?",
//     a: "No. Zocveda provides a uniform price list, ensuring fairness across India.",
//     tag: "Financial, Pricing & Investment"
//   },
//   {
//     q: "Does Zocveda help with logo and Ayurvedic label designing?",
//     a: "Yes. We provide label, box design, bottle design, and brand identity support for private-label clients.",
//     tag: "Branding, Label Design & Private Labelling"
//   },
//   {
//     q: "Can I choose custom bottle shapes and packaging styles?",
//     a: "Yes. Zocveda offers different bottle shapes, sizes, caps, label finishes, and packaging options.",
//     tag: "Branding, Label Design & Private Labelling"
//   },
//   {
//     q: "Can I launch a premium Ayurveda brand with gold or matte packaging?",
//     a: "Yes. We provide premium matte, foiling, and laminated boxes for high-end Ayurvedic brands.",
//     tag: "Branding, Label Design & Private Labelling"
//   },
//   {
//     q: "Does Zocveda offer barcode, QR code, and batch printing?",
//     a: "Yes. We add barcodes, QR codes, manufacturing dates, and batch numbers as per regulatory norms.",
//     tag: "Branding, Label Design & Private Labelling"
//   },
//   {
//     q: "Can Zocveda manufacture Ayurvedic products under strict confidentiality (NDA)?",
//     a: "Yes. We sign Non-Disclosure Agreements (NDA) for unique or proprietary formulations.",
//     tag: "Branding, Label Design & Private Labelling"
//   }
// ];

export default function FaqPage() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("All");
  const [expanded, setExpanded] = useState(false);

  const tags = useMemo(() => {
    const s = new Set(FAQS.map((f) => f.tag));
    return ["All", ...Array.from(s)];
  }, []);

  const filtered = useMemo(() => {
    return FAQS.filter((f) => {
      const matchesTag = activeTag === "All" ? true : f.tag === activeTag;
      const matchesQuery = `${f.q} ${f.a}`.toLowerCase().includes(query.toLowerCase());
      return matchesTag && matchesQuery;
    });
  }, [query, activeTag]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ background: BG, minHeight: "100%", py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h3" sx={{ color: PRIMARY, fontWeight: 900, mb: 1 }}>
            Frequently Asked Questions
          </Typography>
          <Typography sx={{ fontSize: 18, color: "#4A4A4A", maxWidth: 900, mx: "auto" }}>
            Find quick answers to common questions about orders, shipping, payments, and more. Use the
            search or filter chips to narrow results.
          </Typography>
        </Box>

        <Paper elevation={3} sx={{ p: { xs: 2, md: 3 }, borderRadius: 3 }}>
          <Stack direction={{ xs: "column", md: "row" }} spacing={2} alignItems="center" sx={{ mb: 2 }}>
            <TextField
              fullWidth
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search FAQs — try: 'shipping', 'refund', 'invoice'"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />

            <IconButton
              onClick={() => {
                setQuery("");
                setActiveTag("All");
                setExpanded(false);
              }}
              sx={{ bgcolor: "white", borderRadius: 2 }}
              aria-label="reset"
            >
              <InfoOutlinedIcon sx={{ color: PRIMARY }} />
            </IconButton>
          </Stack>

          <Box sx={{ mb: 2 }}>
            <Stack direction="row" gap={1} flexWrap="wrap">
              {tags.map((t) => (
                <Chip
                  key={t}
                  label={t}
                  clickable
                  onClick={() => setActiveTag(t)}
                  variant={activeTag === t ? "filled" : "outlined"}
                  sx={{
                    borderColor: PRIMARY,
                    color: activeTag === t ? "white" : PRIMARY,
                    bgcolor: activeTag === t ? PRIMARY : "transparent",
                    fontWeight: 600,
                    "&:hover": {
                      bgcolor: activeTag === t ? PRIMARY : "rgba(0, 0, 0, 0.04)",
                      color: activeTag === t ? "white" : PRIMARY,
                      borderColor: PRIMARY,
                    }
                  }}
                />
              ))}
            </Stack>
          </Box>

          <Divider sx={{ mb: 2 }} />

          <Box>
            {filtered.length === 0 ? (
              <Box sx={{ py: 6, textAlign: "center" }}>
                <Typography sx={{ color: "#666" }}>No results match your search.</Typography>
              </Box>
            ) : (
              filtered.map((item, index) => {
                const id = `panel-${index}`;
                return (
                  <Accordion
                    key={id}
                    expanded={expanded === id}
                    onChange={handleChange(id)}
                    sx={{
                      mb: 1,
                      borderRadius: 2,
                      boxShadow: "none",
                      border: "1px solid rgba(0,0,0,0.06)",
                      '& .MuiAccordionSummary-root': { minHeight: 64 },
                    }}
                  >
                    <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: PRIMARY }} />}>
                      <Stack direction="row" alignItems="center" spacing={2} sx={{ width: "100%" }}>
                        <Box
                          sx={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            bgcolor: PRIMARY,
                            boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                          }}
                        />
                        <Typography sx={{ fontWeight: 700 }}>{item.q}</Typography>
                        <Box sx={{ flex: 1 }} />
                        <Chip
                          label={item.tag}
                          size="small"
                          sx={{
                            borderColor: PRIMARY,
                            color: PRIMARY,
                            fontWeight: 600
                          }}
                        />
                      </Stack>
                    </AccordionSummary>

                    <AccordionDetails sx={{ background: "rgba(31,106,54,0.03)", borderRadius: 0, pt: 2 }}>
                      <Typography
                        sx={{ color: "#333" }}
                        component="div"
                        dangerouslySetInnerHTML={{ __html: item.a }}
                      />
                    </AccordionDetails>
                  </Accordion>
                );
              })
            )}
          </Box>

          <Box sx={{ mt: 3, textAlign: "center" }}>
            <Link href={"/contact"}>
              <Typography sx={{
                color: "#666",
                "&:hover": {
                  textDecoration: "underline"
                }
              }}>
                Didn’t find what you were looking for? Contact our support and we’ll help you out.
              </Typography>
            </Link>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
