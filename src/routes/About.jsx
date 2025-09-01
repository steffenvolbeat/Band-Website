import React from "react";
import useFetchJSON from "../hooks/useFetchJSON";

export default function About() {
  const { data } = useFetchJSON("/data/band.json");

  if (!data) return <div>Loading...</div>;

  return (
    <article className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section with Band Logo */}
      <div className="text-center mb-12">
        <img
          src={data.logo}
          alt={`${data.name} Logo`}
          className="mx-auto mb-6 max-w-xs"
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          ABOUT {data.name.toUpperCase()}
        </h1>
      </div>

      {/* Band Story Section */}
      <section className="mb-12">
        <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
          <h2 className="text-3xl font-bold mb-6 text-white">Die Band</h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-300">
                Gegründet {data.formed_in} in {data.origin.city},{" "}
                {data.origin.country}
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {data.bio}
              </p>
            </div>
            <div className="text-gray-300">
              <p className="text-lg leading-relaxed">
                Formed in {data.formed_in}, {data.name.toUpperCase()} has become
                a prominent name in the metal scene, especially known for their
                unique blend of different genres of music. Their music resonates
                with a wide audience, thanks in large part to the charismatic
                and versatile vocals of frontwoman Elena Cataraga, a.k.a. Lena
                Scissorhands.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                The Moldovan quartet has shown a steady ascent in the music
                world since their debut album "Asylum" was released in 2011.
                They have since continued to evolve, both in sound and in their
                approach to music.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Album Section */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-purple-900 to-blue-900 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4 text-white">Latest Release</h2>
          <p className="text-lg text-gray-200">
            Their latest album, <strong>"TIME"</strong>, released on February 9,
            2024, marks their sixth studio album and showcases their ability to
            experiment with a variety of sounds and themes, further cementing
            their status in the modern metal landscape.
          </p>
        </div>
      </section>

      {/* Band Members Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-white text-center">
          BAND MEMBERS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.members.map((member) => (
            <div
              key={member.name}
              className="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-32 h-32 mx-auto mb-4 rounded-full object-cover border-4 border-purple-500"
              />
              <h3 className="text-xl font-bold text-white mb-2">
                {member.name}
              </h3>
              <p className="text-purple-400 font-semibold mb-2">
                {member.role}
              </p>
              <p className="text-gray-400 text-sm">Since {member.since}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Media & Contact Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-white text-center">
          CONNECT WITH US
        </h2>
        <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Official Pages */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-purple-400">
                Official Pages
              </h3>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  🎵 Facebook
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  📺 YouTube
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  📸 Instagram
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  🐦 X-Twitter
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  🎧 Apple Music
                </a>
              </div>
            </div>

            {/* Booking */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-purple-400">
                Booking
              </h3>
              <p className="text-gray-300 mb-2">NAPALM EVENTS</p>
              <a
                href="mailto:THORSTEN.HARM@NAPALM-EVENTS.COM"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                THORSTEN.HARM@NAPALM-EVENTS.COM
              </a>
            </div>

            {/* Artist Representative */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-purple-400">
                Artist Representative
              </h3>
              <p className="text-gray-300 mb-2">ADRIAN KOVYN</p>
              <a
                href="mailto:ADRIAN@KOVYN.CO"
                className="text-blue-400 hover:text-blue-300 transition-colors block mb-4"
              >
                ADRIAN@KOVYN.CO
              </a>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-purple-400">
                  Contact Us
                </h4>
                <a
                  href="mailto:INFO@INFECTEDRAIN.COM"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  INFO@INFECTEDRAIN.COM
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="text-center">
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-lg">
          <p className="text-xl text-gray-300 italic leading-relaxed">
            "INFECTED RAIN is admired not only for their compelling music but
            also for the genuine emotion and passion that they infuse into their
            work. Each album is a journey through an array of intense emotions,
            complex musical layers, and thematic explorations that reflect both
            personal and universal experiences."
          </p>
        </div>
      </section>
    </article>
  );
}
