"use client";

import { useState } from "react";
import { organizations } from "../data/organizations";
import { events } from "../data/events";
import OrganizationCard from "./components/OrganizationCard";
import EventCard from "./components/EventCard";

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    "All",
    ...new Set([
      ...events.map((e) => e.category),
      ...organizations.map((o) => o.category),
    ]),
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <main className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Atlas</h1>

        <p className="text-lg text-gray-400 mb-4">
          Discover student events, organizations, and opportunities at NTNU
        </p>

        {/* Search */}
        <input
          type="text"
          placeholder="Search events or organizations..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 mb-6 rounded-lg bg-zinc-900 text-white placeholder-gray-500 outline-none"
        />

        {/* Category buttons */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {categories.map((cat) =>
          (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat === "All" ? "" : cat)}
              className={`px-3 py-1 rounded-full text-sm ${selectedCategory === cat || (cat === "All" && selectedCategory === "")
                ? "bg-white text-black"
                : "bg-zinc-800 text-white"
                }`}
            >
              {cat}
            </button>
          ))}
          {selectedCategory && (
            <div className="mb-6 text-sm text-gray-400">
              Filtering by:{" "}
              <span className="text-white font-medium">{selectedCategory}</span>
            </div>
          )}
          {(selectedCategory || search) && (
            <button
              onClick={() => {
                setSelectedCategory("");
                setSearch("");
              }}
              className="mb-8 px-3 py-1 text-sm bg-zinc-800 rounded-full hover:bg-zinc-700"
            >
              Clear filters
            </button>
          )}
        </div>
<section className="mb-12">
  <h2 className="text-2xl font-semibold mb-4">Featured</h2>

  {events.slice(0, 1).map((event) => (
    <div
      key={event.id}
      className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800"
    >
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-56 object-cover"
      />

      <div className="p-6">
        <p className="text-sm text-gray-400 mb-2">{event.category}</p>
        <h3 className="text-2xl font-semibold mb-3">{event.title}</h3>

        <div className="text-sm text-gray-500 mb-4">
          <p>{event.date}</p>
          <p>{event.location}</p>
        </div>

        <p className="text-gray-300 mb-6">{event.description}</p>

        <a
          href={`/events/${event.id}`}
          className="inline-block px-4 py-2 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition"
        >
          View event
        </a>
      </div>
    </div>
  ))}
</section>

        {/* Events */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Events</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {events
              .filter((event) =>
                event.title
                  .toLowerCase()
                  .includes(search.toLowerCase())
              )
              .filter(
                (event) =>
                  selectedCategory === "" ||
                  event.category === selectedCategory
              )
              .map((event) => (
                <EventCard
                  key={event.id}
                  id={event.id}
                  title={event.title}
                  category={event.category}
                  image={event.image}
                  date={event.date}
                  location={event.location}
                />
              ))}
          </div>
        </section>

        <div className="border-t border-zinc-800 my-10" />

        {/* Organizations */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Organizations
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {organizations
              .filter((org) =>
                org.name.toLowerCase().includes(search.toLowerCase())
              )
              .filter(
                (org) =>
                  selectedCategory === "" || org.category === selectedCategory
              )
              .map((org) => (
                <OrganizationCard
                  key={org.id}
                  id={org.id}
                  name={org.name}
                />
              ))}
          </div>
        </section>
      </main>
    </div>
  );
}