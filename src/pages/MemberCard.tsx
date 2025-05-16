import React, { useEffect, useState } from "react";
import { getMemberByPhone } from "../Services/ApiService";

interface MemberCardProps {
  number: string;
    photoUrl:string; 
}

interface Member {
  id: number;
  name: string;
  phone: string;
  age: number;
  address: string;
  district: string;
  block: string;
  assembly: string;
  jobLocation: string;
  qualification: string;
  photo: string;
}

const MemberCard: React.FC<MemberCardProps> = ({ number,photoUrl }) => {
  const [member, setMember] = useState<Member | null>(null);

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const response = await getMemberByPhone(number);
        console.log("Fetched member:", response.data);

        if (response.isSuccess && response.data) {
          const memberData: Member = {
            id: response.data.id,
            name: response.data.name,
            phone: response.data.phone,
            age: response.data.age,
            address: response.data.address,
            district: response.data.district,
            block: response.data.block,
            assembly: response.data.assembly,
            jobLocation: response.data.jobLocation,
            qualification: response.data.qualification,
            photo: response.data.photo,
          };

          setMember(memberData);
        }
      } catch (error) {
        console.error("Failed to fetch member", error);
      }
    };

    if (number) {
      fetchMember();
    }
  }, [number]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "200px",
        backgroundColor: "#f0f0f0",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          borderRadius: "8px",
          width: "65%",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          style={{
            width: "100%",
            height: "fit-content",
            backgroundColor: "royalblue",
            color: "white",
          }}
        >
          <div style={{ display: "flex", height: "100%" }}>
            <div style={{ width: "30%" }}>
              <img
                src="/images/kbm-slider/logo.png.png"
                alt="Logo"
                style={{ height: "65px" }}
              />
            </div>
            <div style={{ width: "112%", fontSize: "11px", paddingLeft: "3px" }}>
              <b>Khatiyani Budhijeevi Manch </b>
              <br />
              Jamtara Masjid Gali, Jamtara panchayat, Jamtara, Giridih, Jharkhand- 825106.
              <br />
              <p style={{fontSize:'8px',marginTop:'-6px'}}>(Ngo,Regd.No.2024/BOK/3551/BK4/242)</p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div
          style={{
            width: "100%",
            height: "120px",
            border: "1px solid #ccc",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            backgroundColor: "forestgreen",
            overflow: "hidden",
            position: "relative",
            padding:"2px 0px"
          }}
        >
          <div style={{ fontWeight: 700, textAlign: 'center', marginBottom: '15px',color:'white' }}>
            {member?.name}
          </div>
          <div style={{ display: "flex", alignItems: "center", padding: "3px 2px", height: "fit-content" }}>
         
            <div style={{ width: "22%",marginRight:'20px' }}>
              <img
                src={photoUrl}
                alt="Member"
                style={{ width: "70px", height: "70px" }}
              />
            </div>
               <div style={{ width: "70%",color:'white' }}>
              Membership ID: <b style={{color:'white'}}>{member?.id}</b>
              <br />
              Block: <b style={{color:'white'}}>{member?.block}</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
