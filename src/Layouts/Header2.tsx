import React, { useEffect, useRef, useState } from "react";
import "./Header2.css";
import gsap from "gsap";
import { Link } from "react-router-dom";

const Header2 = () => {
  const headerRef = useRef<HTMLDivElement | null>(null); // Define headerRef
  const [sticky, setSticky] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 15 && !sticky) {
        setSticky(true);
        header.style.position = "fixed";
        header.style.top = "0";
        header.style.left = "0";
        header.style.width = "100%";
        header.style.background = "#ffffff";
        header.style.zIndex = "9999";
        header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
        gsap.fromTo(
          header,
          { y: -100 },
          { y: 0, duration: 0.4, ease: "power2.out" }
        );
      } else if (scrollY <= 0 && sticky) {
        gsap.to(header, {
          y: -100,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            if (!header) return;
            header.style.position = "relative";
            header.style.top = "unset";
            setSticky(false);
            gsap.set(header, { y: 0 });
          },
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sticky]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div
        ref={headerRef}
        className="main"
        style={{ height: "20vh", backgroundColor: "rgb(0, 60, 114)" }}
      >
        <div className="containers navbar">
          <div className="img-container">
            <div className="img" style={{ maxWidth: "67px" }}>
              <img src="/images/kbm-slider/logo.png.png" alt="Logo" />
            </div>
            <h1 className="title" style={{ marginTop: "10px" }}>
              खतियानी बुद्धिजीवी मंच
            </h1>
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            {isMenuOpen ? "✖" : "☰"}
          </div>
          <div className={`menu ${isMenuOpen ? "open" : ""}`}>
            <ul className="menu-list text-white font-bold">
            <Link className="menu-item" to="/home">Home</Link>
              <Link className="menu-item" to="/about">About</Link>
             <Link className="menu-item" to="/contact">Contact</Link>
              <Link className="menu-item" to="/gallery">Gallery</Link>
              <Link className="menu-item" to="/Events">Events</Link>
              <Link className="menu-item" to="/DonationPage">Donation</Link>
              
               {/* <li className="menu-item">
                <a href="#">About</a>
              </li>
              <li className="menu-item">
                <a href="#">Contact</a>
              </li>
              <li className="menu-item">
                <a href="#">Gallery</a>
              </li>
              <li className="menu-item"> 
                <a href="#">Events</a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header2;