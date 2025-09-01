import React from "react";

/*
 * Supports youtube (iframe) and direct video ulr
 */
export default function VideoPlayer({ video }) {
  // Convert YouTube watch URL to embed URL
  const getEmbedUrl = (url) => {
    if (url.includes("youtube.com/watch?v=")) {
      const videoId = url.split("v=")[1].split("&")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url; // Return original URL if it's already an embed URL
  };

  if (video.type === "youtube") {
    return (
      <figure className="bg-gray-900">
        <div className="aspect-video">
          <iframe
            title={video.title}
            width="100%"
            height="100%"
            src={getEmbedUrl(video.url)}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
        <figcaption className="p-4 text-gray-100">{video.title}</figcaption>
      </figure>
    );
  }
  return (
    <figure className="bg-gray-900">
      <video controls className="w-full">
        <source src={video.url} type="video/mp4" />
        Your browser does not support the video tag.
        <figcaption className="">{video.title}</figcaption>
      </video>
    </figure>
  );
}
