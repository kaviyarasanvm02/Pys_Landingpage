import React, { useEffect } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import chennai from "../assests/locations/chennai.png"
import Coiambatore from "../assests/locations/Coiambatore.png"
import chennai from "../assests/locations/chennai.png"
import chennai from "../assests/locations/chennai.png"
import chennai from "../assests/locations/chennai.png"

const locations = [
  {
    name: "Chennai",
    ads: "500+ Ads Posted",
    img: "assets/img/locations/chennai.png",
    link: "listing-grid.html",
    status: "Available",
  },
  {
    name: "Coimbatore",
    ads: "Coming Soon",
    img: "assets/img/locations/Coiambatore.png",
    link: "error-500.html",
    status: "Coming Soon",
  },
  {
    name: "Madurai",
    ads: "Coming Soon",
    img: "assets/img/locations/Madurai.png",
    link: "error-500.html",
    status: "Coming Soon",
  },
  {
    name: "Tirunelveli",
    ads: "Coming Soon",
    img: "assets/img/locations/Tirunelveli.png",
    link: "error-500.html",
    status: "Coming Soon",
  },
  {
    name: "Tiruchirappalli",
    ads: "Coming Soon",
    img: "assets/img/locations/Trichy.png",
    link: "error-500.html",
    status: "Coming Soon",
  },
  {
    name: "Puducherry",
    ads: "Coming Soon",
    img: "assets/img/locations/pondicherry.png",
    link: "error-500.html",
    status: "Coming Soon",
  },
];

const Locations = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);

  return (
    <Box>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography
          variant="h4"
          className="poppins-bold"
          data-aos="fade-up"
          sx={{
            marginBottom: 2,
            fontSize: "3rem",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          Popular Locations
        </Typography>
        <Typography
          variant="body1"
          className="poppins-light"
          data-aos="fade-up"
          sx={{ mb: 4, color: "#fff" }}
        >
          Start by selecting your favorite location and explore the goods
        </Typography>
      </Box>

      <Box sx={{ px: 4 }}>
        <Grid container spacing={3}>
          {locations.map((location, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  background: "#fff",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                }}
              >
                <Box sx={{ flexShrink: 0 }}>
                  <a href={location.link}>
                    <img
                      src={location.img}
                      alt={location.name}
                      style={{ width: "100px", height: "100px", objectFit: "cover" }}
                    />
                  </a>
                </Box>
                <Box sx={{ p: 2 }}>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    <a href={location.link} style={{ textDecoration: "none" }}>
                      {location.name}
                    </a>
                  </Typography>
                  <Typography
                    variant="body2"
                    className="poppins-light"
                    sx={{ mb: 1 }}
                  >
                    {location.ads}
                  </Typography>
                  <Button
                    variant="contained"
                    href={location.link}
                    sx={{
                      textTransform: "capitalize",
                      backgroundColor: "#007bff",
                      "&:hover": {
                        backgroundColor: "#0056b3",
                      },
                    }}
                  >
                    View Details
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Locations;
