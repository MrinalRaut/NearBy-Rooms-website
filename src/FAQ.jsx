import React, { useState } from "react";

const faqs = [
  {
    question: "What is your refund policy?",
    answer:
      "We offer a full refund within the first 7 days of purchase. No questions asked.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach our support team via email at support@nearbyrooms.com or through the chat widget on our website.",
  },
  {
    question: "Do you offer customization options?",
    answer:
      "Yes, we offer multiple customization options based on user requirements. Contact us for more details.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes! We offer a 14-day free trial on selected plans. No credit card required.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a002c] via-[#25003d] to-[#0e001b] text-white font-sans">
      {/* Part 1: Header */}
      <header className="text-center py-16">
        <h1 className="text-5xl font-bold text-purple-300">
          Frequently Asked Questions
        </h1>
        <p className="text-lg mt-4 text-purple-200">
          Find answers to your most common questions below.
        </p>
      </header>

      {/* Part 2: FAQ Section */}
      <section className="px-4 md:px-16 mb-16">
        <div className="max-w-4xl mx-auto bg-[#1b002c] p-8 rounded-3xl shadow-2xl space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#32054f] rounded-xl overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center text-purple-100 font-semibold"
              >
                {faq.question}
                <span className="text-pink-300 text-xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-6 pb-4 text-purple-200">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Part 3: Newsletter */}
      <section className="text-center mb-16">
        <h2 className="text-3xl font-bold text-purple-300 mb-4">
          Get Updated News
        </h2>
        <p className="text-purple-200 mb-4">
          Subscribe to our newsletter for updates
        </p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-l bg-[#32054f] text-white w-64"
          />
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 rounded-r">
            ➤
          </button>
        </div>
      </section>

      {/* Part 4: Footer */}
      <footer className="bg-[#140022] py-8 text-center text-sm text-purple-400">
        <div className="mb-4">
          <p>© 2025 Nearby Rooms. All rights reserved.</p>
        </div>
        <div className="flex justify-center gap-4 text-lg">
          <a href="#" className="hover:text-white">
            LinkedIn
          </a>
          <a href="#" className="hover:text-white">
            Facebook
          </a>
          <a href="#" className="hover:text-white">
            Twitter
          </a>
        </div>
      </footer>
    </div>
  );
};

export default FAQ;
