import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import HardSolutions from "./pages/solutions/Hard-Solutions";
import SoftSolutions from "./pages/solutions/Soft-Solutions";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/it-hardware-solutions/:slug" element={<HardSolutions />} />
          <Route exact path="/it-soft-solutions/:slug" element={<SoftSolutions />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about-us" element={<About />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
