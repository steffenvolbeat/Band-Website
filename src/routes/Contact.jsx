import React from "react";
import useFetchJSON from "../hooks/useFetchJSON";

export default function Contact() {
  const { data: band } = useFetchJSON("/data/band.json");
  const contactBackgroundImage = "/assets/infected-Rain-Contact.jpg";

  return (
    <div className="relative">
      {/* Fixed Background Image with Parallax Effect - positioned below header */}
      <div
        className="fixed w-full bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${contactBackgroundImage})`,
          backgroundSize: "60%",
          backgroundPosition: "center center",
          top: "200px",
          bottom: "0",
          left: "0",
          right: "0",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10 min-h-screen">
        <article className="max-w-6xl mx-auto p-4">
          {/* Top spacing to show background initially */}
          <div className="h-32"></div>

          {/* Header Section */}
          <header className="mb-12 bg-black/40 backdrop-blur-sm p-8 rounded-lg shadow-xl text-center">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
              CONTACT {band?.name?.toUpperCase() || ""}
            </h1>
            <p className="text-xl text-gray-300">
              Get in touch with us for bookings, press inquiries, and more
            </p>
          </header>

          {/* Contact Information Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Booking Information */}
            <section className="bg-black/40 backdrop-blur-sm p-8 rounded-lg shadow-xl">
              <h2 className="text-2xl font-bold text-purple-400 mb-6 text-center">
                🎤 BOOKING
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    NAPALM EVENTS
                  </h3>
                  <p className="text-gray-300 mb-2">Thorsten Harm</p>
                  <a
                    href="mailto:THORSTEN.HARM@NAPALM-EVENTS.COM"
                    className="text-blue-400 hover:text-blue-300 transition-colors break-all"
                  >
                    Exemple@NAPALM-EVENTS.COM
                  </a>
                </div>
              </div>
            </section>

            {/* Artist Representative */}
            <section className="bg-black/40 backdrop-blur-sm p-8 rounded-lg shadow-xl">
              <h2 className="text-2xl font-bold text-purple-400 mb-6 text-center">
                🎸 ARTIST REPRESENTATIVE
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    ADRIAN KOVYN
                  </h3>
                  <a
                    href="mailto:ADRIAN@KOVYN.CO"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Example@Lorem.CO
                  </a>
                </div>
              </div>
            </section>

            {/* General Contact */}
            <section className="bg-black/40 backdrop-blur-sm p-8 rounded-lg shadow-xl md:col-span-2 lg:col-span-1">
              <h2 className="text-2xl font-bold text-purple-400 mb-6 text-center">
                ✉️ GENERAL CONTACT
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    General Inquiries
                  </h3>
                  <a
                    href="mailto:Example@INFECTEDRAIN.COM"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Example@INFECTEDRAIN.COM
                  </a>
                </div>
              </div>
            </section>
          </div>

          {/* Social Media Section */}
          <section className="bg-black/40 backdrop-blur-sm p-8 rounded-lg shadow-xl mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              FOLLOW US
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
              <a
                href="#"
                className="bg-purple-600 hover:bg-purple-500 text-white p-4 rounded-lg transition-colors"
              >
                <div className="text-2xl mb-2">📘</div>
                <div className="font-semibold">Facebook</div>
              </a>
              <a
                href="#"
                className="bg-red-600 hover:bg-red-500 text-white p-4 rounded-lg transition-colors"
              >
                <div className="text-2xl mb-2">📺</div>
                <div className="font-semibold">YouTube</div>
              </a>
              <a
                href="#"
                className="bg-pink-600 hover:bg-pink-500 text-white p-4 rounded-lg transition-colors"
              >
                <div className="text-2xl mb-2">📸</div>
                <div className="font-semibold">Instagram</div>
              </a>
              <a
                href="#"
                className="bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-lg transition-colors"
              >
                <div className="text-2xl mb-2">🐦</div>
                <div className="font-semibold">X-Twitter</div>
              </a>
              <a
                href="#"
                className="bg-gray-600 hover:bg-gray-500 text-white p-4 rounded-lg transition-colors"
              >
                <div className="text-2xl mb-2">🎧</div>
                <div className="font-semibold">Apple Music</div>
              </a>
            </div>
          </section>

          {/* Contact Form Section */}
          <section className="bg-black/40 backdrop-blur-sm p-8 rounded-lg shadow-xl mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              SEND US A MESSAGE
            </h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-white font-semibold mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-purple-400 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-white font-semibold mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-purple-400 focus:outline-none"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-white font-semibold mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-purple-400 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-white font-semibold mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-purple-400 focus:outline-none resize-vertical"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </section>

          {/* Location/Tour Info */}
          <section className="bg-black/40 backdrop-blur-sm p-8 rounded-lg shadow-xl mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              LOCATION & ORIGIN
            </h2>
            <div className="text-center">
              <p className="text-xl text-gray-300 mb-4">
                📍 {band?.origin?.city}, {band?.origin?.country}
              </p>
              <p className="text-lg text-gray-400">
                Founded in {band?.formed_in}
              </p>
              <p className="text-gray-400 mt-4">
                Available for worldwide bookings and festivals
              </p>
            </div>
          </section>

          {/* Large spacer to create scrollable area and reveal more background */}
          <div className="h-96"></div>
        </article>
      </div>
    </div>
  );
}
