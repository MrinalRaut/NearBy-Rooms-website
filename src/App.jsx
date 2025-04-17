import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Listings from "./Listings";
import Career from "./Career";
import Contact from "./Contact";
import FAQ from "./FAQ";
import Apply from "./Apply"; // Optional

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#1e0036] text-white">
        {/* Top Navbar */}
        <nav className="bg-[#2d0054] p-4 flex justify-between items-center shadow-md">
          {/* Logo / Website Name */}
          <div className="text-2xl font-bold text-yellow-400">Nearby Rooms</div>

          {/* Links */}
          <div className="space-x-6 text-lg font-medium">
            <Link to="/" className="hover:text-yellow-400 transition">
              Listings
            </Link>
            <Link to="/career" className="hover:text-yellow-400 transition">
              Career
            </Link>
            <Link to="/contact" className="hover:text-yellow-400 transition">
              Contact
            </Link>
            <Link to="/faq" className="hover:text-yellow-400 transition">
              FAQ
            </Link>
          </div>
        </nav>

        {/* Page content */}
        <main className="p-6">
          <Routes>
            <Route path="/" element={<Listings />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/apply" element={<Apply />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
