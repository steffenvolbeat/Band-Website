import React from "react";

export default function AlbumList({ albums }) {
  if (!albums || albums.length === 0) {
    return <p className="text-gray-400 ">Keine Alben gefunden.</p>;
  }
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {albums.map((a) => (
        <li
          key={a.id}
          className="bg-gray-900 p-4 rounded overflow-hidden border border-gray-800"
        >
          <figure>
            <img
              src={a.cover}
              alt={`Cover $ {a.title}`}
              className="w-full h-52 object-cover"
            />
            <figcaption className="p-4">
              <h3 className="font-semibold">
                {a.title} <span className="text-gray-400">({a.year})</span>
              </h3>
              <p className="mt-2 text-sm text-gray-300">
                Track:{a.track.length}
              </p>
              <div className="mt-3 flex gap-2">
                {a.links?.spotify && (
                  <a className="underline" href={a.links.spotify}>
                    Spotify
                  </a>
                )}
                {a.links?.apple && (
                  <a className="underline" href={a.links.apple}>
                    Apple Music
                  </a>
                )}
              </div>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
