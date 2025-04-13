import React, { useState } from 'react'

const Footer = () => {

  const [email, setEmail] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [responseType, setResponseType] = useState<'success' | 'error' | ''>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate an API call to Mailchimp
    const url =
      '//thememascot.us9.list-manage.com/subscribe/post?u=a01f440178e35febc8cf4e51f&id=49d6d30e1e';

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: new URLSearchParams({ EMAIL: email }),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      const result = await response.json();

      if (result.result === 'success') {
        setResponseType('success');
        setResponseMessage(result.msg);
      } else {
        setResponseType('error');
        setResponseMessage(result.msg);
      }
    } catch (error) {
      setResponseType('error');
      setResponseMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div>

<footer id="footer" className="footer" data-bg-img="images/footer-bg.png" data-bg-color="#25272e">
    <div className="container pt-70 pb-40">
        <div className="row border-bottom-black">
            <div className="col-sm-6 col-md-3">
                <div className="widget dark">
                    <img className="mt-10 mb-20" alt="" src="images/logo-wide-white-footer.png"/>
                    <p>Jamtara Masjid Gali,Jamtara panchayat, Jamtara, Giridih, Jharkhand- 825106.</p>
                    <ul className="list-inline mt-5">
                        <li className="m-0 pl-10 pr-10"> <i className="fa fa-phone text-theme-colored mr-5"></i> <a className="text-gray" href="#">917333390</a> </li>  <br>
                        </br>
                        <li className="m-0 pl-10 pr-10"> <i className="fa fa-envelope-o text-theme-colored mr-5"></i> <a className="text-gray" href=""><span className="__cf_email__" data-cfemail="63000c0d17020017231a0c1611070c0e020a0d4d000c0e">[info@jlkmparty.org]</span></a> </li>
                        <li className="m-0 pl-10 pr-10"> <i className="fa fa-globe text-theme-colored mr-5"></i> <a className="text-gray" href="#">www.kbm.org.in</a> </li>
                    </ul>
                </div>
            </div>
            <div className="col-sm-6 col-md-3">
                <div className="widget dark">
                    <h5 className="widget-title line-bottom">Latest News</h5>
                    <div className="latest-posts">
                        <article className="post media-post clearfix pb-0 mb-10">
                            <a href="#" className="post-thumb"><img alt="" src="http://placehold.it/80x55"/></a>
                            <div className="post-right">
                                <h5 className="post-title mt-0 mb-5"><a href="#">Sustainable Construction</a></h5>
                                <p className="post-date mb-0 font-12">Mar 08, 2015</p>
                            </div>
                        </article>
                        <article className="post media-post clearfix pb-0 mb-10">
                            <a href="#" className="post-thumb"><img alt="" src="http://placehold.it/80x55"/></a>
                            <div className="post-right">
                                <h5 className="post-title mt-0 mb-5"><a href="#">Industrial Coatings</a></h5>
                                <p className="post-date mb-0 font-12">Mar 08, 2015</p>
                            </div>
                        </article>
                        <article className="post media-post clearfix pb-0 mb-10">
                            <a href="#" className="post-thumb"><img alt="" src="http://placehold.it/80x55"/></a>
                            <div className="post-right">
                                <h5 className="post-title mt-0 mb-5"><a href="#">Storefront Installations</a></h5>
                                <p className="post-date mb-0 font-12">Mar 08, 2015</p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-md-3">
                <div className="widget dark">
                    <h5 className="widget-title line-bottom">Useful Links</h5>
                    <ul className="list angle-double-right list-border">
                        <li><a href="#">Body Building</a></li>
                        <li><a href="#">Fitness classNamees</a></li>
                        <li><a href="#">Weight lifting</a></li>
                        <li><a href="#">Yoga Courses</a></li>
                        <li><a href="#">Training</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-sm-6 col-md-3">
                <div className="widget dark">
                    <h5 className="widget-title line-bottom">Opening Hours</h5>
                    <div className="opening-hours">
                        <ul className="list-border">
                            <li className="clearfix">
                                <span> Mon - Tues :  </span>
                                <div className="value pull-right"> 6.00 am - 10.00 pm </div>
                            </li>
                            <li className="clearfix">
                                <span> Wednes - Thurs :</span>
                                <div className="value pull-right"> 8.00 am - 6.00 pm </div>
                            </li>
                            <li className="clearfix">
                                <span> Fri : </span>
                                <div className="value pull-right"> 3.00 pm - 8.00 pm </div>
                            </li>
                            <li className="clearfix">
                                <span> Sun : </span>
                                <div className="value pull-right"> Colosed </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="row mt-10">
            <div className="col-md-5">
                <div className="widget dark">
                    <h5 className="widget-title mb-10">Subscribe Us</h5>
                    {/* <!-- Mailchimp Subscription Form Starts Here --> */}
                     <form
                  id="mailchimp-subscription-form-footer"
                  className="newsletter-form"
                  onSubmit={handleSubmit}
                >
                  <div className="input-group">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      name="EMAIL"
                      placeholder="Your Email"
                      className="form-control input-lg font-16"
                      style={{ height: '45px' }}
                      required
                    />
                    <span className="input-group-btn">
                      <button
                        className="btn btn-colored btn-theme-colored btn-xs m-0 font-14"
                        type="submit"
                        style={{ height: '45px' }}
                      >
                        Subscribe
                      </button>
                    </span>
                  </div>
                </form>
                    {/* <!-- Mailchimp Subscription Form Validation--> */}
                    {responseMessage && (
                  <div
                    className={`alert alert-${responseType}`}
                    style={{ marginTop: '10px' }}
                  >
                    <button
                      type="button"
                      className="close"
                      onClick={() => setResponseMessage('')}
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                    {responseMessage}
                  </div>
                )}
                    {/* <!-- Mailchimp Subscription Form Ends Here --> */}
                </div>
            </div>
            <div className="col-md-3 col-md-offset-1">
                <div className="widget dark">
                    <h5 className="widget-title mb-10">Call Us Now</h5>
                    <div className="text-gray">
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
        </div>
    </div>
    <div className="footer-bottom bg-black-333">
        <div className="container pt-15 pb-10">
            <div className="row">
                <div className="col-md-6">
                    <p className="font-11 text-black-777 m-0">Copyright &copy;2025 KBM. All Rights Reserved</p>
                </div>
                <div className="col-md-6 text-right">
                    <div className="widget no-border m-0">
                        <ul className="list-inline sm-text-center mt-5 font-12">
                            <li>
                                <a href="#">FAQ</a>
                            </li>
                            <li>|</li>
                            <li>
                                <a href="#">Help Desk</a>
                            </li>
                            <li>|</li>
                            <li>
                                <a href="#">Support</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>


    </div>
  )
}

export default Footer;