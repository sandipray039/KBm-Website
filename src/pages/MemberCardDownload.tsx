import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MemberCard from "./MemberCard";
import html2canvas from "html2canvas";

const MemberCardDownload: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const memberData = location.state as {
    name: string;
    id: string;
    assembly: string;
    photoUrl: string;
    qrCode: string;
  } | null;

  React.useEffect(() => {
    if (!location.state) {
      // Redirect or show a fallback message
      alert("No member data found. Redirecting...");
      navigate("/"); // or any fallback route
    }
  }, [location.state, navigate]);

  if (!memberData) {
    return <p>Loading or member data not available.</p>;
  }

  const handleDownload = async () => {
    const cardElement = document.getElementById("member-card");
    if (!cardElement) return;

    const canvas = await html2canvas(cardElement);
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "MemberCard.png";
    link.click();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <div id="member-card">
        <MemberCard
          name={memberData.name}
          id={memberData.id}
          assembly={memberData.assembly}
          photoUrl={memberData.photoUrl}
         // qrCode={memberData.qrCode}
        />
      </div>
      <button
        onClick={handleDownload}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#229954",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Download Your Member Card
      </button>
    </div>
  );
};

export default MemberCardDownload;