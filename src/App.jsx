import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "./admin/AdminDashboard";
import Home from "./Home";
import About from "./About";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Services from "./Services";
import Ecommerce from "./Ecommerce";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
