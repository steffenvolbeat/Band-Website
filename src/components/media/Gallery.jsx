import React from "react";
import useLightbox from "../../hooks/useLightbox";

/*
 * Simple acceessible gallery using <Figure> and <Figcaption> AND a custom lightbox hook
 */
export default function Gallery({ photos = [] }) {
  const { index, openAt, close, isOpen, next, prev } = useLightbox(photos);
  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((p, i) => (
          <li key={p.id || i}>
            <figure>
              <button
                onClick={() => openAt(i)}
                className="block w-full"
                aria-label={`Öffne Foto ${p.caption || p.alt}`}
              >
                <img 
                  src={p.src} 
                  alt={p.alt} 
                  loading="lazy" 
                  className="w-full h-48 object-cover rounded" 
                />
                <figcaption className="sr-only">{p.caption}</figcaption>
              </button>
            </figure>
          </li>
        ))}
      </ul>
      {/*Lightbox*/}
      {isOpen && photos[index] && (
        <div role="dialog" aria-modal="true" className="">
          <div className="">
            <img src={photos[index].src} alt={photos[index].alt} className="" />
            <div className="">
              <button onClick={prev} aria-label="Vorheriges Foto">
                ←
              </button>
              <p>{photos[index].caption}</p>
              <div>
                <button onClick={close} aria-label="Lightbox schließen">
                  ✕
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
