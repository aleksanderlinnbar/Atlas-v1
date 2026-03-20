type FilterBarProps = {
  search: string;
  setSearch: (value: string) => void;
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  categories: string[];
  placeholder?: string;
};

export default function FilterBar({
  search,
  setSearch,
  selectedCategory,
  setSelectedCategory,
  categories,
  placeholder = "Search...",
}: FilterBarProps) {
  return (
    <>
      {/* Search */}
      <input
        type="text"
        placeholder={placeholder}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 mb-6 rounded-lg bg-zinc-900 text-white placeholder-gray-500 outline-none"
      />

      {/* Categories */}
      <div className="flex gap-2 mb-8 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() =>
              setSelectedCategory(cat === "All" ? "" : cat)
            }
            className={`px-3 py-1 rounded-full text-sm ${
              selectedCategory === cat ||
              (cat === "All" && selectedCategory === "")
                ? "bg-white text-black"
                : "bg-zinc-800 text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </>
  );
}