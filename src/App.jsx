import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Sale from "./pages/Sale";
import NewArrivals from "./pages/Collections";
import Collections from "./pages/Collections";


export default function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <main className="pt-20">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/collections" element={<Collections />} />
        </Routes>


      </main>

      <Footer />

    </BrowserRouter>
  );
}
