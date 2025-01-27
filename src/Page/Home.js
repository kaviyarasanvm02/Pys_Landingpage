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
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assests/logo.png";
import banner from "../assests/banner.svg";
import shapesRound from "../assests/shapes-round.png";
import Offer from "../Component/Offer";
import Proposals from "../Component/Proposals";
import PYSPartners from "../Component/PYSPartners";
import Locations from "../Component/Locations";

const Home = () => {
  return (
    <div>
      {/* Header */}
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <img src={logo} alt="Logo" style={{ height: "40px" }} />
          </Typography>
          <Button color="inherit" href="listing-grid.html">
            Venue
          </Button>
          <Button color="inherit" href="about.html">
            About Us
          </Button>
          <Button color="inherit" href="blog-grid-sidebar.html">
            Blog
          </Button>
          <Button color="inherit" href="contact.html">
            Contact
          </Button>
          <Button color="inherit" href="login.html">
            Sign In
          </Button>
        </Toolbar>
      </AppBar>

      {/* Banner Section */}
      <Box
        sx={{
          backgroundColor: "#111018",
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
          <Box
            sx={{
              position: "absolute",
              bottom: "10%",
              right: "80%",
              width: "50%",
              transform: "translateX(400px)",
              zIndex: 1,
              transitionTimingFunction: "ease-out",
              animation: "drive 2s forwards",
            }}
          >
            <img
              src={shapesRound}
              alt="Decoration"
              style={{ width: "400px" }}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: "40%",
              right: "60%",
              width: "50%",
              transform: "translateX(400px)",
              zIndex: 1,
              transitionTimingFunction: "ease-out",
              animation: "drive 2s forwards",
            }}
          >
            <img
              src={shapesRound}
              alt="Decoration"
              style={{ width: "350px" }}
            />
          </Box>
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
                      fontSize: "3.3rem",
                      fontWeight: "bold",
                      fontFamily: "Poppins, sans-serif",
                      color: "#ffffff",
                      animation: "slideDown  1s ease-out forwards",
                    }}
                  >
                    Let us help you Find, Book the Easiest Way
                  </Typography>
                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{
                      marginTop: 3.3,
                      fontSize: "1.5rem",
                      color: "#ffffff",
                      animation: "slideDown  1s ease-out forwards",
                      // animationDelay: "0.2s",
                    }}
                  >
                    We bring all services and service providers to a single
                    platform, taking your business to global customers.
                  </Typography>
                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{
                      marginTop: 3.3,
                      fontSize: "1.5rem",
                      color: "#ffffff",
                      animation: "slideDown  1s ease-out forwards",
                      // animationDelay: "0.4s",
                    }}
                  >
                    Our powerful suite of tools helps increase sales, manage
                    schedules, and engage with clients.
                  </Typography>
                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{
                      marginTop: 3.3,
                      fontSize: "1.5rem",
                      color: "#ffffff",
                      animation: "slideDown  1s ease-out forwards",
                      // animationDelay: "0.6s",
                    }}
                  >
                    Focus on your business goals with our efficient features.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
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
        <Offer />
        <Proposals />
        <PYSPartners />
        <Locations />
      </Box>
    </div>
  );
};

export default Home;
