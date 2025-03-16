import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Typography, Button, Box } from "@mui/material";
import { useDevice } from "../hooks/responsive";


const DarkLandingPage = () => {
  const { isDesktop, isTablet, isMobile } = useDevice();
  
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
      {isDesktop}
      {isTablet}
      {isMobile}
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          position: "relative",
        }}
      >
        {isDesktop}
        {isTablet}
        {isMobile}
        {/* Background Text */}
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "3rem", sm: "5rem", md: "7rem", lg: "10rem", xl: "18rem" },
            fontWeight: "bold",
            color: "rgba(185, 185, 185, 0.05)",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
            whiteSpace: "nowrap",
          }}
        >
          MARN
        </Typography>

        {/* Foreground Content */ }
        <Box sx={{ zIndex: 2, marginTop: { xs: 2, sm: 4, md: 6 } }}>
          {/* Subtitle */}
          <Typography variant="h4" gutterBottom sx={{ marginBottom: { xs: 2, sm: 3, md: 4 } }}>
            From Data to Medicine
          </Typography>

          {/* Action Buttons */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              variant="outlined"
              sx={{ borderColor: "#fff", color: "#fff", textTransform: "none" }}
            >
              Learn more
            </Button>
            {/* <Button
              variant="text"
              sx={{ color: "#fff", textTransform: "none" }}
              endIcon={<span style={{ fontSize: "1rem" }}>↗</span>} // Arrow-like icon
            >
              Try now on X
            </Button> */}
          </Box>
        </Box>
      </Box>
      {/* Footer */}
      <Footer />
     {/* Footer */}
    </Box>
  );
};

export default DarkLandingPage;
