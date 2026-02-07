import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b">
      <div className="flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-900">
          <span className="text-red-700">CS</span> Academy
        </h1>

        <div className="hidden md:flex gap-6 text-gray-700">
          <span className="cursor-pointer hover:text-red-700 transition">
            Home
          </span>
          <span className="cursor-pointer hover:text-red-700 transition">
            Academics
          </span>
          <span className="cursor-pointer hover:text-red-700 transition">
            About
          </span>
          <span className="cursor-pointer hover:text-red-700 transition">
            Contact
          </span>
        </div>

        <button
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-gray-700">
          <span className="cursor-pointer hover:text-red-700 transition">
            Home
          </span>
          <span className="cursor-pointer hover:text-red-700 transition">
            Academics
          </span>
          <span className="cursor-pointer hover:text-red-700 transition">
            About
          </span>
          <span className="cursor-pointer hover:text-red-700 transition">
            Contact
          </span>
        </div>
      )}
    </nav>
  );
}
