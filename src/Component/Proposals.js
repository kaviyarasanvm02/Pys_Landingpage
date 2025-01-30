import React from "react";
import { Container, Grid, Typography, Box, Grid2 } from "@mui/material";
import { useEffect } from "react";
import AOS from "aos"; // Import AOS for animations
import "aos/dist/aos.css"; // Import AOS styles
import tick from "../assests/tick.png";

const Proposals = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS animations when the component mounts
  }, []);

  return (
    <Container maxWidth='xl' >
      <Grid container spacing={3} sx={{ justifyContent: "space-evenly" }}>
        {/* Header Section */}
        <Grid item xs={12}>
          <Box
            className="premium-header"
            sx={{ textAlign: "center", mb: 4 }}
            data-aos="fade-up"
          >
            <Typography
              sx={{ fontSize: "3rem", color: "#fff", fontWeight: "bold" }}
            >
              Our proposals for business partners
            </Typography>
          </Box>
        </Grid>

        {/* Proposal Items */}
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3.5}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Grid container sx={{ justifyContent: "space-between" }}>
            <Grid item xs={12} md={1.5} className="listee-premium-img">
              <span>
                <img src={tick} alt="img" style={{ width: "100%" }} />
              </span>
            </Grid>
            <Grid item xs={12} md={10} className="listee-premium-content">
              <Typography sx={{ color: "#ffff", textAlign: "start" }}>
                In 7 minutes, we will have your business online. Move your shop
                to the cloud and manage from anywhere.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3.5}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Grid container sx={{ justifyContent: "space-between" }}>
            <Grid item xs={12} md={1.5} className="listee-premium-img">
              <span>
                <img src={tick} alt="img" style={{ width: "100%" }} />
              </span>
            </Grid>
            <Grid item xs={12} md={10} className="listee-premium-content">
              <Typography sx={{ color: "#ffff", textAlign: "start" }}>
                We streamline the booking process so it can happen anywhere, at
                any time.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3.5}
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <Grid container sx={{ justifyContent: "space-between" }}>
            <Grid item xs={12} md={1.5} className="listee-premium-img">
              <span>
                <img src={tick} alt="img" style={{ width: "100%" }} />
              </span>
            </Grid>
            <Grid item xs={12} md={10} className="listee-premium-content">
              <Typography sx={{ color: "#ffff", textAlign: "start" }}>
                We provide an all-inclusive solution for your services.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3.5}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Grid
            container
            className="listee-premium bottom-list-premium"
            data-aos="fade-up"
            sx={{ justifyContent: "space-between" }}
          >
            <Grid item xs={12} md={1.5} className="listee-premium-img">
              <span>
                <img src={tick} alt="img" style={{ width: "100%" }} />
              </span>
            </Grid>
            <Grid item xs={12} md={10} className="listee-premium-content">
              <Typography sx={{ color: "#ffff", textAlign: "start" }}>
                We provide instantaneous bookings and guarantee punctuality.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3.5}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Grid
            container
            className="listee-premium bottom-list-premium"
            data-aos="fade-up"
            sx={{ justifyContent: "space-between" }}
          >
            <Grid item xs={12} md={1.5} className="listee-premium-img">
              <span>
                <img src={tick} alt="img" style={{ width: "100%" }} />
              </span>
            </Grid>
            <Grid item xs={12} md={10} className="listee-premium-content">
              <Typography sx={{ color: "#ffff", textAlign: "start" }}>
                We offer the simplest method for handling service reservations
                and pay by the session.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3.5}
          data-aos="fade-up"
          data-aos-delay="400"
        ></Grid>
      </Grid>
    </Container>
  );
};

export default Proposals;
