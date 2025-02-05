import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  IconButton,
  Rating,
  Link,
} from "@mui/material";
import {
  LocationOn,
  CalendarToday,
  Favorite,
  Visibility,
} from "@mui/icons-material";
import { useLocation, } from "react-router-dom";
import BgImg from "../assests/video-bg.png";
import openingSoonImg from "../assests/list/listgrid-1.png";
import avatar from "../assests/profiles/avatar-01.jpg";
import disc from "../assests/disc.svg";

const venues = [
  {
    id: 1,
    category: "vechicle",
    title: "Fashion luxury Men date",
    date: "08 Oct,2024",
  },
  {
    id: 2,
    category: "Electronics",
    title: "Apple iPhone 6 16GB 4G LTE",
    date: "09 Oct,2024",
  },
  {
    id: 3,
    category: "Jobs",
    title: "Customized Apple Imac",
    date: "10 Oct,2024",
  },
  {
    id: 4,
    category: "Fashion",
    title: "Luxury Women Watches",
    date: "12 Oct,2024",
  },
  {
    id: 5,
    category: "Gadgets",
    title: "Samsung Galaxy Tab S7",
    date: "13 Oct,2024",
  },
  {
    id: 6,
    category: "Real Estate",
    title: "Modern Apartments for Rent",
    date: "15 Oct,2024",
  },
];

const Venue = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category") || "all";
  const [favorites, setFavorites] = useState({});
  // const navigate = useNavigate();

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // const handleCardClick = (id) => {
  //   navigate(`/venue-details/${id}`);
  // };

  return (
    <>
      {/* <NavBar /> */}
      <Box
  sx={{
    position: "relative",
    textAlign: "center",
    backgroundImage: `url(${BgImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    minHeight: "30vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
  }}
>
  <Typography variant="h4" fontWeight={700} sx={{ zIndex: 2 }}>
    {category === "all" ? "All Venues" : `Venues for ${category}`}
  </Typography>


  <Typography
    variant="body2"
    sx={{
      position: "absolute",
      bottom: 40, 
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 2, 
    }}
  >
    <Link href="/" underline="hover" color="inherit">
      Home
    </Link>{" "}
    / Venues
  </Typography>
</Box>


      <Box
        sx={{
          p: 3,
          background: "#0f0f23",
          backgroundImage: `url(${BgImg})`,
          backgroundRepeat: "repeat-y",
        }}
      >
        <Grid container spacing={3}>
          {venues.map((venue) => (
            <Grid item lg={4} md={4} sm={6} xs={12} key={venue.id}>
              <Card
                sx={{
                  boxShadow: 3,
                  background: "#151529",
                  color: "white",
                  width: "90%",
                  margin: "auto",
                  borderRadius: "20px",
                  cursor: "pointer",
                }}
                // onClick={() => handleCardClick(venue.id)}
              >
                <Box
                  sx={{
                    position: "relative",
                    "&:hover img": {
                      transform: "scale(1.1)",
                      transition: "transform 0.3s ease-in-out",
                    },
                  }}
                >
                  <img
                    src={openingSoonImg}
                    alt="Opening Soon"
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "20px 20px 0 0",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 10,
                      left: 10,
                      backgroundColor: "#4c82f7",
                      padding: "5px 10px",
                      borderRadius: "5px",
                    }}
                  >
                    <Typography variant="body2" color="white">
                      Featured
                    </Typography>
                  </Box>
                  <IconButton
                    sx={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      backgroundColor: "rgba(255,255,255,0.5)",
                      color: favorites[venue.id] ? "red" : "gray",
                    }}
                    onClick={() => toggleFavorite(venue.id)}
                  >
                    <Favorite />
                  </IconButton>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
                  <img
                    src={avatar}
                    alt="author"
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      marginRight: 8,
                    }}
                  />
                </Box>

                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 1, p: 2 }}
                >
                  <img
                    src={disc}
                    alt="disc"
                    style={{
                      width: 20,
                      height: 20,
                      filter:
                        "invert(11%) sepia(98%) saturate(7500%) hue-rotate(240deg)",
                    }}
                  />
                  <Typography variant="body2" sx={{ color: "#0000ff" }}>
                    {venue.category}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#fff",
                      marginLeft: "auto",
                    }}
                  >
                    <Visibility sx={{ fontSize: 14, marginRight: 0.5 }} />
                    4000
                  </Typography>
                </Box>

                <CardContent>
                  <Typography variant="h6" sx={{ mt: 2 }}>
                    <Link href="#" color="inherit" underline="none">
                      {venue.title}
                    </Link>
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mt: 1,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "#fff",
                      }}
                    >
                      <LocationOn sx={{ fontSize: 14, marginRight: 0.5 }} />
                      <Typography variant="body2">Chennai</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <CalendarToday
                        sx={{ fontSize: 14, marginRight: 0.5, color: "#fff" }}
                      />
                      <Typography variant="body2">{venue.date}</Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt: 2,
                      color: "#fff",
                    }}
                  >
                    <Rating value={4.7} readOnly size="small" />
                    <Typography variant="body2">(50)</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Venue;
