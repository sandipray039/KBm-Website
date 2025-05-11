import React, { useEffect, useState, ChangeEvent, FormEvent, useRef } from "react";
import {
  getDistrict,
  getBlocks,
  getAssemblies,
  submitJoinMemberForm,
} from "../Services/ApiService";
import './JoinMember.css';
import { Link,   } from "react-router-dom";
import { jsPDF } from "jspdf";
import gsap from "gsap";

import html2canvas from "html2canvas";
import MemberCard from "./MemberCard";




interface FormData {
  name: string;
  age: string;
  address: string;
  district: string;
  block: string;
  assembly: string;
  jobLocation: string;
  phone: string;
  photo: string;
  qualification:string;
}


const JoinMember: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    age: "",
    address: "",
    district: "",
    block: "",
    assembly: "",
    jobLocation: "",
    phone: "",
    photo: "",
    qualification:"",
  });

  const [districts, setDistricts] = useState<any[]>([]);
  const [blocks, setBlocks] = useState<any[]>([]);
  const [assemblies, setAssemblies] = useState<any[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string>("");
  const [page,setPage]=useState<"one"|"two">("one");
  const [memberData, setMemberData] = useState<{
phone:string;
  photoUrl: File | null;
  

} | null>(null);

const [PhoneErr,setPhoneErr]=useState<string|null>(null);


  const [errors, setErrors] = useState<Partial<FormData>>({});
    const [statusMessage, setStatusMessage] = useState<string>('');
  const qualificationOptions = [
    "High School",
    "Diploma",
    "Bachelor's Degree",
    "Master's Degree",
    "Ph.D.",
    "Other",
  ];


  gsap.registerPlugin();
  const hiddenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchDistricts = async () => {
      const data = await getDistrict();
      if (data?.isSuccess) setDistricts(data.data);
    };
    fetchDistricts();
  }, []);

  useEffect(() => {
    if (formData.district) {
      const fetchBlocks = async () => {
        const data = await getBlocks(Number(formData.district)); // Pass district ID
        if (data?.isSuccess) setBlocks(data.data);
      };
      fetchBlocks();
      setFormData((prev) => ({ ...prev, block: "", assembly: "" }));
      setAssemblies([]);
    }
  }, [formData.district]);

  useEffect(() => {
    if (formData.block) {
      const fetchAssemblies = async () => {
        const data = await getAssemblies(Number(formData.district)); 
        if (data?.isSuccess) setAssemblies(data.data);
      };
      fetchAssemblies();
      setFormData((prev) => ({ ...prev, assembly: "" }));
    }
  }, [formData.block]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0] ?? null;
  setSelectedFile(file);
  if (file) {
   
    setPhotoPreview(URL.createObjectURL(file));
      console.log("🖼 blob URL =", URL.createObjectURL(file));
  } else {
    setPhotoPreview("");
  }
};
const handleDownloadCard = async () => {
  if (!hiddenRef.current) {
    console.warn('Card ref not found');
    return;
  }


  const imgs = hiddenRef.current.querySelectorAll('img');
  await Promise.all(
    Array.from(imgs).map((img) =>
      img.complete
        ? Promise.resolve()
        : new Promise((res) => (img.onload = res))
    )
  );

  try {

    const canvas = await html2canvas(hiddenRef.current, { scale: 2, useCORS: true });
    const imgData = canvas.toDataURL('image/png');

 
    const pdf = new jsPDF({
      unit: 'px',
      format: 'a4',    
      orientation: 'portrait'
    });


    const pageW = pdf.internal.pageSize.getWidth();
    const pageH = pdf.internal.pageSize.getHeight();

   
    const imgW = pageW * 1;
    const imgH = pageH * .35;

   
    const x = (pageW - imgW) / 2;
    const y = (pageH - imgH) / 2;

  
    pdf.addImage(imgData, 'PNG', x, y, imgW, imgH);

 
    pdf.save('member-card.pdf');
  } catch (err) {
    console.error('Error generating PDF', err);
    alert('Unable to download card. Please try again or contact support.');
  }
};


  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
      if (name === "phone") {
    setPhoneErr("");
  }
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
  
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.age.trim()) newErrors.age = 'Age field is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.assembly.trim()) newErrors.assembly = 'Assembly is required';
    if (!formData.block.trim()) newErrors.block = 'Block is required';
    if (!formData.district.trim()) newErrors.district = 'District is required';
    if (!formData.jobLocation.trim()) newErrors.jobLocation = 'This field is required';
      if (!selectedFile) {
    newErrors.photo = 'Please upload a photo for member card creation';
  }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be exactly 10 digits';
    }
    if (!formData.qualification.trim()) {
      newErrors.qualification = "Qualification is required";
    }
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  
  const handleCloseMessage = () => {
    setStatusMessage('');
  };


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    console.log("form submitted..", formData);

    try {
      const selectedDistrict = districts.find(
        (d) => d.id === Number(formData.district)
      );
      const selectedBlock = blocks.find((b) => b.id === Number(formData.block));
      const selectedAssembly = assemblies.find(
        (a) => a.id === Number(formData.assembly)
      );
const payload = new FormData();
payload.append("Name", formData.name);
payload.append("Age", formData.age);
payload.append("Address", formData.address);
payload.append("District", selectedDistrict?.name || "");
payload.append("Block", selectedBlock?.name || "");
payload.append("Assembly", selectedAssembly?.name || "");
payload.append("JobLocation", formData.jobLocation);
payload.append("Phone", formData.phone);
payload.append("Qualification", formData.qualification);
if (selectedFile) {
  payload.append("Photo", selectedFile);
}
      console.log("before submitting..", payload);

      const res = await submitJoinMemberForm(payload);
      console.log("API response:", res);

      if (res?.isSuccess) {
        setPage("two");

         const selected = assemblies.find(a => a.id === Number(formData.assembly));
         console.log("assembly name--->",selected.name)
          setMemberData({
phone:formData.phone,
    photoUrl:selectedFile,
  });
  console.log( "membar assembly-->",selected.assembly);
   console.log( "membar id-->",selected.id);
        setFormData({
          name: "",
          age: "",
          address: "",
          district: "",
          block: "",
          assembly: "",
          jobLocation: "",
          phone: "",
          photo: "",
          qualification:""
        });
        setSelectedFile(null);
        setBlocks([]);
        setAssemblies([]);
      } else {
        setStatusMessage('Form submission failed. Please try again.');
        alert("Form submission failed. Please try again.");
      }
    } catch (err: any) {
  console.error("Submission error:", err);
  const errorMessage =
    err?.response?.data?.message || "Something went wrong during submission.";
    console.log("phone error message->",errorMessage);

  if (
   errorMessage.includes("Phone number already registered")
  ) {
   setPhoneErr("Phone number already registered with a different account.Please use a diffrent number");
   console.log(PhoneErr);
  } else {
    setStatusMessage('Something went wrong during submission.');
    alert(errorMessage);
  }
}

  };

  return (
    <div  className="container-fluid">
      <div className="row">
        
        <div className="col-12 col-md-5 mt-30" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <img
            src="/images/photos/v1.png"
            alt="Volunteer"
            className="img-fluid"
          />
        </div>
  
      
        <div className="col-12 col-md-6" style={{padding:'10px 25px',border:'1px solid #80808047',borderRadius:'15px',marginRight:'10px'}}>

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
        {page==="one" && (
          <>
            <h2 className="text-white  text-center py-3 rounded " style={{borderRadius:'8px',backgroundColor:'rgb(0, 164, 70)'}}>
            Become a Member
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-12 col-md-6 mb-3">
                <label className="form-label">
                 Full Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control rounded"
                
                />
                {errors.name && <span className="text-danger">{errors.name}</span>}
              </div>
  
              {/* Age Input */}
              <div className="col-12 col-md-6 mb-3">
                <label className="form-label">
                  Age <span className="text-danger">*</span>
                </label>
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  value={formData.age}
                  onChange={handleChange}
                  className="form-control"
                    min={18}
    max={75}
                  
                />
                {errors.age && <span className="text-danger">{errors.age}</span>}
              </div>
            </div>
            <div className="mb-3">
  <label className="form-label">
    Upload Photo <span className="text-danger">*</span>
  </label>
  <input
    type="file"
    name="photo"
    
    accept="image/*"
    className="form-control"
    onChange={handleFileChange}
  />
   {errors.photo && <span className="text-danger">{errors.photo}</span>}
</div>
  
      <div className="row">
            <div className="mb-3 col-md-6">
              <label className="form-label">
                Phone/Whatsapp number <span className="text-danger">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Phone/Whatsapp number"
                value={formData.phone}
                onChange={handleChange}
                className="form-control"
               
              />
            {(PhoneErr || errors.phone) && (
  <span className="text-danger">
    {PhoneErr || errors.phone}
  </span>
)}
            </div>
  
            {/* Job Location Input */}
            <div className="mb-3 col-md-6">
              <label className="form-label">
                Job  Location <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="jobLocation"
                placeholder="Job Location"
                value={formData.jobLocation}
                onChange={handleChange}
                className="form-control"
              
              />
              {errors.jobLocation && <span className="text-danger">{errors.jobLocation}</span>}
            </div>
            </div>
  
            {/* District Select */}
           <div className="row">
           <div className="mb-3 col-md-6">
              <label className="form-label">
                District <span className="text-danger">*</span>
              </label>
              <select
                name="district"
                value={formData.district}
                onChange={handleChange}
                className="form-control"
                
              >
                <option value="">Select District</option>
                {districts.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.name}
                  </option>
                ))}
              </select>
              {errors.district && <span className="text-danger">{errors.district}</span>}
            </div>
            <div className="mb-3 col-md-6">
  <label className="form-label">
    Highest Qualification <span className="text-danger">*</span>
  </label>
  <select
    name="qualification"
    value={formData.qualification}
    onChange={handleChange}
    className="form-control"
  >
    <option value="">-- Select Qualification --</option>
    {qualificationOptions.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ))}
  </select>
  {errors.qualification && <span className="text-danger">{errors.qualification}</span>}
