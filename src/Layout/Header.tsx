// import React from 'react'
import { Link } from "react-router-dom";
import GoogleTranslate from "../pages/GoogleTranslate";

const Header = () => {
  return (
    <div>
      <header className="header">
        {/* <div className="header-top bg-theme-colored sm-text-center">
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
                      {/* <!-- Modal: Appointment Starts --> 
                      <a
                        className="btn btn-default btn-flat btn-xs bg-light p-5 font-11 pl-10 pr-10 ajaxload-popup"
                        href="ajax-load/donation-form.html"
                      >
                        Donate Now
                      </a>
                    </li>
                    <li className="mt-sm-10 mb-sm-10">
                      <a
                        className="btn btn-default btn-flat btn-xs bg-light p-5 font-11 pl-10 pr-10 ajaxload-popup"
                        href="ajax-load/volunteer-apply-form.html"
                      >
                        Join Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="header-nav"  >
          <div
            className="header-nav-wrapper navbar-scrolltofixed bg-silver-light scroll-to-fixed-fixed scroll-to-fixed-fixed"
            style={{
              zIndex: 1000,
              position: "fixed",
              top: 0,
              marginLeft: 0,
              width: "1513px",
              left: 0,

            }}
          >

            <div className="container" >
              <nav id="menuzord-right" className="menuzord default no-bg">
                <Link className="menuzord-brand pull-left flip" to="/">
                  <img src="images/logo-wide.png" alt="" />
                </Link>
                <ul className="menuzord-menu onepage-nav">
                  <li className="active">
                    <Link to="/home">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  {/* <li>
                    <Link to="/causes">Causes</Link>
                  </li> */}
                  <li>
                    <Link to="/team">Volunteer</Link>
                  </li>
                  <li>
                    <Link to="/gallery">Gallery</Link>
                  </li>
                  {/* <li>
                    <Link to="/blog">Blog</Link>
                  </li> */}
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  {/* <li>
                    <Link to="/contact">Contact</Link>
                  </li> */}
                  <li>
                    <Link to="/donationpage">Donate Us</Link>
                  </li>
                  <li>
                    <Link to="/memberjoin">Join Us</Link>
                  </li>
                </ul>


              </nav>
              <div style={{ position: 'fixed', top: 10, right: 10, zIndex: 999 }}>
                <GoogleTranslate />
              </div>

            </div>
          </div>
        </div>
      </header>
      \
    </div>
  );
};

export default Header;
