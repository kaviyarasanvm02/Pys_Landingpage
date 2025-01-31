import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Page/Home';
import About from './Page/about';
import Contact from './Page/Contact';
import SignIn from './Page/SignIn';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path= "/contact" element={<Contact/>} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
