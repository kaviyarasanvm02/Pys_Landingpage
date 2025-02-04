import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Stack,
  List,
  ListItem,
  Grid,
  Button,
  IconButton,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ShareIcon from "@mui/icons-material/Share";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import blogBanner from "../assests/blog/blogbanner.jpg";
import { Container } from "@mui/system";
import BgImg from "../assests/video-bg.png";

const BlogDetails = () => {
  const [minHeight, setMinHeight] = useState("100vh"); // Start with full height

  useEffect(() => {
    window.scrollTo(0, 0);
    const timeout = setTimeout(() => {
      setMinHeight("450px"); 
    }, 300);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <Box
        // sx={{
        //   position: "relative",
        //   backgroundImage: `
        //   linear-gradient(to top, rgba(0, 0, 0, 0.8) 10%, rgba(0, 0, 0, 0.5) 40%, rgba(0, 0, 0, 0) 100%),
        //   url(${blogBanner})
        // `,
        //   backgroundPosition: "center",
        //   backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat",
        //   backgroundAttachment: "fixed",
        //   textAlign: "center",
        //   padding: "90px 0",
        //   overflow: "hidden",
        //   minHeight: "450px",
        //   ":after": {
        //     content: "''",
        //     background:
        //       "linear-gradient(0deg, #000000 16.31%, rgba(0, 0, 0, 0) 100%)",
        //     position: "absolute",
        //     top: 0,
        //     left: 0,
        //     width: "100%",
        //     height: "100%",
        //     zIndex: -1,
        //   },
        // }}
        sx={{
          position: "relative",
          backgroundImage: `
            linear-gradient(to top, rgba(0, 0, 0, 0.8) 10%, rgba(0, 0, 0, 0.5) 40%, rgba(0, 0, 0, 0) 100%),
            url(${blogBanner})
          `,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          textAlign: "center",
          padding: "90px 0",
          overflow: "hidden",
          minHeight: minHeight,
          transition: "min-height 0.5s ease-in-out",
          ":after": {
            content: "''",
            background: "linear-gradient(0deg, #000000 16.31%, rgba(0, 0, 0, 0) 100%)",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: 40,
            textAlign: "center",
            width: "100%",
            color: "#fff",
          }}
        >
          <Typography
            component="span"
            sx={{
              background: "#22c55e",
              padding: "7px 12px",
              borderRadius: "4px",
              fontSize: "14px",
              display: "inline-block",
              marginBottom: "15px",
            }}
          >
            Health
          </Typography>

          <Typography variant="h4" fontWeight={700} marginBottom={2}>
            The Top 25 Bike Stores in Toronto by Neighbourhood
          </Typography>

          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <CalendarTodayIcon fontSize="small" />
            <Typography>October 6, 2024</Typography>
          </Stack>
        </Box>
      </Box>

      <Box
        sx={{
          padding: "40px 0",
          backgroundColor: "#111018",
          backgroundImage: `url(${BgImg})`,
          // backgroundSize: "cover",
          backgroundPosition: "center",
          // minHeight: "30vh",
          backgroundRepeat: "repeat-y",
        }}
      >
        <Container maxWidth="lg">
          <Box className="container">
            {/* Blog Content */}
            <Typography
              variant="body1"
              sx={{ fontFamily: "Poppins, sans-serif", marginBottom: "20px", color: "#fff" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              vehicula sapien nec nisi aliquam, vitae finibus purus sodales.
              Mauris at turpis nulla. Curabitur nec tellus est. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Vestibulum pharetra arcu ac arcu varius, non
              congue neque aliquet. Pellentesque at feugiat purus. Aenean
              faucibus vehicula eros.
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontFamily: "Poppins, sans-serif", marginBottom: "20px", color: "#fff" }}
            >
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Nulla fermentum malesuada pulvinar. Vestibulum
              laoreet rutrum semper. Vivamus malesuada, nisl in consectetur
              semper, mauris nulla aliquam risus, nec ultricies sapien elit sed
              ante. Aenean luctus felis in sem consequat auctor. Nulla turpis
              enim, scelerisque sit amet consectetur vel, lacinia sed augue.
              Proin ultricies dui id ex fringilla porta. Morbi nisi justo,
              venenatis ac nibh at, bibendum mattis risus. Maecenas tincidunt,
              ligula sed congue tempus, magna augue cursus ipsum, in malesuada
              justo risus nec lorem. Nam augue augue, mollis nec condimentum
              euismod, lacinia ultricies leo.
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontFamily: "Poppins, sans-serif", marginBottom: "20px", color: "#fff" }}
            >
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Nulla fermentum malesuada pulvinar.
              Vestibulum laoreet rutrum semper. Vivamus malesuada, nisl in
              consectetur semper, mauris nulla aliquam risus, nec ultricies
              sapien elit sed ante. Aenean luctus felis in sem consequat auctor.
              Nulla turpis enim, scelerisque sit amet consectetur vel, lacinia
              sed augue. Proin ultricies dui id ex fringilla porta. Morbi nisi
              justo, venenatis ac nibh at, bibendum mattis risus. Maecenas
              tincidunt, ligula sed congue tempus, magna augue cursus ipsum, in
              malesuada justo risus nec lorem. Nam augue augue, mollis nec
              condimentum euismod, lacinia ultricies leo.
            </Typography>

            {/* Requirements Section */}
            <Box
              sx={{
                marginTop: "30px",
                color: "#fff"
              }}
            >
              <Typography
                variant="h5"
                fontWeight="bold"
                sx={{ marginBottom: "15px" }}
              >
                Requirements
              </Typography>
              <List sx={{ listStyleType: "disc", paddingLeft: "20px" }}>
                {[
                  "We do not require any previous experience or pre-defined skills to take this course.",
                  "A Computer with a good internet connection.",
                  "Vestibulum laoreet rutrum semper. Vivamus malesuada, nisl in consectetur semper.",
                  "Aenean luctus felis in sem consequat auctor.",
                ].map((item, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      display: "list-item",
                      fontSize: "16px",
                      marginBottom: "10px",
                    }}
                  >
                    {item}
                  </ListItem>
                ))}
              </List>
            </Box>

            {/* Share & Tags Section */}
            <Box
              sx={{
                marginTop: "30px",
                // backgroundColor: "#fff",
                padding: "20px",
                border: "2px solid #fff",
                borderRadius: "8px",
              }}
            >
              <Grid container alignItems="center" spacing={2}>
                <Grid item xs={12} sm={4}>
                  <Box display="flex" alignItems="center">
                    <IconButton
                      sx={{ backgroundColor: "#ddd", marginRight: "10px" }}
                    >
                      <ShareIcon />
                    </IconButton>
                    <Typography fontWeight="bold" sx={{color: "#fff"}}>Share</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Box display="flex" flexWrap="wrap" gap="10px">
                    {[
                      "Travelling",
                      "Art",
                      "Vacation",
                      "Tourism",
                      "Culture",
                      "Lifestyle",
                    ].map((tag, index) => (
                      <Button
                        key={index}
                        variant="outlined"
                        sx={{ color: "#fff", borderColor: "#fff" }}
                      >
                        {tag}
                      </Button>
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </Box>

            {/* Pagination Section */}
            {/* <Box
              sx={{
                marginTop: "30px",
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "8px",
              }}
            >
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Button
                    startIcon={<ArrowBackIcon />}
                    fullWidth
                    variant="outlined"
                  >
                    Previous Post - The Best SPA Salons For Your Relaxation
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    endIcon={<ArrowForwardIcon />}
                    fullWidth
                    variant="outlined"
                  >
                    Next Post - 8 Amazing Tricks About Business
                  </Button>
                </Grid>
              </Grid>
            </Box> */}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default BlogDetails;
