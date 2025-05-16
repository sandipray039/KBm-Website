// import React, { useState } from 'react'

import { Link } from "react-router-dom";

const Footer = () => {
  // const [email, setEmail] = useState('');
  // const [responseMessage, setResponseMessage] = useState('');
  // const [responseType, setResponseType] = useState<'success' | 'error' | ''>('');

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   // Simulate an API call to Mailchimp
  //   const url =
  //     '//thememascot.us9.list-manage.com/subscribe/post?u=a01f440178e35febc8cf4e51f&id=49d6d30e1e';

  //   try {
  //     const response = await fetch(url, {
  //       method: 'POST',
  //       body: new URLSearchParams({ EMAIL: email }),
  //       headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded',
  //       },
  //     });

  //     const result = await response.json();

  //     if (result.result === 'success') {
  //       setResponseType('success');
  //       setResponseMessage(result.msg);
  //     } else {
  //       setResponseType('error');
  //       setResponseMessage(result.msg);
  //     }
  //   } catch (error) {
  //     setResponseType('error');
  //     setResponseMessage('An error occurred. Please try again.');
  //   }
  // };

  return (
    <div>
      <footer
        id="footer"
        className="footer text-white"
        data-bg-img="images/footer-bg.png"
        data-bg-color="#25272e"
        style={{ backgroundColor: "#003C72" }}
      >
        <div className="container pt-70 pb-40 ">
          <div className="row border-bottomm-black">
            <div className="col-sm-6 col-md-3">
              <div className="widget dark">
                <div
                  className="mb-10"
                  style={{
                    display: "flex ",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <img src="/images/kbm-slider/logo.png.png" alt="" />
                  <p style={{ fontSize: "1.5vw" }}>खतियानी बुद्धिजीवी मंच</p>
                </div>
                <p>
                  Jamtara Masjid Gali,Jamtara panchayat, Jamtara, Giridih,
                  Jharkhand- 825106.
                </p>
                <ul className="list-inline mt-5">
                  <li className="m-0 pl-10 pr-10">
                    {" "}
                    <i className="fa fa-phone mr-5"></i>{" "}
                    <a className="text-white" href="#">
                      6207723381
                    </a>{" "}
                  </li>{" "}
                  <br></br>
                  <li className="m-0 pl-10 pr-10">
                    {" "}
                    <i className="fa fa-envelope-o mr-5"></i>{" "}
                    <a className="text-white" href="">
                      <span
                        className="__cf_email__"
                        data-cfemail="63000c0d17020017231a0c1611070c0e020a0d4d000c0e"
                      >
                        kbmofficial2024@gmail.com
                      </span>
                    </a>{" "}
                  </li>
                  <li className="m-0 pl-10 pr-10">
                    {" "}
                    <i className="fa fa-globe mr-5"></i>{" "}
                    <Link
                      className="text-white"
                      to="/home"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.kbm.org.in
                    </Link>{" "}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 ml-200">
              <div className="widget dark" style={{ color: "white" }}>
                <h5 className="widget-title border-bottommm border-white ">
                  Useful Links
                </h5>
                <ul
                  className="list angle-double-right  border-bottomm border-white"
                  style={{ color: "black" }}
                >
                  <li>
                    <Link
                      className="text-white  border-bottomm border-white"
                      to="/about"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-white  border-bottomm border-white"
                      to="/team"
                    >
                      Volunteer
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-white  border-bottomm border-white"
                      to="/gallery"
                    >
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-white  border-bottomm border-white"
                      to="/donationpage"
                    >
                      Donate Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-white  border-bottomm border-white"
                      to="/memberjoin"
                    >
                      Join Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="widget dark">
                <h5 className="widget-title  border-bottommm border-white">
                  Details
                </h5>
                <div className="opening-hours">
                  <ul className=" border-bottomm  border-white">
                    <li className="clearfix d-flex gap-3">
                      <Link
                        className="btn btn-default btn-flat btn-xs bg-light p-5  pl-10 pr-10"
                        to="/donationpage"
                        style={{ fontSize: "15px", fontWeight: "600" }}
                      >
                        Donate
                      </Link>

                      <Link
                        className="btn btn-default btn-flat btn-xs bg-light p-5  pl-10 pr-10"
                        to="memberjoin"
                        style={{ fontSize: "15px", fontWeight: "600" }}
                      >
                        Join Us
                      </Link>
                    </li>

                    <li className="clearfix">
                      <span className=" border-bottomm border-white">
                        {" "}
                        Call Us Now : 6207723381{" "}
                      </span>
                      {/* <div className="value pull-right  border-bottomm border-white"> 917333390 </div> */}
                    </li>
                    <li className="clearfix">
                      <h5 className="widget-title mb-10">Connect With Us</h5>
                      <ul className="styled-icons icon-dark icon-theme-colored icon-circled icon-sm">
                        <li>
                          <a href="https://www.facebook.com/people/%E0%A4%9D%E0%A4%BE%E0%A4%B0%E0%A4%96%E0%A4%82%E0%A4%A1-%E0%A4%96%E0%A4%A4%E0%A4%BF%E0%A4%AF%E0%A4%BE%E0%A4%A8%E0%A5%80-%E0%A4%AC%E0%A5%81%E0%A4%A6%E0%A5%8D%E0%A4%A7%E0%A4%BF%E0%A4%9C%E0%A5%80%E0%A4%B5%E0%A5%80-%E0%A4%AE%E0%A4%82%E0%A4%9A-Jkbm/61556886564542/">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        {/* <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-skype"></i></a></li> */}
                        <li>
                          <a href="https://www.youtube.com/@KBMcharity">
                            <i className="fa fa-youtube"></i>
                          </a>
                        </li>
                        {/* <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-pinterest"></i></a></li> */}
                      </ul>
                    </li>
                    {/* <li className="clearfix">
                                <span  className=' border-bottom border-white'> Sun : </span>
                                <div className="value pull-right  border-bottom border-white"> Closed </div>
                            </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row mt-10">
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
            <div className="col-md-3 col-md-offset-1">
                <div>
                    <h5 className=" mb-10 text-white" >Call Us Now</h5>
                    <div className="text-white">
                     917333390 <br/>
                       
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="widget dark">
                    <h5 className="widget-title mb-10">Connect With Us</h5>
                    <ul className="styled-icons icon-dark icon-theme-colored icon-circled icon-sm">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-skype"></i></a></li>
                        <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                    </ul>
                </div>
            </div>
        </div> */}
        </div>
        <div className="footer-bottomm bg-black-333">
          <div className="container pt-15 pb-8">
            <div className="row " style={{display:"flex",justifyContent:'center',alignItems:'center'}}>
              <div className=" p-10">
                <p className="font-20 text-black-777 m-0">
                  Copyright &copy;2025 TekValley. All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
