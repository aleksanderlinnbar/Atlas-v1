import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-zinc-800 bg-black/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/">
          <span className="text-xl font-semibold cursor-pointer">
            Atlas
          </span>
        </Link>

        {/* Links */}
        <div className="flex gap-6 text-sm text-gray-400">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <Link href="/events" className="hover:text-white">
            Events
          </Link>
          <Link href="/organizations" className="hover:text-white">
            Organizations
          </Link>
        </div>
      </div>
    </nav>
  );
}