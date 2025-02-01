import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close"; 
import { Link } from "react-router-dom";
import logo from "../assests/logo.png";
import { height } from "@mui/system";

const NavBar = () => {
  const [scroll, setScroll] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 85);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleDrawer = (open) => () => {
    setMobileOpen(open);
  };
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      {/* Desktop Navigation */}
      <AppBar
        position="fixed"
        color="transparent"
        elevation={scroll ? 4 : 0}
        sx={{
          transition: "0.3s ease-in-out",
          background: scroll ? "black" : "transparent",
          boxShadow: scroll ? "0px 4px 10px rgba(0, 0, 0, 0.2)" : "none",
        }}
      >
        <Toolbar>
          {/* Mobile Menu Button */}
          <IconButton
            edge="start"
            color="inherit"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: "block", md: "none" }, color: "#fff" }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: { xs: "flex-end", md: "flex-start" },
            }}
          >
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                style={{
                  height: isDesktop ? "80px" : "50px",
                  width: "auto",
                  transition: "height 0.3s ease-in-out",
                }}
              />
            </Link>
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <Button sx={{ color: "#fff" }} component={Link} to="/">
              Home
            </Button>
            <Button sx={{ color: "#fff" }} component={Link} to="/venue">
              Venue
            </Button>
            <Button sx={{ color: "#fff" }} component={Link} to="/about">
              About Us
            </Button>
            <Button sx={{ color: "#fff" }} component={Link} to="/blog">
              Blog
            </Button>
            <Button sx={{ color: "#fff" }} component={Link} to="/contact">
              Contact
            </Button>
            <Button sx={{ color: "#fff" }} component={Link} to="/signIn">
              Sign In
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#211d2e",
          },
        }}
      >
        <Box
          sx={{ width: 250, backgroundColor: "#211d2e", height: "100%" }}
          role="presentation"
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "10px",
            }}
          >
            <IconButton onClick={toggleDrawer(false)} sx={{ color: "#fff" }}>
              <CloseIcon /> {/* Close icon */}
            </IconButton>
          </Box>
          <List>
            {[
              { text: "Home", path: "/" },
              { text: "Venue", path: "/venue" },
              { text: "About Us", path: "/about" },
              { text: "Blog", path: "/blog" },
              { text: "Contact", path: "/contact" },
              { text: "Sign In", path: "/signIn" },
            ].map(({ text, path }) => (
              <ListItem
                button
                key={text}
                component={Link}
                to={path}
                sx={{
                  color: "#fff",
                }}
              >
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default NavBar;
