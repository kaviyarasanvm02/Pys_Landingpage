import React, { useRef } from "react";
import Slider from "react-slick";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fitness from "../assests/featured/Fitness.png";
import Badminton from "../assests/featured/Badminton.png";
import Carwash from "../assests/featured/Carwash.png";
import Salon from "../assests/featured/Saloon.png";
import Football from "../assests/featured/football.png";
import NetPractice from "../assests/featured/Net Practies.png";

const categories = [
  { name: "Fitness", image: Fitness },
  { name: "Badminton", image: Badminton },
  { name: "Carwash", image: Carwash },
  { name: "Salon", image: Salon },
  { name: "Football", image: Football },
  { name: "Net Practice", image: NetPractice },
];

function Categories() {
  const navigate = useNavigate();
  const slideRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    autoplay: true, 
    autoplaySpeed: 2000, 
    pauseOnHover: true, 
    customPaging: () => (
      <Box
        sx={{
          width: 64,
          height: 8,
          borderRadius: 4,
          bgcolor: '#fff',
          '&.slick-active': {
            bgcolor: '#fff',
          }
        }}
      />
    ),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const handleCategoryClick = (index) => {
    if (slideRef.current) {
      slideRef.current.slickGoTo(index);
    }
  };

  const handleCardClick = (category) => {
    navigate(`/venue?category=${category}`);
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "90%",
        margin: "auto",
        mt: 8,
        fontFamily: "Poppins, sans-serif",
        pb: 8,
      }}
    >
      <Container maxWidth="xl">
        <Grid container alignItems="center" spacing={2} sx={{ mb: 4 }}>
          <Grid item xs={12} md={3}></Grid>
          <Grid item xs={12} md={6} textAlign="center">
            <Typography
              variant="h4"
              sx={{
                color: "#fff",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bold",
              }}
            >
              Explore Our Categories
            </Typography>
            <Typography
              sx={{ 
                color: "#fff", 
                mt: 2, 
                fontFamily: "Poppins, sans-serif" 
              }}
            >
              The most trendy accommodations available
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} textAlign={{ xs: "center", md: "right" }}>
            <Button
              onClick={() => handleCardClick("all")}
              variant="outlined"
              sx={{
                color: "#fff",
                textTransform: "capitalize",
                fontFamily: "Poppins, sans-serif",
                border: "1px solid #fff",
                fontWeight: 'bold',
                '&:hover': {
                  border: "1px solid #fff",
                  bgcolor: 'rgba(255,255,255,0.1)',
                }
              }}
            >
              View all Categories
            </Button>
          </Grid>
        </Grid>

        <Box 
          sx={{ 
            '.slick-dots': { 
              bottom: '-50px',
              '& li': {
                mx: 1,
                width: 'auto',
                height: 'auto',
              }
            },
            '.slick-slide > div': {
              margin: '0 8px', 
            },
            '.slick-list': {
              margin: '0 -8px', 
            }
          }}
        >
          <Slider ref={slideRef} {...settings}>
            {categories.map((category, index) => (
              <Box
                key={index}
                onClick={() => handleCardClick(category.name)}
              >
                <Box
                  sx={{
                    position: "relative",
                    borderRadius: "16px",
                    overflow: "hidden",
                    cursor: "pointer",
                    height: 320,
                    '&:hover img': {
                      transform: 'scale(1.1)',
                    },
                  }}
                  onClick={() => handleCategoryClick(index)}
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.3s ease-in-out",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "100%",
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      position: "absolute",
                      bottom: 24,
                      left: 24,
                      color: "#fff",
                      fontWeight: "bold",
                      zIndex: 1,
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    {category.name}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
}

export default Categories;