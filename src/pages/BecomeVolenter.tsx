import React, { useState } from 'react';

const BecomeVolenter: React.FC = () => {
  const [formData, setFormData] = useState({
    form_name: '',
    form_email: '',
    form_sex: 'Male',
    form_branch: 'UK',
    form_message: '',
    form_attachment: null as File | null,
  });
  const [formResult, setFormResult] = useState<{ status: string; message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prevData) => ({
        ...prevData,
        form_attachment: e.target.files ? e.target.files[0] : null,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataToSend = new FormData();
    formDataToSend.append('form_name', formData.form_name);
    formDataToSend.append('form_email', formData.form_email);
    formDataToSend.append('form_sex', formData.form_sex);
    formDataToSend.append('form_branch', formData.form_branch);
    formDataToSend.append('form_message', formData.form_message);
    if (formData.form_attachment) {
      formDataToSend.append('form_attachment', formData.form_attachment);
    }

    try {
      const response = await fetch('includes/become-volunteer.php', {
        method: 'POST',
        body: formDataToSend,
      });
      const result = await response.json();

      if (result.status === 'true') {
        setFormResult({ status: 'success', message: result.message });
        setFormData({
          form_name: '',
          form_email: '',
          form_sex: 'Male',
          form_branch: 'UK',
          form_message: '',
          form_attachment: null,
        });
      } else {
        setFormResult({ status: 'error', message: result.message });
      }
    } catch (error) {
      setFormResult({ status: 'error', message: 'An error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <section>
        <div className="container">
          <div className="section-content">
            <div className="row">
              <div className="col-md-6">
                <h3 className="bg-theme-colored p-15 pl-30 mb-0 text-white">Become a Volunteer</h3>
                <form
                  id="volunteer_apply_form"
                  className="bg-light p-30 pb-15"
                  onSubmit={handleSubmit}
                  encType="multipart/form-data"
                >
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="form_name">Name <small>*</small></label>
                        <input
                          id="form_name"
                          name="form_name"
                          type="text"
                          placeholder="Enter Name"
                          required
                          className="form-control"
                          value={formData.form_name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="form_email">Email <small>*</small></label>
                        <input
                          id="form_email"
                          name="form_email"
                          type="email"
                          placeholder="Enter Email"
                          required
                          className="form-control"
                          value={formData.form_email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="form_sex">Sex <small>*</small></label>
                        <select
                          id="form_sex"
                          name="form_sex"
                          className="form-control"
                          value={formData.form_sex}
                          onChange={handleChange}
                        >
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="form_branch">Choose Branch <small>*</small></label>
                        <select
                          id="form_branch"
                          name="form_branch"
                          className="form-control"
                          value={formData.form_branch}
                          onChange={handleChange}
                        >
                          <option value="UK">UK</option>
                          <option value="USA">USA</option>
                          <option value="Australia">Australia</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="form_message">Message <small>*</small></label>
                    <textarea
                      id="form_message"
                      name="form_message"
                      className="form-control"
                      rows={3}
                      placeholder="Your cover letter/message sent to the employer"
                      value={formData.form_message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="form_attachment">C/V Upload</label>
                    <input
                      id="form_attachment"
                      name="form_attachment"
                      type="file"
                      className="form-control"
                      onChange={handleFileChange}
                    />
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-block btn-dark btn-theme-colored btn-sm mt-20 pt-10 pb-10"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Please wait...' : 'Apply Now'}
                    </button>
                  </div>
                  {formResult && (
                    <div
                      className={`alert alert-${formResult.status === 'true' ? 'success' : 'danger'}`}
                      role="alert"
                    >
                      {formResult.message}
                    </div>
                  )}
                </form>
              </div>
              <div className="col-md-6 sm-text-center mt-40">
                <img className="hidden-sm hidden-xs" src="images/photos/v1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BecomeVolenter;