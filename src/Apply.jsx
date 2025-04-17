import React, { useState } from "react";

export default function Apply() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    message: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Form Data:", formData);
  };

  return (
    <div className="p-10 min-h-screen bg-gradient-to-b from-[#0f0028] to-[#22004c] text-white">
      <h1 className="text-4xl font-bold text-yellow-400 mb-6 text-center">
        Apply for a Role
      </h1>

      {submitted ? (
        <div className="text-center text-green-400 text-2xl font-semibold mt-20">
          🎉 Application Submitted Successfully!
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto space-y-6 bg-[#1a0033] p-8 rounded-xl shadow-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-[#22004c] border border-purple-700 text-white placeholder-gray-400"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-[#22004c] border border-purple-700 text-white placeholder-gray-400"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="role"
            placeholder="Role You're Applying For"
            className="w-full p-3 rounded bg-[#22004c] border border-purple-700 text-white placeholder-gray-400"
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Why are you a good fit?"
            rows="4"
            className="w-full p-3 rounded bg-[#22004c] border border-purple-700 text-white placeholder-gray-400"
            onChange={handleChange}
            required
          />
          <input
            type="file"
            name="resume"
            className="w-full text-gray-300"
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full py-3 bg-yellow-400 text-black font-bold rounded hover:bg-yellow-300 transition"
          >
            Submit Application
          </button>
        </form>
      )}
    </div>
  );
}
