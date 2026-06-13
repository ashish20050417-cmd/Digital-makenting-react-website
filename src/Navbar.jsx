import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Design & Drafting
          </h1>

          <p className="text-orange-500 tracking-[5px] uppercase text-sm">
            Institute
          </p>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-medium">

          <Link
            to="/"
            className="hover:text-orange-500 transition"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="hover:text-orange-500 transition"
          >
            About
          </Link>

          <Link
            to="/services"
            className="hover:text-orange-500 transition"
          >
            Services
          </Link>

          <Link
            to="/gallery"
            className="hover:text-orange-500 transition"
          >
            Gallery
          </Link>

          <Link
            to="/placement"
            className="hover:text-orange-500 transition"
          >
            Placement
          </Link>

          <Link
            to="/contact"
            className="hover:text-orange-500 transition"
          >
            Contact
          </Link>

        </nav>

        {/* Button */}
        <Link to="/contact">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition">
            Enroll Now →
          </button>
        </Link>

      </div>
    </header>
  );
}