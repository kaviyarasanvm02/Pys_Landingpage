import React, { useEffect } from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import publicRelation from "../assests/icons/public-relation.png";
import 'aos/dist/aos.css'; // Import AOS styles
import Aos from "aos";

const Offer = () => {
  useEffect(() => {
      Aos.init(); // Initialize AOS animations when the component mounts
    }, []);
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      {/* Keyframes Animation */}
      <style>
        {`
            @keyframes drive {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(400px);
              }
            }
          `}
      </style>
      <Container maxWidth="xl" sx={{mt: 8}}>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item xs={12}>
            <Typography
              sx={{fontSize: {xs: "1.8rem", md: "3rem" }, color: "#fff", fontWeight: "bold", textAlign: "center" }}
            >
              What we offer
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={2}
          sx={{ zIndex: 2, justifyContent: "center" }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            lg={2.8}
            sx={{  marginTop: {xs: 0, md: 4}, marginBottom: {xs: 0, md: 7} }}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              sx={{
                background: "#211d2e",
                padding: 3,
                transition: "transform 0.3s ease-out, box-shadow 0.3s ease-out", // Transition for transform and box-shadow
                '&:hover': {
                  transform: "translateY(-10px)", // Slide up effect
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)", // Optional: add shadow effect on hover
                }
              }}
            >
              <img
                src={publicRelation}
                alt="Public Relation"
                style={{ width: "19%" }}
              />
              <Typography
                sx={{ color: "#fff", marginTop: 3 }}
                className="poppins-light"
              >
                We bring multiple service providers to one platform to
                customers.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            lg={2.8}
            sx={{ marginTop: {xs: 0, md: 4}, marginBottom: {xs: 0, md: 7} }}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              sx={{
                background: "#211d2e",
                padding: 3,
                transition: "transform 0.3s ease-out, box-shadow 0.3s ease-out", // Transition for transform and box-shadow
                '&:hover': {
                  transform: "translateY(-10px)", // Slide up effect
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)", // Optional: add shadow effect on hover
                }
              }}
            >
              <img
                src={publicRelation}
                alt="Complete Solution"
                style={{ width: "19%" }}
              />
              <Typography
                sx={{ color: "#fff", marginTop: 3 }}
                className="poppins-light"
              >
                A complete solution for your services, all in one place.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            lg={2.8}
            sx={{ marginTop: {xs: 0, md: 4}, marginBottom: {xs: 0, md: 7} }}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              sx={{
                background: "#211d2e",
                padding: 3,
                transition: "transform 0.3s ease-out, box-shadow 0.3s ease-out", // Transition for transform and box-shadow
                '&:hover': {
                  transform: "translateY(-10px)", // Slide up effect
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)", // Optional: add shadow effect on hover
                }
              }}
            >
              <img
                style={{ width: "19%" }}
                src={publicRelation}
                alt="Instant Booking"
              />
              <Typography
                sx={{ color: "#fff", marginTop: 3 }}
                className="poppins-light"
              >
                Instant booking and easy management of bookings.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            lg={2.8}
            sx={{ marginTop: {xs: 0, md: 4}, marginBottom: {xs: 0, md: 7} }}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              sx={{
                background: "#211d2e",
                padding: 3,
                transition: "transform 0.3s ease-out, box-shadow 0.3s ease-out", // Transition for transform and box-shadow
                '&:hover': {
                  transform: "translateY(-10px)", // Slide up effect
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)", // Optional: add shadow effect on hover
                }
              }}
            >
              <img
                src={publicRelation}
                alt="Fast Booking"
                style={{ width: "19%" }}
              />
              <Typography
                sx={{ color: "#fff", marginTop: 3 }}
                className="poppins-light"
              >
                Efficient and fast booking - anytime, anywhere.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Offer;
