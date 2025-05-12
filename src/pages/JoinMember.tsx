import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import {
  getDistrict,
  getBlocks,
  getAssemblies,
  submitJoinMemberForm,
} from "../Services/ApiService";
import './JoinMember.css';
import { useNavigate } from "react-router-dom";
import { use } from "i18next";

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
    whatsapp: "",
    qualification:"",
  });
  const navigate = useNavigate();       

  const [districts, setDistricts] = useState<any[]>([]);
  const [blocks, setBlocks] = useState<any[]>([]);
  const [assemblies, setAssemblies] = useState<any[]>([]);

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

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
  
    if (!formData.name.trim()) newErrors.name = 'Name is required';
   if (!formData.age.trim()) {
  newErrors.age = 'Age field is required';
} else if (parseInt(formData.age) < 18) {
  newErrors.age = 'Age must be at least 18';
};

    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.assembly.trim()) newErrors.assembly = 'Assembly is required';
    if (!formData.block.trim()) newErrors.block = 'Block is required';
    if (!formData.district.trim()) newErrors.district = 'DIstrict is required';
    if (!formData.jobLocation.trim()) newErrors.jobLocation = 'This field is required';
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

  try {
    const selectedDistrict = districts.find(
      (d) => d.id === Number(formData.district)
    );
    const selectedBlock = blocks.find((b) => b.id === Number(formData.block));
    const selectedAssembly = assemblies.find(
      (a) => a.id === Number(formData.assembly)
    );

    const payload = {
      name: formData.name,
      age: Number(formData.age),
      address: formData.address,
      district: selectedDistrict?.name || "",
      block: selectedBlock?.name || "",
      assembly: selectedAssembly?.name || "",
      jobLocation: formData.jobLocation,
      phone: formData.phone,
      qualification: formData.qualification,
    };

    const res = await submitJoinMemberForm(payload);

    if (res?.isSuccess) {
      const memberData = {
        ...payload,
        id: res.data.id, // Include the actual database ID
        photoUrl: res.data.photoUrl || "", // Ensure photoUrl is included
        qrCode: res.data.qrCode || "", // Ensure qrCode is included
      };

      navigate("/download", { state: memberData });
    } else {
      setStatusMessage("Form submission failed. Please try again.");
    }
  } catch (err) {
    setStatusMessage("Something went wrong during submission.");
    console.error("Submission error:", err);
  }
};
  // const styles = {
  //   wrapper: {
  //     display: "grid",
  //     gridTemplateColumns: "1fr 1fr",
  //     gap: "20px",
  //     maxWidth: "1200px",
  //     margin: "40px auto",
  //     alignItems: "flex-start" as const,
  //   },
  //   formContainer: {
  //     backgroundColor: "#fff",
  //     padding: " 30px",
  //     borderRadius: "8px",
  //     boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  //   },
  //   heading: {
  //     textAlign: "center" as const,
  //     color: "white",
  //     backgroundColor: "#00A4EF",
  //     borderRadius: "10px",
  //   },
  //   form: {
  //     display: "grid",
  //     gridTemplateColumns: "1fr 1fr",
  //     gap: "10px 20px",
  //   },
  //   fullWidth: {
  //     gridColumn: "1 / -1",
  //   },
  //   fieldWrapper: {
  //     display: "flex",
  //     flexDirection: "column" as const,
  //   },
  //   input: {
  //     padding: "12px",
  //     border: "1px solid #ccc",
  //     borderRadius: "6px",
  //     fontSize: "16px",
  //   },
  //   errorText: {
  //     color: "red",
  //     fontSize: "13px",
  //     marginTop: "4px",
  //   },
  //   button: {
  //     backgroundColor: "#00A4EF",
  //     color: "#fff",
  //     padding: "14px",
  //     border: "none",
  //     fontSize: "16px",
  //     borderRadius: "6px",
  //     cursor: "pointer",
  //     width: "100%",
  //   },
  //   image: {
  //     width: "100%",
  //     height: "auto",
  //     borderRadius: "10px",
  //     boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  //   },
  //   label: {
  //     fontWeight: "bold" as const,
  //     marginBottom: "5px",
  //   },
  //   required: {
  //     color: "red",
  //     fontSize: "18px",
  //   },
    
    
  // };
  return (
    <div className="container-fluid">
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
                  
                />
                {errors.age && <span className="text-danger">{errors.age}</span>}
              </div>
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
              {errors.phone && <span className="text-danger">{errors.phone}</span>}
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
        </div>
      </div>
    </div>
  );
  
};

export default JoinMember;
