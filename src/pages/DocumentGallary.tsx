import React, { useState } from "react";

const galleryImages = [
  { thumb: "public/images/Documents/Documents_page-0001.jpg", full: "public/images/Documents/Documents_page-0001.jpg" },
  { thumb: "public/images/Documents/Documents_page-0002.jpg", full: "public/images/Documents/Documents_page-0002.jpg" },
  { thumb: "public/images/Documents/Documents_page-0003.jpg", full: "public/images/Documents/Documents_page-0003.jpg" },
  { thumb: "public/images/Documents/Documents_page-0004.jpg", full: "public/images/Documents/Documents_page-0004.jpg" },
  { thumb: "public/images/Documents/Documents_page-0006.jpg", full: "public/images/Documents/Documents_page-0006.jpg" },
  { thumb: "public/images/Documents/Documents_page-0008.jpg", full: "public/images/Documents/Documents_page-0008.jpg" },
  { thumb: "public/images/Documents/Documents_page-0015.jpg", full: "public/images/Documents/Documents_page-0015.jpg" },
  { thumb: "public/images/Documents/Documents_page-0019.jpg", full: "public/images/Documents/Documents_page-0019.jpg" },
  { thumb: "/public/images/Documents/Documents_page-0016.jpg", full: "public/images/Documents/Documents_page-0016.jpg" },
];

const DocumentGallary: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = (event: React.MouseEvent) => {
    event.preventDefault(); // Prevent default behavior
    setSelectedIndex(null);
  };

  const showPrev = (event: React.MouseEvent) => {
    event.preventDefault(); // Prevent default behavior
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const showNext = (event: React.MouseEvent) => {
    event.preventDefault(); // Prevent default behavior
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    }
  };

  return (
    <>
      <section style={{ backgroundColor: "#f9f9f9", padding: "40px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2 style={{ textTransform: "uppercase", marginBottom: "10px" }}>
              <span style={{ color: "#00A4EF", fontWeight: "600" }}>Document Gallery</span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "15px",
            }}
          >
            {galleryImages.map((img, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                style={{ cursor: "pointer", position: "relative", overflow: "hidden" }}
              >
                <img
                  src={img.thumb}
                  alt={`Document ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    display: "block",
                  }}
                />
              </div>
            ))}
          </div>

          {selectedIndex !== null && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 9999,
                flexDirection: "column",
              }}
            >
              <span
                onClick={closeLightbox}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "30px",
                  fontSize: "32px",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                ×
              </span>
              <span
                onClick={showPrev}
                style={{
                  position: "absolute",
                  left: "20px",
                  fontSize: "32px",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                ‹
              </span>
              <img
                src={galleryImages[selectedIndex].full}
                alt={`Document ${selectedIndex + 1}`}
                style={{
                  maxHeight: "80vh",
                  maxWidth: "90vw",
                  borderRadius: "10px",
                }}
              />
              <span
                onClick={showNext}
                style={{
                  position: "absolute",
                  right: "20px",
                  fontSize: "32px",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                ›
              </span>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default DocumentGallary;