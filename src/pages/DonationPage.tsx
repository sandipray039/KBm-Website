import React, { useEffect, useState } from 'react';
import { getCountryList, submitDonationForm } from '../Services/ApiService';

const DonationPage: React.FC = () => {
  const [amount, setAmount] = useState<string>('');
  const [amt, setAmt] = useState<string>('');
  const [country, setCountry] = useState<string>('India');
  const [pan, setPan] = useState<string>('');
  const [donorName, setDonorName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [statusMessage, setStatusMessage] = useState<string>('');
    const [Step,setStep]=useState<number>(1);
    const [upiNo,setUpiNo]=useState<string>('');
    const [isPanRequired, setIsPanRequired] = useState<boolean>(false);
  const [data, setData] = useState<{
    id: number;
    countryCode: string;
    countryName: string;
    phoneCode: string;
  }[]>([]);
 

  const [selectedPhoneCode, setSelectedPhoneCode] = useState<string>('+91'); //for India

  useEffect(() => {
    if (parseInt(amount, 10) >= 20000) {
      setIsPanRequired(true);
    } else {
      setIsPanRequired(false);
      setPan(''); // Optionally clear PAN if amount is less than ₹20,000
    }
  }, [amount]);

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

  const handlePresetClick = (val: string) => {
    setAmount(val);
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!amount) newErrors.amount = 'This field is required';
    else if (Number(amount) < 10) {
      newErrors.amount = 'Minimum donation amount is ₹10';}
    else if(Number(amount)>51000) {
      newErrors.amount=' Donation amount cannot exceed ₹51,000';
    }
    if (!donorName.trim()) newErrors.donorName = 'This field is required';
    if (!email.trim()) newErrors.email = 'This field is required';
    if (!phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = 'Phone number must be exactly 10 digits.';
    }
    
    if (!address.trim()) newErrors.address = 'This field is required';
    if (!country.trim()) newErrors.countryerr = 'This field is required';
   //if (!upiNo.trim()) newErrors.upiNo = 'This field is required';
   const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

   if (isPanRequired) {
     if (!pan.trim()) {
       newErrors.pan = 'This field is required';
     } else if (!panRegex.test(pan.trim())) {
       newErrors.pan = 'Enter a valid PAN number (e.g., ABCDE1234F) and it should be exactly 10 characters';
     }
   }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateFormTwo = () => {
    const newErrors: { [key: string]: string } = {};

   

    if (!amount) newErrors.amount = 'This field is required';
    else if(Number(amount)>51000) {
      newErrors.amount='Maximum donation amount is ₹51,000';
    }
    if (!donorName.trim()) newErrors.donorName = 'This field is required';
   // if (!email.trim()) newErrors.email = 'This field is required';
    if (!phone.trim()) newErrors.phone = 'This field is required';
    if (!address.trim()) newErrors.address = 'This field is required';
    if (!country.trim()) newErrors.countryerr = 'This field is required';
    if (!upiNo.trim()) newErrors.upiNo = 'TransactionId is required';
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

if (isPanRequired) {
  if (!pan.trim()) {
    newErrors.pan = 'This field is required';
  } else if (!panRegex.test(pan.trim())) {
    newErrors.pan = 'Enter a valid PAN number (e.g., ABCDE1234F)';
  }
}

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (e: any) => {
    e.preventDefault();
    const isValid = validateForm();
    if (!isValid) return;
    if (Step === 1) {
      setAmt(amount);
      setStep(2);
    }
  };
  const handlePrevious=()=>{
    if(Step===2){
      setStep(1);
    }
  }

  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateFormTwo()) return;
    const formData = {
      amount: Number(amount),
      countryName: country,
      name: donorName,
      mobileNo: `${selectedPhoneCode}-${phone}`,
      email,
      address,
      panNo: isPanRequired ? pan : null,
      TransactionId:upiNo
    };

    try {
      console.log("formdata-->",formData);
      const response = await submitDonationForm(formData);
      console.log(response);
      if (response?.isSuccess) {
        setStatusMessage('Donation made successfully! We will reach out to you soon.');
        setAmount('');
        setCountry('India');
        setDonorName('');
        setPhone('');
        setEmail('');
        setAddress('');
        setPan('');
        setUpiNo('');
        setErrors({});
      } else { setStatusMessage('Form submission failed. Please try again.');
      }
    } catch (err: any) {
      setStatusMessage('Something went wrong during submission.');
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
  const handleCloseMessage = () => {
    setStatusMessage('');
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginTop: '4px',
  };
    useEffect(() => {
      if (statusMessage && statusMessage.includes('success')) {
        const timer = setTimeout(() => {
          setStatusMessage('');
        }, 3000);
        return () => clearTimeout(timer);
      }
    }, [statusMessage]);

  // const handleAmountChange = (e:any) => {
  //   const value = e.target.value;
  
  //   // Only allow numbers
  //   if (/^\d*$/.test(value)) {
  //     setAmount(value);
  //   }
  // };

  return (
    <div className='container-fluid'
      // style={{
      //   backgroundImage: 'url("/images/bg/d.jpg")',
      //   backgroundSize: 'cover',
      //   backgroundRepeat: 'no-repeat',
      //   backgroundPosition: 'center',
      //   minHeight: '80vh',
      //   padding:'.85vw 0vw'
      // }}
    >
      <div className='row'>

     

<div className="col-12 col-md-7 col-lg-5 mt-60" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <img
            src="/images/bg/d2.jpg"
            alt="Volunteer"
            className="img-fluid"
          />
        </div>


    <div className="col-md-8  col-md-6   "
   //
  >
     {statusMessage && (
          <div
            className={`alert ${statusMessage.includes('success') ? 'alert-success' : 'alert-danger'} position-relative fadeInAlert mt-10`}
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
      {Step===1 && (
           <form
           onSubmit={handleNext}
           style={{
            
             padding: '0rem 2rem 2.5rem',
             border: '1px solid #ddd',
             borderRadius: '8px',
             boxShadow: '0 0 10px rgba(0,0,0,0.05)',
             background: '#fff',
           }}
         >
           <h2 style={{ marginBottom: 'rem', textAlign: 'center',backgroundColor:'rgb(0, 164, 70)',color:'white',borderRadius:'10px' }}>Personal Details</h2>
   
         
           <div style={{ marginBottom: '1rem' }}>
             <label>Amount (INR) <span style={{ color: 'red' }}>*</span></label>
             <input
               type="number"
               value={amount}
               min="0"
               onChange={(e) => setAmount((e.target.value))}
               placeholder="Enter amount"
               style={inputStyle}
             />
             {errors.amount && <p style={{ color: 'red' }}>{errors.amount}</p>}
   
             <div style={{ marginTop: '0.5rem' }}>
               {['500', '1000',' 1500', '2000'].map((val) => (
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
             {errors.countryerr && <p style={{ color: 'red' }}>{errors.countryerr}</p>}
            
           </div>
   
       
           <div className='col-md-6' style={{ marginBottom: '1rem' }}>
             <label>
               Full Name <span style={{ color: 'red' }}>*</span>
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
                 type="number"
                 value={phone}
                 min="0"
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
               Email 
             </label>
             <input
               type="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               placeholder="Enter your email"
               style={inputStyle}
             />
             {/* {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>} */}
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
              {errors.address && <p style={{ color: 'red' }}>{errors.address}</p>}
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
                 onChange={(e) => setPan(e.target.value.toUpperCase())}
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
               background: 'rgb(0, 164, 70)',
               color: '#fff',
               border: 'none',
               borderRadius: '4px',
               cursor: 'pointer',
               width: '100%',
               fontSize:'22px',
               textAlign: 'center',
             }}
           >
             Next 
           </button>
         </form>
      )}
      {Step===2 && (
        <form onSubmit={handleSubmit}
        style={{
            
          padding: '0rem 2rem 2.5rem',
          border: '1px solid #ddd',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0,0,0,0.05)',
          background: '#fff',
        }}
      >
          <h2 style={{ marginBottom: 'rem', textAlign: 'center',backgroundColor:'rgb(0, 164, 70)',color:'white',borderRadius:'10px' }} className='text-center'>Payment Details</h2>
           <div style={{ marginBottom: '1rem',marginTop:'1rem' }}>
           <div className='row'>
           <label>Amount (INR) <span style={{ color: 'red' }}>*</span></label>
             <input
               type="number"
               value={amt}
             
               style={{...inputStyle,cursor:'not-allowed',backgroundColor:'#80808033'}}
               className='col-md-6'
               disabled
             />
            
           </div>
           <span className="text-danger"><span style={{fontSize:'25px'}}>•</span> If you want to change amount, return to previous page.</span>

   
             {/* <div style={{ marginTop: '0.5rem' }}>
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
             </div> */}
           </div>
           <h3>QR Code:</h3>
           <div style={{display:'flex',justifyContent:'center'}}>
           
            <img src="/images/qr/qr.jpg" alt="qr" 
            style={{height:'300px',width:'300px',}}
            />
           </div>
           <div className='row '>
            <label className='form-label'>UPI Transaction Id:
            </label>
            <input 
            type="Number" 
            value={upiNo}
            className='form-control'
            onChange={(e) => setUpiNo(e.target.value)}
            />
         {errors.upiNo && <p style={{ color: 'red' }}>{errors.upiNo}</p>}
           </div>
        
          <div style={{display:'flex',gap:'10px'}}>
          <button
             type="submit"
             className='btn btn-success'
             style={{
              marginTop:'15px',
               padding: '10px 20px',
              
               border: 'none',
               borderRadius: '4px',
               cursor: 'pointer',
             width:'50%',
             fontSize:'20px',
               textAlign: 'center',
             }}
             onClick={handlePrevious}
           >
             Previous
           </button>
           <button
             type="submit"
             style={{
              marginTop:'15px',
               padding: '10px 20px',
               background: '#00A4EF',
               color: '#fff',
               border: 'none',
               borderRadius: '4px',
               cursor: 'pointer',
               width:'50%',
               fontSize:'20px',
               textAlign: 'center',
             }}
           >
             Donate
           </button>
          </div>



        </form>
      )}
    </div>
  </div>

  </div>


      
    
  );
};

export default DonationPage;
