import React from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
  Divider,
} from "@mui/material";
import {
  Star,
  Phone,
  Map,
  Share,
  Comment,
  Flag,
  Favorite,
} from "@mui/icons-material";
import NavBar from "../Component/NavBar";
import BgImg from "../assests/video-bg.png";
import check from "../assests/featured/check.png"; 
import avatar from "../assests/profiles/avatar-01.jpg";
import webiste from "../assests/website.svg";
const VenueDetails = () => {
  return (
    <>
      <NavBar />
      {/* Full Screen Banner Section */}
      <Box
        sx={{
          position: "relative",
          textAlign: "center",
          backgroundImage: `url(${BgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Details Section */}
        <Container sx={{ marginTop: 5 }}>
          <Box sx={{ display: "flex", flexDirection: "row", marginBottom: 3 }}>
            {/* Author Info */}
            <Box sx={{ marginRight: 2 }}>
              <img
                src={avatar}
                alt="author"
                style={{ borderRadius: "50%", width: 60, height: 60 }}
              />
            </Box>
            <Box>
              <Typography variant="h5">Sleep In a Room in Apartment</Typography> <br />
              <Typography variant="body2" color="#fff" sx={{textAlign :"left"}}>
                Luxury hotel in the heart of Blommsbury
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", marginTop: 1 }}>
                {[...Array(4)].map((_, index) => (
                  <Star key={index} sx={{ color: "gold" }} />
                ))}
                <Star sx={{ color: "grey" }} />
                <Typography variant="body2" sx={{ marginLeft: 1 }}>
                  4.5
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Call Now Button */}
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton
              sx={{
                border: "1px solid #fff",
                color: "white",
                padding: "10px 20px",
                borderRadius: 2,
              }}
            >
              <Phone /> Book Now
            </IconButton>
          </Box>
          <Divider
            sx={{
              marginY: 3,
              borderColor: "#fff", 
              height: 1, 
            }}
          />
          {/* Description Links */}
          <Box sx={{ marginTop: 3 }}>
            <Grid container spacing={2}>
              <Grid item>
                <IconButton href="#popup1" sx={{ color: "#fff" }}>
                  <Map />
                  <Typography variant="body2" sx={{ marginLeft: 1 }}>
                    Get Directions
                  </Typography>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton href="#popup1" sx={{ color: "#fff" }}>
                  <img
                    src={webiste}
                    alt="website"
                    style={{ width: 20, marginRight: 10 }}
                  />
                  
                  Website
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton href="#popup1" sx={{ color: "#fff" }}>
                  <Share />
                  <Typography variant="body2" sx={{ marginLeft: 1 }}>
                    Share
                  </Typography>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton href="#popup1" sx={{ color: "#fff" }}>
                  <Comment />
                  <Typography variant="body2" sx={{ marginLeft: 1 }}>
                    Write a review
                  </Typography>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton href="#popup1" sx={{ color: "#fff" }}>
                  <Flag />
                  <Typography variant="body2" sx={{ marginLeft: 1 }}>
                    Report
                  </Typography>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton href="#popup1" sx={{ color: "#fff" }}>
                  <Favorite />
                  <Typography variant="body2" sx={{ marginLeft: 1 }}>
                    Favorite
                  </Typography>
                </IconButton>
              </Grid>
            </Grid>
          </Box>

          {/* Listing Features Section */}
          <Card
            sx={{
              marginTop: 5,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <CardHeader
              sx={{ color: "#fff", textAlign: "left" }}
              title="Listing Features"
            />
            <CardContent>
              <Grid container spacing={2}>
                {[
                  {
                    img: check, 
                    label: "Room amenities",
                  },
                  {
                    img: check,
                    label: "Bathroom amenities",
                  },
                  {
                    img: check,
                    label: "Media & Technology",
                  },
                  {
                    img: check,
                    label: "Food & Security",
                  },
                  {
                    img: check,
                    label: "Services & Extra",
                  },
                  {
                    img: check,
                    label: "Outdoor & View",
                  },
                  {
                    img: check,
                    label: "Accessibility",
                  },
                  {
                    img: check,
                    label: "Safety & Security",
                  },
                ].map((feature, index) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    key={index}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <img
                      src={feature.img}
                      alt={feature.label}
                      style={{
                        width: 30,
                        marginRight: 10,
                        backgroundColor: "#fff",
                        borderRadius: "50%",
                        padding: 5,
                      }}
                    />
                    <Typography variant="body2" sx={{ color: "#fff" }}>
                      {feature.label}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default VenueDetails;
