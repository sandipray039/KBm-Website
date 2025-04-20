import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import {
  getDistrict,
  getBlocks,
  getAssemblies,
  submitJoinMemberForm,
} from "../Services/ApiService";
import './JoinMember.css';

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
    name: "",
    age: "",
    address: "",
    district: "",
    block: "",
    assembly: "",
    jobLocation: "",
    phone: "",
    whatsapp: "",
  });

  const [districts, setDistricts] = useState<any[]>([]);
  const [blocks, setBlocks] = useState<any[]>([]);
  const [assemblies, setAssemblies] = useState<any[]>([]);

  const [errors, setErrors] = useState<Partial<FormData>>({});

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form submitted..", formData);

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
      };
      console.log("before submitting..", payload);

      const res = await submitJoinMemberForm(payload);
      console.log("API response:", res);

      if (res?.isSuccess) {
        alert("Form submitted successfully!");
        setFormData({
          name: "",
          age: "",
          address: "",
          district: "",
          block: "",
          assembly: "",
          jobLocation: "",
          phone: "",
          whatsapp: "",
        });
        setBlocks([]);
        setAssemblies([]);
      } else {
        console.log("Form submission failed", res);
        alert("Form submission failed. Please try again.");
      }
    } catch (err) {
      alert("Something went wrong during submission.");
      console.error("Submission error:", err);
    }
  };

  const styles = {
    wrapper: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px",
      maxWidth: "1200px",
      margin: "40px auto",
      alignItems: "flex-start" as const,
    },
    formContainer: {
      backgroundColor: "#fff",
      padding: " 30px",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    },
    heading: {
      textAlign: "center" as const,
      color: "white",
      backgroundColor: "#00A4EF",
      borderRadius: "10px",
    },
    form: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "10px 20px",
    },
    fullWidth: {
      gridColumn: "1 / -1",
    },
    fieldWrapper: {
      display: "flex",
      flexDirection: "column" as const,
    },
    input: {
      padding: "12px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      fontSize: "16px",
    },
    errorText: {
      color: "red",
      fontSize: "13px",
      marginTop: "4px",
    },
    button: {
      backgroundColor: "#00A4EF",
      color: "#fff",
      padding: "14px",
      border: "none",
      fontSize: "16px",
      borderRadius: "6px",
      cursor: "pointer",
      width: "100%",
    },
    image: {
      width: "100%",
      height: "auto",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    },
    label: {
      fontWeight: "bold" as const,
      marginBottom: "5px",
    },
    required: {
      color: "red",
      fontSize: "18px",
    },
    
    
  };
  return (
    <div className="container">
      <div className="row">
        {/* Left Div (Image) */}
        <div className="col-12 col-md-6">
          <img
            src="/images/photos/v1.png"
            alt="Volunteer"
            className="img-fluid"
          />
        </div>
  
        {/* Right Div (Form) */}
        <div className="col-12 col-md-6">
          <h2 className="text-white bg-primary text-center py-3 rounded">
            Become a Member
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="row">
              {/* Name Input */}
              <div className="col-12 col-md-6 mb-3">
                <label className="form-label">
                  Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control rounded"
                  required
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
                  required
                />
                {errors.age && <span className="text-danger">{errors.age}</span>}
              </div>
            </div>
  
            {/* Phone Input */}
            <div className="mb-3">
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
                required
              />
              {errors.phone && <span className="text-danger">{errors.phone}</span>}
            </div>
  
            {/* Job Location Input */}
            <div className="mb-3">
              <label className="form-label">
                Job with Location <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="jobLocation"
                placeholder="Job with Location"
                value={formData.jobLocation}
                onChange={handleChange}
                className="form-control"
                required
              />
              {errors.jobLocation && <span className="text-danger">{errors.jobLocation}</span>}
            </div>
  
            {/* District Select */}
            <div className="mb-3">
              <label className="form-label">
                District <span className="text-danger">*</span>
              </label>
              <select
                name="district"
                value={formData.district}
                onChange={handleChange}
                className="form-control"
                required
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
                required
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
                required
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
                required
              />
              {errors.address && <span className="text-danger">{errors.address}</span>}
            </div>
  
            {/* Submit Button */}
            <div className="mb-3">
              <button type="submit" className="btn btn-primary w-100 col-12 mt-5">
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
