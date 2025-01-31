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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import logo from "../assests/logo.png";

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
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Link to="/">
              <img src={logo} alt="Logo" style={{ height: "40px" }} />
            </Link>
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <Button sx={{color: "#fff"}} component={Link} to="/">
              Home
            </Button>
            <Button sx={{color: "#fff"}} component={Link} to="/listing">
              Venue
            </Button>
            <Button sx={{color: "#fff"}} component={Link} to="/about">
              About Us
            </Button>
            <Button sx={{color: "#fff"}} component={Link} to="/blog">
              Blog
            </Button>
            <Button sx={{color: "#fff"}} component={Link} to="/contact">
              Contact
            </Button>
            <Button sx={{color: "#fff"}} component={Link} to="/login">
              Sign In
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Navigation Drawer */}
      <Drawer anchor="left" open={mobileOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List>
            {["Home", "Venue", "About Us", "Blog", "Contact", "Sign In"].map(
              (text, index) => (
                <ListItem
                  button
                  key={text}
                  component={Link}
                  to={`/${text.toLowerCase().replace(" ", "")}`}
                >
                  <ListItemText primary={text} />
                </ListItem>
              )
            )}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default NavBar;
