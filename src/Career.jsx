import React from "react";
import { useNavigate } from "react-router-dom";

function Career() {
  const navigate = useNavigate(); // ✅ Correct placement inside component

  const jobs = [
    {
      title: "Frontend Developer (React + Tailwind)",
      type: "Full-Time / Remote",
      desc: "Build user-friendly interfaces that power our web platform.",
    },
    {
      title: "Customer Success Intern",
      type: "Internship / Remote",
      desc: "Help our users get the most out of Nearby Rooms.",
    },
    {
      title: "Business Development Executive",
      type: "Full-Time / On-Site (Mumbai)",
      desc: "Drive partnerships and onboard property owners.",
    },
    {
      title: "UX/UI Designer (Intern)",
      type: "Internship / Remote",
      desc: "Design intuitive, beautiful experiences for house hunters.",
    },
  ];

  return (
    <div className="px-6 py-12 text-white bg-gradient-to-b from-[#0f0028] to-[#22004c]">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-yellow-400 mb-4">
          Careers at Nearby Rooms
        </h1>
        <p className="max-w-2xl mx-auto text-gray-300 text-lg">
          We're building the future of house hunting. Join our passionate,
          creative team and help shape amazing living experiences for everyone.
        </p>
      </div>

      {/* Perks Section */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mb-16">
        <div className="bg-[#1a0033] p-6 rounded-xl shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-semibold text-blue-400 mb-2">
            🌍 Remote Friendly
          </h3>
          <p className="text-gray-300">
            Work from anywhere, with flexible hours and full autonomy.
          </p>
        </div>
        <div className="bg-[#1a0033] p-6 rounded-xl shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-semibold text-green-400 mb-2">
            📈 Career Growth
          </h3>
          <p className="text-gray-300">
            Learn from industry leaders, level up your skills, and grow fast.
          </p>
        </div>
        <div className="bg-[#1a0033] p-6 rounded-xl shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-semibold text-pink-400 mb-2">
            🎉 Fun Team Culture
          </h3>
          <p className="text-gray-300">
            Team bonding, game nights, and a culture that values you.
          </p>
        </div>
      </div>

      {/* Job Listings */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-white mb-6">
          🚀 Current Openings
        </h2>
        <div className="space-y-6">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className="bg-[#1a0033] p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-yellow-300">
                {job.title}
              </h3>
              <p className="text-sm text-gray-400">{job.type}</p>
              <p className="text-gray-300 mt-2">{job.desc}</p>
              <button
                onClick={() => navigate("/apply")}
                className="mt-4 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 text-white font-medium"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-20">
        <h3 className="text-2xl font-semibold mb-3 text-white">
          Didn't find a role that fits?
        </h3>
        <p className="text-gray-400 mb-4">
          We're always on the lookout for talent. Send us your resume anyway!
        </p>
        <a
          href="mailto:careers@nearbyrooms.com"
          className="inline-block px-6 py-3 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-300 transition"
        >
          Send Resume
        </a>
      </div>
    </div>
  );
}

export default Career;
