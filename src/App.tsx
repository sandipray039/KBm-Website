import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import BecomeVolenter from "./pages/BecomeVolenter";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Volunter from "./pages/Volunter";
import DonationPage from "./pages/DonationPage";
import JoinMember from "./pages/JoinMember";
import VolunteerDetails from "./pages/VolunteerDetails";
import Aboutpage from "./pages/Aboutpage"; // This is your full detailed about page

const App = () => {
  return (
    <div>
      <div className="main-content" style={{ paddingTop: "95px" }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/details" element={<Aboutpage />} /> {/* ← sub-route */}
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/become" element={<BecomeVolenter />} />
          <Route path="/team" element={<Volunter />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donationpage" element={<DonationPage />} />
          <Route path="/memberjoin" element={<JoinMember />} />
          <Route path="/volunteer/:id" element={<VolunteerDetails />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
