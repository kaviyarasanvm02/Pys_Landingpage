import React, { useEffect, useState } from "react";
import { Container, Grid, Typography, Button, Box, Chip } from "@mui/material";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { instance } from "../controller/common";

const HomePageBlog = () => {
  const [blogData, setBlogData] = useState([]);
  const [blogImages, setBlogImages] = useState({});

  const getBlogData = async () => {
    try {
      const response = await instance.get(`/api/service/rest/blog/getBlog`);
      setBlogData(response.data);
      response.data.forEach((blog) => getBlogImage(blog.id));
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };

  const getBlogImage = async (blogId) => {
    try {
      const response = await instance.get(
        `/api/service/rest/photos/getBlogImage?blogId=${blogId}`,
        { responseType: "blob" }
      );
      const imageUrl = URL.createObjectURL(response.data);
      setBlogImages((prevImages) => ({ ...prevImages, [blogId]: imageUrl }));
    } catch (error) {
      console.error(`Error fetching image for blog ${blogId}:`, error);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
    getBlogData();
  }, []);

  return (
    <section className="blog-section">
      <Box sx={{ py: 6, position: "relative" }}>
        <Container maxWidth="xl">
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item xs={12} md={6} data-aos="fade-up">
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.8rem", md: "3rem" },
                  color: "#fff",
                  fontWeight: "bold", 
                  marginLeft : {xs : 4 ,md : 8}
                }}
              >
                Latest Blog
              </Typography>
              <Typography sx={{ color: "azure",  marginLeft : {xs : 4 ,md : 8} }}>
                People are giving these goods for free, so check them out.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} textAlign="right" data-aos="fade-up">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#6a6484",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#56505e" },
                }}
                component={Link}
                to="/blog"
              >
                View All
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="xl">
        <Grid container spacing={3} justifyContent="center">
          {blogData
            .slice(0, 3) // ✅ SHOW ONLY 3 BLOGS ON DESKTOP
            .map((blog, index) => (
              <Grid
                item
                lg={4} // 3 cards in a row for large screens
                md={6} // 2 cards in a row for medium screens
                sm={6} // 2 cards in a row for small screens
                xs={12} // 1 card per row for mobile
                key={blog.id}
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <Box
                  sx={{
                    borderRadius: 2,
                    transition: "all 0.3s ease-in-out",
                    "&:hover": { transform: "scale(1.05)", cursor: "pointer" },
                    backgroundColor: "#151515",
                    padding: 2,
                  }}
                >
                  <Box className="blog-image">
                    <Link to={`/blog-details/${blog.id}`}>
                      <img
                        src={blogImages[blog.id] || "placeholder-image-url"}
                        alt="Blog Post"
                        style={{
                          width: "100%",
                          height: "200px",
                          objectFit: "cover",
                          borderRadius: "5px",
                        }}
                      />
                    </Link>
                  </Box>
                  <Box className="blog-content" sx={{ padding: 2 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#6a6484",
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <CalendarMonthIcon sx={{ fontSize: 16 }} /> {blog.date}
                    </Typography>
                    <Box
                      sx={{
                        mt: 1,
                        display: "flex",
                        gap: 0.5,
                        flexWrap: "wrap",
                      }}
                    >
                      {blog.tags?.split(",").map((tag, i) => (
                        <Chip
                          key={i}
                          label={tag.trim()}
                          sx={{
                            backgroundColor: "#fff",
                            color: "#000",
                            fontWeight: "bold",
                            fontSize: "0.75rem",
                          }}
                        />
                      ))}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        mt: 2,
                        color: "#fff",
                        fontWeight: "700",
                        fontSize: "1.2rem",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      {blog.title.length > 40
                        ? blog.title.slice(0, 40) + "..."
                        : blog.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#b3b3b3",
                        mt: 1,
                      }}
                    >
                      {blog.description.length > 60
                        ? blog.description.slice(0, 60) + "..."
                        : blog.description}
                    </Typography>
                    <Grid container alignItems="center" mt={2}>
                      <Grid item>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#fff",
                            "&:hover": { textDecoration: "underline" },
                            cursor: "pointer",
                          }}
                          component={Link}
                          to={`/blog-details/${blog.id}`}
                        >
                          View Details
                        </Typography>
                      </Grid>
                      <Grid item>
                        <ArrowForwardIcon
                          sx={{ color: "#fff", fontSize: 20, ml: 1 }}
                        />
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
