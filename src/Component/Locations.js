import React, { useEffect } from "react";
import { Box, Grid, Typography, Button, Container } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles
<<<<<<< Updated upstream
import chennai from "../assests/locations/chennai.png";
import Coiambatore from "../assests/locations/Coiambatore.png";
import Madurai from "../assests/locations/Madurai.png";
import Tirunelveli from "../assests/locations/Tirunelveli.png";
import Trichy from "../assests/locations/Trichy.png";
import pondicherry from "../assests/locations/pondicherry.png";
=======
import chennai from "../assests/locations/chennai.png"
import Coiambatore from "../assests/locations/Coiambatore.png"
import Madurai from "../assests/locations/chennai.png"
import Tirunelveli from "../assests/locations/chennai.png"
import Tiruchirappalli from "../assests/locations/chennai.png"
>>>>>>> Stashed changes

const locations = [
  {
    name: "Chennai",
    ads: "500+ Ads Posted",
    img: chennai,
    link: "listing-grid.html",
    status: "Available",
  },
  {
    name: "Coimbatore",
    ads: "Coming Soon",
    img: Coiambatore,
    link: "error-500.html",
    status: "Coming Soon",
  },
  {
    name: "Madurai",
    ads: "Coming Soon",
    img: Madurai,
    link: "error-500.html",
    status: "Coming Soon",
  },
  {
    name: "Tirunelveli",
    ads: "Coming Soon",
    img: Tirunelveli,
    link: "error-500.html",
    status: "Coming Soon",
  },
  {
    name: "Tiruchirappalli",
    ads: "Coming Soon",
    img: Trichy,
    link: "error-500.html",
    status: "Coming Soon",
  },
  {
    name: "Puducherry",
    ads: "Coming Soon",
    img: pondicherry,
    link: "error-500.html",
    status: "Coming Soon",
  },
];

const Locations = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);

  return (
    <Container maxWidth="xl">
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
        <Grid container spacing={3} sx={{justifyContent: "space-evenly"}}>
          {locations.map((location, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3.5}
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  // background: "#fff",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                  border: "2px solid #fff",
                }}
              >
                <Box sx={{ flexShrink: 0, padding: "12px 0px 7px 7px"}}>
                  <a href={location.link}>
                    <img
                      src={location.img}
                      alt={location.name}
                      style={{
                        width: "93%",
                        height: "auto",
                        objectFit: "cover",
                        borderRadius: "8px" 
                      }}
                    />
                  </a>
                </Box>
                <Box sx={{ p: 2 }}>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    <Typography sx={{color: "#fff", fontWeight: "bold", fontSize: "20px", textAlign: "start"}}>{location.name}</Typography>
                  </Typography>
                  <Typography
                    variant="body2"
                    className="poppins-light"
                    sx={{ mb: 1, color: "#fff", textAlign: "start" }}
                  >
                    {location.ads}
                  </Typography>
                  <Button
                    variant="contained"
                    href={location.link}
                    sx={{
                      width: "100%",
                      textTransform: "capitalize",
                      backgroundColor: "#0247bd",
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
    </Container>
  );
};

export default Locations;
