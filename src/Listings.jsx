import React, { useState, useEffect } from "react";
import {
  FaWhatsapp,
  FaTelegram,
  FaMapMarkerAlt,
  FaHome,
  FaCouch,
  FaSnowflake,
  FaTree,
} from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Listings = () => {
  const [listings, setListings] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activePopup, setActivePopup] = useState(null);
  const [popupType, setPopupType] = useState("");
  const [inputs, setInputs] = useState({});
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    // Simulate API fetch
    const fetchData = async () => {
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
    };
    fetchData();
  }, []);

  const handleSend = () => {
    alert(
      `${popupType === "message" ? "Message" : "Contact"} sent: ${
        inputs[currentIndex] || ""
      }`
    );
    setActivePopup(null);
    setInputs({ ...inputs, [currentIndex]: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0020] via-[#1a0033] to-[#0f0020] text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-yellow-400 mb-4">
        Featured Property
      </h1>

      {/* Card */}
      {listings.length > 0 && (
        <div className="relative w-full max-w-xl h-[600px] bg-gradient-to-br from-[#2c1a4f] to-[#382d67] p-6 rounded-2xl shadow-lg border border-[#422c6e]">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl text-pink-200 font-semibold">
                {listings[currentIndex].name}
              </h2>
              <p className="text-sm text-pink-100">
                <a
                  href={listings[currentIndex].mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-300 mt-1 hover:underline"
                >
                  <FaMapMarkerAlt className="mr-2" />{" "}
                  {listings[currentIndex].location},{" "}
                  {listings[currentIndex].city}
                </a>
              </p>
            </div>
            <div className="text-green-400 text-lg font-bold">
              {listings[currentIndex].rent}
            </div>
          </div>

          {/* Image Slider */}
          <div className="relative mt-4">
            <img
              src={listings[currentIndex].images[imageIndex]}
              alt="property"
              className="w-full h-56 object-cover rounded-lg"
            />
            <button
              onClick={() =>
                setImageIndex(
                  (prev) =>
                    (prev - 1 + listings[currentIndex].images.length) %
                    listings[currentIndex].images.length
                )
              }
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full"
            >
              <IoIosArrowBack />
            </button>
            <button
              onClick={() =>
                setImageIndex(
                  (prev) => (prev + 1) % listings[currentIndex].images.length
                )
              }
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full"
            >
              <IoIosArrowForward />
            </button>
          </div>

          {/* Details */}
          <div className="grid grid-cols-2 gap-3 mt-4 text-sm">
            <div className="bg-white/10 rounded p-2 flex items-center gap-2 text-pink-100">
              <FaHome /> {listings[currentIndex].bhk}
            </div>
            <div className="bg-white/10 rounded p-2 flex items-center gap-2 text-pink-100">
              <FaCouch /> {listings[currentIndex].furnishing}
            </div>
            {listings[currentIndex].ac && (
              <div className="bg-white/10 rounded p-2 flex items-center gap-2 text-pink-100">
                <FaSnowflake /> AC
              </div>
            )}
            {listings[currentIndex].terrace && (
              <div className="bg-white/10 rounded p-2 flex items-center gap-2 text-pink-100">
                <FaTree /> Terrace
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center mt-6">
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setPopupType("message");
                  setActivePopup(true);
                }}
                className="bg-white text-black px-4 py-2 text-sm rounded hover:bg-gray-200"
              >
                Message
              </button>
              <button
                onClick={() => {
                  setPopupType("contact");
                  setActivePopup(true);
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
      )}

      {/* Dot Navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {listings.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full ${
              currentIndex === i ? "bg-yellow-400" : "bg-white/30"
            }`}
            onClick={() => {
              setCurrentIndex(i);
              setImageIndex(0);
            }}
          ></button>
        ))}
      </div>

      {/* Popup Modal */}
      {activePopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center z-50">
          <div className="bg-[#220033] p-6 rounded-xl w-11/12 max-w-md">
            <h3 className="text-xl mb-4 text-white">
              {popupType === "message" ? "Send a Message" : "Contact the Owner"}
            </h3>
            <textarea
              rows="4"
              className="w-full p-2 rounded bg-white/10 text-white"
              placeholder={
                popupType === "message"
                  ? "Type your message..."
                  : "Enter your contact info..."
              }
              value={inputs[currentIndex] || ""}
              onChange={(e) =>
                setInputs({ ...inputs, [currentIndex]: e.target.value })
              }
            ></textarea>
            <div className="flex justify-end mt-4 gap-2">
              <button
                onClick={() => setActivePopup(false)}
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
