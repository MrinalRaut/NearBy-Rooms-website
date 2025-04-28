import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Listings from "./Listings";
import Career from "./Career";
import Contact from "./Contact";
import FAQ from "./FAQ";
import Apply from "./Apply"; // Optional

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-[#1e0036] text-white">
        {/* Top Navbar */}
        <nav className="bg-[#2d0054] p-4 flex justify-between items-center shadow-md relative">
          {/* Logo / Website Name */}
          <div className="text-2xl font-bold text-yellow-400">Nearby Rooms</div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 text-lg font-medium">
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

          {/* Hamburger Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <svg
                className="w-8 h-8 text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="absolute top-full right-0 w-full bg-[#2d0054] flex flex-col items-center space-y-4 py-4 md:hidden z-50">
              <Link
                to="/"
                className="hover:text-yellow-400 transition"
                onClick={() => setMenuOpen(false)}
              >
                Listings
              </Link>
              <Link
                to="/career"
                className="hover:text-yellow-400 transition"
                onClick={() => setMenuOpen(false)}
              >
                Career
              </Link>
              <Link
                to="/contact"
                className="hover:text-yellow-400 transition"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/faq"
                className="hover:text-yellow-400 transition"
                onClick={() => setMenuOpen(false)}
              >
                FAQ
              </Link>
            </div>
          )}
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
