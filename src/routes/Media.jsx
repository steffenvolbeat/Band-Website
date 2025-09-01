import React from "react";
import useFetchJSON from "../hooks/useFetchJSON";
import Gallery from "../components/media/Gallery";
import VideoPlay from "../components/media/VideoPlayer";

export default function Media() {
  const { data } = useFetchJSON("/data/media.json");
  const mediaBackgroundImage = "/assets/live-photo-1.jpg";

  return (
    <div className="relative">
      {/* Fixed Background Image with Parallax Effect - positioned below header */}
      <div
        className="fixed w-full bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${mediaBackgroundImage})`,
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
              MEDIA
            </h1>
            <p className="text-xl text-gray-300">
              Photos, Videos & Live Performances
            </p>
          </header>

          {/* Gallery Section */}
          <section className="mb-12 bg-black/40 backdrop-blur-sm p-8 rounded-lg shadow-xl">
            <h2
              id="photos"
              className="text-3xl font-bold text-white mb-6 text-center"
            >
              📸 PHOTO GALLERY
            </h2>
            <Gallery photos={data?.photos ?? []} />
          </section>

          {/* Videos Section */}
          <section className="bg-black/40 backdrop-blur-sm p-8 rounded-lg shadow-xl mb-12">
            <h2
              id="videos"
              className="text-3xl font-bold text-white mb-6 text-center"
            >
              🎥 VIDEOS
            </h2>
            <div className="grid gap-6">
              {(data?.videos ?? []).map((v) => (
                <VideoPlay key={v.id} video={v} />
              ))}
            </div>
          </section>

          {/* Large spacer to create scrollable area and reveal more background */}
          <div className="h-96"></div>
        </article>
      </div>
    </div>
  );
}
