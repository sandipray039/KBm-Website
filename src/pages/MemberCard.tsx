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
            height: "68px",
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
            </div>
          </div>
        </div>

        {/* Body */}
        <div
          style={{
            width: "100%",
            height: "110px",
            border: "1px solid #ccc",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            backgroundColor: "yellow",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div style={{ fontWeight: 700, textAlign: 'center', marginBottom: '15px' }}>
            {member?.name}
          </div>
          <div style={{ display: "flex", alignItems: "center", padding: "0 2px", height: "fit-content" }}>
            <div style={{ width: "70%" }}>
              Membership ID: <b>{member?.id}</b>
              <br />
              Vidhan Sabha: <b>{member?.assembly}</b>
            </div>
            <div style={{ width: "22%" }}>
              <img
                src={photoUrl}
                alt="Member"
                style={{ width: "70px", height: "70px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
