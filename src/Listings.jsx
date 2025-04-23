// src/components/Listings.tsx
import React, { useState, useEffect } from "react";
import {
  FaWhatsapp,
  FaTelegram,
  FaMapMarkerAlt,
  FaHome,
  FaCouch,
  FaSnowflake,
  FaTree,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const Listings = () => {
  const [listings, setListings] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [activePopup, setActivePopup] = useState(null);
  const [popupType, setPopupType] = useState("");
  const [inputs, setInputs] = useState({});
  const [showFraudAlert, setShowFraudAlert] = useState(true);

  useEffect(() => {
    const data = [
      {
        id: 1,
        name: "Oberoi Sky",
        city: "Mumbai",
        location: "Borivali",
        mapLink: "https://maps.google.com?q=Borivali,Mumbai",
        rent: "₹13,000/month",
        bhk: "2 BHK",
        furnishing: "Furnished",
        ac: true,
        terrace: true,
        images: [
          "/Living_Room.jpg",
          "/Kitchen.jpg",
          "/Bedroom.jpg",
          "/Bathroom.jpg",
        ],
      },
      {
        id: 2,
        name: "Shweta Heights",
        city: "Nashik",
        location: "Pragati Nagar",
        mapLink: "https://maps.google.com?q=Pragati+Nagar,Nashik",
        rent: "₹10,500/month",
        bhk: "1 BHK",
        furnishing: "Semi-Furnished",
        ac: true,
        terrace: false,
        images: [
          "/Living_Room2.jpg",
          "/Kitchen2.jpg",
          "/Bedroom2.jpg",
          "/Bathroom2.jpg",
        ],
      },
      {
        id: 3,
        name: "Ashish Complex",
        city: "Nagpur",
        location: "Hingna",
        mapLink: "https://maps.google.com?q=Hingna,Nagpur",
        rent: "₹15,000/month",
        bhk: "3 BHK",
        furnishing: "Furnished",
        ac: false,
        terrace: true,
        images: [
          "/Living_Room3.jpg",
          "/Kitchen3.jpg",
          "/Bedroom3.jpg",
          "/Bathroom3.jpg",
        ],
      },
      {
        id: 4,
        name: "Kalpavruksh",
        city: "Pune",
        location: "Viman Nagar",
        mapLink: "https://maps.google.com?q=Viman+Nagar,Pune",
        rent: "₹12,500/month",
        bhk: "2 BHK",
        furnishing: "Semi-Furnished",
        ac: true,
        terrace: false,
        images: [
          "/Living_Room4.jpg",
          "/Kitchen4.jpg",
          "/Bedroom4.jpg",
          "/Bathroom3.jpg",
        ],
      },
    ];
    setListings(data);
  }, []);

  const handleSend = () => {
    alert(
      `${popupType === "message" ? "Message" : "Contact"} sent: ${
        inputs[activePopup] || ""
      }`
    );
    setActivePopup(null);
    setInputs({ ...inputs, [activePopup]: "" });
  };

  const listing = listings[activeIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0020] via-[#1a0033] to-[#0f0020] text-white p-4">
      <h1 className="text-3xl font-bold text-yellow-400 text-center mb-6">
        Featured Properties
      </h1>

      {showFraudAlert && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-xl p-6 w-11/12 max-w-md shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-red-600 text-2xl">⚠️</div>
              <h2 className="text-xl font-bold">Beware of Fraud</h2>
            </div>
            <p className="text-sm mb-4">
              Always be on the lookout for scams and fake listings. Avoid deals
              that seem too good to be true or ask for up-front payment.
            </p>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
              onClick={() => setShowFraudAlert(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}

      {listing && (
        <div className="flex justify-center items-center relative">
          <div className="relative bg-gradient-to-br from-[#2c1a4f] to-[#382d67] p-6 rounded-2xl shadow-lg border border-[#422c6e] max-w-xl w-full">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl text-pink-200 font-semibold">
                  {listing.name}
                </h2>
                <p className="text-sm text-pink-100">
                  <a
                    href={listing.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-300 mt-1 hover:underline"
                  >
                    <FaMapMarkerAlt className="mr-2" />
                    {listing.location}, {listing.city}
                  </a>
                </p>
              </div>
              <div className="text-green-400 text-lg font-bold">
                {listing.rent}
              </div>
            </div>

            {/* Image swipe with arrows */}
            <div className="relative mt-4">
              <img
                src={listing.images[imageIndex]}
                alt="property"
                className="w-full h-56 object-cover rounded-lg"
              />
              <button
                onClick={() =>
                  setImageIndex(
                    (prev) =>
                      (prev - 1 + listing.images.length) % listing.images.length
                  )
                }
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={() =>
                  setImageIndex((prev) => (prev + 1) % listing.images.length)
                }
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full"
              >
                <FaChevronRight />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4 text-sm">
              <div className="bg-white/10 rounded p-2 flex items-center gap-2 text-pink-100">
                <FaHome /> {listing.bhk}
              </div>
              <div className="bg-white/10 rounded p-2 flex items-center gap-2 text-pink-100">
                <FaCouch /> {listing.furnishing}
              </div>
              {listing.ac && (
                <div className="bg-white/10 rounded p-2 flex items-center gap-2 text-pink-100">
                  <FaSnowflake /> AC
                </div>
              )}
              {listing.terrace && (
                <div className="bg-white/10 rounded p-2 flex items-center gap-2 text-pink-100">
                  <FaTree /> Terrace
                </div>
              )}
            </div>

            <div className="flex justify-between items-center mt-6">
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setPopupType("message");
                    setActivePopup(activeIndex);
                  }}
                  className="bg-white text-black px-4 py-2 text-sm rounded hover:bg-gray-200"
                >
                  Message
                </button>
                <button
                  onClick={() => {
                    setPopupType("contact");
                    setActivePopup(activeIndex);
                  }}
                  className="bg-[#5ecbff] px-4 py-2 text-sm rounded text-white hover:bg-[#3fbfff]"
                >
                  Contact
                </button>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  className="bg-green-500 p-3 rounded-full"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://t.me/yourtelegramusername"
                  target="_blank"
                  className="bg-blue-500 p-3 rounded-full"
                >
                  <FaTelegram />
                </a>
              </div>
            </div>
          </div>

          {/* Listing dot swipe (outside right) */}
          <div className="flex flex-col justify-center items-center ml-4 absolute right-[-2rem] top-1/2 transform -translate-y-1/2">
            {listings.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveIndex(i);
                  setImageIndex(0); // Reset image index when switching listing
                }}
                className={`w-3 h-3 mb-2 rounded-full transition-all ${
                  i === activeIndex ? "bg-yellow-400 scale-125" : "bg-white/30"
                }`}
              ></button>
            ))}
          </div>
        </div>
      )}

      {activePopup !== null && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center z-50">
          <div className="bg-[#220033] p-6 rounded-xl w-11/12 max-w-md">
            <h3 className="text-xl mb-4 text-white">
              {popupType === "message" ? "Send a Message" : "Contact the Owner"}
            </h3>
            <textarea
              rows={4}
              className="w-full p-2 rounded bg-white/10 text-white"
              placeholder={
                popupType === "message"
                  ? "Type your message..."
                  : "Enter your contact info..."
              }
              value={inputs[activePopup] || ""}
              onChange={(e) =>
                setInputs({ ...inputs, [activePopup]: e.target.value })
              }
            ></textarea>
            <div className="flex justify-end mt-4 gap-2">
              <button
                onClick={() => setActivePopup(null)}
                className="bg-red-500 text-white py-2 px-4 rounded"
              >
                Close
              </button>
              <button
                onClick={handleSend}
                className="bg-green-500 text-white py-2 px-4 rounded"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Listings;
