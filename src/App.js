import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Page/Home';
import About from './Page/about';
import Contact from './Page/Contact';
import SignIn from './Page/SignIn';
import Blog from './Page/Blog';
import Footer from './Component/Footer';
import Venue from './Page/Venue';
import VenueDetails from './Page/VenueDetails';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path= "/venue" element={<Venue />}/>
        <Route path= "/venue-details/:id" element={<VenueDetails />}/>
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path= "/contact" element={<Contact/>} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
