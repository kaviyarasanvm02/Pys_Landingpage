import React, { useEffect } from "react";
import { Box, Typography, Grid, Container, keyframes } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import partner from "../assests/Partner.png";

const PYSPartners = () => {
  const backgroundAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;
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
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Container
      maxWidth="xl"
      sx={{
        position: "relative",
      }}
    >
      <Box
        sx={{
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
                  position: "relative",
                  overflow: "hidden",
                  background: "linear-gradient(135deg, #6C757D, #E9ECEF)",
                  padding: "1rem",
                  borderRadius: "8px",
                  marginBottom: "1.5rem",
                  boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
                  transition:
                    "transform 0.5s ease, box-shadow 0.5s ease, background-color 0.5s ease",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: "0",
                    background: "linear-gradient(135deg, #007BFF, #6C757D)",
                    backgroundSize: "200% 200%",
                    transform: "scaleX(0)",
                    transformOrigin: "left",
                    transition: "transform 0.4s ease-in-out",
                    zIndex: "-1",
                  },
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
                    "&::before": {
                      transform: "scaleX(1)",
                    },
                  },
                }}
                data-aos="fade-right"
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 500,
                    color: "#333",
                    fontSize: { xs: "1rem", md: "1.1rem" },
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Grid>

          {/* Center Image with rotating effect */}
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
                position: "relative",
                overflow: "hidden",
                borderRadius: "8px",
                boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                perspective: "1500px",
              }}
            >
              <img
                src={partner}
                alt="Partner"
                style={{
                  maxWidth: "100%",
                  height: "80vh",
                }}
              />
            </Box>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={4}>
            {rightItems.map((item, index) => (
              <Box
                key={index}
                sx={{
                  background: "linear-gradient(135deg, #6C757D, #E9ECEF)",
                  padding: "1rem",
                  borderRadius: "8px",
                  marginBottom: "1.5rem",
                  boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
                  transition:
                    "transform 0.5s ease, box-shadow 0.5s ease, background-color 0.5s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
                    background: "linear-gradient(135deg, #007BFF, #6C757D)",
                    animation: "hoverEffect 1s ease forwards",
                  },
                }}
                data-aos="fade-left"
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 500,
                    color: "#333",
                    fontSize: { xs: "1rem", md: "1.1rem" },
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Box>

      {/* Add Keyframe and Animation Styles Inline */}
    </Container>
  );
};

export default PYSPartners;
