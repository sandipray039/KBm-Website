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
  const [statusMessage, setStatusMessage] = useState<string>(''); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        phoneNo: formData.phoneNo,
        message: formData.message,
      };

      const response = await ContactFormData(payload);
      console.log('API response=>', response);

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

  // Automatically fade out the success message after 3 seconds
  useEffect(() => {
    if (statusMessage && statusMessage.includes('success')) {
      const timer = setTimeout(() => {
        setStatusMessage('');
      }, 3000); // 3 seconds timeout to clear message
      return () => clearTimeout(timer); // Cleanup the timeout on component unmount
    }
  }, [statusMessage]);

  return (
<div>
    <Map/>
    <div className="container my-5" style={{ marginTop: '80px' }}>
      <h2 className="text-center fw-bold mt-10 mb-4">CONTACT US</h2>
      
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

      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-6 mb-3 mb-md-0">
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
              required
            />
          </div>
          <div className="col-md-6">
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
              required
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6 mb-3 mb-md-0">
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
              required
            />
          </div>
          <div className="col-md-6">
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
              required
            />
          </div>
        </div>

        <div className="mb-3">
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
            required
          ></textarea>
        </div>

        <div className="d-flex">
          <button type="submit" className="btn btn-primary px-4 me-2" style={{ borderRadius: 5 }}>
            SEND YOUR MESSAGE
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Contact;
