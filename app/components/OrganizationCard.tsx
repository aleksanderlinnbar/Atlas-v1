
import Link from "next/link";

type OrganizationCardProps = {
  id: string;
  name: string;
};

export default function OrganizationCard({ id, name }: OrganizationCardProps) {
  return (
    <Link href={`/organizations/${id}`}>
      <div className="p-4 bg-zinc-900 rounded-xl transition hover:bg-zinc-800 hover:scale-[1.02] cursor-pointer">
        {name}
      </div>
    </Link>
  );
}