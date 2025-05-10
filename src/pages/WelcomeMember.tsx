import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

gsap.registerPlugin();

interface WelcomeMemberProps {
  memberName?: string;
  onBackToHome?: () => void;
}

const WelcomeMember: React.FC<WelcomeMemberProps> = ({ memberName }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stagger-item", {
        y: 50,
        opacity: 0,
        duration: 2,
        delay: 0.3,
        ease: "power3.out",
        stagger: 0.2,
        clearProps: "transform,opacity",
      });
      gsap.from(".btn-one", {
        x: -150,
        opacity: 0,
        duration: 2,
        delay: 0.8,
        ease: "power3.out",
        clearProps: "transform,opacity",
      });
      gsap.from(".btn-two", {
        x: 150,
        opacity: 0,
        duration: 2,
        delay: 0.8,
        ease: "power3.out",
        clearProps: "transform,opacity",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="container">
      <div className="row" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
        <h1 className="stagger-item welcome-title" style={{ fontSize: '2.8rem', fontWeight: 700, color: '#003366', marginBottom: '1.5rem' }}>
          🎊 Welcome  {memberName || 'New Member'}! 🎉
        </h1>
        <p className="stagger-item welcome-text" style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>
          You’ve successfully joined our community! 🥳
        </p>
        <p className="stagger-item welcome-text" style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
          Need help? Visit our support center or reach out to our team anytime. We’re here to assist you every step of the way.
        </p>
        <div className="welcome-actions" style={{ marginTop: '2rem' }}>
      <Link to="/" className="btn btn-primary btn-secondary btn-one" style={{fontSize:'1.5vw'}}>Go to Home </Link>
          <Link to="/home" className="btn btn-secondary btn-two" style={{ fontSize: '20px' }}>
            🔍 Browse Features
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomeMember;
