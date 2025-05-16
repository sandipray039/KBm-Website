import { useEffect, useRef, useState } from "react";
import "./Header2.css";
import gsap from "gsap";
import { NavLink } from "react-router-dom";

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
        style={{ height: "13vh", backgroundColor: "rgb(0, 60, 114)", }}
      >
        <div className="containers navbar" >
          <div className="img-container col-3" >
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
            <ul className="menu-list col-8">
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? "menu-item active" : "menu-item"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "menu-item active" : "menu-item"
                }
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "menu-item active" : "menu-item"
                }
              >
                Contact
              </NavLink>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  isActive ? "menu-item active" : "menu-item"
                }
              >
                Gallery
              </NavLink>
              <NavLink
                to="/Events"
                className={({ isActive }) =>
                  isActive ? "menu-item active" : "menu-item"
                }
              >
                Events
              </NavLink>
              <NavLink
                to="/DonationPage"
                className={({ isActive }) =>
                  isActive ? "menu-item active" : "menu-item"
                }
              >
                Donation
              </NavLink>
              <NavLink
                to="/team"
                className={({ isActive }) =>
                  isActive ? "menu-item active" : "menu-item"
                }
              >
                Volunteer
              </NavLink>
              <NavLink
                to="/memberjoin"
                className={({ isActive }) =>
                  isActive ? "menu-item active" : "menu-item"
                }
              >
                Join Us
              </NavLink>
              <li   style={{marginTop:'9px',}}>
                <a
                color="white"
                  href="/documents/kbmDocument.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="menu-item "
                 
                >
                   <span style={{color:'white'}}>Document</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header2;
