"use client";
import { Organization } from "../../types";
import { useEffect, useState } from "react";
import OrganizationCard from "../components/OrganizationCard";
import FilterBar from "../components/FilterBar";

export default function OrganizationsPage() {
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/organizations")
      .then((res) => res.json())
      .then((data) => {
        setOrganizations(data);
        setLoading(false);
      });
  }, []);

  const categories = [
    "All",
    ...new Set(organizations.map((org) => org.category)),
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white p-8">
        <p>Loading organizations...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <main className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Organizations</h1>

        <FilterBar
          search={search}
          setSearch={setSearch}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
          placeholder="Search organizations..."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {organizations
            .filter((org) =>
              org.name.toLowerCase().includes(search.toLowerCase())
            )
            .filter(
              (org) =>
                selectedCategory === "" || org.category === selectedCategory
            )
            .map((org) => (
              <OrganizationCard
                key={org.id}
                id={org.id}
                name={org.name}
              />
            ))}
        </div>
      </main>
    </div>
  );
}