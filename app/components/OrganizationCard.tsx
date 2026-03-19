type OrganizationCardProps = {
  name: string;
};

export default function OrganizationCard({ name }: OrganizationCardProps) {
  return (
    <div className="p-4 bg-zinc-900 rounded-xl transition hover:bg-zinc-800 hover:scale-[1.02] cursor-pointer">
      {name}
    </div>
  );
}