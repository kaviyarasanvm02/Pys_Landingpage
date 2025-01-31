import React, { useEffect } from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import partner from "../assests/Partner.png";

const PYSPartners = () => {
  const leftItems = [
    "User IOS/Android app",
    "User Website",
    "Slot creation",
    "Offer Management",
    "Groups Creation",
    "Role-based access",
    "Tournament Management",
  ];

  const rightItems = [
    "Block and unblock Slots",
    "Course creation",
    "Membership creation",
    "Student maintenance",
    "Mark attendance",
    "Paperless Report",
    "Cancellation and Refunds",
  ];

  useEffect(() => {
    Aos.init({ duration: 1000 }); // Initialize AOS with a 1000ms animation duration
  }, []);

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          // background: "#f7f7f7",
          padding: "4rem 2rem",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            marginBottom: 4,
            fontSize: { xs: "1.8rem", md: "3rem" },
            color: "#fff",
            fontWeight: "bold",
          }}
          className="poppins-bold"
          data-aos="fade-up"
        >
          What we offer for PYS Partners
        </Typography>
        <Grid container spacing={{ xs: 0, md: 3 }}>
          {/* Left Column */}
          <Grid item xs={12} md={4}>
            {leftItems.map((item, index) => (
              <Box
                key={index}
                sx={{
                  background: "#fff",
                  padding: "0.8rem",
                  borderRadius: "8px",
                  marginBottom: "1rem",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                }}
                data-aos="fade-right"
              >
                <Typography variant="body1" className="poppins-light">
                  {item}
                </Typography>
              </Box>
            ))}
          </Grid>

          {/* Center Image */}
          <Grid
            item
            xs={12}
            md={4}
            data-aos="zoom-in"
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <img
                src={partner}
                alt="Partner"
                style={{
                  // width: "100%",
                  maxWidth: "100vh", // Adjust for bigger image
                  height: "auto",
                }}
              />
            </Box>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={4}>
            {rightItems.map((item, index) => (
              <>
                <Box
                  key={index}
                  sx={{
                    background: "#fff",
                    padding: "0.8rem",
                    borderRadius: "8px",
                    marginBottom: "1rem",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                    display: { xs: "none", md: "block" },
                  }}
                  data-aos="fade-left"
                >
                  <Typography variant="body1" className="poppins-light">
                    {item}
                  </Typography>
                </Box>
                <Box
                  key={index}
                  sx={{
                    background: "#fff",
                    padding: "0.8rem",
                    borderRadius: "8px",
                    marginBottom: "1rem",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                    display: { xs: "block", md: "none" },
                  }}
                  data-aos="fade-right"
                >
                  <Typography variant="body1" className="poppins-light">
                    {item}
                  </Typography>
                </Box>
              </>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default PYSPartners;
