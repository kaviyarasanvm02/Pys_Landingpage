import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Box,
  IconButton,
  InputAdornment,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { styled } from "@mui/material/styles";
import BgImg from "../assests/video-bg.png";
import { motion } from "framer-motion";
import NavBar from "../Component/NavBar";

// Custom styled TextField
const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    color: "white",
    "& fieldset": {
      borderColor: "rgba(255, 255, 255, 0.3)",
    },
    "&:hover fieldset": {
      borderColor: "rgba(255, 255, 255, 0.5)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
    "& .MuiInputAdornment-root": {
      color: "rgba(255, 255, 255, 0.7)",
    },
  },
  "& .MuiInputLabel-root": {
    color: "rgba(255, 255, 255, 0.7)",
    "&.Mui-focused": {
      color: "white",
    },
  },
  marginBottom: theme.spacing(2),
}));

const SignIn = () => {
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleToggleForgotPassword = () => {
    setIsForgotPassword(!isForgotPassword);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleEmailChange = (e) => {
    const value = e.target.value.trim();
    setEmail(value);
    if (!validateEmail(value)) {
      setErrors((prev) => ({ ...prev, email: "Please enter a valid email" }));
    } else {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value.trim();
    setPassword(value);
    if (!validatePassword(value)) {
      setErrors((prev) => ({
        ...prev,
        password: "Password must be at least 6 characters long",
      }));
    } else {
      setErrors((prev) => ({ ...prev, password: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = { email: "", password: "" };

    if (!email || !validateEmail(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!password || !validatePassword(password)) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(newErrors);

    if (!newErrors.email && !newErrors.password) {
      console.log("Form submitted successfully");
    }
  };

  return (
    <>
      {/* Login/Forgot Password Form */}
      <Box
        sx={{
          backgroundImage: `url(${BgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="sm" sx={{ marginTop: 3, marginBottom: 4 }}>
          <Box
            py={2}
            textAlign="center"
            sx={{
              color: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              // minHeight: "25vh",
              paddingTop: 8,
              paddingBottom: 2
            }}
          >
            <Typography variant="h4" fontWeight={700}>
              {isForgotPassword ? "Forgot Password" : "Login"}
            </Typography>
            <Typography variant="body2">
              <Link href="/" underline="hover" color="inherit">
                Home
              </Link>{" "}
              / {isForgotPassword ? "Forgot Password" : "Login"}
            </Typography>
          </Box>

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box
              py={5}
              boxShadow={3}
              borderRadius={2}
              p={4}
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                backdropFilter: "blur(10px)",
                color: "white",
                textAlign: "center",
              }}
            >
              {isForgotPassword ? (
                // Forgot Password Form
                <>
                  <Typography variant="h5" fontWeight={700} mb={2}>
                    Forgot Your Password
                  </Typography>
                  <Typography
                    variant="body2"
                    mb={4}
                    color="rgba(255, 255, 255, 0.7)"
                  >
                    No problem! Just enter the email address then reset your
                    Password.
                  </Typography>
                  <form>
                    <StyledTextField
                      fullWidth
                      label="Email Address/Mobile Number"
                      variant="outlined"
                      type="email"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <Button
                      fullWidth
                      variant="contained"
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
                    <Button
                      startIcon={<ArrowBackIcon />}
                      onClick={handleToggleForgotPassword}
                      sx={{
                        color: "rgba(255, 255, 255, 0.7)",
                        "&:hover": {
                          color: "white",
                          backgroundColor: "transparent",
                        },
                      }}
                    >
                      Back to Login
                    </Button>
                  </form>
                </>
              ) : (
                // Login Form
                <>
                  <Typography variant="h5" fontWeight={700} mb={3}>
                    Welcome Back
                  </Typography>
                  <Typography variant="body2" mb={4}>
                    Please Enter your Details
                  </Typography>
                  <form onSubmit={handleSubmit}>
                    <StyledTextField
                      fullWidth
                      label="Email Address"
                      variant="outlined"
                      value={email}
                      onChange={handleEmailChange}
                      error={!!errors.email}
                      helperText={errors.email}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <StyledTextField
                      fullWidth
                      type={showPassword ? "text" : "password"}
                      label="Password"
                      variant="outlined"
                      value={password}
                      onChange={handlePasswordChange}
                      error={!!errors.password}
                      helperText={errors.password}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LockIcon />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={handleTogglePasswordVisibility}
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <Grid
                      container
                      alignItems="center"
                      justifyContent="space-between"
                      mb={3}
                    >
                      <Grid item>
                        <FormControlLabel
                          control={
                            <Checkbox
                              sx={{
                                color: "rgba(255, 255, 255, 0.7)",
                                "&.Mui-checked": {
                                  color: "white",
                                },
                              }}
                            />
                          }
                          label={
                            <Typography sx={{ color: "white" }}>
                              Remember Me
                            </Typography>
                          }
                        />
                      </Grid>
                      <Grid item>
                        <Button
                          onClick={handleToggleForgotPassword}
                          sx={{
                            color: "rgba(255, 255, 255, 0.7)",
                            "&:hover": {
                              color: "white",
                              backgroundColor: "transparent",
                            },
                            textTransform: "none",
                          }}
                        >
                          Forgot password?
                        </Button>
                      </Grid>
                    </Grid>
                    <Button
                      fullWidth
                      type="submit"
                      variant="contained"
                      sx={{
                        mt: 2,
                        bgcolor: "white",
                        color: "black",
                        "&:hover": { bgcolor: "rgba(255, 255, 255, 0.9)" },
                        py: 1.5,
                        fontSize: "1.1rem",
                      }}
                    >
                      Sign in
                    </Button>
                  </form>
                </>
              )}
            </Box>
          </motion.div>
        </Container>
      </Box>
    </>
  );
};

export default SignIn;
