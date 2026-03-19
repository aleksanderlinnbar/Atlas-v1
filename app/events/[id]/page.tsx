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
    <div className="min-h-screen bg-black text-white p-8">
      <main className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
        <p className="text-gray-400">This is the event details page.</p>
      </main>
    </div>
  );
}