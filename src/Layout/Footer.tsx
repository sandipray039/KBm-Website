import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [responseMessage, setResponseMessage] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  interface ResponseMessage {
    type: 'success' | 'error';
    message: string;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    // const url = ''//thememascot.us9.list-manage.com/subscribe/post?u=a01f440178e35febc8cf4e51f&amp;id=49d6d30e1e';
    const url = '';
    const formData = new URLSearchParams();
    formData.append('EMAIL', email);

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      const text = await response.text();
      if (response.ok && text.includes('success')) {
        setResponseMessage({ type: 'success', message: 'Thank you for subscribing!' });
        setEmail('');
      } else {
        setResponseMessage({ type: 'error', message: 'An error occurred. Please try again.' });
      }
    } catch (error) {
      setResponseMessage({ type: 'error', message: 'An error occurred. Please try again.' });
    }
  };

  return (
    <footer id="footer" className="footer" data-bg-img="images/footer-bg.png" data-bg-color="#25272e">
      <div className="container pt-70 pb-40">
        <div className="row mt-10">
          <div className="col-md-5">
            <div className="widget dark">
              <h5 className="widget-title mb-10">Subscribe Us</h5>
              <form id="mailchimp-subscription-form-footer" className="newsletter-form" onSubmit={handleSubmit}>
                <div className="input-group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    className="form-control input-lg font-16"
                    data-height="45px"
                    id="mce-EMAIL-footer"
                    style={{ height: '45px' }}
                    required
                  />
                  <span className="input-group-btn">
                    <button
                      data-height="45px"
                      className="btn btn-colored btn-theme-colored btn-xs m-0 font-14"
                      type="submit"
                    >
                      Subscribe
                    </button>
                  </span>
                </div>
              </form>
              {responseMessage && (
                <div
                  className={`alert alert-${responseMessage.type}`}
                  role="alert"
                  style={{ marginTop: '10px' }}
                >
                  {responseMessage.message}
                </div>
              )}
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1">
            <div className="widget dark">
              <h5 className="widget-title mb-10">Call Us Now</h5>
              <div className="text-gray">
                +61 3 1234 5678 <br />
                +12 3 1234 5678
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="widget dark">
              <h5 className="widget-title mb-10">Connect With Us</h5>
              <ul className="styled-icons icon-dark icon-theme-colored icon-circled icon-sm">
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
                    <i className="fa fa-skype"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-pinterest"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;