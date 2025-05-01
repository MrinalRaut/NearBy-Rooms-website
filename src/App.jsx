import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Listings from "./Listings";
import Career from "./Career";
import Contact from "./Contact";
import FAQ from "./FAQ";
import Apply from "./Apply"; // Optional

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Router>
      <div className="min-h-screen bg-[#1e0036] text-white">
        {/* Top Navbar */}
        <nav className="bg-[#2d0054] p-4 flex flex-col md:flex-row md:items-center md:justify-between shadow-md relative gap-4">
          {/* Left Section: Logo + Search */}
          <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-start">
            {/* Logo */}
            <div className="text-2xl font-bold text-yellow-400">
              Nearby Rooms
            </div>

            {/* Search Bar with Icon */}
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-52 md:w-64 px-3 py-1 pr-10 rounded-md text-black placeholder-gray-500 focus:outline-none"
              />
              <svg
                className="w-5 h-5 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.5 10.5a7.5 7.5 0 0013.15 6.15z"
                />
              </svg>
            </div>

            {/* Hamburger Menu Button (Mobile) */}
            <div className="md:hidden ml-auto">
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
          </div>

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

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="w-full bg-[#2d0054] flex flex-col items-center space-y-4 py-4 md:hidden z-50">
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
            <Route path="/" element={<Listings searchQuery={searchQuery} />} />
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
