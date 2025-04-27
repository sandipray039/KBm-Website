import React, { useState, useEffect } from 'react';
import { ContactFormData } from '../Services/ApiService';
import Map from './Map';

interface FormData {
  name: string;
  email: string;
  subject: string;
  phoneNo: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    phoneNo: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});
  const [statusMessage, setStatusMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '', 
    }));
  };

  const validateForm = (): boolean => {
    const errors: Partial<FormData> = {};
    if (!formData.name.trim()) errors.name = 'Name is required.';
    if (!formData.email.trim()) {
      errors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email format.';
    }
    if (!formData.subject.trim()) errors.subject = 'Subject is required.';
    if (!formData.phoneNo.trim()) {
      errors.phoneNo = 'Phone number is required.';
    } else if (!/^\d{10}$/.test(formData.phoneNo)) {
      errors.phoneNo = 'Phone number must contain exactly 10 digits.';
    }
    if (!formData.message.trim()) errors.message = 'Message is required.';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const payload = { ...formData };
      const response = await ContactFormData(payload);

      if (response.isSuccess) {
        setStatusMessage('Message sent successfully! We will reach out to you soon.');
        setFormData({
          name: '',
          email: '',
          subject: '',
          phoneNo: '',
          message: '',
        });
      } else {
        setStatusMessage('Form submission failed. Please try again.');
      }
    } catch (err) {
      setStatusMessage('Something went wrong during submission.');
      console.error('Submission error:', err);
    }
  };

  const handleCloseMessage = () => {
    setStatusMessage('');
  };

  useEffect(() => {
    if (statusMessage && statusMessage.includes('success')) {
      const timer = setTimeout(() => {
        setStatusMessage('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [statusMessage]);

  return (
    <div>
      <Map />
      <div className="container my-5">
        <h2 className="text-center fw-bold mt-10 mb-4 pb-5 pt">Contact Us</h2>

        {statusMessage && (
          <div
            className={`alert ${statusMessage.includes('success') ? 'alert-success' : 'alert-danger'} position-relative fadeInAlert`}
            role="alert"
          >
            {statusMessage}
            <button
              type="button"
              className="btn-close position-absolute top-0 end-0 m-2"
              aria-label="Close"
              onClick={handleCloseMessage}
              style={{ position: 'absolute', top: '10px', right: '10px' }}
            >
              ×
            </button>
          </div>
        )}

        <div className="row"style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div className='col-md-8'>
          <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-md-4 mb-3 mb-md-0">
              <label htmlFor="name" className="form-label">
                Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control border border-1 rounded-0 mb-15"
                id="name"
                placeholder="Enter Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {formErrors.name && <small className="text-danger">{formErrors.name}</small>}
            </div>
            <div className="col-md-4">
              <label htmlFor="email" className="form-label">
                Email <span className="text-danger">*</span>
              </label>
              <input
                type="email"
                className="form-control border border-1 rounded-0 mb-15"
                id="email"
                placeholder="Enter Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {formErrors.email && <small className="text-danger">{formErrors.email}</small>}
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4 mb-3 mb-md-0">
              <label htmlFor="subject" className="form-label">
                Subject <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control border border-1 rounded-0 mb-15"
                id="subject"
                placeholder="Enter Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
              {formErrors.subject && <small className="text-danger">{formErrors.subject}</small>}
            </div>
            <div className="col-md-4">
              <label htmlFor="phoneNo" className="form-label">
                Phone <span className="text-danger">*</span>
              </label>
              <input
                type="number"
                className="form-control border border-1 rounded-0 mb-15"
                id="phoneNo"
                placeholder="Enter Phone"
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleChange}
              />
              {formErrors.phoneNo && <small className="text-danger">{formErrors.phoneNo}</small>}
            </div>
          </div>

          <div className="mb-3 col-md-4">
            <label htmlFor="message" className="form-label">
              Message <span className="text-danger">*</span>
            </label>
            <textarea
              className="form-control border border-1 rounded-5 mb-15"
              id="message"
              rows={5}
              placeholder="Enter Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {formErrors.message && <small className="text-danger">{formErrors.message}</small>}
          </div>

          <div className="d-flex col-md-4 justify-content-center">
            <button type="submit" className="btn btn-primary px-4 me-2" style={{ borderRadius: 5 }}>
              SEND YOUR MESSAGE
            </button>
          </div>
        </form>
            
            </div>
            <div className='col-md-4'>
            <div className="widget dark">
              <div className="mb-10" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img alt="" src="/images/kbm-slider/logo.png.png" />
                <p style={{ fontSize: '1.5vw' }}>खतियानी बुद्धिजीवी मंच</p>
              </div>
              <p>Jamtara Masjid Gali,Jamtara panchayat, Jamtara, Giridih, Jharkhand- 825106.</p>
              <ul className="list-inline mt-5">
                <li className="m-0 pl-10 pr-10">
                  <i className="fa fa-phone mr-5"></i>
                  <a className="text-white" href="#">6207723381</a>
                </li>
                <br />
                <li className="m-0 pl-10 pr-10">
                  <i className="fa fa-envelope-o mr-5"></i>
                  <a className="text-white" href="">
                    <span className="__cf_email__" data-cfemail="63000c0d17020017231a0c1611070c0e020a0d4d000c0e">kbmofficial2024@gmail.com</span>
                  </a>
                </li>
                <li className="m-0 pl-10 pr-10">
                  <i className="fa fa-globe mr-5"></i>
                  <a className="text-white" rel="noopener noreferrer" href="/home" target="_blank" data-discover="true">www.kbm.org.in</a>
                </li>
              </ul>
            </div>
              
            </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;