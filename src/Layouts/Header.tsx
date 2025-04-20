// import React from 'react'
import { Link } from "react-router-dom";
// import GoogleTranslate from "../pages/GoogleTranslate";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const Header = () => {

  const headerRef=useRef<HTMLDivElement | null>(null);
  const [sticky,setSticky]=useState<boolean>(false);


 
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 15 && !sticky) {
        setSticky(true);
        header.style.position = 'fixed';
        header.style.top = '0';
        header.style.left = '0';
        header.style.width = '100%';
        header.style.background = '#ffffff'; 
        header.style.zIndex = '9999';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)'; 
        gsap.fromTo(header, { y: -100 }, { y: 0, duration: 0.4, ease: 'power2.out' });
      } else if (scrollY <= 0 && sticky) {
        gsap.to(header, {
          y: -100,
          duration: 0.3,
          ease: 'power2.in',
          onComplete: () => {
            if (!header) return;
            header.style.position = 'relative';
            header.style.top = 'unset';
            setSticky(false);
            gsap.set(header, { y: 0 });
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sticky]);

  return (
    <div>
      <header className="header">
        <div className="header-top bg-theme-colored sm-text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <div className="widget no-border m-0">
                  <ul className="styled-icons icon-dark icon-theme-colored icon-sm sm-text-center">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-8">
                <div className="widget no-border m-0">
                  <ul className="list-inline pull-right flip sm-pull-none sm-text-center mt-5">
                    <li className="m-0 pl-10 pr-10">
                      {" "}
                      <i className="fa fa-phone text-white"></i>{" "}
                      <a className="text-white" href="#">
                       91733-3390
                      </a>{" "}
                    </li>
                    <li className="text-white m-0 pl-10 pr-10">
                      {" "}
                      <i className="fa fa-clock-o text-white"></i> Mon-Sun 8:00
                      to 8:00{" "}
                    </li>
                    <li className="m-0 pl-10 pr-10">
                      {" "}
                      <i className="fa fa-envelope-o text-white"></i>{" "}
                      <a className="text-white" href="#">
                        <span
                          className="__cf_email__"
                          data-cfemail="71121e1f0510120531081e0403151e1c10181f5f121e1c"
                        >
                            info@jlkmparty.org
                        </span>
                      </a>{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2">
                <div className="widget no-border m-0">
                  <ul className="list-inline pull-right flip sm-pull-none sm-text-center mt-5">
                    <li className="mt-sm-10 mb-sm-10">
                       
                      <a
                        className="btn btn-default btn-flat btn-xs bg-light p-5 font-11 pl-10 pr-10"
                        href="/donationpage"
                      >
                        Donate Now
                      </a>
                    </li>
                    <li className="mt-sm-10 mb-sm-10">
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
        <div ref={headerRef}
        
         className="header-nav "   >
          <div
            className="header-nav-wrapper navbar-scrolltofixed  scroll-to-fixed-fixed "
            style={{backgroundColor:'#003C72'}}
          >

            <div className="container" >
              <nav id="menuzord-right" className="menuzord default no-bg" style={{backgroundColor:'#14468C'}}>
                <Link className="menuzord-brand pull-left flip" to="/">
                <div
                 style={{display:'flex ', gap:'10px'}}>
                <img src="/images/kbm-slider/logo.png.png" alt=""
                style={{height:"60px"}}
                />
             <p className="text-white">खतियानी बुद्धिजीवी मंच</p>
                </div>
                 
                </Link>
                <ul className="menuzord-menu onepage-nav">
                  <li className="text-white">
                    <Link className="text-white" to="/home">Home</Link>
                  </li>
                  <li className="text-white">
                    <Link className="text-white" to="/about">About</Link>
                  </li>
                  {/* <li>
                    <Link to="/causes">Causes</Link>
                  </li> */}
                  <li className="text-white">
                    <Link className="text-white" to="/team">Volunteer</Link>
                  </li>
                  <li className="text-white">
                    <Link className="text-white" to="/gallery">Gallery</Link>
                  </li>
                  {/* <li>
                    <Link to="/blog">Blog</Link>
                  </li> */}
                  <li className="text-white">
                    <Link className="text-white" to="/contact">Contact</Link>
                  </li>
                  {/* <li>
                    <Link to="/contact">Contact</Link>
                  </li> */}
                  <li className="text-white">
                    <Link className="text-white" to="/donationpage">Donate Us</Link>
                  </li>
                  <li >
                    <Link className="text-white" to="/memberjoin">Join Us</Link>
                  </li>
                </ul>


              </nav>
              {/* <div style={{ position: 'fixed', top: 10, right: 10, zIndex: 999 }}>
                <GoogleTranslate />
              </div> */}

            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header; 