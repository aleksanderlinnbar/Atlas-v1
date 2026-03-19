import { events } from "../data/events";
import OrganizationCard from "./components/OrganizationCard";
import EventCard from "./components/EventCard";
export default function Home() {
  

  const organizations = [
  { id: 1, name: "NTNU Finance Society" },
  { id: 2, name: "Start NTNU" },
  { id: 3, name: "Abakus" },];
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <main className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Atlas</h1>

        <p className="text-lg text-gray-400 mb-12">
          Discover student events, organizations, and opportunities at NTNU
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Events</h2>
          <div className="grid gap-4 sm:grid-cols-2">
              {events.map((event) => (
              <EventCard key={event.id} id={event.id} title={event.title} />))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Organizations</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {organizations.map((org) => (
  <OrganizationCard key={org.id} name={org.name} />))}
          </div>
        </section>
      </main>
    </div>
  );
}
