import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Link,
  Box,
  Card,
  CardMedia,
  CardContent,
  Button,
  Paper,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import BgImg from "../assests/video-bg.png";
import { motion } from "framer-motion";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Articleimg from "../assests/blog/article-1.jpg";
import shapesRound from "../assests/shapes-round.png";
import PostImage from "../assests/blog/blog-1.jpg";
import PostImage4 from "../assests/blog/blog-4.jpg";
import { instance } from "../controller/common";
import axios from "axios";

const Blog = () => {
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
   const [blogImages, setBlogImages] = useState({});

  const getBlogData = async () => {
    try {
      const response = await instance.get(`/api/service/rest/blog/getBlog`);
      setBlogData(response.data);

      const categorySet = new Set(
        response.data.map((post) => post.blogCategory)
      );
      setCategories([...categorySet]);

      const allTags = response.data.flatMap(
        (post) => post.tags?.split(",") || []
      );
      const uniqueTags = [...new Set(allTags)];
      setTags(uniqueTags);

      response.data.forEach((post) => {
        getblogImageData(post.id);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getblogImageData = async (blogId) => {
    try {
      const response = await axios.get(
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
    getBlogData();
  }, []);

  useEffect(() => {
    getblogImageData();
  })

  const handleNavigate = (blogId) => {
    navigate(`/blog-details/${blogId}`);
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Box
          py={2}
          textAlign="center"
          sx={{
            backgroundImage: `url(${BgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "30vh",
          }}
        >
          <Typography variant="h4" fontWeight={700}>
            Blog
          </Typography>
          <Typography variant="body2" sx={{mt:2}}>
            <Link href="/" underline="hover" color="inherit">
              Home
            </Link>{" "}
            / Blog
          </Typography>
        </Box>
      </motion.div>
      <Container
        maxWidth="lx"
        sx={{
          paddingBottom: { xs: 2, md: 7 },
          position: "relative",
          zIndex: 1,
          backgroundColor: "#111018",
          backgroundImage: `url(${BgImg})`,
          // backgroundSize: "cover",
          backgroundPosition: "center",
          // minHeight: "30vh",
          backgroundRepeat: "repeat-y",
        }}
      >
        <Grid container spacing={4}>
          <Grid xs={12} sm={1}></Grid>
          <Grid item xs={12} md={7}>
            <Grid container spacing={4}>
              {blogData.map((post, index) => (
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
                        image={blogImages[post.id] || PostImage}
                        alt={post.title}
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
                          color: "#fff",
                          fontFamily: "Poppins, sans-serif",
                          transition: "color 0.3s ease",
                          "&:hover": { textDecoration: "underline" },
                        }}
                      >
                        <a
                          href={post.link}
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          {post.title.length > 25
                            ? post.title.slice(0, 25) + "..."
                            : post.title}
                        </a>
                      </Typography>

                      <Typography
                        variant="body2"
                        color="white"
                        fontWeight={"300"}
                        fontFamily={"Poppins, sans-serif"}
                      >
                        {post.description.length > 20
                          ? post.description.slice(0, 20) + "..."
                          : post.description}
                      </Typography>
                      <Button
                        variant="text"
                        sx={{
                          mt: 2,
                          color: "#fff",
                          fontWeight: "400",
                          fontFamily: "Poppins, sans-serif",
                          cursor: "pointer",
                          textTransform: "capitalize",
                        }}
                        // href={post.link}
                        onClick={() => handleNavigate(post.id)}
                      >
                        View Details
                        <ArrowForwardIcon
                          sx={{
                            marginLeft: 1,
                            marginTop: "5px",
                            fontSize: 20,
                            marginBottom: 0.5,
                          }}
                        />
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
                  <BusinessCenterIcon sx={{ color: "blue", marginRight: 1 }} />{" "}
                  Categories
                </Typography>
                <List>
                  {categories.map((category, index) => (
                    <ListItem
                      key={index}
                      sx={{
                        padding: "5px 0",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: "unset", marginRight: 1 }}>
                        <FiberManualRecordIcon
                          sx={{ fontSize: 10, color: "white" }}
                        />
                      </ListItemIcon>
                      <Typography
                        sx={{
                          color: "white",
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: "300",
                        }}
                      >
                        {category}
                      </Typography>
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
                  borderRadius: "12px",
                }}
              >
                {/* Tags Heading */}
                <Typography
                  sx={{
                    color: "#fff",
                    borderBottom: "1px solid white",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    fontFamily: "Poppins, sans-serif",
                  }}
                  variant="h6"
                  gutterBottom
                >
                  <LocalOfferOutlinedIcon sx={{ width: 20, height: 20,color: "blue" }} /> Tags
                </Typography>
                {/* Tag List */}
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1.5,
                    mt: 4,
                  }}
                >
                  {tags.map((tag, index) => (
                    <Button
                      key={index}
                      variant="outlined"
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "400",
                        fontSize: "14px",
                        textTransform: "capitalize",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        color: "white",
                        border: "1px solid rgba(255, 255, 255, 0.5)",
                        borderRadius: "20px",
                        padding: "6px 12px",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.2)",
                          borderColor: "white",
                        },
                      }}
                      size="small"
                    >
                      {tag}
                    </Button>
                  ))}
                </Box>
              </Paper>

              {/* <Paper
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
                {blogData.map((article, index) => (
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
                        // width: "100%",
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
              </Paper> */}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Blog;
