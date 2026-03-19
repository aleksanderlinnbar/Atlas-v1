import Link from "next/link";
import { organizations } from "../../../data/organizations";

type OrganizationPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function OrganizationPage({
  params,
}: OrganizationPageProps) {
  const { id } = await params;

  const organization = organizations.find((org) => org.id === id);

  if (!organization) {
    return (
      <div className="min-h-screen bg-black text-white p-8">
        <main className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Organization not found</h1>
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

        <h1 className="text-4xl font-bold mb-6">{organization.name}</h1>

        <div className="bg-zinc-900 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-3">About this organization</h2>
          <p className="text-gray-300 leading-7">{organization.description}</p>
        </div>
      </main>
    </div>
  );
}