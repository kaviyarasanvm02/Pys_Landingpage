import React from "react";
import { Helmet } from "react-helmet";
import {
  Grid,
  Typography,
  Box,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import mobileView from "../assests/3333.png";
import BgImg from "../assests/video-bg.png";


const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {/* <NavBar /> */}
      <Helmet>
        <title>About Pick Your Slot | Online Booking Platform in Chennai</title>
        <meta
          name="description"
          content="Pick Your Slot is Chennai's top online booking platform for gyms, salons, sports, and more. Find & book services near you effortlessly!"
        />
        <meta
          name="keywords"
          content="Pick Your Slot, Online Booking, Chennai, Gym, Salon, Sports, Services, Appointment"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About Pick Your Slot" />
        <meta
          property="og:description"
          content="Revolutionizing online bookings in Chennai. Find, book, and manage your services effortlessly."
        />
        <meta property="og:image" content="https://pickyourslot.com/assests/logo.png" />
        <meta property="og:url" content="https://pickyourslot.com/about" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://pickyourslot.com/about" />
      </Helmet>
      <Box
        sx={{
          py: 8,
          backgroundImage: `url(${BgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          overflowX: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
              <Box sx={{ textAlign: "center" }}>
                <img
                  src={mobileView}
                  className="img-fluid"
                  alt="About"
                  style={{
                    width: "auto",
                    height: "600px",
                    // maxHeight: "500px",
                  }}
                />
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              order={{ xs: 1, md: 2 }}
              sx={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <Box
                sx={{
                  backgroundColor: "#211d2e",
                  p: isMobile ? 2 : 4,
                  borderRadius: "12px",
                  boxShadow: 3,
                  textAlign: "left",
                  width: "90%",
                  maxWidth: isMobile ? "100%" : "800px",
                  boxSizing: "border-box",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    color: "#fff",
                    fontSize: isMobile ? "24px" : "36px",
                  }}
                >
                  <span>About</span> Pick Your Slot
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#ddd", fontWeight: 300, mt: 2 }}
                >
                  At Pick Your Slot, we revolutionize the way businesses connect
                  with their customers. We bring diverse services and service
                  providers onto a single platform, making it easy for customers
                  to explore and book their desired services while empowering
                  businesses to reach a global audience.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#ddd", fontWeight: 300, mt: 2 }}
                >
                  Our mission is to simplify bookings, increase accessibility,
                  and streamline operations for service providers across
                  industries like fitness, sports, recreation, and more. With
                  our advanced tools, businesses can effortlessly manage
                  schedules, boost sales, and engage with clients, all while
                  focusing on their core goals.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ mt: 6 }}>
            <Typography
              variant="h3"
              sx={{
                textAlign: "center",
                color: "#fff",
                fontWeight: "bold",
                fontSize: isMobile ? "28px" : "36px",
              }}
            >
              How It Works For Customers
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "center", color: "#fff", mt: 2 }}
            >
              <b>Explore Services:</b> Browse through a wide range of
              categories, including Fitness, Salon, Sports, Recreation, and
              more. Discover service providers near you with ease.
              <br />
              <b>Book Instantly:</b> Choose your preferred time slot, confirm
              availability, and book your session in just a few clicks—anytime,
              anywhere.
              <br />
              <b>Manage Bookings:</b> View, modify, or cancel your bookings
              seamlessly through the app or website. Get reminders and updates
              for your appointments.
            </Typography>

            <Grid container spacing={4} sx={{ mt: 4 }}>
              {[
                {
                  number: "01",
                  title: "Create Account",
                  description:
                    "Sign up on the platform to get started and personalize your preferences.",
                },
                {
                  number: "02",
                  title: "Post Your Business Listing",
                  description:
                    "Once registered, you can easily post and list your services, categories, and availability on the platform.",
                },
                {
                  number: "03",
                  title: "Book an Appointment & Get More Leads",
                  description:
                    "Clients can browse through your services, book appointments instantly, and as a result, you’ll get more visibility and potential leads.",
                },
              ].map((item, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Box
                    sx={{
                      textAlign: "left",
                      background: "linear-gradient(135deg, #090a0f, #2d006d)",
                      color: "#fff",
                      padding: isMobile ? "20px" : "40px",
                      borderRadius: "12px",
                      boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.2)",
                      border: "1px solid #fff",
                      minHeight: "250px",
                      fontFamily: "'Poppins', serif",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      transition: "background-color 0.3s ease",
                      "&:hover": {
                        background: "linear-gradient(135deg, #090a0f, #2d006d)",
                        backgroundColor: "#211d2e",
                      },
                      boxSizing: "border-box",
                      height: "100%",
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: "bold",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontFamily: "'Poppins', serif",
                      }}
                    >
                      {item.number}
                      <span
                        style={{
                          height: "2px",
                          background: "#fff",
                          marginLeft: "5px",
                          marginRight: "5px",
                          flexGrow: 1,
                        }}
                      />
                      <span
                        style={{
                          width: "15px",
                          height: "15px",
                          borderRadius: "50%",
                          background: "#fff",
                          display: "inline-block",
                          position: "relative",
                        }}
                      >
                        <span
                          style={{
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            background: "black",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                          }}
                        />
                      </span>
                    </Typography>

                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        color: "#fff",
                        marginTop: "10px",
                        fontSize: isMobile ? "20px" : "24px",
                        fontFamily: "'Poppins', serif",
                        textAlign: "left",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#ddd",
                        mt: 2,
                        fontFamily: "'Poppins', serif",
                        textAlign: "left",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default About;
