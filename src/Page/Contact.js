import React, { useState } from "react";
import {
  Grid,
  Typography,
  Box,
  Container,
  TextField,
  Button,
} from "@mui/material";
import swal from "sweetalert";
import BgImg from "../assests/video-bg.png";
import contact from "../assests/contact.png";
import NewsletterSection from "./NewsletterSection";
import { motion } from "framer-motion";
import { instance } from "../controller/common";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [query, setQuery] = useState("");

  const handleNameChange = (e) => {
    // Remove leading space
    const value = e.target.value.replace(/^\s+/g, "");
    setName(value);
  };

  const handleEmailChange = (e) => {
    // Validate email format using regular expression
    const value = e.target.value;
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regex.test(value) || value === "") {
      setEmail(value);
    }
  };

  const handleMobileChange = (e) => {
    // Only allow numbers and exactly 10 digits
    const value = e.target.value.replace(/[^0-9]/g, "");
    if (value.length <= 10) {
      setMobile(value);
    }
  };

  const createEnroll = async () => {
    if (name && email && mobile && organizationName && query) {
      try {
        const response = await instance.post(
          `/service/rest/reports/createEnroll`,
          {
            name,
            email,
            mobile,
            organizationName,
            query,
          }
        );
        if (response.status === 200) {
          swal("Enroll has been Send!", "success");
          setName("");
          setEmail("");
          setMobile("");
          setOrganizationName("");
          setQuery("");
        }
      } catch (e) {
        swal({
          title: `Something went wrong!`,
          text: "Please check all the fields!",
          icon: "error",
          dangerMode: true,
        });
      }
    } else {
      swal({
        title: `Something went wrong!`,
        text: "Please check all the fields!",
        icon: "error",
        dangerMode: true,
      });
    }
  };
  return (
    <>
      {/* <NavBar /> */}

      <Box
        sx={{
          py: 8,
          backgroundImage: `url(${BgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              mb: 4,
              textAlign: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Typography
                variant="h4"
                fontWeight="bold"
                gutterBottom
                sx={{ color: "#fff", fontSize: "36px" }}
              >
                Contact <span>Us</span>
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <Typography
                variant="body1"
                sx={{ color: "#ddd", fontSize: "18px" }}
              >
                We are here to help you
              </Typography>
            </motion.div>
          </Box>

          <Grid
            container
            spacing={4}
            alignItems="center"
            sx={{
              flexDirection: { xs: "column", md: "row" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {/* Image section */}
            <Grid item lg={5} md={5} xs={12}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <Box
                  sx={{
                    "& img": {
                      maxWidth: "100%",
                      height: "auto",
                    },
                  }}
                >
                  <img src={contact} alt="Contact" />
                </Box>
              </motion.div>
            </Grid>

            {/* Form section */}
            <Grid item lg={7} md={7} xs={12}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                <Box
                  sx={{
                    backgroundColor: "#211d2e",
                    p: 4,
                    borderRadius: "12px",
                    boxShadow: 3,
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  {/* <form> */}
                  <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    margin="normal"
                    required
                    onChange={handleNameChange}
                    value={name}
                    sx={{
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      input: { color: "#fff" },
                      label: { color: "#ddd" },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#ddd" },
                        "&:hover fieldset": { borderColor: "#fff" },
                        "&.Mui-focused fieldset": { borderColor: "#fff" },
                      },
                      "& .MuiInputLabel-root": {
                        color: "#ddd",
                        "&.Mui-focused": { color: "#fff" },
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    variant="outlined"
                    margin="normal"
                    required
                    onChange={handleEmailChange}
                    value={email}
                    sx={{
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      input: { color: "#fff" },
                      label: { color: "#ddd" },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#ddd" },
                        "&:hover fieldset": { borderColor: "#fff" },
                        "&.Mui-focused fieldset": { borderColor: "#fff" },
                      },
                      "& .MuiInputLabel-root": {
                        color: "#ddd",
                        "&.Mui-focused": { color: "#fff" },
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Mobile Number"
                    type="text"
                    variant="outlined"
                    margin="normal"
                    required
                    onChange={handleMobileChange}
                    value={mobile}
                    sx={{
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      input: { color: "#fff" },
                      label: { color: "#ddd" },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#ddd" },
                        "&:hover fieldset": { borderColor: "#fff" },
                        "&.Mui-focused fieldset": { borderColor: "#fff" },
                      },
                      "& .MuiInputLabel-root": {
                        color: "#ddd",
                        "&.Mui-focused": { color: "#fff" },
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Shop Name"
                    variant="outlined"
                    margin="normal"
                    required
                    onChange={(e) => setOrganizationName(e.target.value)}
                    value={organizationName}
                    sx={{
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      input: { color: "#fff" },
                      label: { color: "#ddd" },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#ddd" },
                        "&:hover fieldset": { borderColor: "#fff" },
                        "&.Mui-focused fieldset": { borderColor: "#fff" },
                      },
                      "& .MuiInputLabel-root": {
                        color: "#ddd",
                        "&.Mui-focused": { color: "#fff" },
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Enter Query"
                    multiline
                    rows={4}
                    variant="outlined"
                    margin="normal"
                    required
                    onChange={(e) => setQuery(e.target.value)}
                    value={query}
                    sx={{
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      input: { color: "#fff" },
                      label: { color: "#ddd" },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#ddd" },
                        "&:hover fieldset": { borderColor: "#fff" },
                        "&.Mui-focused fieldset": { borderColor: "#fff" },
                      },
                      "& .MuiInputLabel-root": {
                        color: "#ddd",
                        "&.Mui-focused": { color: "#fff" },
                      },
                    }}
                  />
                  <Box mt={3}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      type="submit"
                      onClick={createEnroll}
                      sx={{
                        mt: 3,
                        mb: 3,
                        bgcolor: "white",
                        color: "black",
                        "&:hover": {
                          bgcolor: "rgba(255, 255, 255, 0.9)",
                        },
                        py: 1.5,
                        textTransform: "none",
                        fontSize: "1.1rem",
                      }}
                    >
                      Submit
                    </Button>
                  </Box>
                  {/* </form> */}
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
        <br />
        <NewsletterSection />
      </Box>
    </>
  );
};

export default Contact;
