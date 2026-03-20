import Link from "next/link";
import { events } from "../../../data/events";

type EventPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EventPage({ params }: EventPageProps) {
  const { id } = await params;

  const event = events.find((event) => event.id === id);

  if (!event) {
    return (
      <div className="min-h-screen bg-black text-white p-8">
        <main className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Event not found</h1>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <main className="max-w-3xl mx-auto">
        <Link href="/" className="text-gray-400 hover:text-white mb-6 inline-block">
          ← Back
        </Link>

        {/* Category */}
        <p className="text-sm text-gray-400 mb-2">{event.category}</p>

        {/* Title */}
        <h1 className="text-4xl font-bold mb-6">{event.title}</h1>

        {/* Info */}
        <div className="bg-zinc-900 rounded-xl p-5 mb-8">
          <p><span className="text-gray-500">Date:</span> {event.date}</p>
          <p><span className="text-gray-500">Location:</span> {event.location}</p>
        </div>

        {/* Description */}
        <div className="bg-zinc-900 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-3">About this event</h2>
          <p className="text-gray-300 leading-7">{event.description}</p>
        </div>
      </main>
    </div>
  );

}