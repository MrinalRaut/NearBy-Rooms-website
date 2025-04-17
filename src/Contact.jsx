import React from "react";

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a002c] via-[#25003d] to-[#0e001b] text-white font-sans">
      {/* Part 1: Header */}
      <header className="text-center py-16">
        <h1 className="text-5xl font-bold text-purple-300">Contact Us</h1>
        <p className="text-lg mt-4 text-purple-200">
          Get in touch with Nearby Rooms!
        </p>
      </header>

      {/* Part 2 & 3: Info + Form */}
      <section className="flex flex-col md:flex-row justify-center items-start px-4 md:px-16 gap-10 mb-16">
        {/* Part 2: Info Box */}
        <div className="bg-[#24003f] p-8 rounded-lg shadow-lg w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-6 text-pink-300">
            Get in Touch
          </h2>
          <div className="space-y-4 text-purple-100">
            <div>
              <strong>Location:</strong>
              <p>Nearby Rooms, Bangalore</p>
            </div>
            <div>
              <strong>Phone:</strong>
              <p>+91 9876543210</p>
            </div>
            <div>
              <strong>Email:</strong>
              <p>hello@nearbyrooms.com</p>
            </div>
            <div>
              <strong>Business Hours:</strong>
              <p>Mon - Fri: 9:00 AM to 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* Part 3: Contact Form */}
        <div className="bg-[#1b002c] p-8 rounded-lg shadow-lg w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-6 text-blue-300">
            Send Message
          </h2>
          <form className="space-y-4 flex flex-col">
            <input
              className="bg-[#32054f] p-3 rounded text-white"
              placeholder="Name"
            />
            <input
              className="bg-[#32054f] p-3 rounded text-white"
              placeholder="Email"
            />
            <input
              className="bg-[#32054f] p-3 rounded text-white"
              placeholder="Subject"
            />
            <textarea
              className="bg-[#32054f] p-3 rounded text-white"
              rows="4"
              placeholder="Message"
            />
            <input type="file" className="text-sm text-purple-200" />
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 py-2 px-6 rounded hover:opacity-90 transition-all">
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Part 4: Map */}
      <section className="mb-16 px-4 md:px-16">
        <iframe
          className="w-full h-80 rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62280.24148254612!2d77.5650137!3d12.9344567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c7dd87a7bb%3A0x4d7b5a5b1fbc8031!2sBangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1644132123456!5m2!1sen!2sin"
          loading="lazy"
        ></iframe>
      </section>

      {/* Part 5: Newsletter */}
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

      {/* Part 6: Footer */}
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
}

export default Contact;
