import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What documents do I need to rent a house?",
    answer:
      "Typically, you need ID proof, income verification, and a rental application.",
  },
  {
    question: "Can I schedule a virtual house tour?",
    answer: "Yes! Many properties offer virtual tours for your convenience.",
  },
  {
    question: "Are utilities included in rent?",
    answer: "It depends on the property. Always check with the landlord.",
  },
  {
    question: "How do I report a maintenance issue?",
    answer:
      "Contact your property manager or use the online maintenance portal.",
  },
  {
    question: "Is a credit check required for renting?",
    answer:
      "Yes, most landlords require a credit check to assess financial reliability.",
  },
];

export default function App() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 to-indigo-900 text-white flex flex-col items-center p-6">
      {/* Header */}
      <h1 className="text-5xl font-bold mb-2">FAQ</h1>
      <img
        src="/faq.png"
        alt="FAQ Mascot"
        className="w-28 h-28 rounded-full shadow-xl mb-2"
      />
      <p className="text-lg text-center max-w-xl mb-10">
        Everything you need to know before renting or buying a new place.
        <br />
        Click a question to see more!
      </p>

      {/* FAQ Section */}
      <div className="w-full max-w-2xl space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-purple-600 rounded-xl shadow-md overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-4 font-semibold text-lg hover:bg-purple-700 focus:outline-none"
            >
              {faq.question}
            </button>
            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="px-6 pb-4 text-gray-100"
              >
                {faq.answer}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-sm text-gray-300 space-y-3">
        <div className="flex justify-center space-x-5 text-xl mb-1">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:text-white" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter className="hover:text-white" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook className="hover:text-white" />
          </a>
        </div>
        <p>© 2025 Nearby Rooms. All rights reserved.</p>
      </footer>
    </div>
  );
}
