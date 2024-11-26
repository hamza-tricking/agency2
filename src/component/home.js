import React, { useEffect, useRef, useState } from "react";
import "../styles/home.css"; // Assuming you have this CSS in styles.css
import backgroundImage from "../assets/background.jpeg";

const HomePage = ({ homeclass }) => {
  const images = [
    { src: "/images/logo1.png", title: "E-commerce Solutions" },
    { src: "/images/logo2.png", title: "Healthcare Marketing" },
    { src: "/images/logo3.png", title: "Technology Startups" },
    { src: "/images/logo4.png", title: "Education and E-learning" },
    { src: "/images/logo5.png", title: "Real Estate Development" },
    { src: "/images/logo6.png", title: "Food & Hospitality" },
    { src: "/images/logo7.png", title: "Financial Services" },
  ];

  const [active, setActive] = useState(3);
  const itemsRef = useRef([]);

  // Change slide every second automatically
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActive((prevActive) =>
        prevActive + 1 < itemsRef.current.length ? prevActive + 1 : 0
      );
    }, 2000); // 1000ms = 1 second

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const items = itemsRef.current;
    let stt = 0;
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = "none";
    items[active].style.opacity = 1;
    for (let i = active + 1; i < items.length; i++) {
      stt++;
      items[i].style.transform = `translateX(${120 * stt}px) scale(${
        1 - 0.2 * stt
      }) perspective(16px) rotateY(-1deg)`;
      items[i].style.zIndex = -stt;
      items[i].style.filter = "blur(5px)";
      items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    stt = 0;
    for (let o = active - 1; o >= 0; o--) {
      stt++;
      items[o].style.transform = `translateX(${-120 * stt}px) scale(${
        1 - 0.2 * stt
      }) perspective(16px) rotateY(1deg)`;
      items[o].style.zIndex = -stt;
      items[o].style.filter = "blur(5px)";
      items[o].style.opacity = stt > 2 ? 0 : 0.6;
    }
  }, [active]);

  const nextSlide = () => {
    setActive((prevActive) =>
      prevActive + 1 < itemsRef.current.length ? prevActive + 1 : 0
    );
  };

  const prevSlide = () => {
    setActive((prevActive) =>
      prevActive - 1 >= 0 ? prevActive - 1 : itemsRef.current.length - 1
    );
  };

  return (
    <div>
      {/* First Part */}
      <section
        className={homeclass}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          aspectRatio: "16/9", // Set a specific ratio like 16:9
          width: "100%", // Optional for responsiveness
        }}>
        {/* Left Side (Image Scaling) */}
        <div className="left-side">
          <img
            className="scaling-image"
            src="/images/Image.png"
            alt="Marketing "
          />
        </div>

        {/* Right Side (Text and Button) */}
        <div className="right-side">
          <div className="text-section">
            <h1>Digital Marketing Agency</h1>
            <p>
              We can help you with the development of Websites, Paid Per Click
              (PPC) campaigns, and overall Digital Marketing strategy in order
              to increase your success in the digital world with the main goal:
              Increasing your Return on Investment.
            </p>
          </div>
          <button className="request-button">Request Order</button>
        </div>
      </section>
      {/* second part / */}
      <div className="glass-container">
        <h2 className="title">Our Expertise, Trusted by Many</h2>
      </div>
      <div className="slider">
        <div className="slideIconse">
          {images.map((image, index) => (
            <div
              className="item"
              ref={(el) => (itemsRef.current[index] = el)}
              key={index}>
              <p className="title-Slide">{image.title}</p>
              <img src={image.src} alt={image.title} />
            </div>
          ))}
          <button id="next" onClick={nextSlide}>
            {">"}
          </button>
          <button id="prev" onClick={prevSlide}>
            {"<"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
