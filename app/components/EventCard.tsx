import Link from "next/link";

type EventCardProps = {
  id: number;
  title: string;
};

export default function EventCard({ id, title }: EventCardProps) {
  return (
    <Link href={`/events/${id}`}>
      <div className="p-4 bg-zinc-900 rounded-xl transition hover:bg-zinc-800 hover:scale-[1.02] cursor-pointer">
        {title}
      </div>
    </Link>
  );
}