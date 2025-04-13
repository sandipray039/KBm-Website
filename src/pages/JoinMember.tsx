import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  age: string;
  address: string;
  district: string;
  block: string;
  assembly: string;
  jobLocation: string;
  phone: string;
  whatsapp: string;
}

const JoinMember: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    age: '',
    address: '',
    district: '',
    block: '',
    assembly: '',
    jobLocation: '',
    phone: '',
    whatsapp: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: Partial<FormData> = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) {
        newErrors[key as keyof FormData] = 'This field is required';
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log('Submitted Data:', formData);
      alert('Form submitted successfully!');
    }
  };

  const styles = {
    wrapper: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px',
      maxWidth: '1200px',
      margin: '40px auto',
      padding: '20px',
      alignItems: 'flex-start' as const,
    },
    formContainer: {
      backgroundColor: '#fff',
      padding: '30px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    },
    heading: {
      textAlign: 'center' as const,
      color: '#00A4EF',
      marginBottom: '25px',
    },
    form: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '10px 20px',
    },
    fullWidth: {
      gridColumn: '1 / -1',
    },
    fieldWrapper: {
      display: 'flex',
      flexDirection: 'column' as const,
    },
    input: {
      padding: '12px',
      border: '1px solid #ccc',
      borderRadius: '6px',
      fontSize: '16px',
    },
    errorText: {
      color: 'red',
      fontSize: '13px',
      marginTop: '4px',
    },
    button: {
      backgroundColor: '#00A4EF',
      color: '#fff',
      padding: '14px',
      border: 'none',
      fontSize: '16px',
      borderRadius: '6px',
      cursor: 'pointer',
      width: '100%',
    },
    image: {
      width: '100%',
      height: 'auto',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Become a Member</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
         
          <div style={styles.fieldWrapper}>
            <input type="text" name="name" placeholder="Name*" value={formData.name} onChange={handleChange} style={styles.input} />
            {errors.name && <span style={styles.errorText}>{errors.name}</span>}
          </div>

          <div style={styles.fieldWrapper}>
            <input type="number" name="age" placeholder="Age*" value={formData.age} onChange={handleChange} style={styles.input} />
            {errors.age && <span style={styles.errorText}>{errors.age}</span>}
          </div>

        
          <div style={{ ...styles.fieldWrapper, ...styles.fullWidth }}>
            <input type="text" name="address" placeholder="Permanent Address*" value={formData.address} onChange={handleChange} style={styles.input} />
            {errors.address && <span style={styles.errorText}>{errors.address}</span>}
          </div>

          <div style={styles.fieldWrapper}>
            <select name="district" value={formData.district} onChange={handleChange} style={styles.input}>
              <option value="">Select District*</option>
              <option value="District A">District A</option>
              <option value="District B">District B</option>
              <option value="District C">District C</option>
            </select>
            {errors.district && <span style={styles.errorText}>{errors.district}</span>}
          </div>

          <div style={styles.fieldWrapper}>
            <select name="block" value={formData.block} onChange={handleChange} style={styles.input}>
              <option value="">Select Block*</option>
              <option value="Block X">Block X</option>
              <option value="Block Y">Block Y</option>
              <option value="Block Z">Block Z</option>
            </select>
            {errors.block && <span style={styles.errorText}>{errors.block}</span>}
          </div>

          <div style={styles.fieldWrapper}>
            <select name="assembly" value={formData.assembly} onChange={handleChange} style={styles.input}>
              <option value="">Select Assembly*</option>
              <option value="Assembly 1">Assembly 1</option>
              <option value="Assembly 2">Assembly 2</option>
              <option value="Assembly 3">Assembly 3</option>
            </select>
            {errors.assembly && <span style={styles.errorText}>{errors.assembly}</span>}
          </div>

          <div style={styles.fieldWrapper}>
            <input type="text" name="jobLocation" placeholder="Job with Location" value={formData.jobLocation} onChange={handleChange} style={styles.input} />
            {errors.jobLocation && <span style={styles.errorText}>{errors.jobLocation}</span>}
          </div>

          <div style={styles.fieldWrapper}>
            <input type="tel" name="phone" placeholder="Phone/Whatsapp number*" value={formData.phone} onChange={handleChange} style={styles.input} />
            {errors.phone && <span style={styles.errorText}>{errors.phone}</span>}
          </div>

          {/* <div style={styles.fieldWrapper}>
            <input type="tel" name="whatsapp" placeholder="WhatsApp Number" value={formData.whatsapp} onChange={handleChange} style={styles.input} />
            {errors.whatsapp && <span style={styles.errorText}>{errors.whatsapp}</span>}
          </div> */}

         

          <div style={styles.fullWidth}>
            <button type="submit" style={styles.button}>Apply Now</button>
          </div>
        </form>
      </div>

      <div>
        <img src="/images/photos/v1.png" alt="Volunteer" style={{ marginLeft: 70 }} />
      </div>
    </div>
  );
};

export default JoinMember;
