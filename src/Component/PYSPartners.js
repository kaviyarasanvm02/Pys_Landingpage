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
                  background: "linear-gradient(135deg, #6C757D, #E9ECEF)", // Gradient background for a modern look
                  padding: "1rem",
                  borderRadius: "8px",
                  marginBottom: "1.5rem",
                  boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
                  transition: "transform 0.5s ease, box-shadow 0.5s ease, background-color 0.5s ease", // Slow transition
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
                    background: "linear-gradient(135deg, #007BFF, #6C757D)", // A smooth hover color transition
                    animation: "hoverEffect 1s ease forwards", // Slow animation
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
                  className="poppins-light"
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
            sx={{ display: { xs: "block", md: "block" } }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                position: "relative",
                overflow: "hidden", // Ensure image doesn't overflow the box
                borderRadius: "8px",
                boxShadow: "0 8px 16px rgba(0,0,0,0.2)", // Adds a shadow around the image
                perspective: "1500px", // Adding perspective to enable 3D rotation effect
              }}
            >
              <img
                src={partner}
                alt="Partner"
                style={{
                  maxWidth: "100%",
                  height: "100%",
                }}
                className="partner-image"
              />
            </Box>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={4}>
            {rightItems.map((item, index) => (
              <Box
                key={index}
                sx={{
                  background: "linear-gradient(135deg, #6C757D, #E9ECEF)", // Gradient background for a modern look
                  padding: "1rem",
                  borderRadius: "8px",
                  marginBottom: "1.5rem",
                  boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
                  transition: "transform 0.5s ease, box-shadow 0.5s ease, background-color 0.5s ease", // Slow transition
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
                    background: "linear-gradient(135deg, #007BFF, #6C757D)", // A smooth hover color transition
                    animation: "hoverEffect 1s ease forwards", // Slow animation
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
                  className="poppins-light"
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Box>

      {/* Add Keyframe and Animation Styles Inline */}
      <style>
        {`
          @keyframes floatAndRotate {
            0% {
              transform: translateY(0) rotateY(0deg) scale(1);
            }
            25% {
              transform: translateY(-10px) rotateY(90deg) scale(1.05);
            }
            50% {
              transform: translateY(0) rotateY(180deg) scale(1);
            }
            75% {
              transform: translateY(-10px) rotateY(270deg) scale(1.05);
            }
            100% {
              transform: translateY(0) rotateY(360deg) scale(1);
            }
          }

          .partner-image {
            animation: floatAndRotate 8s infinite ease-in-out;
          }

          /* Hover effect animation for list items with slow animation */
          @keyframes hoverEffect {
            0% {
              transform: scale(1);
              background: linear-gradient(135deg, #6C757D, #E9ECEF);
            }
            50% {
              transform: scale(1.05);
              background: linear-gradient(135deg, #007BFF, #6C757D);
            }
            100% {
              transform: scale(1);
              background: linear-gradient(135deg, #6C757D, #E9ECEF);
            }
          }
        `}
      </style>
    </Container>
  );
};

export default PYSPartners;
