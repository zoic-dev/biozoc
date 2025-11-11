"use client";

import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Drawer,
    List,
    ListItem,
    Button,
    Stack,
    Divider,
    Box,
    Collapse,
    useMediaQuery,
    useTheme,
    Typography,
} from "@mui/material";
import { List as ListIcon, X, CaretDown, CaretUp } from "phosphor-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { styled } from "@mui/system";
import { Phone } from "@mui/icons-material";

// === Styled Components ===
const NavbarContainer = styled(AppBar)`
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(8px);
  overflow: visible !important;
  position: sticky;
`;

const NavLink = styled("a")(({ active }) => ({
    color: active ? "#EC1C24" : "#000",
    fontSize: "16px",
    fontWeight: 500,
    transition: "color 0.3s ease",
    textDecoration: "none",
    "&:hover": {
        color: "#EC1C24",
    },
}));

const DropdownMenu = styled("div")`
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  z-index: 9999;
  min-width: 200px;
  padding: 8px 0;
  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  transform: translate(-50%, ${({ open }) => (open ? "0" : "-10px")});
  transition: all 0.25s ease;

  a {
    display: block;
    color: #000;
    padding: 10px 16px;
    font-size: 15px;
    font-weight: 500;
    text-align: left;
    text-decoration: none;

    &:hover {
      background-color: #f8f8f8;
      color: #EC1C24;
    }
  }
`;

export default function Navbar() {
    const pathname = usePathname();
    const [openDrawer, setOpenDrawer] = useState(false);
    const [openProducts, setOpenProducts] = useState(false); // for desktop dropdown
    const [drawerProducts, setDrawerProducts] = useState(false); // for mobile collapse

    const theme = useTheme();
    const isMobile = useMediaQuery("(max-width:1000px)");

    const toggleDrawer = () => setOpenDrawer(!openDrawer);
    const toggleDrawerProducts = () => setDrawerProducts(!drawerProducts);

    const navLinks = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        {
            label: "Products",
            dropdown: [
                { label: "Tablets", href: "/product/tablets" },
                { label: "Capsules", href: "/product/capsules" },
                { label: "Syrups", href: "/product/syrups" },
                { label: "Injections", href: "/product/injections" },
                { label: "Ointments", href: "/product/ointments" },
                { label: "Sachets", href: "/product/sachets" },
                { label: "Protein Powder", href: "/product/protein-powder" },
                { label: "Herbal Range", href: "/product/herbal-range" },
                { label: "Cosmetic Range", href: "/product/cosmetic-range" },
                { label: "Ayurvedic Juices", href: "/product/ayurvedic-juices" },
            ],
        },
        { label: "Third Party Manufacturing", href: "/third-party-manufacturing" },
        { label: "PCD Franchise", href: "/pcd-franchise" },
        { label: "Contact", href: "/contact" },
    ];

    return (
        <>
            {/* === Navbar === */}

            <Box p={1} sx={{
                background: "#617F00",
                alignItems: "center"
            }}>
                <Stack direction={"row"}>
                    <Phone fontSize="small" />
                    <Typography sx={{
                        color: 'white'
                    }}>
                        +91-9876800625
                    </Typography>
                </Stack>
            </Box>

            <NavbarContainer position="sticky">
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        px: { xs: 2, sm: 4 },
                        overflow: "visible",
                    }}
                >
                    {/* Logo */}
                    <Box>
                        <Link href="/">
                            <Image
                                src="/logo.png"
                                alt="Biozoc Logo"
                                width={180}
                                height={45}
                                priority
                            />
                        </Link>
                    </Box>

                    {/* Desktop Menu */}
                    {!isMobile && (
                        <Stack
                            direction="row"
                            spacing={3}
                            alignItems="center"
                            sx={{
                                overflow: "visible",
                            }}
                        >
                            {navLinks.map((link, i) =>
                                link.dropdown ? (
                                    <Box
                                        key={i}
                                        onMouseEnter={() => setOpenProducts(true)}
                                        onMouseLeave={() => setOpenProducts(false)}
                                        onClick={() => setOpenProducts(!openProducts)} // ✅ for tablets
                                        sx={{ position: "relative" }}
                                    >
                                        <NavLink
                                            as="span"
                                            style={{ cursor: "pointer", display: "inline-flex", alignItems: "center" }}
                                        >
                                            Products{" "}
                                            <CaretDown
                                                size={16}
                                                style={{
                                                    marginLeft: 4,
                                                    transform: openProducts ? "rotate(180deg)" : "rotate(0deg)",
                                                    transition: "0.2s",
                                                }}
                                            />
                                        </NavLink>

                                        <DropdownMenu open={openProducts}>
                                            {link.dropdown.map((sub, j) => (
                                                <Link key={j} href={sub.href}>
                                                    {sub.label}
                                                </Link>
                                            ))}
                                        </DropdownMenu>
                                    </Box>
                                ) : (
                                    <Link key={i} href={link.href} passHref>
                                        <NavLink active={pathname === link.href ? 1 : 0}>
                                            {link.label}
                                        </NavLink>
                                    </Link>
                                )
                            )}
                            <Button
                                variant="outlined"
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
                    )}

                    {/* Mobile Drawer Button */}
                    {isMobile && (
                        <IconButton onClick={toggleDrawer}>
                            <ListIcon color="black" size={28} />
                        </IconButton>
                    )}
                </Toolbar>
            </NavbarContainer>

            {/* === Mobile Drawer === */}
            <Drawer
                anchor="left"
                open={openDrawer}
                onClose={toggleDrawer}
                sx={{
                    "& .MuiDrawer-paper": {
                        width: 260,
                        background: "#fff",
                        p: 2,
                    },
                }}
            >
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={2}
                >
                    <Image src="/logo.png" alt="Logo" width={140} height={40} />
                    <IconButton onClick={toggleDrawer}>
                        <X size={24} />
                    </IconButton>
                </Box>

                <Divider sx={{ mb: 1 }} />

                <List>
                    {navLinks.map((link, i) =>
                        link.dropdown ? (
                            <Box key={i}>
                                <ListItem
                                    onClick={toggleDrawerProducts}
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        cursor: "pointer",
                                        color: "#EC1C24",
                                        fontWeight: 600,
                                    }}
                                >
                                    Products
                                    {drawerProducts ? (
                                        <CaretUp size={18} />
                                    ) : (
                                        <CaretDown size={18} />
                                    )}
                                </ListItem>

                                <Collapse in={drawerProducts} timeout="auto" unmountOnExit>
                                    {link.dropdown.map((sub, j) => (
                                        <ListItem key={j} sx={{ pl: 3 }}>
                                            <Link href={sub.href}>
                                                <NavLink>{sub.label}</NavLink>
                                            </Link>
                                        </ListItem>
                                    ))}
                                </Collapse>
                            </Box>
                        ) : (
                            <ListItem key={i}>
                                <Link href={link.href}>
                                    <NavLink active={pathname === link.href ? 1 : 0}>
                                        {link.label}
                                    </NavLink>
                                </Link>
                            </ListItem>
                        )
                    )}
                </List>

                <Divider sx={{ my: 1 }} />

                <Button
                    fullWidth
                    variant="contained"
                    sx={{
                        backgroundColor: "#EC1C24",
                        color: "#fff",
                        fontWeight: 600,
                        "&:hover": { backgroundColor: "#c81018" },
                    }}
                >
                    ENQUIRE NOW
                </Button>
            </Drawer>
        </>
    );
}
