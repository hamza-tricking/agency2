import React, { useState } from "react";
import "../styles/nav.css";

const Navbar = ({ classname }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <div>
      <nav className={classname}>
        <div className="navbar-logo">
          <img
            src="/images/462565442_794377136136898_2848302853661647677_n.png"
            alt="Logo"
          />
        </div>
        <ul className="navbar-links">
          <li
            className="dropdown"
            onMouseEnter={() => setDropdownVisible(true)}
            onMouseLeave={() => setDropdownVisible(false)}>
            <a href="/services">Services</a>
            <ul className={`dropdown-menu ${dropdownVisible ? "show" : ""}`}>
              <li>
                <a href="/digital-marketing">Digital Marketing</a>
              </li>
              <li>
                <a href="/web-design-services">Web Design Services</a>
              </li>
              <li>
                <a href="/graphic-design-services">Graphic Design Services</a>
              </li>
              <li>
                <a href="/social-media-marketing">Social Media Marketing</a>
              </li>
              <li>
                <a href="/seo">SEO</a>
              </li>
              <li>
                <a href="/conversion-rate-optimization">
                  Conversion Rate Optimization
                </a>
              </li>
              <li>
                <a href="/hosting">Hosting</a>
              </li>
              <li>
                <a href="/video-editing">Video Editing</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/clients">Our Clients</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/jobs">Jobs</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <button className="contact-btn">Contact Us</button>
          </li>
        </ul>
        <button className="menu-toggle" onClick={toggleSidebar}>
          ☰
        </button>
      </nav>

      <div className={`sidebar ${sidebarVisible ? "visible" : ""}`}>
        <div className="sidebar-header">
          <img
            src="/images/462579335_896425995951121_4327553908747904148_n.png"
            alt="Sidebar Logo"
          />
          <button className="close-btn" onClick={closeSidebar}>
            ✕
          </button>
        </div>
        <ul className="sidebar-links">
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/clients">Our Clients</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/jobs">Jobs</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <button className="contact-btn">Contact Us</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