</div>

           </div>
  
            {/* Block Select */}
            <div className="mb-3">
              <label className="form-label">
                Block <span className="text-danger">*</span>
              </label>
              <select
                name="block"
                value={formData.block}
                onChange={handleChange}
                className="form-control"
                disabled={!formData.district}
                
              >
                <option value="">Select Block</option>
                {blocks.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.name}
                  </option>
                ))}
              </select>
              {errors.block && <span className="text-danger">{errors.block}</span>}
            </div>
  
            {/* Assembly Select */}
            <div className="mb-3">
              <label className="form-label">
                Assembly <span className="text-danger">*</span>
              </label>
              <select
                name="assembly"
                value={formData.assembly}
                onChange={handleChange}
                className="form-control"
                disabled={!formData.block}
               
              >
                <option value="">Select Assembly</option>
                {assemblies.map((a) => (
                  <option key={a.id} value={a.id}>
                    {a.name}
                  </option>
                ))}
              </select>
              {errors.assembly && <span className="text-danger">{errors.assembly}</span>}
            </div>
  
            {/* Permanent Address Input */}
            <div className="mb-3">
              <label className="form-label">
                Permanent Address <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="address"
                placeholder="Permanent Address"
                value={formData.address}
                onChange={handleChange}
                className="form-control"
               
              />
              {errors.address && <span className="text-danger">{errors.address}</span>}
            </div>
  
            {/* Submit Button */}
            <div className="mb-3">
              <button type="submit" className="btn w-100 col-12 mt-5 border-gray" style={{width:'100%',backgroundColor:'rgb(0, 164, 70)',color:'white',fontSize:'20px'}}>
                Join Now
              </button>
            </div>
          </form>
          </>
        )}

        {page==="two" && (
          <>
           <div  className="row" style={{marginTop:'30px'}}>
                <div className="row" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
                  <h1 className="stagger-item welcome-title" style={{ fontSize: '2.8rem', fontWeight: 700, color: '#003366', marginBottom: '1.5rem' }}>
                    🎊 Welcome New Member 🎉
                  </h1>
                  <p className="stagger-item welcome-text" style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>
                    You’ve successfully joined our community! 🥳
                  </p>
                  <p className="stagger-item welcome-text" style={{ fontSize: '1.2rem', marginBottom: '1rem', }}>
                    Need help? Visit our support center or reach out to our team anytime. We’re here to assist you every step of the way.
                  </p>
                  <div className="welcome-actions" style={{ marginTop: '2rem' }}>
                <Link to="/" className="btn btn-primary btn-secondary btn-one" style={{fontSize:'1.5vw'}}>Go to Home </Link>
                    <button   onClick={handleDownloadCard}  className="btn btn-success btn-two" style={{ fontSize: '1.5vw',marginLeft:'10px' }}>
                      Download your Membership Card
                    </button>
                  </div>
                </div>
       <div
        ref={hiddenRef}
        style={{
          position: "absolute",
          top: "-9999px",     // move far out of viewport
          left: "-9999px",
          // OR use opacity instead:
          // opacity: 0,
          // pointerEvents: 'none',
        }}
      >
        <MemberCard
  number={memberData?.phone || ""}
  photoUrl={photoPreview || ""}
          
        />
      </div>
              </div>
          </>
        )}

        </div>
      </div>
    </div>
  );
  
};

export default JoinMember;
