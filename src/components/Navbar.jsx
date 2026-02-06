export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white border-b">
      <h1 className="text-xl font-semibold text-gray-900">
        <span className="text-red-700">CS</span> Academy
      </h1>

      <div className="flex gap-6 text-gray-700">
        <span className="cursor-pointer hover:text-blue-600">Home</span>
        <span className="cursor-pointer hover:text-blue-600">Academics</span>
        <span className="cursor-pointer hover:text-blue-600">About</span>
        <span className="cursor-pointer hover:text-blue-600">Contact</span>
      </div>
    </nav>
  );
}
