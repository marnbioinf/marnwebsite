import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer, AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <AppBar position="static" sx={{ backgroundColor: "#000", boxShadow: "none" }}>
            <Toolbar sx={{ justifyContent: "space-between" }}>
                {/* Logo */}
                <Link to="/" style={{ textDecoration: "none" }}>
                    <Typography variant="h6" sx={{ color: "#fff", fontWeight: "bold" }}>
                        MARN-BioInformatics
                    </Typography>
                </Link>
                {/* Navbar Links */}
                {isMobile ? (
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Button
                            color="inherit"
                            onClick={() => setOpen(!open)}
                            sx={{ color: "#fff" }}
                        >
                            <MenuIcon />
                        </Button>
                        <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                            <Box
                                sx={{
                                    width: 250,
                                    backgroundColor: "#000",
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    paddingTop: 2,
                                }}
                            >
                                <Link to="/SignUp">
                                    <Button
                                        color="inherit"
                                        style={{
                                            padding: "10px 20px",
                                            backgroundColor: "#333",
                                            color: "#fff",
                                            border: "none",
                                            borderRadius: "5px",
                                            cursor: "pointer",
                                        }}
                                    >
                                        Sign-up / Log-in
                                    </Button>
                                </Link>
                                <Link to="/ServicesPage">
                                    <Button color="inherit" sx={{ color: "#fff" }}>
                                        Services
                                    </Button>
                                </Link>
                                <Button color="inherit" sx={{ color: "#fff" }}>
                                    Blog
                                </Button>
                                <Button color="inherit" sx={{ color: "#fff" }}>
                                    About
                                </Button>
                            </Box>
                        </Drawer>
                    </Box>
                ) : (
                    <Box sx={{ display: "flex", gap: 3 }}>
                        <Link to="/signup">
                            <Button
                                color="inherit"
                                style={{
                                    padding: "10px 20px",
                                    backgroundColor: "#333",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                }}
                            >
                                Sign-up / Log-in
                            </Button>
                        </Link>
                        <Link to="/services">
                            <Button color="inherit" sx={{ color: "#fff" }}>
                                Services
                            </Button>
                        </Link>
                        <Button color="inherit" sx={{ color: "#fff" }}>
                            Blog
                        </Button>
                        <Button color="inherit" sx={{ color: "#fff" }}>
                            About
                        </Button>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};
export default Navbar;