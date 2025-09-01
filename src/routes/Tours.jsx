// src/routes/Tours.jsx
import React from "react";
import useFetchJSON from "../hooks/useFetchJSON";
import { formatDateISO } from "../utils/formatDate";

export default function Tours() {
  const { data } = useFetchJSON("/data/tours.json");
  const tours = data?.upcoming ?? [];

  return (
    <section className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Upcoming Shows</h1>
      <ul className="space-y-4">
        {tours.map((t) => (
          <li key={t.id} className="flex flex-col md:flex-row md:justify-between md:items-center bg-gray-900 p-4 rounded border border-gray-800">
            <div>
              <p className="font-semibold">{t.city}, {t.country}</p>
              <p className="text-sm text-gray-400">{t.venue}</p>
            </div>
            <div className="mt-3 md:mt-0 text-right">
              <time dateTime={t.date} className="block font-mono">{formatDateISO(t.date)}</time>
              {t.tickets ? (
                <a href={t.tickets} className="inline-block mt-2 px-3 py-2 bg-red-600 rounded text-white" target="_blank" rel="noreferrer">Tickets</a>
              ) : (
                <span className="inline-block mt-2 px-3 py-2 border rounded text-gray-300">Details folgen</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}