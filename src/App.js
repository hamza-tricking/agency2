import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
import Navbar from "./component/nav";
import Navtop from "./component/navTop";
import Home from "./component/home";

function App() {
  const [showNavtop, setShowNavtop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setShowNavtop(false); // Hide when scrolling down
      } else {
        setShowNavtop(true); // Show when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // You can use this value to determine if the window is in tablet mode

  return (
    <Router>
      <div className={`navtop-wrapper ${showNavtop ? "visible" : "hidden"}`}>
        <Navtop />
      </div>{" "}
      <Navbar classname={showNavtop ? "navbarup" : "navbar"} />
      <Routes>
        <Route
          path="/"
          element={<Home homeclass={showNavtop ? "home-part" : "home-part2"} />}
        />
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
