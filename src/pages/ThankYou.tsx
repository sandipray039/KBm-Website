import  { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

const ThankYouPage = ({ donorName = "Donor" }: { donorName?: string }) => {
  const navigate = useNavigate();
 const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
   
     const ctx = gsap.context(() => {
    gsap.from(".stagger-item", {
      y: 50,
      opacity: 0,
      duration: 3,
      delay: 1,
      ease: "power3.out",
      stagger: 0.2,
    });

    gsap.from(".bt-one", {
      x: -200,
      opacity: 0,
      duration: 2.5,
      delay: 1.5,
      ease: "power3.out",
    });

    gsap.from(".bt-two", {
      x: 200,
      opacity: 0,
      duration: 2.5,
      delay: 1.5,
      ease: "power3.out",
    });

        }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}
      className="d-flex flex-column align-items-center justify-content-center"
      style={{
        minHeight: "70vh",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1
        className="stagger-item"
        style={{
          fontSize: "2.8rem",
          fontWeight: 700,
          color: "#003366",
          marginBottom: "1.5rem",
        }}
      >
        🎉 Thank You for Your Generosity, {donorName}! 🙏💖
      </h1>

      <p className="stagger-item" style={{ fontSize: "1.3rem", marginBottom: "1rem" }}>
        Your kindness lights up lives! 🌈✨
      </p>

      <p className="stagger-item" style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
        With your support, we’re spreading hope 🤝, building dreams 🏡, and touching hearts ❤️.
      </p>

      <p className="stagger-item" style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
        Together with <strong style={{color:'blue'}}>Khatiyani Budhijeevi Manch  (KBM)</strong>, your
        contribution helps us work towards a just, empowered, and equitable society 🕊️🚩.
      </p>

      <p className="stagger-item" style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
        Thank you for standing with <span>KBM</span>  in our mission for grassroots development,
        transparency, and people's welfare! 🇮🇳🌟
      </p>

      <div>
        <button
          onClick={() => navigate("/donationpage")}
          className="btn btn-success me-3 bt-one"
          style={{ fontSize: "20px",marginRight:'15px' }}
        >
          💝 Donate Again
        </button>
        <button
          onClick={() => navigate("/")}
          className="btn btn-primary bt-two"
          style={{ fontSize: "20px" }}
        >
          🏠 Go to Home
        </button>
      </div>
    </div>
  );
};

export default ThankYouPage;
