"use client";
import { Event } from "../../types";
import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import FilterBar from "../components/FilterBar";

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/events")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      });
  }, []);

  const categories = [
    "All",
    ...new Set(events.map((e) => e.category)),
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white p-8">
        <p>Loading events...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <main className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">All Events</h1>

        <FilterBar
          search={search}
          setSearch={setSearch}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
          placeholder="Search events..."
        />

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
      </main>
    </div>
  );
}