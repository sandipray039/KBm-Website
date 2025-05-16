import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Header2 from "./Header2";

const Header = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [sticky, setSticky] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false); // Default to false for mobile toggle

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
    setMenuOpen(!menuOpen); // Toggle menu visibility
  };

  return (
    <div>
      <header className="header">
        <div className="header-top bg-theme-colored sm-text-center">
          <div className="container">
            <div className="row" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
              <div className="col-md-2 col-sm-12">
                <div className="widget no-border m-0">
                  <ul className="styled-icons icon-dark icon-theme-colored icon-sm sm-text-center">
                    <li>
                      <a href="https://www.facebook.com/people/%E0%A4%9D%E0%A4%BE%E0%A4%B0%E0%A4%96%E0%A4%82%E0%A4%A1-%E0%A4%96%E0%A4%A4%E0%A4%BF%E0%A4%AF%E0%A4%BE%E0%A4%A8%E0%A5%80-%E0%A4%AC%E0%A5%81%E0%A4%A6%E0%A5%8D%E0%A4%A7%E0%A4%BF%E0%A4%9C%E0%A5%80%E0%A4%B5%E0%A5%80-%E0%A4%AE%E0%A4%82%E0%A4%9A-Jkbm/61556886564542/">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/@KBMcharity">
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-8 col-sm-12" style={{display:'flex',alignItems:'center',justifyContent:'center' }}>
                <div className="widget no-border m-0">
                  <ul className="list-inline pull-right flip sm-pull-none sm-text-center mt-5">
                    <li className="m-0 pl-10 pr-10">
                      <i className="fa fa-phone text-white"></i>{" "}
                      <a className="text-white" href="#">
                        6207723381
                      </a>
                    </li>
                    <li className="m-0 pl-10 pr-10">
                      <i className="fa fa-envelope-o text-white"></i>{" "}
                      <a className="text-white" href="#">
                        kbmofficial2024@gmail.com
                      </a>
                    </li>
                    <li>
                      <a
                        className="btn btn-default btn-flat btn-xs bg-light p-5 font-11 pl-10 pr-10"
                        href="memberjoin"
                      >
                        Join Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div ref={headerRef} className="header-nav">
          <div
            className="header-nav-wrapper"
            style={{ backgroundColor: "#003C72" }}
          >
            <div className="container-fluid">
              <nav className="navbar">
                <Link className="navbar-brand" to="/">
                  <div style={{ display: "flex", gap: "10px" }}>
                    <img
                      src="/images/kbm-slider/logo.png.png"
                      alt=""
                      style={{
                        height: "85px",
                        padding: "5px 0px",
                        marginTop: "5px",
                      }}
                    />
                    <p
                      className="text-white"
                      style={{
                        marginTop: "27px",
                        marginRight: "40px",
                        fontSize: "27px",
                        fontWeight: "600",
                      }}
                    >
                      खतियानी बुद्धिजीवी मंच
                    </p>
                  </div>
                </Link>
                <button
                  className="menu-toggle"
                  onClick={toggleMenu}
                  style={{
                    background: "none",
                    border: "none",
                    color: "white",
                    fontSize: "24px",
                    cursor: "pointer",
                  }}
                >
                  <i className="fa fa-bars"></i>
                </button>
                <ul
                  className={`menuzord-menu onepage-nav ${
                    menuOpen ? "menu-open" : "menu-closed"
                  }`}
                >
                  <li className="text-white" style={{ fontSize: "20px" }}>
                    <NavLink
                      to="/home"
                      className={({ isActive }) =>
                        text-white ${isActive ? "active" : ""}
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="text-white">
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        text-white ${isActive ? "active" : ""}
                      }
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="text-white">
                    <NavLink
                      to="/team"
                      className={({ isActive }) =>
                        text-white ${isActive ? "active" : ""}
                      }
                    >
                      Volunteer
                    </NavLink>
                  </li>
                  <li className="text-white">
                    <NavLink
                      to="/gallery"
                      className={({ isActive }) =>
                        text-white ${isActive ? "active" : ""}
                      }
                    >
                      Gallery
                    </NavLink>
                  </li>
                  <li className="text-white">
                    <NavLink
                      to="/donationpage"
                      className={({ isActive }) =>
                        text-white ${isActive ? "active" : ""}
                      }
                    >
                      Donate
                    </NavLink>
                  </li>
                  <li className="text-white">
                    <NavLink
                      to="/memberjoin"
                      className={({ isActive }) =>
                        text-white ${isActive ? "active" : ""}
                      }
                    >
                      Join Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/events"
                      className={({ isActive }) =>
                        text-white ${isActive ? "active" : ""}
                      }
                    >
                      Events
                    </NavLink>
                  </li>
                  <li className="text-white">
                    <NavLink
                      to="/contact"
                      className={({ isActive }) =>
                        text-white ${isActive ? "active" : ""}
                      }
                    >
                      Contact
                    </NavLink>
                  </li>
                  <li className="text-white">
                    <NavLink
                      to="/documents"
                      className={({ isActive }) =>
                        text-white ${isActive ? "active" : ""}
                      }
                    >
                      Documents
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div> */}
        <Header2 />
      </header>
    </div>
  );
};

export default Header;