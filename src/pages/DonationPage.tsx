import React, { useEffect, useState } from 'react';
import { getCountryList, submitDonationForm } from '../Services/ApiService';

const DonationPage: React.FC = () => {
  const [amount, setAmount] = useState<number | ''>('');
  const [country, setCountry] = useState<string>('India');
  const [pan, setPan] = useState<string>('');
  const [donorName, setDonorName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [data, setData] = useState<{
    id: number;
    countryCode: string;
    countryName: string;
    phoneCode: string;
  }[]>([]);

  const [selectedPhoneCode, setSelectedPhoneCode] = useState<string>('+91'); //for India

  const isPanRequired = typeof amount === 'number' && amount >= 20000;

  useEffect(() => {
    const fetchCountryList = async () => {
      try {
        const value = await getCountryList();
        if (value?.isSuccess) {
          setData(value.data);
        }
      } catch (error) {
        console.error('Failed in fetching the countries...', error);
      }
    };
    fetchCountryList();
  }, []);

  const handlePresetClick = (val: number) => {
    setAmount(val);
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!amount) newErrors.amount = 'This field is required';
    if (!donorName.trim()) newErrors.donorName = 'This field is required';
    if (!email.trim()) newErrors.email = 'This field is required';
    if (!phone.trim()) newErrors.phone = 'This field is required';
    if (!address.trim()) newErrors.address = 'This field is required';
    if (isPanRequired && !pan.trim()) newErrors.pan = 'This field is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    const formData = {
      amount: Number(amount),
      countryName: country,
      name: donorName,
      mobileNo: selectedPhoneCode + phone,
      email,
      address,
      panNo: isPanRequired ? pan : null,
    };

    try {
      const response = await submitDonationForm(formData);
      if (response?.isSuccess) {
        alert('Donation submitted successfully!');
        setAmount('');
        setCountry('India');
        setDonorName('');
        setPhone('');
        setEmail('');
        setAddress('');
        setPan('');
        setErrors({});
      } else {
        alert('Submission failed. Please try again.');
      }
    } catch (err: any) {
      alert(err?.message || 'Something went wrong!');
    }
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountry = e.target.value;
    setCountry(selectedCountry);

    const countryData = data.find((item) => item.countryName === selectedCountry);
    if (countryData) {
      setSelectedPhoneCode(countryData.phoneCode);
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginTop: '4px',
  };

  return (
    <div
      style={{
        backgroundImage: 'url("/images/bg/bg24.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '80vh',
        position:'relative',
        padding:'.85vw 0vw'
      }}
    >
      
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: '750px',
          margin: '0rem auto 2rem 44%',
          padding: '0rem 2rem 2.5rem',
          border: '1px solid #ddd',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0,0,0,0.05)',
          background: '#fff',
        }}
      >
        <h2 style={{ marginBottom: 'rem', textAlign: 'center',backgroundColor:'#28A745',color:'white' }}>Donate Now</h2>

        {/* Amount Input */}
        <div style={{ marginBottom: '1rem' }}>
          <label>Amount (INR) <span style={{ color: 'red' }}>*</span></label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            placeholder="Enter amount"
            style={inputStyle}
          />
          {errors.amount && <p style={{ color: 'red' }}>{errors.amount}</p>}

          <div style={{ marginTop: '0.5rem' }}>
            {[500, 1000, 1500, 2000].map((val) => (
              <button
                key={val}
                type="button"
                onClick={() => handlePresetClick(val)}
                style={{
                  margin: '4px',
                  padding: '8px 12px',
                  background: '#f0f0f0',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                ₹{val}
              </button>
            ))}
          </div>
        </div>


          <div className='row'>

               {/* Country Select */}
        <div className='col-md-6' style={{ marginBottom: '1rem', position: 'relative' }}>
          <label>
            Country <span style={{ color: 'red' }}>*</span>
          </label>
          <select
            value={country}
            onChange={handleCountryChange}
            style={inputStyle}
          >
            {data.map((country) => (
              <option key={country.id} value={country.countryName}>
                {country.countryName}
              </option>
            ))}
          </select>
        </div>

        {/* Donor Name */}
        <div className='col-md-6' style={{ marginBottom: '1rem' }}>
          <label>
            Your Name <span style={{ color: 'red' }}>*</span>
          </label>
          <input
            type="text"
            value={donorName}
            onChange={(e) => setDonorName(e.target.value)}
            placeholder="Enter your name"
            style={inputStyle}
          />
          {errors.donorName && <p style={{ color: 'red' }}>{errors.donorName}</p>}
        </div>
          </div>
        <div className='row'>
            
            
        {/* Phone Number */}
        <div className='col-md-6' style={{ marginBottom: '1rem', position: 'relative' }}>
          <label>
            Phone Number <span style={{ color: 'red' }}>*</span>
          </label>
          <div style={{ position: 'relative' }}>
            <span
              style={{
                position: 'absolute',
                top: '50%',
                left: '10px',
                transform: 'translateY(-50%)',
                backgroundColor: '#f2f2f2',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '14px',
                pointerEvents: 'none',
              }}
            >
              {selectedPhoneCode}
            </span>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              style={{
                width: '100%',
                padding: '8px 8px 8px 70px', 
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '14px',
              }}
            />
          </div>
          {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
        </div>

        {/* Email */}
        <div className='col-md-6' style={{ marginBottom: '1rem' }}>
          <label>
            Email <span style={{ color: 'red' }}>*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            style={inputStyle}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>
        </div>

        {/* Address */}
        <div style={{ marginBottom: '1rem' }}>
          <label>Address<span style={{ color: 'red' }}>*</span></label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
            style={inputStyle}
          />
           {errors.amount && <p style={{ color: 'red' }}>{errors.amount}</p>}
        </div>

        {/* PAN */}
        {isPanRequired && (
          <div style={{ marginBottom: '1rem' }}>
            <label>
              PAN Number <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="text"
              value={pan}
              onChange={(e) => setPan(e.target.value)}
              placeholder="Enter PAN number"
              style={inputStyle}
            />
            {errors.pan && <p style={{ color: 'red' }}>{errors.pan}</p>}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            background: '#28a745',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            width: '100%',
            textAlign: 'center',
          }}
        >
          Donate
        </button>
      </form>
    </div>
  );
};

export default DonationPage;
