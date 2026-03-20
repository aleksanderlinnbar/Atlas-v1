import Link from "next/link";

type EventCardProps = {
  id: string;
  title: string;
  category: string;
  image: string;
  date: string;
  location: string;
};

export default function EventCard({
  id,
  title,
  category,
  image,
  date,
  location,
}: EventCardProps) {
  return (
    <Link href={`/events/${id}`}>
      <div className="bg-zinc-900 rounded-xl overflow-hidden transition duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/40 cursor-pointer border border-zinc-800 hover:border-zinc-700">
        <img
          src={image}
          alt={title}
          className="w-full h-32 object-cover"
        />

        <div className="p-4">
          <p className="text-sm text-gray-400 mb-1">{category}</p>
          <p className="text-white font-medium mb-2">{title}</p>

          <div className="text-xs text-gray-500">
            <p>{date}</p>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}