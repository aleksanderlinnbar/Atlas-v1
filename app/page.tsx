"use client";

import { useState } from "react";
import { organizations } from "../data/organizations";
import { events } from "../data/events";
import OrganizationCard from "./components/OrganizationCard";
import EventCard from "./components/EventCard";

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <main className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Atlas</h1>

        <p className="text-lg text-gray-400 mb-6">
          Discover student events, organizations, and opportunities at NTNU
        </p>

        <input
          type="text"
          placeholder="Search events or organizations..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 mb-8 rounded-lg bg-zinc-900 text-white placeholder-gray-500 outline-none"
        />

        {/* Events */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Events</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {events
              .filter((event) =>
                event.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((event) => (
                <EventCard
                  key={event.id}
                  id={event.id}
                  title={event.title}
                />
              ))}
          </div>
        </section>

        {/* Organizations */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Organizations</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {organizations
              .filter((org) =>
                org.name.toLowerCase().includes(search.toLowerCase())
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