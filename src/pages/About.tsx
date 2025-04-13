import React from "react";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="section-content">
          <div className="row">
            <div className="col-md-6 mt-20">
              <div className="row">
                <div className="col-md-6 col-sm-6 pl-0">
                  <div className="img-hover-border mt-sm-40">
                    <img
                      className="img-fullwidth"
                      src="images/about/kbm.jpg"
                      alt="KBM image 1"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 pl-0 pr-0">
                  <div className="img-hover-border mt-sm-30">
                    <img
                      className="img-fullwidth"
                      src="images/about/kbm2.jpg"
                      alt="KBM image 2"
                    />
                  </div>
                  <div className="img-hover-border mt-15 mt-sm-30">
                    <img
                      className="img-fullwidth"
                      src="images/about/kbm3.jpg"
                      alt="KBM image 3"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-details">
                <h2 className="font-36 mt-0">
                  Welcome to{" "}
                  <span className="text-theme-colored">KBM</span> Please Raise
                  your Helping Hand
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquam, odioserunt provident maiores consectetur adipisicing
                  elit. Aliquam odio dese runtesseu provident maiores libero
                  porro dolorem est. Velit necessitatibus fugiat error incidunt
                  excepturi doloribus officia aspernatur quod libero Velit
                  necessitatibus fugiat error incidunt excepturi doloribus
                  officia
                </p>
                <div className="singnature mt-20">
                  <img src="images/signature.png" alt="Signature" />
                </div>
                <Link
                  to="/about/aboutpage"
                  className="btn btn-flat btn-colored btn-theme-colored mt-15 mr-15"
                >
                  Read More
                </Link>
                <Link
                  to="/quote"
                  className="btn btn-flat btn-colored btn-default btn-theme-colored mt-15"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
