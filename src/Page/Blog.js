import React from "react";
import {
  Container,
  Grid,
  Typography,
  Breadcrumbs,
  Link,
  Box,
  Card,
  CardMedia,
  CardContent,
  Button,
  Paper,
  List,
  ListItem,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import NavBar from "../Component/NavBar";
import Articleimg from "../assests/blog/article-1.jpg";
import shapesRound from "../assests/shapes-round.png";
import PostImage from "../assests/blog/blog-1.jpg";
import PostImage4 from "../assests/blog/blog-4.jpg";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Best Spa Saloons for your relaxations?",
      date: "October 6, 2024",
      description:
        "Dimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
      imgSrc: PostImage,
      link: "blog-details.html",
    },
    {
      title: "The Best Spa Saloons for your relaxations?",
      date: "October 6, 2024",
      description:
        "Dimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
      imgSrc: PostImage4,
      link: "blog-details.html",
    },
    {
      title: "The Best Spa Saloons for your relaxations?",
      date: "October 6, 2024",
      description:
        "Dimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
      imgSrc: PostImage,
      link: "blog-details.html",
    },
    {
      title: "The Best Spa Saloons for your relaxations?",
      date: "October 6, 2024",
      description:
        "Dimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
      imgSrc: PostImage,
      link: "blog-details.html",
    },
    {
      title: "The Best Spa Saloons for your relaxations?",
      date: "October 6, 2024",
      description:
        "Dimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
      image: PostImage,
      link: "blog-details.html",
    },
    {
      title: "The Best Spa Saloons for your relaxations?",
      date: "October 6, 2024",
      description:
        "Dimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
      imgSrc: PostImage,
      link: "blog-details.html",
    },
  ];

  const categories = [
    "Cricket",
    "Fitness",
    "Material Arts",
    "Yoga",
    "Dance",
    "Badminton",
  ];
  const tags = [
    "Travelling",
    "Art",
    "Vacation",
    "Tourism",
    "Culture",
    "Lifestyle",
    "Art",
    "vacation",
    "Tourism ",
    "Culture",
  ];
  const articles = [
    {
      title: "Great Business Tips in 2024",
      date: "October 6, 2024",
      link: "blog-details.html",
      image: Articleimg,
    },
    {
      title: "Exciting News About Fashion",
      date: "October 9, 2024",
      link: "blog-details.html",
      image: Articleimg,
    },
    {
      title: "8 Amazing Tricks About Business",
      date: "October 10, 2024",
      link: "blog-details.html",
      image: Articleimg,
    },
  ];

  return (
    <div>
      <NavBar />
      <Box
        sx={{
          zIndex: 1,
          backgroundColor: "#111018",
          paddingTop: { xs: 5, md: 15 },
        }}
      >
        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 3 }}>
          {/* <Box
            sx={{
              position: "absolute",
              top: { xs: "5%", md: "-60%" },
              right: { xs: "10%", md: "65%" },
              transform: {
                xs: "translateX(0px)",
                md: "translateX(400px)",
              },
              zIndex: 3,
              transitionTimingFunction: "ease-out",
              animation: "drive 2s forwards",
              width: { xs: "200px", md: "400px" },
            }}
          >
            <img src={shapesRound} alt="Decoration" style={{ width: "100%" }} />
          </Box> */}
          {/* <Box
            sx={{
              position: "absolute",
              top: { xs: "5%", md: "0%" },
              right: { xs: "10%", md: "90%" },
              transform: {
                xs: "translateX(0px)",
                md: "translateX(400px)",
              },
              zIndex: 3,
              transitionTimingFunction: "ease-out",
              animation: "drive 2s forwards",
              width: { xs: "200px", md: "400px" },
            }}
          >
            <img src={shapesRound} alt="Decoration" style={{ width: "100%" }} />
          </Box> */}
          <Grid
            container
            justifyContent="center"
            textAlign="center"
            sx={{ paddingBottom: { xs: 5, md: 15 } }}
          >
            <Grid item xs={12}>
              <Typography
                variant="h4"
                fontWeight="bold"
                gutterBottom
                sx={{ color: "#fff" }}
              >
                Blogs
              </Typography>
              <Breadcrumbs
                aria-label="breadcrumb"
                separator="/"
                sx={{
                  color: "#fff",
                  display: { xs: "none", md: "flex" },
                  justifyContent: "center",
                }}
              >
                <Link
                  component={NavLink}
                  to="/"
                  underline="hover"
                  color="inherit"
                >
                  Home
                </Link>
                <Typography color="textPrimary" sx={{ color: "#fff" }}>
                  Blog
                </Typography>
              </Breadcrumbs>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          paddingBottom: { xs: 2, md: 7 },
          position: "relative",
          zIndex: 1,
          backgroundColor: "#111018",
        }}
      >
        <Grid container spacing={4}>
          <Grid xs={12} sm={1}></Grid>
          <Grid item xs={12} md={7}>
            <Grid container spacing={4}>
              {blogPosts.map((post, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      backgroundColor: "#211d2e",
                      color: "white",
                      borderRadius: "10px",
                      fontFamily: "Poppins, sans-serif",
                      border: "1px solid #fff",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {/* Container for the image */}
                    <Box
                      sx={{
                        position: "relative",
                        overflow: "hidden",
                        height: "286px",
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="286"
                        image={PostImage}
                        alt="Post Image"
                        sx={{
                          cursor: "pointer",
                          transition: "transform 0.9s ease",
                          width: "100%",
                          objectFit: "cover",
                          overflow: "hidden",
                          "&:hover": {
                            transform: "scale(1.6) rotate(30deg)",
                            transformOrigin: "center",
                          },
                        }}
                      />
                    </Box>

                    <CardContent>
                      <Typography variant="body2" color="#828f94">
                        <CalendarMonthIcon
                          sx={{
                            fontSize: 14,
                            marginRight: 1,
                            color: "#828f94",
                          }}
                        />
                        {post.date}
                      </Typography>

                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{
                          color: "#1009c3",
                          fontFamily: "Poppins, sans-serif",
                          transition: "color 0.3s ease",
                          "&:hover": { color: "white" },
                        }}
                      >
                        <a
                          href={post.link}
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          {post.title}
                        </a>
                      </Typography>

                      <Typography
                        variant="body2"
                        color="white"
                        fontWeight={"300"}
                        fontFamily={"Poppins, sans-serif"}
                      >
                        {post.description}
                      </Typography>
                      <Button
                        variant="text"
                        sx={{
                          mt: 2,
                          color: "#fff",
                          fontWeight: "300",
                          fontFamily: "Poppins, sans-serif",
                          cursor: "pointer",
                        }}
                        href={post.link}
                      >
                        View Details
                        <ArrowForwardIcon sx={{marginLeft: 1, marginTop: "5px", fontSize: 20, marginBottom: 0.5 }} />
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12} md={3}>
            <Box sx={{ position: "sticky", top: 20 }}>
              <Paper
                sx={{
                  padding: 2,
                  mb: 3,
                  backgroundColor: "#211d2e",
                  boxShadow:
                    "4px 6px 20px rgba(255, 255, 255, 0.5), -2px -2px 10px rgba(255, 255, 255, 0.3)",
                  animation: "flash-shadow 1s infinite",
                }}
              >
                <Typography
                  sx={{
                    color: "#FFF",
                    borderBottom: "1px solid #FFF",
                    display: "block",
                    width: "100%",
                    fontFamily: "Poppins, sans-serif",
                  }}
                  variant="h6"
                  gutterBottom
                >
                  <BusinessCenterIcon sx={{ color: "blue" }} /> Categories
                </Typography>
                <List>
                  {categories.map((category, index) => (
                    <ListItem key={index} sx={{ padding: 0 }}>
                      <Button
                        variant="text"
                        sx={{
                          color: "white",
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: "300",
                        }}
                      >
                        {category}
                      </Button>
                    </ListItem>
                  ))}
                </List>
              </Paper>

              <Paper
                sx={{
                  padding: 2,
                  mb: 3,
                  backgroundColor: "#211d2e",
                  boxShadow:
                    "4px 6px 20px rgba(255, 255, 255, 0.5), -2px -2px 10px rgba(255, 255, 255, 0.3)",
                  animation: "flash-shadow 1s infinite",
                }}
              >
                <Typography
                  sx={{ color: "#fff", borderBottom: "1px solid white" }}
                  variant="h6"
                  gutterBottom
                >
                  <LocalOfferOutlinedIcon
                    sx={{ width: "20px", height: "20px" }}
                  />{" "}
                  Tags
                </Typography>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: 1,
                  }}
                >
                  {tags.map((tag, index) => (
                    <Button
                      key={index}
                      variant="contained"
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "300",
                        backgroundColor: "white",
                        color: "black",
                        "&:hover": { backgroundColor: "#ddd" },
                      }}
                      size="small"
                    >
                      {tag}
                    </Button>
                  ))}
                </Box>
              </Paper>

              <Paper
                sx={{
                  padding: 2,
                  backgroundColor: "#211d2e",
                  color: "white",
                  boxShadow:
                    "4px 6px 20px rgba(255, 255, 255, 0.5), -2px -2px 10px rgba(255, 255, 255, 0.3)",
                }}
              >
                <Typography
                  sx={{
                    borderBottom: "1px solid white",
                    display: "block",
                    width: "100%",
                  }}
                  variant="h6"
                  gutterBottom
                >
                  Articles
                </Typography>
                {articles.map((article, index) => (
                  <Box
                    key={index}
                    sx={{
                      mb: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        width: "244px",
                        height: "140px",
                        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1.6), rgba(0, 0, 0, 0.1)), url(${article.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        display: "flex",
                        alignItems: "flex-end",
                        padding: "10px",
                        borderRadius: "10px",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "white",
                          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
                        }}
                      >
                        <a
                          href={article.link}
                          style={{
                            textDecoration: "none",
                            color: "inherit",
                            fontFamily: "Poppins, sans-serif",
                          }}
                        >
                          {article.title}
                        </a>
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <CalendarMonthIcon
                          sx={{ fontSize: 16, marginRight: 1 }}
                        />
                        {article.date}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Blog;
