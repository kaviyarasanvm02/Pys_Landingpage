import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Page/Home";
import About from "./Page/about";
import Contact from "./Page/Contact";
import SignIn from "./Page/SignIn";
import Blog from "./Page/Blog";
import Footer from "./Component/Footer";
import Venue from "./Page/Venue";
import VenueDetails from "./Page/VenueDetails";
import { useState } from "react";
import NavBar from "./Component/NavBar";
import BlogDetails from "./Page/BlogDetails";
import ComingSoon from "./Component/ComingSoon";

function App() {
  const [openRewardDialog, setOpenRewardDialog] = useState(false);
  const location = useLocation();

  const handleOpenRewardDialog = () => {
    setOpenRewardDialog(true);
  };

  const handleCloseRewardDialog = () => {
    setOpenRewardDialog(false);
  };

  // Hide Navbar and Footer if the path is "/comingsoon"
  const hideNavAndFooter = location.pathname === "/comingsoon";

  return (
    <>
      {!hideNavAndFooter && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/venue" element={<Venue />} />
        <Route
          path="/venue-details/:id"
          element={<VenueDetails onBookNowClick={handleOpenRewardDialog} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details/:id" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
      </Routes>
      {!hideNavAndFooter && (
        <Footer
          openRewardDialog={openRewardDialog}
          onOpenRewardDialog={handleOpenRewardDialog}
          onCloseRewardDialog={handleCloseRewardDialog}
          isHidden={location.pathname === "/signin"}
        />
      )}
    </>
  );
}

function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default Root;
