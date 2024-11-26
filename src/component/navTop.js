import React, { useEffect, useState } from "react";
import "../styles/navTop.css";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import "flag-icons/css/flag-icons.min.css";

const Navtop = () => {
  const [showLanguages, setShowLanguages] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("AR");

  const [minisize, setMinisize] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 900px)");

    // Function to update state when media query matches
    const handleMediaChange = (e) => {
      if (e.matches) {
        setMinisize(false); // When in tablet mode
      } else {
        setMinisize(true); // When not in tablet mode
      }
    };

    // Add event listener
    mediaQuery.addEventListener("change", handleMediaChange);

    // Initial check
    if (mediaQuery.matches) {
      setMinisize(false);
    } else {
      setMinisize(true);
    }

    // Clean up listener on component unmount
    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);
  const toggleLanguageOptions = () => {
    setShowLanguages((prevState) => !prevState);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setShowLanguages(false); // Hide options after selection
  };

  return (
    <div className="navtop">
      {minisize && (
        <div className="navtop-container">
          {/* Social Media Icons */}
          <div className="navtop-icons">
            <a
              href="https://www.facebook.com/profile.php?id=61569626301665"
              target="_blank"
              rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/adcraftdz/?hl=fr"
              target="_blank"
              rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
          {/* Slogan */}
          <p className="navtop-slogan">Your trusted partner for success.</p>
          {/* Language Options and Contact */}
          <div className="navtop-options">
            {/* Language Button */}
            <button className="language-button" onClick={toggleLanguageOptions}>
              {selectedLanguage} <span className="down-arrow">↓</span>
            </button>

            {/* Language options dropdown */}
            <div
              className={`language-options ${showLanguages ? "visible" : ""}`}>
              <span
                className="fi fi-dz"
                title="Arabic"
                onClick={() => handleLanguageChange("AR")}></span>{" "}
              {/* Algeria */}
              <span
                className="fi fi-fr"
                title="French"
                onClick={() => handleLanguageChange("FR")}></span>{" "}
              {/* France */}
              <span
                className="fi fi-gb"
                title="English"
                onClick={() => handleLanguageChange("EN")}></span>{" "}
              {/* United Kingdom */}
            </div>

            {/* Contact Number */}
            <div className="contact-number">+213542781636</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navtop;
