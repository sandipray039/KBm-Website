import Header from "./Layout/Header";
import Footer from "./Layout/Footer";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cause from "./pages/Cause";
import BecomeVolenter from "./pages/BecomeVolenter";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Volunter from "./pages/Volunter";
const App = () => {
  return (
    <div>
      <div className="main-content">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/causes" element={<Cause />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/become" element={<BecomeVolenter />} />
          <Route path="/team" element={<Volunter />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
};

export default App;
