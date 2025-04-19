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

<footer id="footer" className="footer text-white" data-bg-img="images/footer-bg.png" data-bg-color="#25272e" style={{ backgroundColor: '#003C72' }}>
    <div className="container pt-70 pb-40 ">
        <div className="row border-bottom-black">
            <div className="col-sm-6 col-md-3">
                <div className="widget dark">
                <div className='mb-10'
                 style={{display:'flex ',alignItems:'center', gap:'10px'}}>
                <img src="/images/kbm-slider/logo.png.png" alt=""/>
             <p  style={{fontSize:'1.5vw'}}>खतियानी बुद्धिजीवी मंच</p>
                </div>
                    <p>Jamtara Masjid Gali,Jamtara panchayat, Jamtara, Giridih, Jharkhand- 825106.</p>
                    <ul className="list-inline mt-5">
                        <li className="m-0 pl-10 pr-10"> <i className="fa fa-phone text-black mr-5"></i> <a className="text-white" href="#">917333390</a> </li>  <br>
                        </br>
                        <li className="m-0 pl-10 pr-10"> <i className="fa fa-envelope-o text-black mr-5"></i> <a className="text-white" href=""><span className="__cf_email__" data-cfemail="63000c0d17020017231a0c1611070c0e020a0d4d000c0e">[info@jlkmparty.org]</span></a> </li>
                        <li className="m-0 pl-10 pr-10"> <i className="fa fa-globe text-black mr-5"></i> <a className="text-white" href="#">www.kbm.org.in</a> </li>
                    </ul>
                </div>
            </div>
            <div className="col-sm-6 col-md-3 ml-200">
                <div className="widget dark" style={{color:'white'}}>
                    <h5 className="widget-title border-bottom border-white ">Useful Links</h5>
                    <ul className="list angle-double-right  border-bottom border-white" style={{color:'black'}}>
                        <li><a className='text-white  border-bottom border-white' href="/about">About Us</a></li>
                        <li><a className='text-white  border-bottom border-white' href="/teram">Volunteer</a></li>
                        <li><a className='text-white  border-bottom border-white' href="gallery">Gallery</a></li>
                        <li><a className='text-white  border-bottom border-white' href="/donationpage">Donate Us</a></li>
                        <li><a className='text-white  border-bottom border-white' href="/memberjoin">Join Us</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-sm-6 col-md-3">
                <div className="widget dark">
                    <h5 className="widget-title  border-bottom border-white">Opening Hours</h5>
                    <div className="opening-hours">
                        <ul className=" border-bottom border-white">
                            <li className="clearfix">
                                <span className=' border-bottom border-white'> Mon - Tues :  </span>
                                <div className="value pull-right  border-bottom border-white"> 6.00 am - 10.00 pm </div>
                            </li>
                            <li className="clearfix">
                                <span  className=' border-bottom border-white' > Wednes - Thurs :</span>
                                <div className="value pull-right  border-bottom border-white"> 8.00 am - 6.00 pm </div>
                            </li>
                            <li className="clearfix">
                                <span  className=' border-bottom border-white'> Fri : </span>
                                <div className="value pull-right  border-bottom border-white"> 3.00 pm - 8.00 pm </div>
                            </li>
                            <li className="clearfix">
                                <span  className=' border-bottom border-white'> Sun : </span>
                                <div className="value pull-right  border-bottom border-white"> Closed </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="row mt-10">
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
        </div>
    </div>
    <div className="footer-bottom bg-black-333">
        <div className="container pt-15 pb-10">
            <div className="row">
                <div className="col-md-6 p-8">
                    <p className="font-15 text-black-777 m-0">Copyright &copy;2025 KBM. All Rights Reserved</p>
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