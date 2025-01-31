import React from 'react';
import { Grid, Typography, Box, Container,AppBar,Toolbar,IconButton,Button } from '@mui/material';
import mobileView from "../assests/3333.png"; // Make sure the image path is correct
import Footer from "../Component/Footer";
import logo from "../assests/logo.png";
const About = () => {
  return (
    <>
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
          <Button color="inherit" component={Link} to="/about">
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
    <Box sx={{ py: 6, backgroundColor: '#f9f9f9' }}>
      <Container>
        {/* About Content */}
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box>
              <img src={mobileView} className="img-fluid" alt="About" style={{ width: '100%' }} />
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#333' }}>
                <span>About</span> Pick Your Slot
              </Typography>
              <Typography variant="body1" sx={{ color: '#555', fontWeight: 300, mt: 2 }}>
                At Pick Your Slot, we revolutionize the way businesses connect with their customers. We bring diverse services and service providers onto a single platform, making it easy for customers to explore and book their desired services while empowering businesses to reach a global audience.
              </Typography>
              <Typography variant="body1" sx={{ color: '#555', fontWeight: 300, mt: 2 }}>
                Our mission is to simplify bookings, increase accessibility, and streamline operations for service providers across industries like fitness, sports, recreation, and more. With our advanced tools, businesses can effortlessly manage schedules, boost sales, and engage with clients, all while focusing on their core goals.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* How It Works */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h3" sx={{ textAlign: 'center', color: '#333', fontWeight: 'bold' }}>
            How It Works For Customers
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center', color: '#555', mt: 2 }}>
            <b>Explore Services:</b> Browse through a wide range of categories, including Fitness, Salon, Sports, Recreation, and more. Discover service providers near you with ease.
            <br />
            <b>Book Instantly:</b> Choose your preferred time slot, confirm availability, and book your session in just a few clicks—anytime, anywhere.
            <br />
            <b>Manage Bookings:</b> View, modify, or cancel your bookings seamlessly through the app or website. Get reminders and updates for your appointments.
          </Typography>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#333' }}>01</Typography>
                <Typography variant="h6" sx={{ color: '#fff', backgroundColor: '#6200ea', padding: '10px' }}>
                  Create Account
                </Typography>
                <Typography variant="body2" sx={{ color: '#555', mt: 2 }}>
                  Sign up on the platform to get started and personalize your preferences.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#333' }}>02</Typography>
                <Typography variant="h6" sx={{ color: '#fff', backgroundColor: '#6200ea', padding: '10px' }}>
                  Post Your Business Listing
                </Typography>
                <Typography variant="body2" sx={{ color: '#555', mt: 2 }}>
                  Once registered, you can easily post and list your services, categories, and availability on the platform.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#333' }}>03</Typography>
                <Typography variant="h6" sx={{ color: '#fff', backgroundColor: '#6200ea', padding: '10px' }}>
                  Book an Appointment & Get More Leads
                </Typography>
                <Typography variant="body2" sx={{ color: '#555', mt: 2 }}>
                  Clients can browse through your services, book appointments instantly, and as a result, you’ll get more visibility and potential leads.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>   
    </Box>
    <Footer />
    </>
  );
};

export default About;
