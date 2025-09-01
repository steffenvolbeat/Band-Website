import React from "react";
import { Link } from "react-router-dom";
import useFetchJSON from "../hooks/useFetchJSON";
import AlbumList from "../components/lists/AlbumList";

export default function Home() {
  const { data: band } = useFetchJSON("/data/band.json");
  const { data: albums } = useFetchJSON("/data/albums.json");

  return (
    <div className="relative">
      {/* Fixed Background Image - ABSOLUTE TABU - NO CHANGES */}
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: band?.band_photo
            ? `url(${band.band_photo})`
            : "none",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Debug info */}
      {band?.band_photo && (
        <div className="fixed top-4 right-4 z-50 bg-red-500 text-white p-2 text-xs rounded"></div>
      )}

      {/* Scrollable Content that reveals more background on scroll */}
      <div className="relative z-10 min-h-screen">
        <article className="max-w-6xl mx-auto p-4">
          {/* Add some top spacing to show background initially */}
          <div className="h-32"></div>

          <header className="mb-8 bg-black/80 backdrop-blur-sm p-8 rounded-lg shadow-xl">
            <h1 className="text-4xl md:text-6xl font-black text-white">
              {band?.name ?? "Band"}
            </h1>
            <p className="mt-2 text-gray-300">
              {band?.origin?.city}, {band?.origin?.country} | Gegründet{" "}
              {band?.formed_in}
            </p>
          </header>

          {/* 
        <section
          aria-labelledby="bio-heading"
          className="prose prose-invert mb-10 bg-black/80 backdrop-blur-sm p-8 rounded-lg shadow-xl"
        >
          <h2 id="bio-heading" className="text-white">
            Über die Band
          </h2>
          <p className="text-gray-300">{band?.bio}</p>
        </section>
        */}

          {/* 
        <section
          aria-labelledby="albums-heading"
          className="bg-black/80 backdrop-blur-sm p-8 rounded-lg shadow-xl mb-8"
        >
          <h2
            id="albums-heading"
            className="text-2xl font-semibold mb-4 text-white"
          >
            Neueste Alben
          </h2>
          <AlbumList albums={albums?.albums ?? []} />
        </section>
        */}

          {/* Image and Albums side by side */}
          {band?.band_photo && (
            <section className="bg-black/80 backdrop-blur-sm p-8 rounded-lg shadow-xl mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Infected Rain Band Photo
              </h3>

              {/* Flex container for image and albums */}
              <div className="flex gap-6">
                {/* Left side: Image */}
                <div className="flex-shrink-0">
                  <img
                    src={band.band_photo}
                    alt={`${band.name} Band Photo`}
                    className="w-96 h-64 object-cover rounded-lg shadow-lg"
                    onLoad={() => console.log("Image loaded successfully!")}
                    onError={() => console.log("Image failed to load!")}
                  />
                </div>

                {/* Right side: Albums - same height as image */}
                <div className="flex-1 bg-black/60 backdrop-blur-sm p-6 rounded-lg shadow-xl h-64 overflow-hidden">
                  <h2 className="text-2xl font-semibold mb-4 text-white">
                    Neueste Alben
                  </h2>
                  <div className="h-48 overflow-y-auto">
                    <AlbumList albums={albums?.albums ?? []} />
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h2 id="bio-heading" className="text-white mb-4">
                  <Link
                    to="/about"
                    className="text-purple-400 hover:text-purple-300 underline transition-colors duration-200 text-xl font-semibold"
                  >
                    Über die Band - Mehr erfahren →
                  </Link>
                </h2>
              </div>
            </section>
          )}

          {/* Large spacer to create scrollable area and reveal more background */}
          <div className="h-96"></div>
        </article>
      </div>
    </div>
  );
}
