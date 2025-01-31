import React from 'react';
import { 
  Grid, 
  Typography, 
  Box, 
  Container, 
  TextField, 
  Button, 
  AppBar, 
  Toolbar, 
  IconButton 
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Footer from "../Component/Footer";
import BgImg from "../assests/video-bg.png";
import contact from "../assests/contact.png";
import NewsletterSection from './NewsletterSection';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {/* Logo can go here */}
          </Typography>
          <Button color="inherit" href="listing-grid.html">Venue</Button>
          <Button color="inherit" href="/about">About Us</Button>
          <Button color="inherit" href="blog-grid-sidebar.html">Blog</Button>
          <Button color="inherit" href="/contact">Contact</Button>
          <Button color="inherit" href="/signin">Sign In</Button>
        </Toolbar>
      </AppBar>

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
        }}
      >
        <Container maxWidth="lg">
          <Box 
            sx={{ 
              mb: 4,
              textAlign: "center"
            }}
          >
            <motion.div 
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: "#fff",fontSize:"36px" }}>
                Contact <span>Us</span>
              </Typography>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <Typography variant="body1" sx={{ color: "#ddd",fontSize:"18px" }}>
                We are here to help you
              </Typography>
            </motion.div>
          </Box>

          <Grid container spacing={4} alignItems="center" sx={{ 
            flexDirection: { xs: 'column', md: 'row' }, 
            textAlign: { xs: 'center', md: 'left' } 
          }}>
            {/* Image section */}
            <Grid item lg={5} md={5} xs={12}>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <Box sx={{ 
                  '& img': {
                    maxWidth: "100%",
                    height: "auto"
                  }
                }}>
                  <img src={contact} alt="Contact" />
                </Box>
              </motion.div>
            </Grid>

            {/* Form section */}
            <Grid item lg={7} md={7} xs={12}>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                <Box 
                  sx={{
                    backgroundColor: "#211d2e",
                    p: 4,
                    borderRadius: "12px",
                    boxShadow: 3,
                    textAlign: { xs: 'center', md: 'left' },
                  }}
                >
                  <form>
                    <TextField 
                      fullWidth 
                      label="Name" 
                      variant="outlined" 
                      margin="normal" 
                      required 
                      sx={{ 
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        input: { color: "#fff" },
                        label: { color: "#ddd" }
                      }}
                    />
                    <TextField 
                      fullWidth 
                      label="Email" 
                      type="email" 
                      variant="outlined" 
                      margin="normal" 
                      required 
                      sx={{ 
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        input: { color: "#fff" },
                        label: { color: "#ddd" }
                      }}
                    />
                    <TextField 
                      fullWidth 
                      label="Mobile Number" 
                      type="number" 
                      variant="outlined" 
                      margin="normal" 
                      required 
                      sx={{ 
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        input: { color: "#fff" },
                        label: { color: "#ddd" }
                      }}
                    />
                    <TextField 
                      fullWidth 
                      label="Shop Name" 
                      variant="outlined" 
                      margin="normal" 
                      required 
                      sx={{ 
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        input: { color: "#fff" },
                        label: { color: "#ddd" }
                      }}
                    />
                    <TextField 
                      fullWidth 
                      label="Write a Message" 
                      multiline 
                      rows={4} 
                      variant="outlined" 
                      margin="normal" 
                      required 
                      sx={{ 
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        textarea: { color: "#fff" },
                        label: { color: "#ddd" }
                      }}
                    />

                    <Box mt={3}>
                      <Button 
                        variant="contained" 
                        color="primary" 
                        fullWidth 
                        type="submit"
                      >
                        Submit
                      </Button>
                    </Box>
                  </form>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
        <NewsletterSection />
        <Footer />
      </Box>
    </>
  );
};

export default Contact;
