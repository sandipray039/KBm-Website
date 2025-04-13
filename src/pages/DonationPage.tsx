import React, { useEffect, useState } from 'react';

import { getCountryList } from '../Services/ApiService';  


const DonationPage: React.FC = () => {
  const [amount, setAmount] = useState<number | ''>('');
  const [country, setCountry] = useState<string>('India');
  const [pan, setPan] = useState<string>('');
  const [donorName, setDonorName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [Address, setAddress] = useState<string>('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const [data,setData]=useState<{
    id:number;
    countryCode:string;
    countryName:string;
    phoneCode:string;
  }[]>([]);

  const isPanRequired = typeof amount === 'number' && amount >= 20000;


  useEffect(()=>{
    const fetchCountryList=async()=>{
      try{
        const value=await getCountryList();
        if(value?.isSuccess){
          setData(value.data);
        }
      }
      catch(error){
        console.error("failed in fetching the countries..",error);
      }
    };  
    fetchCountryList();
    console.log("no data to show...",data);
  },[]);

  const handlePresetClick = (val: number) => {
    setAmount(val);
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!amount) newErrors.amount = 'This field is required';
    if (!donorName.trim()) newErrors.donorName = 'This field is required';
    if (!email.trim()) newErrors.email = 'This field is required';
    if (!phone.trim()) newErrors.phone = 'This field is required';
    if (isPanRequired && !pan.trim()) newErrors.pan = 'This field is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Form submitted successfully!');
     
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
    <div style={{backgroundColor:'#00A4EF'}}>
        <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: '600px',
        margin: '2rem auto',
        padding: '1.5rem',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0,0,0,0.05)',
        background: '#fff',
      }}
    >
      <h2 style={{ marginBottom: '1.5rem',textAlign:'center' }}>Donate Now</h2>

   
      <div style={{ marginBottom: '1rem' }}>
        <label>Amount (INR)*</label>
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

 
   <div style={{ marginBottom: '1rem' }}>
        <label>Country*</label>
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          style={inputStyle}
        >
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Other">Other</option>
        </select>
      </div>


     
      <div style={{ marginBottom: '1rem' }}>
        <label>Your Name*</label>
        <input
          type="text"
          value={donorName}
          onChange={(e) => setDonorName(e.target.value)}
          placeholder="Enter your name"
          style={inputStyle}
        />
        {errors.donorName && <p style={{ color: 'red' }}>{errors.donorName}</p>}
      </div>

    
      <div style={{ marginBottom: '1rem' }}>
        <label>Phone Number*</label>
        <div style={{ display: 'flex', gap: '6px' }}>
          <span
            style={{
              padding: '8px',
              background: '#eee',
              border: '1px solid #ccc',
              borderRadius: '4px',
              whiteSpace: 'nowrap',
            }}
          >
            {country === 'India' ? '+91' : '+1'}
          </span>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter phone number"
            style={{ ...inputStyle, flex: 1 }}
          />
        </div>
        {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
      </div>

     
      <div style={{ marginBottom: '1rem' }}>
        <label>Email Address*</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          style={inputStyle}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>


   

     
      {isPanRequired && (
        <div style={{ marginBottom: '1rem' }}>
          <label>PAN Number (required for ₹20,000+)</label>
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

     
      <div style={{ marginBottom: '1rem' }}>
        <label>Address</label>
        <textarea
          value={Address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Your Address"
          style={{ ...inputStyle, minHeight: '80px' }}
        />
      </div>

      <button
        type="submit"
        style={{
            width:'100%',
          padding: '10px 20px',
          backgroundColor: '#00A4EF',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          display:'block'
        }}
      >
        Donate
      </button>
    </form>
    </div>
  );
};

export default DonationPage;
