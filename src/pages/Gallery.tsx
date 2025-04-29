import  { useState } from "react";
import VideoGallery from "./VideoGallery";

const galleryImages = [
  { thumb: "/images/team/team4.jpg", full: "/images/team/team4.jpg" },
  { thumb: "images/about/kbm3.jpg", full: "images/about/kbm3.jpg" },
  { thumb: "images/team/team5.jpg", full: "images/team/team5.jpg" },
  { thumb: "images/team/team6.jpg", full: "images/team/team6.jpg" },
  { thumb: "images/kbm-1/four.jpg", full: "images/kbm-1/four.jpg" },
  { thumb: "images/team/team7.jpg", full: "images/team/team7.jpg" },
  { thumb: "images/team/team8.jpg", full: "images/team/team8.jpg" },
  { thumb: "images/team/team9.jpg", full: "images/team/team9.jpg" },
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const showNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    }
  };

  return (
    <section style={{ backgroundColor: "#f9f9f9", padding: "40px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ textTransform: "uppercase", marginBottom: "10px" }}>
            <span style={{ color: "#00A4EF", fontWeight: "600" }}>Photo Gallery</span>
          </h2>
          <div className="title-icon">
              <i className="flaticon-charity-hand-holding-a-heart"></i>
            </div>
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
                alt={`project-${index + 1}`}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: 0,
                  transition: "opacity 0.3s",
                }}
                className="overlay"
              >
                <i
                  className="fa fa-picture-o"
                  style={{ color: "white", fontSize: "24px" }}
                ></i>
              </div>
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
              alt="Zoomed"
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

        <div style={{ marginTop: "40px" }}>
          <VideoGallery />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
