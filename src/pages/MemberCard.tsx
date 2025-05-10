import React from "react";

interface MemberCardProps {
  name: string;
  id: string;
  assembly: string;
  photoUrl: string;
  qrCode: string;
}

const MemberCard: React.FC<MemberCardProps> = ({
  name,
  id,
  assembly,
  photoUrl,
  qrCode,
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
          width: "350px",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          style={{
            width: "100%",
            height: "80px",
            backgroundColor: "#229954",
            color: "white",
          }}
        >
          <div style={{ display: "flex", height: "100%" }}>
            <div style={{ width: "30%" }}>
              <img
                src="/images/gallery/2.jpg"
                alt="Logo"
                style={{ height: "80px" }}
              />
            </div>
            <div style={{ width: "112%", fontSize: "11px", paddingLeft: "3px" }}>
              <b>JHARKHAND LOKTANTRIK KRANTIKARI MORCHA </b>
              
                Indrapuri Colony, Badhraibera,
                <br />
                Sec-12,Bokaro - 82701 (Jharkhand)
            
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
          <div style={{ padding: "2px", fontWeight: 700 }}>{name}</div>
          <hr />
          <div style={{ display: "flex", alignItems: "center", padding: "0 5px",height:"25px" }}>
            <div
              style={{
                width: "16%",
                borderRadius: "14%",
                padding: "4px",
              }}
            >
              <img
                src={photoUrl}
                alt="Member"
                style={{ height: "43px", width: "60px" }}
              />
            </div>
            <div style={{ width: "57%", paddingLeft: "5px" }}>
              Membership ID: <b>{id}</b>
              <br />
              Vidhan Sabha: <b>{assembly}</b>
            </div>
            <div style={{ width: "22%" }}>
              <img
                src={qrCode}
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