import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import { Routes, Route, useLocation } from "react-router-dom";

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

const App = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isTablePage = location.pathname === "/tablepage"; 

  
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
          <Route path="/tablepage" element={<TablesPage />} />
          <Route path="/videogallery" element={<VideoGallery />} />
        </Routes>
      </main>
      {!isLoginPage && !isTablePage && <Footer />} 
    </div>
  );
};

export default App;
