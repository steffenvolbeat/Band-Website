import React from "react";
import useFetchJSON from "../hooks/useFetchJSON";

export default function Band() {
    const {data} = useFetchJSON("/data/band.json");
    const members = data?.members ?? [];
    return(
        <article className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Band</h1>
            <section aria-labelledby="band-history" className="mb-8">
            <h2 id="band-history" className="text-2xl font-semibold mb-4">Band Geschichte</h2>
            <p className="text-gray-300"> {data?.bio}</p>
            </section>

            <section aria-labelledby="members" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((m) => (
                <figure key ={m.name} className="bg-gray-800 p-4 rounded border border-gray-700">
                    <img src={m.photo} alt={m.name} className="w-full h-48 object-cover rounded"/>
                    <figcaption className="mt-3">
                        <h3 className="text-xl font-semibold">{m.name}
                            <span className="text-sm font-normal text-gray-400"> - {m.role}</span>
                        </h3>
                        <p className="text-sm text-gray-300 mt-1">{m.bio}</p>
                    </figcaption>
                </figure>
            ))}
            </section>
        </article>
    )
}