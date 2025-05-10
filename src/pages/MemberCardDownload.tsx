import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MemberCard from "./MemberCard";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

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
      alert("No member data found. Redirecting...");
      navigate("/");
    }
  }, [location.state, navigate]);

  if (!memberData) {
    return <p>Loading or member data not available.</p>;
  }

  const handleDownload = async () => {
    const cardElement = document.getElementById("member-card");
    if (!cardElement) return;

    const canvas = await html2canvas(cardElement);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 10, pdfWidth, pdfHeight);
    pdf.save("MemberCard.pdf");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <div id="member-card">
        <MemberCard
          name={memberData.name}
          id={memberData.id}
          assembly={memberData.assembly}
          photoUrl={memberData.photoUrl}
          qrCode={memberData.qrCode}
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
        Download Your Member Card as PDF
      </button>
    </div>
  );
};

export default MemberCardDownload;
