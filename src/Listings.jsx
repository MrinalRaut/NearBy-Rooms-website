// src/components/Listings.jsx
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

const Listings = () => {
    const [listings, setListings] = useState([]);
    const [filteredListings, setFilteredListings] = useState([]);
    const [filtersOpen, setFiltersOpen] = useState(false);
    const [activePopup, setActivePopup] = useState(null);
    const [popupType, setPopupType] = useState("");
    const [inputs, setInputs] = useState({});
    const [showFraudAlert, setShowFraudAlert] = useState(true);
    const [imageIndexes, setImageIndexes] = useState({});
    const [filters, setFilters] = useState({
        sort: "",
        city: "",
        bhk: "",
        rentRange: { min: "", max: "" },
        furnishing: "",
        tenantPreference: "",
    });

    useEffect(() => {
        const data = [
            {
                id: 1,
                name: "Oberoi Sky",
                city: "Mumbai",
                location: "Borivali",
                mapLink: "https://maps.google.com?q=Borivali,Mumbai",
                rent: "₹13,000/month",
                rentValue: 13000,
                bhk: "2 BHK",
                furnishing: "Furnished",
                ac: true,
                terrace: true,
                images: [
                    "/Living_Room.jpg",
                    "/Kitchen.jpg",
                    "/Bedroom.jpg",
                    "/Bedroom4.jpg",
                    "/Bathroom.jpg",
                ],
                tenantPreference: "Any",
            },
            {
                id: 2,
                name: "Shweta Heights",
                city: "Nashik",
                location: "Pragati Nagar",
                mapLink: "https://maps.google.com?q=Pragati+Nagar,Nashik",
                rent: "₹10,500/month",
                rentValue: 10500,
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
                tenantPreference: "Any",
            },
            {
                id: 3,
                name: "Ashish Complex",
                city: "Nagpur",
                location: "Hingna",
                mapLink: "https://maps.google.com?q=Hingna,Nagpur",
                rent: "₹15,000/month",
                rentValue: 15000,
                bhk: "3 BHK",
                furnishing: "Furnished",
                ac: false,
                terrace: true,
                images: [
                    "/Living_Room3.jpg",
                    "/Kitchen3.jpg",
                    "/Bedroom3.jpg",
                    "/Bedroom.jpg",
                    "/Bedroom4.jpg",
                    "/Bathroom3.jpg",
                ],
                tenantPreference: "Male",
            },
            {
                id: 4,
                name: "Kalpavruksh",
                city: "Pune",
                location: "Viman Nagar",
                mapLink: "https://maps.google.com?q=Viman+Nagar,Pune",
                rent: "₹12,500/month",
                rentValue: 12500,
                bhk: "2 BHK",
                furnishing: "Semi-Furnished",
                ac: true,
                terrace: false,
                images: [
                    "/Living_Room4.jpg",
                    "/Kitchen4.jpg",
                    "/Bedroom4.jpg",
                    "/Bedroom2.jpg",
                    "/Bathroom3.jpg",
                ],
                tenantPreference: "Female",
            },
        ];
        setListings(data);
        setFilteredListings(data);
    }, []);

    useEffect(() => {
        let sortedAndFiltered = [...listings];

        if (filters.sort === "Low to High") {
            sortedAndFiltered.sort((a, b) => a.rentValue - b.rentValue);
        } else if (filters.sort === "High to Low") {
            sortedAndFiltered.sort((a, b) => b.rentValue - a.rentValue);
        }

        if (filters.city) {
            sortedAndFiltered = sortedAndFiltered.filter((l) => l.city === filters.city);
        }

        if (filters.bhk) {
            sortedAndFiltered = sortedAndFiltered.filter((l) => l.bhk === filters.bhk);
        }

        if (filters.furnishing) {
            sortedAndFiltered = sortedAndFiltered.filter(
                (l) => l.furnishing === filters.furnishing
            );
        }

        if (filters.tenantPreference && filters.tenantPreference !== "Any") {
            sortedAndFiltered = sortedAndFiltered.filter(
                (l) => l.tenantPreference === filters.tenantPreference
            );
        }

        if (filters.rentRange.min !== "" && !isNaN(filters.rentRange.min)) {
            sortedAndFiltered = sortedAndFiltered.filter(
                (l) => l.rentValue >= parseInt(filters.rentRange.min)
            );
        }

        if (filters.rentRange.max !== "" && !isNaN(filters.rentRange.max)) {
            sortedAndFiltered = sortedAndFiltered.filter(
                (l) => l.rentValue <= parseInt(filters.rentRange.max)
            );
        }

        setFilteredListings(sortedAndFiltered);
    }, [filters, listings]);

    useEffect(() => {
        const intervalIds = {};

        filteredListings.forEach((listing, index) => {
            const intervalId = setInterval(() => {
                setImageIndexes((prevIndexes) => {
                    const currentIndex = prevIndexes[index] || 0;
                    const nextIndex = (currentIndex + 1) % listing.images.length;
                    return { ...prevIndexes, [index]: nextIndex };
                });
            }, 3000); // Change image every 3 seconds

            intervalIds[index] = intervalId;
        });

        // Cleanup function to clear intervals when the component unmounts or filteredListings change
        return () => {
            Object.values(intervalIds).forEach(clearInterval);
        };
    }, [filteredListings]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => {
            if (name.startsWith("rentRange.")) {
                const [, rangeType] = name.split(".");
                return {
                    ...prevFilters,
                    rentRange: {
                        ...prevFilters.rentRange,
                        [rangeType]: value,
                    },
                };
            } else {
                return {
                    ...prevFilters,
                    [name]: value,
                };
            }
        });
    };

    const handleSend = () => {
        alert(
            `${popupType === "message" ? "Message" : "Contact"} sent: ${
                inputs[activePopup] || ""
            }`
        );
        setActivePopup(null);
        setInputs({ ...inputs, [activePopup]: "" });
    };

    const handleImageChange = (index, direction, max) => {
        setImageIndexes((prev) => {
            const current = prev[index] ?? 0;
            const nextIndex = (current + direction + max) % max;
            return { ...prev, [index]: nextIndex };
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0f0020] via-[#1a0033] to-[#0f0020] text-white p-4 overflow-y-auto">
            <div className="flex items-center justify-start mb-6">
                <button
                    className="lg:hidden text-white px-3 py-2 rounded border border-white ml-4"
                    onClick={() => setFiltersOpen(!filtersOpen)}
                >
                    ☰
                </button>
                <h1 className="text-3xl font-bold text-yellow-400 text-center mb-6 flex-1">
                    Featured Properties
                </h1>
            </div>

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

            <div className="flex">
                <div className={`w-64 pr-4 ${filtersOpen ? "block" : "hidden"} lg:block`}>
                    <div className="bg-[#2c1a4f] p-6 rounded-2xl border border-[#5c3b91] text-pink-200">
                        <h2 className="text-lg font-semibold mb-4 text-pink-300">Filters</h2>

                        <div className="mb-4">
                            <label className="block mb-2 text-sm text-pink-200">Sort By</label>
                            <select
                                name="sort"
                                value={filters.sort}
                                onChange={handleInputChange}
                                className="w-full bg-[#2c1a4f] text-white p-2 rounded border border-[#422c6e] focus:outline-none focus:ring-2 focus:ring-[#5ecbff] focus:border-[#5ecbff]"
                            >
                                <option value="">-- Select --</option>
                                <option>High to Low</option>
                                <option>Low to High</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block mb-1 text-sm text-pink-100">City</label>
                            <select
                                name="city"
                                value={filters.city}
                                onChange={handleInputChange}
                                className="w-full bg-[#2c1a4f] text-white p-2 rounded text-white border border-[#422c6e] focus:outline-none focus:ring-2 focus:ring-[#5ecbff] focus:border-[#5ecbff]"
                            >
                                <option value="">-- Select --</option>
                                <option>Mumbai</option>
                                <option>Pune</option>
                                <option>Nashik</option>
                                <option>Nagpur</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block mb-1 text-sm text-pink-100">Property Type</label>
                            <select
                                name="bhk"
                                value={filters.bhk}
                                onChange={handleInputChange}
                                className="w-full bg-[#2c1a4f] text-white p-2 rounded text-white border border-[#422c6e] focus:outline-none focus:ring-2 focus:ring-[#5ecbff] focus:border-[#5ecbff]"
                            >
                                <option value="">-- Select --</option>
                                <option>1 BHK</option>
                                <option>2 BHK</option>
                                <option>3 BHK</option>
                                <option>Studio</option> {/* Added Studio option */}
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block mb-1 text-sm text-pink-100">Rent Range (₹)</label>
                            <div className="flex items-center space-x-2">
                                <input
                                    type="number"
                                    name="rentRange.min"
                                    value={filters.rentRange.min}
                                    onChange={handleInputChange}
                                    placeholder="Min"
                                    className="w-1/2 bg-[#2c1a4f] text-white p-2 rounded border border-[#422c6e] focus:outline-none focus:ring-2 focus:ring-[#5ecbff] focus:border-[#5ecbff] text-sm"
                                />
                                <span className="text-pink-100">-</span>
                                <input
                                    type="number"
                                    name="rentRange.max"
                                    value={filters.rentRange.max}
                                    onChange={handleInputChange}
                                    placeholder="Max"
                                    className="w-1/2 bg-[#2c1a4f] text-white p-2 rounded border border-[#422c6e] focus:outline-none focus:ring-2 focus:ring-[#5ecbff] focus:border-[#5ecbff] text-sm"
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="block mb-1 text-sm text-pink-100">Furnishing Status</label>
                            <select
                                name="furnishing"
                                value={filters.furnishing}
                                onChange={handleInputChange}
                                className="w-full bg-[#2c1a4f] text-white p-2 rounded text-white border border-[#422c6e] focus:outline-none focus:ring-2 focus:ring-[#5ecbff] focus:border-[#5ecbff]"
                            >
                                <option value="">-- Select --</option>
                                <option>Furnished</option>
                                <option>Semi-Furnished</option>
                                <option>Unfurnished</option>
                            </select>
                        </div>

                        <div>
                            <label className="block mb-1 text-sm text-pink-100">Tenant Preference</label>
                            <select
                                name="tenantPreference"
                                value={filters.tenantPreference}
                                onChange={handleInputChange}
                                className="w-full bg-[#2c1a4f] text-white p-2 rounded text-white border border-[#422c6e] focus:outline-none focus:ring-2 focus:ring-[#5ecbff] focus:border-[#5ecbff]"
                            >
                                <option value="">-- Select --</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Any</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Centered Listings */}
                <div className="flex-1 space-y-12 pb-6 md:ml-10 mx-auto max-w-4xl">
                    {filteredListings.map((listing, index) => (
                        <div
                            key={listing.id}
                            className="relative bg-gradient-to-br from-[#2c1a4f] to-[#382d67] p-6 rounded-2xl shadow-lg border border-[#422c6e] max-w-lg mx-auto"
                        >
                            {/* Listing content unchanged */}
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

                            <div className="relative mt-4">
                                <img
                                    src={listing.images[imageIndexes[index] ?? 0]}
                                    alt="property"
                                    className="w-full h-56 object-cover rounded-lg"
                                />
                                <button
                                    onClick={() =>
                                        handleImageChange(index, -1, listing.images.length)
                                    }
                                    className="absolute top-1/2 left-2 transform -translate-y--1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full"
                                >
                                    ‹
                                </button>
                                <button
                                    onClick={() =>
                                        handleImageChange(index, 1, listing.images.length)
                                    }
                                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full"
                                >
                                    ›
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
                                            setActivePopup(index);
                                        }}
                                        className="bg-white text-black px-4 py-2 text-sm rounded hover:bg-gray-200"
                                    >
                                        Message
                                    </button>
                                    <button
                                        onClick={() => {
                                            setPopupType("contact");
                                            setActivePopup(index);
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
                    ))}
                </div>
            </div>

            {activePopup !== null && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                    <div className="bg-white text-black rounded-xl p-6 w-11/12 max-w-md shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">
                            {popupType === "message" ? "Send a Message" : "Contact"}
                        </h2>
                        <textarea
                            value={inputs[activePopup] || ""}
                            onChange={(e) =>
                                setInputs({ ...inputs, [activePopup]: e.target.value })
                            }
                            className="w-full p-3 mb-4 border rounded"
                            rows="3"
                            placeholder={
                                popupType === "message"
                                    ? "Your message..."
                                    : "Your contact details..."
                            }
                        />
                        <div className="flex justify-end">
                            <button
                                className="bg-gray-300 text-black px-4 py-2 rounded mr-2 hover:bg-gray-400"
                                onClick={() => setActivePopup(null)}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                                onClick={handleSend}
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
