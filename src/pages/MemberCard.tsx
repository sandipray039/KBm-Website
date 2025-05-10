import React from "react";

interface MemberCardProps {
  name: string;
  id: string;
  assembly: string;
  photoUrl: string;

}

const MemberCard: React.FC<MemberCardProps> = ({
  name,
  id,
  assembly,
  photoUrl,
}) => {
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
                Jamtara Masjid Gali,Jamtara panchayat, Jamtara, Giridih, Jharkhand- 825106.
            
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
          <div style={{  fontWeight: 700 ,textAlign:'center',marginBottom:'15px',}}>{name}</div>
          <div style={{ display: "flex", alignItems: "center", padding: "0 2px",height:"fit-content" }}>
            <div style={{ width: "70%", }}>
              Membership ID:{id}
            <br />
              Vidhan Sabha: <b>{assembly}</b>
            </div>
            <div style={{ width: "22%" }}>
              <img
                src={photoUrl}
                alt="QR Code"
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