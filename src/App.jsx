import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./app/Home";
import About from "./app/About";
import Contact from "./app/Contact";
import Favorites from "./app/Favorites";
import Store from "./app/Store";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
