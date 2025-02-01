import React, { useEffect } from "react";
import { Container, Grid, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { ArrowRight } from "@mui/icons-material";
import AOS from "aos";
import "aos/dist/aos.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import shapesRound from "../assests/shapes-round.png";
import blog1 from "../assests/blog/blog-1.jpg";
import blog2 from "../assests/blog/blog-2.jpg";
import blog3 from "../assests/blog/blog-3.jpg";

const HomePageBlog = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const blogData = [
    {
      id: 1,
      image: blog1,
      category: ["Health", "Care"],
      date: "October 4, 2023",
      title: "The Best Spa Saloons for Your Relaxations?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      link: "/blog-details",
    },
    {
      id: 2,
      image: blog2,
      category: ["Health", "Care"],
      date: "October 6, 2023",
      title: "Three Powerful Tricks For Online Advertising",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      link: "/blog-details",
    },
    {
      id: 3,
      image: blog3,
      category: ["Health", "Care"],
      date: "October 10, 2023",
      title: "Competitive Analysis for Entrepreneurs in 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      link: "/blog-details",
    },
  ];

  return (
    <section className="blog-section">
      <Box sx={{ py: 6, position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            // bottom: "0%",
            top: "5%",
            right: "45%",
            width: "55%",
            transform: "translateX(400px)",
            zIndex: 0,
            transitionTimingFunction: "ease-out",
            animation: "drive 2s forwards",
            display: { xs: "none", md: "block" },
          }}
        >
          <img src={shapesRound} alt="Decoration" style={{ width: "400px" }} />
        </Box>
        <Box
          sx={{
            position: "absolute",
            // bottom: "40%",
            top: "80%",
            right: "60%",
            width: "55%",
            transform: "translateX(400px)",
            zIndex: 0,
            transitionTimingFunction: "ease-out",
            animation: "drive 2s forwards",
            display: { xs: "none", md: "block" },
          }}
        >
          <img src={shapesRound} alt="Decoration" style={{ width: "350px" }} />
        </Box>
        <Box
          sx={{
            position: "absolute",
            // bottom: "40%",
            top: "200%",
            right: "60%",
            width: "55%",
            transform: "translateX(400px)",
            zIndex: 0,
            transitionTimingFunction: "ease-out",
            animation: "drive 2s forwards",
            display: { xs: "none", md: "block" },
          }}
        >
          <img src={shapesRound} alt="Decoration" style={{ width: "350px" }} />
        </Box>
        <Container maxWidth="xl">
          <Grid container alignItems="center" justifyContent="space-around">
            <Grid item xs={12} md={5} data-aos="fade-up">
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.8rem", md: "3rem" },
                  color: "#fff",
                  fontWeight: "bold",
                }}
                fontWeight="bold"
              >
                Latest Blog
              </Typography>
              <Typography sx={{ color: "azure" }}>
                People are giving these goods for free so check them out.
              </Typography>
            </Grid>
            <Grid item xs={12} md={5} textAlign="right" data-aos="fade-up">
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/blog-grid-sidebar"
              >
                View All
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="xl">
        <Grid container spacing={3} justifyContent={"center"}>
          {blogData.map((blog, index) => (
            <Grid
              item
              lg={3.6}
              md={4}
              sm={6}
              xs={12}
              key={blog.id}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <Box
                className="blog grid-blog"
                sx={{
                  border: "2px solid #fff",
                  borderRadius: 2,
                  transition: "all 2000ms cubic-bezier(0.19, 1, 0.22, 1) 0ms",
                  transform: "translateZ(0)",
                  "&:hover": {
                    transform: "scale(1.05)",
                    cursor: "pointer",
                  },
                }}
              >
                <Box className="blog-image">
                  <Link to={blog.link}>
                    <img
                      className="img-fluid"
                      src={blog.image}
                      alt="Post Image"
                      style={{
                        width: "100%",
                        transition:
                          "all 2000ms cubic-bezier(0.19, 1, 0.22, 1) 0ms",
                      }}
                    />
                  </Link>
                </Box>
                <Box className="blog-content" sx={{ margin: 1.5 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={2.1} sm={3.5} md={2.5}>
                      <Button
                        variant="contained"
                        size="small"
                        sx={{ backgroundColor: "#ffffff", color: "black" }}
                      >
                        Health
                      </Button>
                    </Grid>
                    <Grid item xs={2} sm={3} md={2}>
                      <Button
                        variant="contained"
                        size="small"
                        sx={{ backgroundColor: "#ffffff", color: "black" }}
                      >
                        Care
                      </Button>
                    </Grid>
                  </Grid>
                  <Typography
                    variant="body2"
                    className="date-icon"
                    sx={{ color: "#6a6484", mt: 1.5 }}
                  >
                    <CalendarMonthIcon
                      sx={{ fontSize: 16, color: "#6a6484" }}
                    />{" "}
                    {blog.date}
                  </Typography>
                  <Typography
                    variant="h6"
                    className="blog-title"
                    sx={{
                      marginTop: 2.5,
                      color: "#0000ff",
                      fontSize: "20px",
                      fontWeight: "700",
                      "&:hover": {
                        color: "#fff",
                      },
                    }}
                  >
                    {blog.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="blog-description"
                    sx={{ color: "#fff", marginTop: 1 }}
                  >
                    {blog.description}
                  </Typography>
                  <Grid container sx={{ alignItems: "center", marginTop: 1 }}>
                    <Grid item xs={3}>
                      <Typography
                        variant="body2"
                        className="viewlink"
                        sx={{ color: "#fff" }}
                      >
                        View Details
                      </Typography>
                    </Grid>
                    <Grid item xs={1}>
                      <ArrowForwardIcon sx={{ color: "#fff", fontSize: "5px" }} />
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default HomePageBlog;
