import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  Container,
  Grid,
} from "@mui/material";
import banner from "../assests/banner.svg";
import Offer from "../Component/Offer";
import Proposals from "../Component/Proposals";
import PYSPartners from "../Component/PYSPartners";
import Locations from "../Component/Locations";
import NavBar from "../Component/NavBar";
import Categories from "../Component/Categories ";
import HomePageBlog from "../Component/HomePageBlog";
import BgImg from "../assests/video-bg.png";


const Home = () => {
  return (
    <div>
      {/* Header */}
      {/* <NavBar /> */}

      <Box
        sx={{
          backgroundColor: "#111018",
          paddingTop: {xs: 10, md: 1},
          paddingBottom: {xs: 2, md: 6},
           backgroundImage: `url(${BgImg})`,
          // backgroundSize: "cover",
          backgroundPosition: "center",
          // minHeight: "30vh",
          backgroundRepeat: "repeat-y"
        }}
      >
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            //   backgroundColor: "#0f0d15",
            //   padding: "50px 0",
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
          <Container>
            <Grid container alignItems="center" spacing={4}>
              <Grid item xs={12} md={7}>
                <style>
                  {`
                    @keyframes slideDown  {
                    0% {
                        transform: translateY(-500%);
                    }
                    100% {
                        transform: translateY(0);
                    }
                    }
                `}
                </style>
                <Box sx={{ textAlign: "start" }}>
                  <Typography
                    variant="h3"
                    gutterBottom
                    sx={{
                      fontSize: {xs: "1.8rem", md: "2.3rem", lg: "3.3rem" },
                      fontWeight: "bold",
                      fontFamily: "Poppins, sans-serif",
                      color: "#ffffff",
                      animation: "slideDown  1s ease-out forwards",
                    }}
                  >
                    Let us help you Find, Book the Easiest Way
                  </Typography>
                  <Typography
                    variant="h3"
                    gutterBottom
                    sx={{
                      fontSize: {xs: "1.2rem",md: "1.3rem", lg: "1.5rem" },
                      marginTop: 3.3,
                      color: "#ffffff",
                      animation: "slideDown  1s ease-out forwards",
                      // animationDelay: "0.2s",
                    }}
                  >
                    We bring all services and service providers to a single
                    platform, taking your business to global customers.
                  </Typography>
                  <Typography
                    variant="h3"
                    gutterBottom
                    sx={{
                      marginTop: 3.3,
                      fontSize: {xs: "1.2rem",md: "1.3rem", lg: "1.5rem" },
                      color: "#ffffff",
                      animation: "slideDown  1s ease-out forwards",
                      // animationDelay: "0.4s",
                    }}
                  >
                    Our powerful suite of tools helps increase sales, manage
                    schedules, and engage with clients.
                  </Typography>
                  <Typography
                    variant="h3"
                    gutterBottom
                    sx={{
                      marginTop: 3.3,
                      fontSize: {xs: "1.2rem",md: "1.3rem", lg: "1.5rem" },
                      color: "#ffffff",
                      animation: "slideDown  1s ease-out forwards",
                      // animationDelay: "0.6s",
                    }}
                  >
                    Focus on your business goals with our efficient features.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={5} sx={{display: {xs: "none", md: "block"}}}>
                <style>
                  {`
                    @keyframes slideIn {
                    0% {
                        transform: translateX(100%);
                    }
                    100% {
                        transform: translateX(0);
                    }
                    }
                `}
                </style>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    animation: "slideIn 2s forwards",
                  }}
                >
                  <img
                    src={banner}
                    alt="Background"
                    style={{ width: "95vh", height: "auto" }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
        {/* <Categories /> */}
        <Offer />
        <Proposals />
        <PYSPartners />
        <Locations />
        <HomePageBlog />
      </Box>
    </div>
  );
};

export default Home;
