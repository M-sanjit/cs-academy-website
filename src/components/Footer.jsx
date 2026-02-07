export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-semibold text-white">
              <span className="text-red-700">CS</span> Academy
            </h3>
            <p className="mt-4 text-sm leading-relaxed">
              CS Academy is committed to providing a nurturing environment that
              fosters academic excellence, character development, and lifelong
              learning.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer transition">
                Home
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Academics
              </li>
              <li className="hover:text-white cursor-pointer transition">
                About
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Contact
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white">Contact</h4>
            <p className="mt-4 text-sm">
              CS Academy Campus
              <br />
              Coimbatore, Tamil Nadu
            </p>
            <p className="mt-2 text-sm">Email: info@csacademy.in</p>
            <p className="mt-2 text-sm">Phone: +91 XXXXX XXXXX</p>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} CS Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
