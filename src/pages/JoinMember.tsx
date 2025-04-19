import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import {
  getDistrict,
  getBlocks,
  getAssemblies,
  submitJoinMemberForm,
} from "../Services/ApiService";

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
    <div style={styles.wrapper}>
      <div>
        <img
          src="/images/photos/v1.png"
          alt="Volunteer"
          style={{ marginLeft: 70 }}
        />
      </div>
      <div>
        <h2 style={styles.heading}>Become a Member</h2>
        <div style={styles.formContainer}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.fieldWrapper}>
            <label style={styles.label}>
              Name <span style={styles.required}>*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              required
            />
            {errors.name && <span style={styles.errorText}>{errors.name}</span>}
          </div>
          <div style={styles.fieldWrapper}>
            <label style={styles.label}>
              Age <span style={styles.required}>*</span>
            </label>
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              style={styles.input}
              required
            />
            {errors.age && <span style={styles.errorText}>{errors.age}</span>}
          </div>
          <div style={styles.fieldWrapper}>
            <label style={styles.label}>
              Phone/Whatsapp number <span style={styles.required}>*</span>
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Phone/Whatsapp number"
              value={formData.phone}
              onChange={handleChange}
              style={styles.input}
              required
            />
            {errors.phone && (
              <span style={styles.errorText}>{errors.phone}</span>
            )}
          </div>
          <div style={styles.fieldWrapper}>
            <label style={styles.label}>
              Job with Location <span style={styles.required}>*</span>
            </label>
            <input
              type="text"
              name="jobLocation"
              placeholder="Job with Location"
              value={formData.jobLocation}
              onChange={handleChange}
              style={styles.input}
              required
            />
            {errors.jobLocation && (
              <span style={styles.errorText}>{errors.jobLocation}</span>
            )}
          </div>
          <div style={styles.fieldWrapper}>
            <label style={styles.label}>
              District <span style={styles.required}>*</span>
            </label>
            <select
              name="district"
              value={formData.district}
              onChange={handleChange}
              style={styles.input}
              required
            >
              <option value="">Select District</option>
              {districts.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name}
                </option>
              ))}
            </select>
            {errors.district && (
              <span style={styles.errorText}>{errors.district}</span>
            )}
          </div>
          <div style={styles.fieldWrapper}>
            <label style={styles.label}>
              Block <span style={styles.required}>*</span>
            </label>
            <select
              name="block"
              value={formData.block}
              onChange={handleChange}
              style={styles.input}
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
            {errors.block && (
              <span style={styles.errorText}>{errors.block}</span>
            )}
          </div>
          <div style={styles.fieldWrapper}>
            <label style={styles.label}>
              Assembly <span style={styles.required}>*</span>
            </label>
            <select
              name="assembly"
              value={formData.assembly}
              onChange={handleChange}
              style={styles.input}
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
            {errors.assembly && (
              <span style={styles.errorText}>{errors.assembly}</span>
            )}
          </div>
       
          <div style={{ ...styles.fieldWrapper, ...styles.fullWidth }}>
            <label style={styles.label}>
              Permanent Address <span style={styles.required}>*</span>
            </label>
            <input
              type="text"
              name="address"
              placeholder="Permanent Address"
              value={formData.address}
              onChange={handleChange}
              style={styles.input}
              required
            />
            {errors.address && (
              <span style={styles.errorText}>{errors.address}</span>
            )}
          </div>
      
          <div style={styles.fullWidth}>
            <button type="submit" style={styles.button}>
              Apply Now
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default JoinMember;
