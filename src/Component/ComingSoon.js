import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assests/logo.png";
import ComingSoonImg from "../assests/comming Soon.png";
import BgImg from "../assests/video-bg.png";

const ComingSoon = () => {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          textAlign: "center",
          backgroundImage: `url(${BgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          px: 2,
        }}
      >
        {/* Logo */}
        <Box sx={{ mb: 2 }}>
          <Link to="/">
            <img src={logo} alt="Logo" style={{ height: 100, width: "auto" }} />
          </Link>
        </Box>
  
        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            mb: 2,
            fontWeight: "bold",
            fontSize: { xs: "30px", md: "45px" },
            fontFamily: "Encode Sans, sans-serif",
          }}
        >
          We are Updating Soon in <br />
          Your Nearby Location
        </Typography>
  
        {/* Coming Soon Image */}
        <Box sx={{ mt: -2, mb: 3 }}>
          <img
            src={ComingSoonImg}
            alt="Coming Soon"
            style={{ maxWidth: "100%", maxHeight: "80vh", width: "auto" }}
          />
        </Box>
  
        {/* Back to Home Button */}
        <Button
          component={Link}
          to="/"
          variant="contained"
          sx={{
            borderRadius: "50px",
            backgroundColor: "#fff",
            color: "black",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "bold",
            px: 4,
            py: 1,
          }}
        >
          Back to Home
        </Button>
      </Box>
    );
  };

export default ComingSoon;
