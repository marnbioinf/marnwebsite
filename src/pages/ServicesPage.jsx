import { Typography, Box } from "@mui/material";
import { useDevice } from "../hooks/responsive";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import React, { useEffect, useState } from "react";
import axios from "axios";

const ServicesPage = () => {
    const { isDesktop, isTablet, isMobile } = useDevice();
    const [open, setOpen] = React.useState(false);
    const [servicesData, setServicesData] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/services/services/");
                setServicesData(response.data);
            } catch (error) {
                console.error("Error fetching services data:", error);
            }
        };

        fetchServices();
    }, []);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    const categorizedServices = servicesData.reduce((acc, service) => {
        const { category } = service;
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(service);
        return acc;
    }, {});

    return (
        <Box
            sx={{
                minHeight: "100vh",
                backgroundColor: "#000",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
            }}
        >

            {/* Navbar */}
            <Navbar />
            {/* Navbar */}
            {/* Heading */}
            <Box sx={styles.container}>
                <Typography variant="h1" sx={styles.header}>
                    Our Services
                </Typography>
                <Typography variant="h2" sx={styles.subHeader}>
                    Explore what we offer to help you innovate and succeed.
                </Typography>
                {Object.keys(categorizedServices).map((category) => (
                    <Box key={category}>
                        <Typography variant="h4" sx={{ margin: "40px 0", color: "#bbbbbb" }}>
                            {category}
                        </Typography>
                        <Box sx={styles.cardContainer}>
                            {categorizedServices[category].map((service) => (
                                <Box key={service.id} sx={styles.card}>
                                    <Box sx={styles.icon}>{service.icon}</Box>
                                    <Typography variant="h2" sx={styles.cardTitle}>
                                        {service.ser_name}
                                    </Typography>
                                    <Typography variant="body1" sx={styles.cardDescription}>
                                        {service.description}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                ))}
            </Box>
            {/* Footer */}
            <Footer />
            {/* Footer */}
        </Box>
    );
};

const styles = {
    container: {
        minHeight: "100vh",
        padding: "50px 20px",
        backgroundColor: "#12121",
        color: "#ffffff",
        textAlign: "center",
    },
    header: {
        fontSize: "3rem",
        marginBottom: "10px",
    },
    subHeader: {
        fontSize: "1.5rem",
        marginBottom: "40px",
        color: "#bbbbbb",
    },
    cardContainer: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px",
    },
    card: {
        backgroundColor: "#1e1e1e",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(134, 134, 134, 0.4)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
        "&:hover": {
            transform: "translateY(-10px)",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.6)",
        },
    },
    cardTitle: {
        fontSize: "1.5rem",
        margin: "10px 0",
    },
    cardDescription: {
        fontSize: "1rem",
        color: "#aaaaaa",
    },
    icon: {
        fontSize: "3rem",
        marginBottom: "15px",
    },
};

export default ServicesPage;


