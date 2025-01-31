import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  IconButton,
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { keyframes } from "@mui/system";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import pysLogo from "../assests/logo.png";
import qrlogo from "../assests/work/qr.png";
import andlogo from "../assests/qr (3).png";
import iphonelogo from "../assests/qr (2).png";

const blinkingBackground = keyframes`
  0% { background-color: #1db9aa; }
  50% { background-color: #261289; }
  100% { background-color: #1db9aa; }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [openRewardDialog, setOpenRewardDialog] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOpenRewardDialog = () => {
    setOpenRewardDialog(true);
  };

  const handleCloseRewardDialog = () => {
    setOpenRewardDialog(false);
  };

  return (
    <Box component="footer" sx={{ backgroundColor: "#1a1a1a", py: 4, mt: 4 }}>
      <Container>
        <Grid container spacing={4} alignItems="flex-start">
          <Grid item xs={12} md={4} textAlign="center">
            <Box
              onClick={scrollToTop}
              color="primary"
              component="img"
              src={pysLogo}
              alt="logo"
              sx={{ width: 150, mb: 2,cursor:"pointer" }}
            />
            <Box>
              <IconButton
                component="a"
                href="https://www.facebook.com/pickyourslot"
                target="_blank"
                color="primary"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.youtube.com/@pickyourslot4653"
                target="_blank"
                color="primary"
              >
                <YouTubeIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.instagram.com/pickyourslot/"
                target="_blank"
                color="primary"
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://in.linkedin.com/company/pick-your-slot"
                target="_blank"
                color="primary"
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} md={4} textAlign="left">
            <Typography variant="h6" fontWeight="bold" color="white">
              Our Location
            </Typography>
            <br />
            <Typography variant="body2" color="white">
              Cotyledon Technologies Private <br /> Limited, Mambakkam Main
              Road, <br />
              Medavakkam, Chennai - 600100
            </Typography>
          </Grid>

          <Grid item xs={12} md={4} textAlign="left">
            <Typography variant="h6" fontWeight="bold" color="white">
              Communication
            </Typography>
            <Box display="flex" alignItems="center" gap={1} mt={1}>
              <CallIcon color="primary" />
              <Typography variant="body2" color="white">
                <strong>Call Us</strong> <br /> +91 7200008383
              </Typography>
            </Box>
            <br />
            <Box display="flex" alignItems="center" gap={1} mt={1}>
              <EmailIcon color="primary" />
              <Typography variant="body2" color="white">
                <strong>Send Message</strong> <br />
                <a
                  href="mailto:info@pickyourslot.com"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  info@pickyourslot.com
                </a>
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box mt={4} textAlign="center" sx={{ py: 2, width: "100%" }}>
          <Typography variant="body2" color="white">
            All Copyrights Reserved &copy; {currentYear} - Cotyledon
            Technologies Pvt Ltd
          </Typography>
        </Box>
      </Container>

      <Box
        sx={{
          position: "fixed",
          right: -40,
          top: "70%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 1000,
          borderRadius: "10px",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpenRewardDialog}
          sx={{
            whiteSpace: "nowrap",
            minWidth: "160px",
            height: "50px", //
            fontSize: "18px",
            transform: "rotate(90deg)",
            transformOrigin: "center center",
            borderTopLeftRadius: "4px",
            borderTopRightRadius: "4px",
            borderBottomLeftRadius: "0px",
            borderBottomRightRadius: "0px",
            textTransform: "capitalize",
            borderRadius: "10px",
            animation: `${blinkingBackground} 1s infinite`,
            "&:hover": {
              backgroundColor: "#1db9aa",
            },
          }}
        >
          Free Reward 🏆
        </Button>
      </Box>
      <Dialog
        open={openRewardDialog}
        onClose={handleCloseRewardDialog}
        maxWidth="xs"
        fullWidth={false}
      >
        <DialogTitle>Click Here to Download Our App 😊</DialogTitle>
        <DialogContent sx={{ padding: 2 }}>
          <img
            src={qrlogo}
            alt="QR Code"
            style={{ width: "400px", height: "300px" }}
          />
          <div
            className="popup icon"
            style={{ marginTop: "20px", textAlign: "center" }}
          >
            <a
              href="https://play.google.com/store/apps/details?id=com.pyscustomer&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={andlogo}
                style={{ width: "30px", marginRight: "30px" }}
                alt="Google Play"
              />
            </a>
            <a
              href="https://apps.apple.com/in/app/pick-your-slot/id1614806838"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={iphonelogo}
                style={{ width: "30px" }}
                alt="Apple App Store"
              />
            </a>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseRewardDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      {showScrollButton && (
        <Fab
          onClick={scrollToTop}
          color="primary"
          sx={{
            position: "fixed",
            bottom: 16,
            right: 16,
            width: 40,
            height: 40,
            padding: 0,
            backgroundColor: "#6200ea",
          }}
        >
          <ArrowUpwardIcon />
        </Fab>
      )}
    </Box>
  );
};

export default Footer;
