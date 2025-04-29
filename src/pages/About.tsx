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
                  <div className="img-hover-border mt-sm-40">
                    <img
                      className="img-fullwidth"
                      src="images/team/team4.jpg"
                      alt="KBM image 1"
                    />
                  </div>
                  <div className="img-hover-border mt-sm-40">
                    <img
                      className="img-fullwidth"
                      src="images/team/team5.jpg"
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
                  Welcome to <span className="text-theme-colored">KBM</span>{" "}
                  Please Raise your Helping Hand
                </h2>
                <p className="ml-5 font-18 text-black" >
                  The Khatiyani Budhijeevi Manch (Intellectual Forum) was
                  started in 2010 from a small village, Nichitpur (Galagi),
                  which is located in the Dumri block of Giridih district in
                  Jharkhand. The environment of this village was very poor. The
                  people were far from education, the health conditions were
                  very bad, and there were no means of employment. Social evils
                  like dowry system, black magic, witchcraft, and frequent
                  fights were common. The elderly, young people, and even the
                  elderly did not respect each other. Everyone was addicted to
                  drugs, and forests were being exploited, with small trees
                  being cut down and even fires being set in the forests. Seeing
                  all these problems, the intellectuals of the village came
                  together to form a group. They raised the slogan for complete
                  social change, focusing on education, health, environment,
                  employment, sports, de-addiction, and the eradication of all
                  social evils. The collective vow was taken to transform this
                  village into an ideal village.
                </p>
             
                <Link
                  to="/about/details"
                  className="btn btn-flat btn-colored btn-theme-colored mt-15 mr-15 p-15 font-16" style={{borderRadius:'10px'}}
                >
                  Read More
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
