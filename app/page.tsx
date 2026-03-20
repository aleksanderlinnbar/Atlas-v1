"use client";

import { useEffect, useState } from "react";
import { Event, Organization } from "../types";
import OrganizationCard from "./components/OrganizationCard";
import EventCard from "./components/EventCard";
import FilterBar from "./components/FilterBar";

export default function Home() {
  const [events, setEvents] = useState<Event[]>([]);
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    Promise.all([
      fetch("/api/events").then((res) => res.json()),
      fetch("/api/organizations").then((res) => res.json()),
    ]).then(([eventsData, orgsData]) => {
      setEvents(eventsData);
      setOrganizations(orgsData);
      setLoading(false);
    });
  }, []);

  const categories = [
    "All",
    ...new Set([
      ...events.map((e) => e.category),
      ...organizations.map((o) => o.category),
    ]),
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white p-8">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <main className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Atlas</h1>

        <p className="text-lg text-gray-400 mb-4">
          Discover student events, organizations, and opportunities at NTNU
        </p>

        <FilterBar
          search={search}
          setSearch={setSearch}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
          placeholder="Search events or organizations..."
        />

        {/* Featured */}
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
                event.title.toLowerCase().includes(search.toLowerCase())
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
          <h2 className="text-2xl font-semibold mb-4">Organizations</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {organizations
              .filter((org) =>
                org.name.toLowerCase().includes(search.toLowerCase())
              )
              .filter(
                (org) =>
                  selectedCategory === "" ||
                  org.category === selectedCategory
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