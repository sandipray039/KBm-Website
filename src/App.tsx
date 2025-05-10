import { useState, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import BecomeVolenter from "./pages/BecomeVolenter";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Volunter from "./pages/Volunter";
import DonationPage from "./pages/DonationPage";
import JoinMember from "./pages/JoinMember";
import VolunteerDetails from "./pages/VolunteerDetails";
import Aboutpage from "./pages/Aboutpage"; 
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import TablesPage from "./pages/TablesPage";
import VideoGallery from "./pages/VideoGallery";
import Events from "./pages/Events";
import './pp.css';
import MemberCardDownload from "./pages/MemberCardDownload";
import MemberCard from "./pages/MemberCard";

const App = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isTablePage = location.pathname === "/tablepage"; 

  const checkAuth = () => {
    const authData = localStorage.getItem("isAuthenticated");
    if (!authData) return false;
  
    try {
      const { value, expiry } = JSON.parse(authData);
      if (new Date().getTime() > expiry) {
        localStorage.removeItem("isAuthenticated"); 
        return false;
      }
      return value === "true"; 
    } catch (error) {
      localStorage.removeItem("isAuthenticated"); 
      return false;
    }
  };
  
  const isAuthenticated = checkAuth();
  

  // Scroll To Top Button Logic
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      {!isLoginPage && !isTablePage && <Header />}

      <main style={{ minHeight: '50vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/details" element={<Aboutpage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/become" element={<BecomeVolenter />} />
          <Route path="/team" element={<Volunter />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donationpage" element={<DonationPage />} />
          <Route path="/memberjoin" element={<JoinMember />} />
          <Route path="/volunteer/:id" element={<VolunteerDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tablepage" element={isAuthenticated ? <TablesPage /> : <Navigate to="/login" replace />} />
          <Route path="/videogallery" element={<VideoGallery />} />
          <Route path="/events" element={<Events />} />
           <Route path="/download" element={<MemberCardDownload />} />
          <Route path="/membercard" element={<MemberCard name="John Doe" id="123" assembly="Assembly A"  photoUrl="/images/gallery/2.jpg"qrCode="/path/to/qrcode.png" />} 
          />
        </Routes>
      </main>

      {!isLoginPage && !isTablePage && <Footer />}

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
            zIndex: 999,
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            fontSize: "24px",
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
          }}
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default App;
